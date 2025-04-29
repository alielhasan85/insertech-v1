"use client";

import Link from "next/link";
// import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  Globe,
  Smartphone,
  Code,
  Database,
  BarChart3,
  ShoppingBag,
  Video,
} from "lucide-react";

// Define the service types
type ServiceInfo = {
  title: string;
  description: string;
  fullDescription: string;
  imageSrc: string;
  features: string[];
  technologies: string[];
  faqs?: {
    question: string;
    answer: string;
  }[];
};

type ServicesRecord = Record<string, ServiceInfo>;

interface ServicePageClientProps {
  serviceId: string;
  service: ServiceInfo;
  allServices: ServicesRecord;
}

export default function ServicePageClient({
  serviceId,
  service,
  allServices,
}: ServicePageClientProps) {
  // Now we can safely use useSearchParams() in this client component

  // Get service icon based on service ID
  const getServiceIcon = (id: string) => {
    switch (id) {
      case "web-development":
        return <Globe className="h-4 w-4" />;
      case "mobile-development":
        return <Smartphone className="h-4 w-4" />;
      case "custom-software":
        return <Code className="h-4 w-4" />;
      case "erp-systems":
        return <Database className="h-4 w-4" />;
      case "digital-marketing":
        return <BarChart3 className="h-4 w-4" />;
      case "shopify":
        return <ShoppingBag className="h-4 w-4" />;
      case "video-production":
        return <Video className="h-4 w-4" />;
      default:
        return <Globe className="h-4 w-4" />;
    }
  };

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-6">
        <Link
          href="/services"
          className="flex items-center gap-2 text-blue-500 hover:text-blue-700 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="font-medium">All Services</span>
        </Link>
        <div className="text-sm text-gray-500">
          Viewing{" "}
          <span className="font-medium text-blue-600">{service.title}</span>
        </div>
      </div>

      {/* Services Carousel/Navigation */}
      <div className="bg-gray-50 rounded-xl p-4 overflow-x-auto">
        <div className="flex space-x-2 min-w-max">
          {Object.entries(allServices).map(([id, serviceInfo]) => (
            <Link
              key={id}
              href={`/services/${id}`}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 whitespace-nowrap transition-colors ${
                id === serviceId
                  ? "bg-blue-500 text-white"
                  : "bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-600"
              }`}
            >
              {getServiceIcon(id)}
              <span className="text-sm font-medium">
                {serviceInfo.title.split(" ").slice(0, 2).join(" ")}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
