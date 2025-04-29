import Link from "next/link"
import { ArrowRight, Globe, Smartphone, Code, Database } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesPreview() {
  const services = [
    {
      id: "web-development",
      title: "Website Design & Development",
      description: "Creating stunning, responsive websites that deliver exceptional user experiences",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      id: "mobile-development",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that engage users on any device",
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      id: "custom-software",
      title: "Custom Software & AI",
      description: "Tailored software solutions with cutting-edge AI capabilities for your unique challenges",
      icon: <Code className="w-6 h-6" />,
    },
    {
      id: "erp-systems",
      title: "ERP Systems & Odoo",
      description: "Comprehensive enterprise solutions that streamline operations and boost efficiency",
      icon: <Database className="w-6 h-6" />,
    },
  ]

  return (
    <section className="w-full py-20 bg-[#0a0e29] text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-blue-900/50 text-blue-300 text-sm font-medium rounded-full mb-4">
            OUR SERVICES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What We <span className="text-blue-400">Do</span>
          </h2>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help businesses thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="bg-[#111540] p-6 rounded-xl transition-all duration-300 hover:bg-blue-600 group"
            >
              <div className="p-3 rounded-full bg-blue-900 inline-block mb-4 group-hover:bg-white/20">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-blue-100/80 mb-4">{service.description}</p>
              <div className="flex items-center text-blue-400 group-hover:text-white">
                <span>Learn more</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-blue-500 hover:bg-blue-600">
            <Link href="/services" className="flex items-center gap-2">
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
