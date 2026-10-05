import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailClient from "./ProductDetailClient";

/**
 * Only slugs listed here are served. Any other /products/* URL returns a real
 * HTTP 404 so the prototype template cannot be indexed as infinite duplicates.
 */
const PROTOTYPE_PRODUCT_SLUGS = ["x-banner-wisuda"];

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

// The prototype stays reachable for demo purposes but must never be indexed.
export const metadata: Metadata = {
  title: "X-Banner Wisuda / Graduation",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;

  if (!PROTOTYPE_PRODUCT_SLUGS.includes(slug)) {
    notFound();
  }

  return <ProductDetailClient slug={slug} />;
}
