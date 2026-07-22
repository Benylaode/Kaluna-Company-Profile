import type { Metadata } from "next";
import { getServiceBySlug } from "../../../src/lib/actions";

const defaultServices = {
  "web-application-development": {
    title: "Web & Application Development",
    description:
      "Professional website and web application development focused on performance, security, responsive design, and scalable business operations.",
  },
  "iot-system-development": {
    title: "IoT System Development",
    description:
      "End-to-end IoT system development for real-time device monitoring, automation, telemetry, alerts, and connected operational platforms.",
  },
  "erp-system-integration": {
    title: "ERP & System Integration",
    description:
      "Custom ERP development and enterprise system integration for unified workflows, inventory, finance, operations, and data synchronization.",
  },
  "industrial-automation-solutions": {
    title: "Industrial & Automation Solutions",
    description:
      "Industrial automation, SCADA dashboards, PLC integration, machine monitoring, operational alerts, and connected manufacturing systems.",
  },
  "data-dashboard-analytics": {
    title: "Data Dashboard & Analytics",
    description:
      "Custom data dashboards, business intelligence systems, real-time analytics, automated reports, and integrated data pipelines.",
  },
  "it-strategy-consulting": {
    title: "IT Strategy & Consulting",
    description:
      "Technology strategy and IT consulting services for system architecture, digital transformation, security, integration, and scalability.",
  },
} as const;

type ServiceSlug = keyof typeof defaultServices;

type MetadataProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { slug } = await params;

  const dbService = await getServiceBySlug(slug);
  const fallback = defaultServices[slug as ServiceSlug];

  const title = dbService?.title || fallback?.title;
  const description = dbService?.description || fallback?.description;

  if (!title) {
    return {
      title: "Service",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonical = `/services/${slug}`;
  const fullTitle = `${title} | Kaluna Technology`;

  return {
    title,
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
          url: dbService?.image_url || "/seo/kaluna-og.jpg",
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
      images: [dbService?.image_url || "/seo/kaluna-og.jpg"],
    },
  };
}

export default function ServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
