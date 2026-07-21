import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BellRing,
  Boxes,
  CircleMinus,
  Database,
  EyeOff,
  FileText,
  Gauge,
  Layers3,
  MonitorCog,
  Network,
  PackageSearch,
  RadioTower,
  Scale,
  ShoppingCart,
  Users,
  Workflow as WorkflowIcon,
} from "lucide-react";

import Footer from "../../../src/components/Footer";
import Navbar from "../../../src/components/Navbar";
import CTA from "../../../src/components/CTA";
import ResultImpactInteractive from "../../../src/components/ResultImpactInteractive";
import OverviewGallerySlider from "../../../src/components/OverviewGallerySlider";
import db from "../../../src/lib/db";
import { getWorks } from "../../../src/lib/actions";

// ==========================================
// 1. INTERFACE DATA
// ==========================================
interface OverviewData {
  label: string;
  title: string;
  description: string;
  gallery: string[];
}

interface ChallengeItem {
  icon?: string;
  title: string;
  desc: string;
}

interface ChallengeData {
  label: string;
  title: string;
  items: ChallengeItem[];
}

interface SolutionItem {
  title: string;
  desc: string;
  image_url: string;
}

interface SolutionData {
  label: string;
  title: string;
  background_image?: string;
  items: SolutionItem[];
}

interface TechStackItem {
  name: string;
  icon?: string;
}

interface WorkflowItem {
  step: string;
  title: string;
  desc: string;
  image_url: string;
}

interface WorkflowData {
  label: string;
  title: string;
  items: WorkflowItem[];
}

interface ResultHighlight {
  title: string;
  desc: string;
  image_url?: string;
}

interface ResultData {
  label?: string;
  title: string;
  description?: string;
  desc?: string;
  highlights?: ResultHighlight[];
  points?: string[];
  image_url: string;
}

interface ShowcaseData {
  image_url: string;
  alt: string;
}

interface ContentJson {
  year?: string;
  overview?: OverviewData | string;
  challenges?: ChallengeData;
  solutions?: SolutionData;
  tech_stack?: Array<TechStackItem | string>;
  workflow?: WorkflowData;
  result?: ResultData;
  showcase?: ShowcaseData;
}

interface ProjectRecord extends ContentJson {
  id: number;
  slug: string;
  client: string;
  title: string;
  desc: string;
  category: string;
  created_at?: string;
  content_json?: string;
  images: string[];
}

interface RelatedWork {
  id?: number;
  slug: string;
  client?: string;
  title: string;
  desc?: string;
  category?: string;
  images?: string[] | string;
  image_url?: string;
}

// ==========================================
// 2. HELPER
// ==========================================
function normalizeImages(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === "string");
  }

  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed)
        ? parsed.filter((item): item is string => typeof item === "string")
        : [];
    } catch {
      return value ? [value] : [];
    }
  }

  return [];
}

function getRelatedWorkImage(work: RelatedWork): string {
  const images = normalizeImages(work.images);
  return images[0] || work.image_url || "/placeholder.jpg";
}

