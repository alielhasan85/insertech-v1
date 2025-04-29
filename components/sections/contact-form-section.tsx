"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { toast } from "@/hooks/use-toast"
import { Quote, Send } from "lucide-react";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { toast } from "sonner";

interface ContactFormSectionProps {
  title?: string;
  subtitle?: string;
  contactLabel?: string;
}

export default function ContactFormSection({
  title = "Have an Project in Mind?",
  subtitle = "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.",
  contactLabel = "CONTACT",
}: ContactFormSectionProps) {
  const searchParams = useSearchParams();
  const [isQuoteRequest, setIsQuoteRequest] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  useEffect(() => {
    // Check if the user came from the "Get a Quote" button
    const service = searchParams.get("service");
    if (service === "quote") {
      setIsQuoteRequest(true);
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
      toast.success(
        "Quote request sent! We'll get back to you as soon as possible."
      );

      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        timeline: "",
        message: "",
      });
    } catch {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="w-full py-20 bg-gradient-to-b from-gray-50 to-white"
      id="contact"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative">
        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-8 right-8 z-50 shadow-lg rounded-full">
          <a
            href="https://wa.me/97474716942"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="shrink-0"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="font-medium">Chat on WhatsApp</span>
          </a>
        </div>

        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-4">
            {contactLabel}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            {title}
          </h2>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-6 text-gray-800">
                  Contact Information
                </h3>

                <div className="space-y-8">
                  {/* Qatar Office */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600 mb-2">
                      Qatar Office
                    </h4>
                    <p className="text-gray-600 mb-2">
                      Doha, UDC tower, 28th floor, Pearl
                    </p>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="h-4 w-4 text-blue-500" />
                      <a
                        href="tel:+97474716942"
                        className="hover:text-blue-600 transition-colors"
                      >
                        +974 7471 6942
                      </a>
                    </div>
                  </div>

                  {/* Lebanon Office */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600 mb-2">
                      Lebanon Office
                    </h4>
                    <p className="text-gray-600 mb-2">
                      Beirut, Ghobeiry Center, 7th floor, Mesharafiye
                    </p>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="h-4 w-4 text-blue-500" />
                      <a
                        href="tel:+9613513968"
                        className="hover:text-blue-600 transition-colors"
                      >
                        +961 3 513 968
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600 mb-2">Email</h4>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="h-4 w-4 text-blue-500" />
                      <a
                        href="mailto:info@insertech.com"
                        className="hover:text-blue-600 transition-colors"
                      >
                        info@insertech.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-blue-600 mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-blue-600" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition-colors"
                  >
                    <Twitter className="w-5 h-5 text-blue-600" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-blue-600" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-blue-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
              {isQuoteRequest && (
                <div className="mb-8 flex items-center justify-center">
                  <div className="bg-blue-50 text-blue-700 p-4 rounded-lg flex items-center gap-3 max-w-xl">
                    <Quote className="h-6 w-6 flex-shrink-0" />
                    <p className="text-sm text-left">
                      Please provide as much detail as possible about your
                      project. This helps us create an accurate quote tailored
                      to your specific needs.
                    </p>
                  </div>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-6 h-full flex flex-col"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 border-0 h-14 px-4 focus:ring-2 focus:ring-blue-500"
                  />
                  <Input
                    type="text"
                    name="company"
                    placeholder="Company (Optional)"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-gray-50 border-0 h-14 px-4 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 border-0 h-14 px-4 focus:ring-2 focus:ring-blue-500"
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-gray-50 border-0 h-14 px-4 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {isQuoteRequest && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                      <div className="bg-gray-50 rounded-md h-14">
                        <Select
                          value={formData.service}
                          onValueChange={(value) =>
                            handleSelectChange("service", value)
                          }
                        >
                          <SelectTrigger className="border-0 h-14 px-4 bg-transparent focus:ring-2 focus:ring-blue-500">
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="web-development">
                              Website Development
                            </SelectItem>
                            <SelectItem value="mobile-development">
                              Mobile App Development
                            </SelectItem>
                            <SelectItem value="custom-software">
                              Custom Software & AI
                            </SelectItem>
                            <SelectItem value="erp-systems">
                              ERP Systems & Odoo
                            </SelectItem>
                            <SelectItem value="digital-marketing">
                              Digital Media & SEO
                            </SelectItem>
                            <SelectItem value="shopify">
                              Shopify Development
                            </SelectItem>
                            <SelectItem value="video-production">
                              Video & Motion Graphics
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="bg-gray-50 rounded-md h-14">
                        <Select
                          value={formData.budget}
                          onValueChange={(value) =>
                            handleSelectChange("budget", value)
                          }
                        >
                          <SelectTrigger className="border-0 h-14 px-4 bg-transparent focus:ring-2 focus:ring-blue-500">
                            <SelectValue placeholder="Budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-5k">
                              Under $5,000
                            </SelectItem>
                            <SelectItem value="5k-10k">
                              $5,000 - $10,000
                            </SelectItem>
                            <SelectItem value="10k-25k">
                              $10,000 - $25,000
                            </SelectItem>
                            <SelectItem value="25k-50k">
                              $25,000 - $50,000
                            </SelectItem>
                            <SelectItem value="over-50k">
                              Over $50,000
                            </SelectItem>
                            <SelectItem value="not-sure">
                              Not sure yet
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="bg-gray-50 rounded-md h-14">
                        <Select
                          value={formData.timeline}
                          onValueChange={(value) =>
                            handleSelectChange("timeline", value)
                          }
                        >
                          <SelectTrigger className="border-0 h-14 px-4 bg-transparent focus:ring-2 focus:ring-blue-500">
                            <SelectValue placeholder="Timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">
                              As soon as possible
                            </SelectItem>
                            <SelectItem value="1-month">
                              Within 1 month
                            </SelectItem>
                            <SelectItem value="1-3-months">
                              1-3 months
                            </SelectItem>
                            <SelectItem value="3-6-months">
                              3-6 months
                            </SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </>
                )}

                <Textarea
                  name="message"
                  placeholder={
                    isQuoteRequest
                      ? "Tell us about your project requirements, goals, and any specific features you need..."
                      : "Tell me about your project"
                  }
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-gray-50 border-0 min-h-[150px] px-4 py-4 flex-grow focus:ring-2 focus:ring-blue-500"
                />

                <div className="flex justify-center pt-4 mt-auto">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-5 sm:py-6 rounded-full h-auto font-medium text-sm sm:text-base min-w-[180px] sm:min-w-[200px] flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : isQuoteRequest ? (
                      <>
                        <Quote className="h-4 w-4" />
                        Request Quote
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
