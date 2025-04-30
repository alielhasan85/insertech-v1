/*
 * CompactServicesSection – compact image height
 * ------------------------------------------------------------
 * ▸ Image banner reduced to 12‑15rem tall (h‑48 md:h‑56)
 * ▸ Keeps all other dark‑theme, wrapper, motion intact
 */

"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import {
  motion,
  useInView,
  useAnimation,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, Globe, Smartphone, Code, Database } from "lucide-react";

interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: JSX.Element;
  color: string;
  imageSrc: string;
  features: string[];
}

export default function CompactServicesSection() {
  /* --------------------------- state & deep‑link --------------------------- */
  const router = useRouter();
  const search = useSearchParams();
  const initialService = search.get("service") ?? "web-development";
  const [activeService, setActiveService] = useState<string>(initialService);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(search.toString());
    params.set("service", activeService);
    router.replace(`?${params.toString()}`, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeService]);

  /* --------------------------- viewport trigger --------------------------- */
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.25 });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  /* --------------------------------- data --------------------------------- */
  const services: Service[] = [
    {
      id: "web-development",
      title: "Web Design & Development",
      tagline: "Launch 3× faster · 90+ Lighthouse scores",
      description:
        "High‑conversion sites built with React & Next.js — pixel‑perfect on any device.",
      icon: <Globe className="w-6 h-6" />,
      color: "from-sky-500 to-blue-600",
      imageSrc: "/services/web-dev-bg.png",
      features: [
        "Responsive, accessible UI",
        "Headless CMS or custom back‑end",
        "Performance & SEO optimisation",
      ],
    },
    {
      id: "mobile-development",
      title: "Mobile App Development",
      tagline: "iOS & Android · One codebase",
      description:
        "Swift/Kotlin or Flutter apps that delight users and ship fast.",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-purple-500 to-violet-600",
      imageSrc: "/services/mobile-dev-bg.png",
      features: [
        "Native & cross‑platform builds",
        "Store compliance & analytics",
        "Seamless API and payment hooks",
      ],
    },
    {
      id: "custom-software",
      title: "Custom Software & AI",
      tagline: "Automate · Predict · Personalise",
      description:
        "Bespoke platforms with ML at the core — from recommendation engines to forecasting dashboards.",
      icon: <Code className="w-6 h-6" />,
      color: "from-emerald-500 to-lime-600",
      imageSrc: "/services/software-bg.png",
      features: [
        "ML models (NLP, CV, forecasting)",
        "Micro‑services architecture",
        "Real‑time dashboards & alerts",
      ],
    },
    {
      id: "erp-systems",
      title: "ERP Systems & Odoo",
      tagline: "One source of truth for ops",
      description:
        "Streamline finance, inventory & CRM with tailored Odoo roll‑outs and integrations.",
      icon: <Database className="w-6 h-6" />,
      color: "from-amber-500 to-rose-500",
      imageSrc: "/services/erp-bg.png",
      features: [
        "Implementation & training",
        "Workflow automation",
        "Legacy system integration",
      ],
    },
  ];

  /* -------------------------------- motion -------------------------------- */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 110, damping: 16 },
    },
  };
  const prefersReduce = useReducedMotion();
  const float = prefersReduce
    ? {}
    : {
        y: [0, -6, 0],
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      };

  /* -------------------------------- render -------------------------------- */
  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#090c23] to-[#12173a] py-20 text-white"
    >
      {/* decorative blobs */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute -top-24 right-0 h-96 w-96 translate-x-1/3 rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute bottom-0 -left-24 h-96 w-96 translate-y-1/4 rounded-full bg-purple-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-blue-900/40 px-4 py-1 text-sm font-medium text-blue-300">
            WHAT WE DO
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Our <span className="text-blue-400">Services</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-blue-100/80">
            End‑to‑end digital solutions that help you build, launch and scale —
            all under one roof.
          </p>
        </motion.div>

        {/* unified window wrapper */}
        <div className="relative rounded-2xl border border-white/5 bg-[#141931]/60 p-6 backdrop-blur md:p-10 lg:p-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            {/* nav */}
            <motion.nav
              variants={containerVariants}
              initial="hidden"
              animate={controls}
              className="space-y-3 md:col-span-5 lg:col-span-4"
            >
              {services.map((s) => {
                const active = s.id === activeService;
                return (
                  <motion.button
                    key={s.id}
                    variants={itemVariants}
                    onMouseEnter={() => setHovered(s.id)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setActiveService(s.id)}
                    className={`group relative flex w-full items-center gap-3 overflow-hidden rounded-lg px-5 py-3 text-left transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:ring-offset-2 focus:ring-offset-[#141931] ${
                      active ? "bg-white/5" : "hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${
                        s.color
                      } transition-opacity ${
                        active
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-60"
                      }`}
                    />
                    <motion.span
                      animate={hovered === s.id || active ? float : {}}
                      className="relative z-10 flex h-10 w-10 items-center justify-center rounded-md bg-white/10"
                    >
                      {s.icon}
                    </motion.span>
                    <span className="relative z-10">
                      <h3 className="text-sm font-bold leading-tight">
                        {s.title}
                      </h3>
                      <p className="text-xs text-blue-300">{s.tagline}</p>
                    </span>
                    <ArrowRight className="ml-auto h-4 w-4 opacity-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                  </motion.button>
                );
              })}
            </motion.nav>

            {/* details */}
            <div className="md:col-span-7 lg:col-span-8">
              {services
                .filter((s) => s.id === activeService)
                .map((s) => (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden rounded-xl bg-[#1d235a] shadow-xl"
                  >
                    {/* image banner shortened */}
                    <div className="relative h-48 md:h-56 w-full">
                      <Image
                        src={s.imageSrc}
                        alt={s.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1d235a] via-transparent to-transparent" />
                    </div>

                    <div className="p-6">
                      <h3 className="mb-1 text-xl font-bold">{s.title}</h3>
                      <p className="mb-4 text-sm text-blue-100/90">
                        {s.description}
                      </p>
                      <h4 className="mb-2 text-base font-semibold">
                        Key features
                      </h4>
                      <ul className="mb-6 space-y-2">
                        {s.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2 text-sm text-blue-100/80"
                          >
                            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-400/80" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/services/${s.id}`}
                        className={`inline-flex items-center gap-2 rounded-lg bg-gradient-to-r ${s.color} px-6 py-2 text-sm font-medium text-white transition-transform hover:scale-105`}
                      >
                        Explore {s.title}
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>

        {/* view all */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105 hover:bg-blue-700"
          >
            View all our services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
