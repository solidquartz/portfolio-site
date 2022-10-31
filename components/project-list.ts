export type Project = {
  name: string;
  image: any;
  github: string;
  liveSite: string;
  type: string;
  description: string;
  stack: string;
  story: string;
};

export const projects: Project[] = [
  {
    name: "Wedding Site",
    image: "/images/weddingsite_home.png",
    github: "https://github.com/doginasweater/akywedding",
    liveSite: "http://akyandrew2022.com",
    type: "live site",
    stack: "React TypeScript Sass Chakra .NET C# Formik",
    description:
      "Created for my own wedding. Features an RSVP system and database to collect data from guests, and an admin dashboard to view guest information. Guests can RSVP for their entire party at once for a convenient user experience. Over 100 real users. Collaboration with a mentor.",
    story:
      "https://github.com/doginasweater/akywedding/blob/development/README.md",
  },
  {
    name: "StudyLatte",
    image: "/images/studylatte-home.png",
    github: "https://github.com/solidquartz/studylatte",
    liveSite: "https://youtu.be/ofQ0QPL2zJ8",
    type: "demo",
    stack: "React JavaScript Sass Chakra Express PostgreSQL Socket.io",
    description:
      "A real-time virtual study room app with an instant message feature and shared timer. Users can create and join rooms for a synced-up experience. I worked primarily on design and socket.io. Collaboration with classmates, created in under 2 weeks.",
    story: "https://github.com/solidquartz/StudyLatte/blob/main/README.md",
  },
  {
    name: "Portfolio Site",
    image: "/images/portfolio-home.png",
    github: "https://github.com/solidquartz/portfolio-site",
    liveSite: "#",
    type: "live site",
    stack: "Next.js TypeScript Tailwind FramerMotion",
    description:
      "You're looking at it! An opportunity to work on my own to try new technologies and develop a minimal style to showcase my abilities. Future updates are underway for more project details, contact form, and visual flair.",
    story: "https://github.com/solidquartz/portfolio-site#readme",
  },
  {
    name: "AOW Films",
    image: "/images/comingsoon.png",
    github: "https://github.com/solidquartz/aowfilms",
    liveSite: "http://aowfilms.com",
    type: "original site",
    stack: "Next.js TypeScript Tailwind +TBD",
    description:
      "Commission. A total makeover and modernization of a filmmaker's portfolio site that was last updated in 2008. An opportunity to get more comfortable with known technologies and work with a client to achieve their vision.",
    story: "https://github.com/solidquartz/aowfilms#readme",
  },
];
