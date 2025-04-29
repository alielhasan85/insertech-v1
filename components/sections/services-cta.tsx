"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MessageSquare, Calendar } from "lucide-react";

export default function ServicesCTA() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  return (
    <section ref={sectionRef} className="w-full py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-12 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to transform your business?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let&apos;s discuss how our services can help you achieve your
                goals and create exceptional digital experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-medium rounded-lg"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Contact Us
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link
                    href="/contact?service=quote"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg border border-blue-400"
                  >
                    <Calendar className="w-5 h-5" />
                    Schedule a Consultation
                  </Link>
                </motion.div>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-indigo-600/30">
                <div className="absolute inset-0 bg-[url('/pattern-dots.png')] bg-center opacity-10"></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-5xl font-bold text-white mb-4">98%</div>
                  <div className="text-xl text-blue-100">
                    Client satisfaction rate
                  </div>

                  <div className="mt-12 text-5xl font-bold text-white mb-4">
                    200+
                  </div>
                  <div className="text-xl text-blue-100">
                    Projects delivered
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-800 py-6 px-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-blue-100">
              <div>Looking for a custom solution? We&apos;re here to help.</div>
              <Link
                href="/services#contact-form"
                className="inline-flex items-center text-white font-medium hover:underline"
              >
                Request a custom quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Preview */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold mb-2">What Our Clients Say</h3>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. See what our clients have to say
            about working with us.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                quote:
                  "Insertech transformed our online presence with a stunning website that perfectly captures our brand identity.",
                author: "Sarah Johnson",
                company: "TechVision Inc.",
              },
              {
                quote:
                  "The mobile app developed by Insertech exceeded our expectations and has significantly improved our customer engagement.",
                author: "Michael Chen",
                company: "GlobalConnect",
              },
              {
                quote:
                  "Their Odoo implementation streamlined our operations and gave us the insights we needed to grow our business.",
                author: "Ahmed Al-Farsi",
                company: "Nexus Solutions",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-sm">
                <div className="text-blue-600 mb-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 11L8 17H5L7 11H4V5H10V11ZM20 11L18 17H15L17 11H14V5H20V11Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 mb-6">{testimonial.quote}</p>
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="mt-12 inline-block"
          >
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 text-blue-700 font-medium rounded-lg"
            >
              View all testimonials
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
