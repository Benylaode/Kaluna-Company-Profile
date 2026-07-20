"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

interface OverviewGallerySliderProps {
  images: string[];
  projectTitle: string;
  description: string;
}

export default function OverviewGallerySlider({
  images,
  projectTitle,
  description,
}: OverviewGallerySliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollFrameRef = useRef<number | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(images.length > 1);

  const getSlides = useCallback(() => {
    const slider = sliderRef.current;

    if (!slider) return [];

    return Array.from(slider.children) as HTMLElement[];
  }, []);

  const updateSliderState = useCallback(() => {
    const slider = sliderRef.current;
    const slides = getSlides();

    if (!slider || slides.length === 0) return;

    const maximumScroll = Math.max(0, slider.scrollWidth - slider.clientWidth);
    const currentScroll = slider.scrollLeft;

    setCanScrollPrevious(currentScroll > 2);
    setCanScrollNext(currentScroll < maximumScroll - 2);

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const slidePosition = Math.min(slide.offsetLeft, maximumScroll);
      const distance = Math.abs(slidePosition - currentScroll);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, [getSlides]);

  const handleScroll = useCallback(() => {
    if (scrollFrameRef.current !== null) {
      cancelAnimationFrame(scrollFrameRef.current);
    }

    scrollFrameRef.current = requestAnimationFrame(updateSliderState);
  }, [updateSliderState]);

  const scrollToSlide = useCallback(
    (targetIndex: number) => {
      const slider = sliderRef.current;
      const slides = getSlides();

      if (!slider || slides.length === 0) return;

      const safeIndex = Math.max(0, Math.min(targetIndex, slides.length - 1));
      const maximumScroll = Math.max(0, slider.scrollWidth - slider.clientWidth);
      const targetPosition = Math.min(slides[safeIndex].offsetLeft, maximumScroll);

      slider.scrollTo({
        left: targetPosition,
        behavior: "smooth",
      });
    },
    [getSlides],
  );

  const goToPreviousSlide = useCallback(() => {
    if (!canScrollPrevious) return;
    scrollToSlide(activeIndex - 1);
  }, [activeIndex, canScrollPrevious, scrollToSlide]);

  const goToNextSlide = useCallback(() => {
    if (!canScrollNext) return;
    scrollToSlide(activeIndex + 1);
  }, [activeIndex, canScrollNext, scrollToSlide]);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    updateSliderState();

    const resizeObserver = new ResizeObserver(() => {
      updateSliderState();
    });

    resizeObserver.observe(slider);

    return () => {
      resizeObserver.disconnect();

      if (scrollFrameRef.current !== null) {
        cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, [updateSliderState]);

  if (images.length === 0) {
    return (
      <p className="mt-8 max-w-[1120px] text-[14px] font-normal leading-[1.75] text-[#5E5E5E] sm:text-[15px] lg:text-[16px]">
        {description}
      </p>
    );
  }

  return (
    <div className="mt-8 w-full">
      <div className="flex items-end justify-between gap-8">
        <p className="max-w-[1120px] text-[14px] font-normal leading-[1.75] text-[#5E5E5E] sm:text-[15px] lg:text-[16px]">
          {description}
        </p>

        {images.length > 1 && (
          <div className="hidden shrink-0 items-center gap-3 md:flex">
            <button
              type="button"
              onClick={goToPreviousSlide}
              disabled={!canScrollPrevious}
              aria-label="Previous project image"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0E2A54] text-[#0E2A54] transition-all duration-300 hover:bg-[#0E2A54] hover:text-white disabled:cursor-not-allowed disabled:border-[#CCD4DE] disabled:text-[#AAB4C0] disabled:hover:bg-transparent"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={goToNextSlide}
              disabled={!canScrollNext}
              aria-label="Next project image"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0E2A54] text-white transition-all duration-300 hover:bg-[#299EED] disabled:cursor-not-allowed disabled:bg-[#CCD4DE]"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      <div className="mt-12 w-full overflow-hidden">
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="hide-scrollbar flex w-full snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth overscroll-x-contain sm:gap-5"
        >
          {images.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="relative h-[240px] min-w-[86%] shrink-0 snap-start snap-always overflow-hidden rounded-[14px] bg-[#E8EDF3] sm:h-[330px] sm:min-w-[72%] md:h-[390px] md:min-w-[calc((100%_-_1.25rem)/2)] lg:h-[455px]"
            >
              <Image
                src={image}
                alt={`${projectTitle} preview ${index + 1}`}
                fill
                sizes="(max-width: 639px) 86vw, (max-width: 767px) 72vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <div className="mt-5 flex items-center justify-between md:hidden">
          <span className="text-[11px] font-medium tabular-nums text-[#788493]">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </span>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={goToPreviousSlide}
              disabled={!canScrollPrevious}
              aria-label="Previous project image"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0E2A54] text-[#0E2A54] transition-colors disabled:cursor-not-allowed disabled:border-[#CCD4DE] disabled:text-[#AAB4C0]"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={goToNextSlide}
              disabled={!canScrollNext}
              aria-label="Next project image"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0E2A54] text-white transition-colors disabled:cursor-not-allowed disabled:bg-[#CCD4DE]"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}