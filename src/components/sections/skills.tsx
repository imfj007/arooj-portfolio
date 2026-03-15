"use client";

import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const SKILL_DATA = [
  {
    category: "SEO Expertise",
    items: [
      "On-Page SEO (Meta tags, headings, internal linking, keyword optimization)",
      "Off-Page SEO (Backlink strategy, guest posting, outreach campaigns, backlink audits)",
      "Technical SEO (Crawl optimization, indexing issues, site speed, schema markup)",
      "Keyword Research & Competitor Analysis",
      "Content Optimization & Blog Strategy",
      "Local SEO & Google My Business Optimization",
      "WordPress SEO & Plugin Configuration (Yoast, RankMath)",
      "Google Analytics, Search Console, Google Ads",
      "SEMrush | Ahrefs | Moz | Ubersuggest | Screaming Frog",
      "Canva (Visual Content Design)",
      "Basic HTML & CSS",
    ],
  },
  {
    category: "Graphic Designing Skills",
    items: [
      "Adobe Photoshop (Photo editing, retouching, social media creatives, banners, web graphics)",
      "Adobe Illustrator (Logo design, vector illustrations, branding materials, brochures)",
      "Social media post design & marketing creatives",
      "Brand identity design (Logo, color palette, typography)",
      "Print design (Flyers, posters, business cards)",
      "Visual content creation for digital marketing campaigns",
    ],
  },
  {
    category: "Digital Marketing Skills",
    items: [
      "Social Media Marketing (Facebook, Instagram, LinkedIn campaigns)",
      "Paid Advertising & Campaign Management",
      "Email Marketing & Lead Generation",
      "Analytics & Data-Driven Marketing",
    ],
  },
  {
    category: "Soft Skills",
    items: [
      "Leadership & Mentorship",
      "Team Collaboration",
      "Communication & Presentation",
      "Analytical Thinking",
      "Project Management",
      "Problem Solving",
    ],
  },
];

const SkillsSection = () => {
  return (
    <SectionWrapper id="skills" className="flex flex-col items-center justify-center min-h-[120vh] py-20 z-10 pointer-events-auto">
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader id="skills" title="My Skills" className="mb-12 md:mb-20 mt-0" />
        
        <div className="flex flex-col gap-8 md:gap-12 relative z-20">
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-border hidden md:block -translate-x-1/2" />
          
          {SKILL_DATA.map((group, index) => (
            <motion.div
              key={group.category}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card
                className={cn(
                  "bg-card text-card-foreground border-border",
                  "hover:border-primary/20 transition-colors duration-300",
                  "shadow-sm hover:shadow-md max-w-2xl mx-auto"
                )}
              >
                <CardHeader className="pb-3">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="space-y-1">
                      <CardTitle className="text-xl font-bold tracking-tight">
                        {group.category}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="list-disc list-outside ml-4 space-y-2 text-base text-muted-foreground leading-relaxed">
                    {group.items.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
