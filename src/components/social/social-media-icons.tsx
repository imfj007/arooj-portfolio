"use client";

import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { SiLinkedin, SiFacebook, SiWhatsapp } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { config } from "@/data/config";
import Link from "next/link";

const BUTTONS = [
  {
    name: "LinkedIn",
    href: config.social.linkedin,
    icon: <SiLinkedin size={"24"} className="text-white hover:text-[#0077b5] transition-colors" />,
  },

  {
    name: "Facebook",
    href: config.social.facebook,
    icon: <SiFacebook size={"24"} className="text-white hover:text-[#1877F2] transition-colors" />,
  },
  {
    name: "WhatsApp",
    href: config.social.whatsapp,
    icon: <SiWhatsapp size={"24"} className="text-white hover:text-[#25D366] transition-colors" />,
  },
  {
    name: "Mail",
    href: `mailto:${config.email}`,
    icon: <MdEmail size={"26"} className="text-white hover:text-red-400 transition-colors" />,
  },
];

const SocialMediaButtons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });
  return (
    <div ref={ref} className="z-10 flex items-center flex-wrap">
      {show &&
        BUTTONS.map((button) => (
          <Link href={button.href} key={button.name} target="_blank" rel="noopener noreferrer">
            <Button variant={"ghost"}>{button.icon}</Button>
          </Link>
        ))}
    </div>
  );
};

export default SocialMediaButtons;
