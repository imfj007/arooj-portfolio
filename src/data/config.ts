const config = {
  title: "Arooj Jamil | SEO Executive & Digital Marketing Specialist",
  description: {
    long: "Explore the portfolio of Arooj Jamil, an SEO Executive and Digital Marketing Specialist with expertise in on-page SEO, off-page SEO, technical SEO, keyword research, content strategy, and creative design. Helping brands grow online through data-driven SEO & creative campaigns.",
    short:
      "Discover the portfolio of Arooj Jamil, an SEO Executive & Digital Marketing Specialist helping brands grow online.",
  },
  keywords: [
    "Arooj Jamil",
    "portfolio",
    "SEO Executive",
    "Digital Marketing Specialist",
    "Creative Strategist",
    "On-Page SEO",
    "Off-Page SEO",
    "Technical SEO",
    "Keyword Research",
    "Content Strategy",
    "SEMrush",
    "Ahrefs",
    "Google Analytics",
    "Social Media Marketing",
  ],
  author: "Arooj Jamil",
  email: "aroojrajpoot22999@gmail.com",
  site: "https://imfj007.github.io/arooj-portfolio",

  // for github stars button
  githubUsername: "imfj007",
  githubRepo: "arooj-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "",
    instagram: "",
    facebook: "",
    github: "",
  },
};
export { config };
