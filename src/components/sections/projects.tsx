"use client";
import React from "react";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor's Degree",
    institution: "University of the Punjab",
    location: "Lahore",
  },
  {
    id: 2,
    degree: "Intermediate (Computer Science)",
    institution: "Punjab College",
    location: "Lahore",
  },
  {
    id: 3,
    degree: "Digital Marketing Certification",
    institution: "Bano Qabil",
    location: "Lahore",
  },
];

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto md:h-[130vh]">
      <SectionHeader id="projects" title="Education" />
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <div className="flex flex-col gap-8 md:gap-10">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card
                className={cn(
                  "bg-card text-card-foreground border-border",
                  "hover:border-primary/20 transition-colors duration-300",
                  "shadow-sm hover:shadow-md"
                )}
              >
                <CardHeader className="pb-3">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="space-y-1">
                      <CardTitle className="text-xl font-bold tracking-tight">
                        {edu.degree}
                      </CardTitle>
                      <div className="text-base font-medium text-muted-foreground">
                        {edu.institution}
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="w-fit font-mono text-xs font-normal"
                    >
                      {edu.location}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