function SectionLabel({
  children,
  light = false,
  centered = false,
}: {
  children: string;
  light?: boolean;
  centered?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}
    >
      <span className="h-[15px] w-[3px] shrink-0 bg-[#299EED]" />
      <span
        className={`text-[10px] font-semibold uppercase tracking-[0.035em] sm:text-[11px] ${
          light ? "text-white" : "text-[#0E2A54]"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

const challengeIcons: Record<string, LucideIcon> = {
  monitoring: MonitorCog,
  device: RadioTower,
  alert: BellRing,
  analytics: BarChart3,
  order: ShoppingCart,
  inventory: Boxes,
  customer: Users,
  workflow: WorkflowIcon,
  brand: Gauge,
  content: FileText,
  responsive: MonitorCog,
  conversion: BarChart3,
  database: Database,
  users: Users,
  report: FileText,
  scale: Scale,
  visualization: BarChart3,
  decision: Gauge,
  visibility: EyeOff,
  product: PackageSearch,
  network: Network,
  manual: CircleMinus,
};

function ChallengeIcon({ name }: { name?: string }) {
  const Icon = challengeIcons[(name || "").toLowerCase()] || Layers3;
  return <Icon className="h-[24px] w-[24px] stroke-[1.9]" />;
}

const techLogos: Record<string, string> = {
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  html5:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  css3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  javascript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  js: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  typescript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  ts: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  next: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  nextjs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "next.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  nodejs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  mysql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
  sql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  postgresql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
  github:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  figma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  flutter:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  dart: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  django:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  php: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  laravel:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  tailwind:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "tailwind css":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  bootstrap:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  mongodb:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  mqtt: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mqtt.svg",
};

function getTechData(tech: TechStackItem | string) {
  const name = typeof tech === "string" ? tech : tech.name;
  const requestedKey =
    typeof tech === "string" ? tech.toLowerCase() : (tech.icon || tech.name).toLowerCase();
  const normalizedKey = requestedKey.replace(/[^a-z0-9. ]/g, "").trim();

  const logo =
    techLogos[normalizedKey] ||
    Object.entries(techLogos).find(([key]) =>
      normalizedKey.includes(key),
    )?.[1];

  return { name, logo };
}

// ==========================================
// 3. FETCHING DATA
// ==========================================
async function getProjectBySlug(slug: string): Promise<ProjectRecord | null> {
  const project = db
    .prepare("SELECT * FROM works WHERE slug = ?")
    .get(slug) as Record<string, unknown> | undefined;

  if (!project) return null;

  let content: ContentJson = {};

  if (typeof project.content_json === "string" && project.content_json) {
    try {
      content = JSON.parse(project.content_json) as ContentJson;
    } catch (error) {
      console.error("Parse content_json error:", error);
    }
  }

  return {
    ...(project as unknown as ProjectRecord),
    ...content,
    images: normalizeImages(project.images),
  };
}

// ==========================================
// 4. PAGE
// ==========================================
export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  const allWorks = (await getWorks()) as RelatedWork[];
  const otherWorks = allWorks
    .filter((work) => work.slug !== slug)
    .slice(0, 2);

  const currentIndex = allWorks.findIndex((work) => work.slug === slug);
  const prevProject =
    allWorks[currentIndex - 1] || allWorks[allWorks.length - 1];
  const nextProject = allWorks[currentIndex + 1] || allWorks[0];

  const overview: OverviewData =
    typeof project.overview === "string"
      ? {
          label: "ABOUT PROJECT",
          title: project.title,
          description: project.overview,
          gallery: project.images.slice(1),
        }
      : project.overview || {
          label: "ABOUT PROJECT",
          title: project.title,
          description: project.desc,
          gallery: project.images.slice(1),
        };

  const overviewGallery = Array.from(
    new Set([
      ...(overview.gallery || []),
      ...project.images.slice(1),
      project.images[0],
    ]),
  ).filter(Boolean);

  const resultHighlights: ResultHighlight[] =
    project.result?.highlights ||
    project.result?.points?.map((point) => ({
      title: point,
      desc: "",
    })) ||
    [];

  const year =
    project.year ||
    (project.created_at
      ? new Date(project.created_at).getFullYear().toString()
      : "2026");

  const heroImage = project.images[0];
  const solutionBackground =
    project.solutions?.background_image || heroImage;
  const showcaseImage =
    project.showcase?.image_url || project.images[1] || heroImage;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FAFAFA] font-sans text-[#0E2A54]">
      <Navbar />

      {/* =====================================
          HERO
      ====================================== */}
      <section className="pb-[60px] pt-[90px] sm:pt-[110px] md:pt-[124px] lg:pb-[96px] lg:pt-[144px]">
        <div className="w-full px-5 md:px-[5vw]">
          <nav className="mb-7 flex flex-wrap items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.03em] text-[#8A8A8A] sm:text-[11px]">
            <Link href="/" className="transition-colors hover:text-[#299EED]">
              Home
            </Link>
            <span className="text-[#B2B2B2]">&gt;</span>
            <Link
              href="/works"
              className="transition-colors hover:text-[#299EED]"
            >
              Our Works
            </Link>
            <span className="text-[#B2B2B2]">&gt;</span>
            <span className="font-semibold text-[#0E2A54]">
              {project.client}
            </span>
          </nav>

          <h1 className="text-[28px] font-medium leading-[1.08] tracking-[-0.03em] text-[#111111] sm:text-[38px] md:text-[52px] lg:text-[68px]">
            {project.title}
          </h1>

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
            {[project.client, project.category, year].map((item) => (
              <span
                key={item}
                className="inline-flex min-h-[36px] items-center justify-center rounded-full border border-[#DFDFDF] bg-white px-5 text-[11px] font-normal text-[#555555] sm:min-h-[42px] sm:px-7 sm:text-[12px] md:min-h-[48px] md:px-9 md:text-[13px]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-[1880px] px-4 sm:px-5 lg:mt-12">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] bg-[#E9EDF2] sm:aspect-[16/9] lg:rounded-[20px]">
            {heroImage && (
              <Image
                src={heroImage}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1880px"
                className="object-cover"
              />
            )}
          </div>
        </div>
      </section>

      {/* =====================================
          OVERVIEW
      ====================================== */}
      <section className="pb-[92px] lg:pb-[120px]">
        <div className="w-full px-5 md:px-[5vw]">
          <SectionLabel>{overview.label || "ABOUT PROJECT"}</SectionLabel>

          <h2 className="mt-8 max-w-[850px] text-[30px] font-medium leading-[1.16] tracking-[-0.025em] text-[#111111] sm:text-[36px] lg:text-[43px]">
            {overview.title}
          </h2>

          <OverviewGallerySlider
            images={overviewGallery}
            projectTitle={project.title}
            description={overview.description || project.desc}
          />
        </div>
      </section>

      {/* =====================================
          PROBLEM STATEMENT
      ====================================== */}
      {project.challenges && project.challenges.items.length > 0 && (
        <section className="mx-auto max-w-[1880px] px-4 pb-[64px] sm:px-5 lg:pb-[78px]">
          <div className="w-full rounded-[20px] bg-[#EAF3FF] py-[68px] lg:rounded-[24px] lg:py-[92px]">
            <div className="w-full px-5 md:px-[5vw]">
              <SectionLabel centered>
                PROBLEM STATEMENT
              </SectionLabel>

              <h2 className="mx-auto mt-7 max-w-[900px] text-center text-[29px] font-medium leading-[1.15] tracking-[-0.025em] text-[#111111] sm:text-[36px] lg:text-[43px]">
                {project.challenges.title}
              </h2>

              <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-7">
                {project.challenges.items.map((item, index) => (
                  <article
                    key={`${item.title}-${index}`}
                    className="min-h-[225px] rounded-[16px] bg-white/65 p-7 sm:min-h-[245px] lg:p-10"
                  >
                    <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[8px] bg-[#DCEEFF] text-[#0E2A54]">
                      <ChallengeIcon name={item.icon} />
                    </div>

                    <h3 className="mt-8 text-[18px] font-medium leading-[1.3] tracking-[-0.015em] text-[#0E2A54] lg:text-[20px]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[13px] font-normal leading-[1.65] text-[#777777] lg:text-[14px]">
                      {item.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =====================================
          TECHNICAL APPROACH
      ====================================== */}
      {project.solutions && project.solutions.items.length > 0 && (
        <section className="relative overflow-hidden bg-[#0B274F] py-[82px] sm:py-[100px] lg:py-[126px]">
          {solutionBackground && (
            <Image
              src={solutionBackground}
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-[0.16]"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-b from-[#06182D]/65 via-[#0B274F]/88 to-[#0B2B5C]/95" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,transparent_48%,rgba(41,158,237,0.08)_48%,rgba(41,158,237,0.08)_64%,transparent_64%)]" />

          <div className="relative z-10 w-full px-5 md:px-[5vw]">
            <SectionLabel light>
              TECHNICAL APPROACH
            </SectionLabel>

            <h2 className="mt-7 max-w-[1120px] text-[30px] font-medium leading-[1.2] tracking-[-0.025em] text-white sm:text-[38px] lg:text-[46px]">
              {project.solutions.title}
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-14 lg:gap-7">
              {project.solutions.items.map((item, index) => (
                <article
                  key={`${item.title}-${index}`}
                  className="overflow-hidden rounded-[18px] bg-white p-3.5 shadow-[0_16px_45px_rgba(0,0,0,0.12)] lg:p-4"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[12px] bg-[#DCE5EF]">
                    <Image
                      src={item.image_url}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="px-1 pb-4 pt-5 sm:px-2">
                    <h3 className="text-[18px] font-medium leading-[1.3] tracking-[-0.015em] text-[#0E2A54] lg:text-[20px]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[12px] font-normal leading-[1.65] text-[#545454] lg:text-[13px]">
                      {item.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================
          TECH STACK
      ====================================== */}
      {project.tech_stack && project.tech_stack.length > 0 && (
        <section className="bg-[#FAFAFA] py-[86px] sm:py-[104px] lg:py-[126px]">
          <div className="w-full px-5 md:px-[5vw]">
            <SectionLabel>TECH STACK</SectionLabel>

            <h2 className="mt-7 text-[30px] font-medium leading-tight tracking-[-0.025em] text-[#111111] sm:text-[38px] lg:text-[44px]">
              What We Use to Build
            </h2>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-14 lg:grid-cols-5 lg:gap-5">
              {project.tech_stack.map((tech, index) => {
                const { name, logo } = getTechData(tech);

                return (
                  <article
                    key={`${name}-${index}`}
                    className="flex min-h-[170px] flex-col items-center justify-center rounded-[14px] border border-[#E3E3E3] bg-white px-5 py-7 sm:min-h-[195px] lg:min-h-[218px]"
                  >
                    <div className="flex h-[76px] w-full items-center justify-center sm:h-[88px]">
                      {logo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={logo}
                          alt={name}
                          className="max-h-[72px] max-w-[118px] object-contain sm:max-h-[84px] sm:max-w-[138px]"
                        />
                      ) : (
                        <span className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-[#EAF3FF] text-[24px] font-semibold text-[#0E2A54]">
                          {name.slice(0, 2).toUpperCase()}
                        </span>
                      )}
                    </div>

                    <span className="mt-5 text-center text-[11px] font-normal text-[#888888] sm:text-[12px]">
                      {name}
                    </span>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* =====================================
          OUR IMPLEMENTATION PROCESS
      ====================================== */}
      {project.workflow && project.workflow.items.length > 0 && (
        <section className="mx-auto max-w-[1880px] px-4 pb-[90px] sm:px-5 lg:pb-[126px]">
          <div className="relative overflow-hidden rounded-[20px] bg-[#12376D] py-[68px] lg:rounded-[24px] lg:py-[92px]">
            <div className="pointer-events-none absolute -left-[90px] top-[115px] h-[360px] w-[360px] rotate-45 border-[70px] border-[#299EED]/20" />
            <div className="pointer-events-none absolute right-[8%] top-[-260px] h-[520px] w-[520px] rotate-45 border-[90px] border-white/[0.025]" />

            <div className="w-full px-5 md:px-[5vw]">
              <div className="relative z-10 flex items-center justify-between gap-6">
                <SectionLabel light>
                  OUR IMPLEMENTATION PROCESS
                </SectionLabel>

                <div className="hidden items-center gap-3 md:flex">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white">
                    <ArrowLeft className="h-4 w-4" />
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>

              <h2 className="relative z-10 mt-7 max-w-[880px] text-[29px] font-medium leading-[1.18] tracking-[-0.025em] text-white sm:text-[36px] lg:hidden">
                {project.workflow.title}
              </h2>

              <div className="hide-scrollbar relative z-10 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto lg:mt-12 lg:grid lg:grid-cols-4 lg:overflow-visible">
                {project.workflow.items.map((item, index) => (
                  <article
                    key={`${item.step}-${item.title}`}
                    className={`min-w-[82%] snap-start rounded-[18px] border-[8px] p-0 transition-opacity sm:min-w-[48%] lg:min-w-0 ${
                      index === 0
                        ? "border-white bg-white opacity-100"
                        : "border-white/20 bg-white/60 opacity-45"
                    }`}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[10px] bg-[#DBE3EC]">
                      <Image
                        src={item.image_url}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 82vw, 25vw"
                        className="object-cover"
                      />
                    </div>

                    <div className="min-h-[178px] px-2 pb-5 pt-5 sm:px-3">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="max-w-[85%] text-[17px] font-medium leading-[1.18] tracking-[-0.015em] text-[#0E2A54] lg:text-[19px]">
                          {item.title}
                        </h3>

                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#0E2A54]/45 text-[11px] font-medium text-[#0E2A54]">
                          {item.step.replace(/^0/, "")}
                        </span>
                      </div>

                      <p className="mt-4 text-[12px] font-normal leading-[1.6] text-[#5E5E5E] lg:text-[13px]">
                        {item.desc}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="relative z-10 mt-14 h-[5px] w-full overflow-visible bg-white/10">
                <div className="relative h-full w-1/4 bg-[#299EED]">
                  <span className="absolute -top-[52px] right-[-7px] h-0 w-0 border-x-[8px] border-b-[14px] border-x-transparent border-b-[#299EED]" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =====================================
          RESULTS AND IMPACT (INTERACTIVE DYNAMIC IMAGES)
      ====================================== */}
      {project.result && (
        <ResultImpactInteractive
          label="RESULTS AND IMPACT"
          title={project.result.title}
          description={project.result.description}
          highlights={resultHighlights}
          defaultImage={project.result.image_url}
          projectImages={project.images}
        />
      )}

      {/* =====================================
          LARGE PROJECT SHOWCASE
      ====================================== */}
      {showcaseImage && (
        <section className="pb-[86px] lg:pb-[112px]">
          <div className="mx-auto mb-8 max-w-[1440px] w-full px-5 md:px-[5vw]">
            <SectionLabel>ABOUT PROJECT</SectionLabel>
          </div>

          <div className="mx-auto max-w-[1880px] px-4 sm:px-5">
            <div className="relative aspect-[16/11] overflow-hidden rounded-[14px] bg-[#DDE3EA] sm:aspect-[2.05/1] lg:rounded-[20px]">
              <Image
                src={showcaseImage}
                alt={project.showcase?.alt || `${project.title} showcase`}
                fill
                sizes="(max-width: 768px) 100vw, 1880px"
                className="object-cover"
              />

              {prevProject && (
                <Link
                  href={`/works/${prevProject.slug}`}
                  aria-label={`Previous project: ${prevProject.title}`}
                  className="absolute left-7 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/10 text-white backdrop-blur-sm transition-colors hover:bg-black/30 sm:left-10"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              )}

              {nextProject && (
                <Link
                  href={`/works/${nextProject.slug}`}
                  aria-label={`Next project: ${nextProject.title}`}
                  className="absolute right-7 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/10 text-white backdrop-blur-sm transition-colors hover:bg-black/30 sm:right-10"
                >
                  <ArrowRight className="h-5 w-5" />
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* =====================================
          EXPLORE OTHER WORKS
      ====================================== */}
      {otherWorks.length > 0 && (
        <section className="bg-[#EAF3FF] py-[80px] sm:py-[100px] lg:py-[118px]">
          <div className="w-full px-5 md:px-[5vw]">
            <div className="flex items-center justify-between gap-8">
              <h2 className="text-[33px] font-medium leading-tight tracking-[-0.03em] text-[#111111] sm:text-[42px] lg:text-[50px]">
                Explore Other Works
              </h2>

              <div className="hidden items-center gap-3 sm:flex">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0E2A54] text-[#0E2A54]">
                  <ArrowLeft className="h-4 w-4" />
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0E2A54] text-white">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-7 lg:mt-12">
              {otherWorks.map((work) => (
                <Link
                  key={work.slug}
                  href={`/works/${work.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[1.82/1] overflow-hidden rounded-[16px] bg-[#CAD6E5] lg:rounded-[20px]">
                    <Image
                      src={getRelatedWorkImage(work)}
                      alt={work.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                    />

                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-6">
                      {work.category && (
                        <span className="max-w-[76%] rounded-full bg-white px-5 py-2 text-[10px] font-medium text-[#0E2A54] shadow-sm sm:text-[11px]">
                          {work.category}
                        </span>
                      )}

                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#299EED] text-white transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-6 text-[22px] font-medium leading-[1.3] tracking-[-0.02em] text-[#0E2A54] sm:text-[25px] lg:text-[29px]">
                    {work.title}
                  </h3>

                  {work.desc && (
                    <p className="mt-3 max-w-[94%] text-[12px] font-normal leading-[1.65] text-[#606A76] sm:text-[13px]">
                      {work.desc}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
      <Footer />

      <style>{`
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  );
}