"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Database,
  LineChart,
  Smartphone,
  Server,
  Cpu,
} from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  position: string;
  specialty: string;
  icon: React.ReactNode;
  color: string;
}

export default function TeamShowcaseSection() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  const seniorTeam: TeamMember[] = [
    {
      id: "ahmad",
      name: "Ahmad Al-Farsi",
      position: "CEO & Founder",
      specialty: "Strategic Leadership",
      icon: <LineChart className="h-6 w-6" />,
      color: "bg-blue-500",
    },
    {
      id: "mohammed",
      name: "Mohammed Hassan",
      position: "CTO",
      specialty: "System Architecture",
      icon: <Server className="h-6 w-6" />,
      color: "bg-indigo-500",
    },
    {
      id: "sara",
      name: "Sara Khalid",
      position: "Creative Director",
      specialty: "UX/UI Design",
      icon: <Palette className="h-6 w-6" />,
      color: "bg-purple-500",
    },
    {
      id: "omar",
      name: "Omar Shakir",
      position: "Lead Developer",
      specialty: "Full-Stack Development",
      icon: <Code className="h-6 w-6" />,
      color: "bg-green-500",
    },
    {
      id: "layla",
      name: "Layla Mahmoud",
      position: "Project Manager",
      specialty: "Agile Methodologies",
      icon: <LineChart className="h-6 w-6" />,
      color: "bg-yellow-500",
    },
    {
      id: "tariq",
      name: "Tariq Nasser",
      position: "Database Architect",
      specialty: "Data Management",
      icon: <Database className="h-6 w-6" />,
      color: "bg-red-500",
    },
    {
      id: "nadia",
      name: "Nadia Rahman",
      position: "Mobile Lead",
      specialty: "iOS & Android Development",
      icon: <Smartphone className="h-6 w-6" />,
      color: "bg-teal-500",
    },
    {
      id: "ali",
      name: "Ali Mansour",
      position: "DevOps Engineer",
      specialty: "Cloud Infrastructure",
      icon: <Cpu className="h-6 w-6" />,
      color: "bg-cyan-500",
    },
  ];

  const departmentCounts = {
    development: 12,
    design: 8,
    projectManagement: 5,
    marketing: 6,
    customerSupport: 7,
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-4">
            OUR TEAM
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet the Experts Behind Insertech
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of seasoned professionals brings together diverse expertise
            to deliver exceptional digital solutions
          </p>
        </div>

        {/* Senior Team Members */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {seniorTeam.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
              className="relative group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="aspect-square relative bg-blue-50">
                  {/* Decorative background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100"></div>
                  </div>

                  {/* Silhouette */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div
                      className={`w-24 h-24 rounded-full ${
                        member.color
                      } mb-4 flex items-center justify-center text-white transition-all duration-300 ${
                        hoveredMember === member.id ? "scale-110" : ""
                      }`}
                    >
                      {member.icon}
                    </div>
                    <div
                      className={`w-40 h-32 rounded-t-full ${
                        member.color
                      } mt-[-20px] transition-all duration-300 ${
                        hoveredMember === member.id ? "scale-105" : ""
                      }`}
                    ></div>
                  </div>
                </div>

                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-gray-600 text-sm mb-1">
                    {member.position}
                  </p>
                  <p className="text-blue-600 text-xs font-medium">
                    {member.specialty}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Department Stats */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Our Extended Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {Object.entries(departmentCounts).map(([dept, count]) => (
              <div key={dept} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-3">
                  <span className="text-2xl font-bold">{count}</span>
                </div>
                <h4 className="font-medium">
                  {dept === "development"
                    ? "Development"
                    : dept === "design"
                    ? "Design"
                    : dept === "projectManagement"
                    ? "Project Management"
                    : dept === "marketing"
                    ? "Marketing"
                    : "Customer Support"}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
