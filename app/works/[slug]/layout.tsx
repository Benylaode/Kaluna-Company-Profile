import type { Metadata } from "next";
import { getWorkBySlug } from "../../../src/lib/actions";

type MetadataProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { slug } = await params;
  const work = await getWorkBySlug(slug);

  if (!work) {
    return {
      title: "Project",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonical = `/works/${slug}`;
  const fullTitle = `${work.title} | Kaluna Technology`;
  const description = work.desc || `Case study of ${work.title} by Kaluna Technology.`;
  const heroImage = work.images?.[0] || "/seo/kaluna-og.jpg";

  return {
    title: work.title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: "Kaluna Technology",
      title: fullTitle,
      description,
      images: [
        {
          url: heroImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [heroImage],
    },
  };
}

export default function WorkDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
