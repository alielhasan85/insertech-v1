import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { ChevronRight } from "lucide-react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServicePageClient from "./ServicePageClient";

// Define the Params type for this dynamic route
type Params = {
  service: string;
};

// This would typically come from a database or API
const services = {
  "web-development": {
    title: "Website Design & Development",
    description:
      "Creating stunning, responsive websites that deliver exceptional user experiences for businesses in Qatar, Lebanon, and across the Middle East.",
    fullDescription:
      "We design and develop custom websites that not only look beautiful but also drive results. Our approach combines strategic thinking, creative design, and technical expertise to create digital experiences that engage your audience and achieve your business goals.",
    imageSrc: "/services/web-development-detailed.png",
    features: [
      "User-centered design that creates intuitive, engaging experiences",
      "Clean, efficient code using modern frameworks like React and Next.js",
      "Robust, scalable backend systems that power your digital products",
      "Lightning-fast loading times and smooth interactions for optimal user experience",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
    ],
    faqs: [
      {
        question: "How long does it take to develop a website?",
        answer:
          "The timeline for website development varies depending on complexity. Simple websites can be completed in 4-6 weeks, while more complex projects may take 2-3 months or more.",
      },
      {
        question: "Do you provide website maintenance services?",
        answer:
          "Yes, we offer ongoing maintenance packages to ensure your website remains secure, up-to-date, and performing optimally.",
      },
      {
        question: "Can you help with SEO for my website?",
        answer:
          "We implement SEO best practices during development and can provide comprehensive SEO services to improve your visibility in search engines.",
      },
    ],
  },
  "mobile-development": {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that engage users on any device, built by expert developers in Qatar and Lebanon.",
    fullDescription:
      "Our mobile development team creates powerful, feature-rich applications for iOS and Android platforms. Whether you need a native app for maximum performance or a cross-platform solution for broader reach, we deliver mobile experiences that users love.",
    imageSrc: "/services/mobile-development-detailed.png",
    features: [
      "High-performance iOS and Android apps using Swift, Kotlin, and Java",
      "Efficient development with React Native and Flutter for multiple platforms",
      "Intuitive interfaces that follow platform-specific design guidelines",
      "Rigorous testing across devices to ensure flawless performance",
    ],
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase",
      "Redux",
      "MobX",
    ],
    faqs: [
      {
        question:
          "What's the difference between native and cross-platform apps?",
        answer:
          "Native apps are built specifically for one platform (iOS or Android) using platform-specific languages. Cross-platform apps use frameworks like React Native or Flutter to share code across platforms, reducing development time and cost.",
      },
      {
        question: "How much does it cost to develop a mobile app?",
        answer:
          "App development costs vary widely based on complexity, features, and platforms. Simple apps may start around $15,000, while complex apps can cost $50,000 or more.",
      },
      {
        question: "Do you handle app store submissions?",
        answer:
          "Yes, we manage the entire process of submitting your app to the Apple App Store and Google Play Store, ensuring it meets all requirements and guidelines.",
      },
    ],
  },
  "custom-software": {
    title: "Custom Software & AI",
    description:
      "Tailored software solutions with cutting-edge AI capabilities for your unique business challenges in the Middle East market.",
    fullDescription:
      "We develop custom software solutions that address your specific business challenges. By integrating artificial intelligence and machine learning capabilities, we create intelligent systems that automate processes, provide valuable insights, and drive innovation.",
    imageSrc: "/services/custom-software-detailed.png",
    features: [
      "AI and machine learning integration for intelligent automation",
      "Custom business applications tailored to your specific needs",
      "Data analytics and visualization tools for better decision-making",
      "Scalable architecture that grows with your business",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "OpenAI",
      "AWS",
      "Google Cloud",
      "Azure",
    ],
    faqs: [
      {
        question: "How do you approach custom software development?",
        answer:
          "We follow an agile methodology, starting with thorough requirements gathering, followed by iterative development with regular client feedback, testing, and deployment.",
      },
      {
        question: "Can you integrate AI into my existing systems?",
        answer:
          "Yes, we can integrate AI capabilities into your existing software systems to enhance functionality, automate processes, and provide valuable insights.",
      },
      {
        question: "How do you ensure the security of custom software?",
        answer:
          "We implement industry-standard security practices throughout the development process, including secure coding, regular security testing, and compliance with relevant regulations.",
      },
    ],
  },
  "erp-systems": {
    title: "ERP Systems & Odoo",
    description:
      "Comprehensive enterprise solutions that streamline operations and boost efficiency for businesses across Qatar, Lebanon, and the Middle East.",
    fullDescription:
      "We specialize in implementing and customizing Odoo ERP systems that integrate all aspects of your business. Our solutions streamline operations, improve collaboration, and provide real-time insights that help you make better decisions and drive growth.",
    imageSrc: "/services/erp-systems-detailed.png",
    features: [
      "Full Odoo ERP implementation and customization",
      "Business process automation and workflow optimization",
      "Integration with existing systems and data migration",
      "Comprehensive training and ongoing support",
    ],
    technologies: [
      "Odoo",
      "Python",
      "PostgreSQL",
      "XML",
      "JavaScript",
      "QWeb",
      "REST API",
    ],
    faqs: [
      {
        question: "What is Odoo and why should I choose it for my business?",
        answer:
          "Odoo is a comprehensive open-source ERP system that integrates all your business processes in one platform. It's highly customizable, cost-effective, and scales with your business growth.",
      },
      {
        question: "How long does an ERP implementation take?",
        answer:
          "The timeline for ERP implementation depends on the size and complexity of your business. Typically, it ranges from 3-6 months for small to medium businesses and 6-12 months for larger enterprises.",
      },
      {
        question: "Can you migrate data from our existing systems to Odoo?",
        answer:
          "Yes, we have extensive experience migrating data from various systems to Odoo. We ensure data integrity and minimal disruption to your business operations during the migration process.",
      },
    ],
  },
  "digital-marketing": {
    title: "Digital Media & SEO",
    description:
      "Strategic digital marketing that increases visibility and drives qualified traffic for businesses in Qatar, Lebanon, and throughout the Middle East.",
    fullDescription:
      "Our digital marketing services help you reach and engage your target audience effectively. From search engine optimization to content marketing and social media management, we develop comprehensive strategies that increase your online visibility and drive meaningful results.",
    imageSrc: "/services/digital-marketing-detailed.png",
    features: [
      "Search engine optimization (SEO) to improve organic rankings",
      "Content strategy and creation that resonates with your audience",
      "Social media management and paid advertising campaigns",
      "Analytics and reporting to measure performance and ROI",
    ],
    technologies: [
      "Google Analytics",
      "SEMrush",
      "Ahrefs",
      "Google Ads",
      "Meta Ads",
      "Mailchimp",
      "HubSpot",
    ],
    faqs: [
      {
        question: "How long does it take to see results from SEO?",
        answer:
          "SEO is a long-term strategy. While some improvements may be visible within 1-3 months, significant results typically take 4-6 months or longer, depending on your industry, competition, and starting point.",
      },
      {
        question: "Do you offer social media management services?",
        answer:
          "Yes, we provide comprehensive social media management services, including content creation, posting schedules, community engagement, and performance analytics.",
      },
      {
        question:
          "How do you measure the success of digital marketing campaigns?",
        answer:
          "We track key performance indicators (KPIs) such as website traffic, conversion rates, engagement metrics, and return on investment (ROI) to measure campaign success and make data-driven optimizations.",
      },
    ],
  },
  shopify: {
    title: "Shopify Development",
    description:
      "Custom e-commerce solutions that drive sales and enhance customer experience for retailers in Qatar, Lebanon, and across the Middle East.",
    fullDescription:
      "We create custom Shopify stores that stand out from the competition and drive conversions. Our e-commerce expertise ensures your online store not only looks great but also provides a seamless shopping experience that keeps customers coming back.",
    imageSrc: "/services/shopify-detailed.png",
    features: [
      "Custom Shopify theme development and store design",
      "E-commerce strategy and conversion rate optimization",
      "App integration and custom functionality development",
      "Payment gateway and shipping integration",
    ],
    technologies: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "React",
      "Shopify API",
      "Shopify Plus",
      "Shopify Apps",
    ],
    faqs: [
      {
        question: "Why should I choose Shopify for my online store?",
        answer:
          "Shopify is a leading e-commerce platform that offers reliability, security, and scalability. It's user-friendly, has extensive app integrations, and provides excellent support for businesses of all sizes.",
      },
      {
        question: "Can you migrate my existing online store to Shopify?",
        answer:
          "Yes, we can migrate your existing online store to Shopify, including products, customers, orders, and content, ensuring a smooth transition with minimal disruption.",
      },
      {
        question: "Do you provide ongoing support for Shopify stores?",
        answer:
          "We offer ongoing support and maintenance packages to ensure your Shopify store remains up-to-date, secure, and optimized for performance and conversions.",
      },
    ],
  },
  "video-production": {
    title: "Video & Motion Graphics",
    description:
      "Compelling visual content that tells your story and captivates your audience, created by expert video producers in Qatar and Lebanon.",
    fullDescription:
      "Our video production and motion graphics services bring your brand to life through compelling visual storytelling. From promotional videos to animated explainers and product demonstrations, we create high-quality content that engages viewers and communicates your message effectively.",
    imageSrc: "/services/video-production-detailed.png",
    features: [
      "Professional video production from concept to final delivery",
      "Motion graphics and animation for enhanced visual storytelling",
      "Explainer videos that simplify complex concepts",
      "Product demonstrations and promotional content",
    ],
    technologies: [
      "Adobe Premiere Pro",
      "After Effects",
      "Cinema 4D",
      "Blender",
      "DaVinci Resolve",
      "Final Cut Pro",
    ],
    faqs: [
      {
        question: "What types of videos do you produce?",
        answer:
          "We produce a wide range of videos including corporate videos, product demonstrations, explainer videos, testimonials, social media content, and animated motion graphics.",
      },
      {
        question: "How long does video production take?",
        answer:
          "The timeline varies depending on the complexity of the project. Simple videos may take 2-3 weeks, while more complex productions can take 4-8 weeks from concept to final delivery.",
      },
      {
        question: "Do you provide scriptwriting services?",
        answer:
          "Yes, our team includes experienced scriptwriters who can develop compelling narratives that align with your brand voice and effectively communicate your message.",
      },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const service = services[params.service as keyof typeof services];

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `https://insertech.io/services/${params.service}`,
    },
    openGraph: {
      title: `${service.title} | Insertech`,
      description: service.description,
      url: `https://insertech.io/services/${params.service}`,
      images: [
        {
          url: `https://insertech.io${service.imageSrc}`,
          width: 800,
          height: 600,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Insertech`,
      description: service.description,
      images: [`https://insertech.io${service.imageSrc}`],
    },
  };
}

export function generateStaticParams(): Params[] {
  return Object.keys(services).map((service) => ({ service }));
}

// Create a client component for the parts that need useSearchParams

export default function ServicePage({ params }: { params: Params }) {
  const serviceId = params.service;
  const service = services[serviceId as keyof typeof services];

  if (!service) {
    notFound();
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <Link
                href="/services"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2"
              >
                Services
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="ml-1 text-sm font-medium text-blue-600 md:ml-2">
                {service.title}
              </span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Service Navigation Bar - Wrap in Suspense */}
      <Suspense
        fallback={
          <div className="h-16 bg-gray-100 rounded-lg animate-pulse mb-10"></div>
        }
      >
        <ServicePageClient
          serviceId={serviceId}
          service={service}
          allServices={services}
        />
      </Suspense>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl text-gray-600 mb-8">
            {service.fullDescription}
          </p>

          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="space-y-3 mb-8">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold mb-4">Technologies</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {service.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <Button asChild className="bg-blue-500 hover:bg-blue-600">
            <Link href="/contact">Request a quote</Link>
          </Button>
        </div>

        <div className="relative rounded-xl overflow-hidden">
          <Image
            src={service.imageSrc || "/placeholder.svg"}
            alt={`${service.title} - Professional ${serviceId.replace(
              "-",
              " "
            )} services by Insertech in Qatar and Lebanon`}
            width={800}
            height={600}
            className="object-cover"
            priority={true} // Add priority for above-the-fold image
          />
        </div>
      </div>

      {/* FAQ Section */}
      {service.faqs && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {service.faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add structured data for this service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            serviceType: service.title,
            provider: {
              "@type": "Organization",
              name: "Insertech",
              url: "https://insertech.io",
            },
            description: service.fullDescription,
            areaServed: ["Qatar", "Lebanon", "Middle East"],
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              url: `https://insertech.io/services/${serviceId}`,
            },
            image: `https://insertech.io${service.imageSrc}`,
          }),
        }}
      />

      {/* Add breadcrumb schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://insertech.io",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: "https://insertech.io/services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: service.title,
                item: `https://insertech.io/services/${serviceId}`,
              },
            ],
          }),
        }}
      />

      {/* Add FAQ schema */}
      {service.faqs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: service.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}
    </div>
  );
}
