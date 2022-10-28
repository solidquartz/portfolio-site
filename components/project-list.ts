export type Project = {
  name: string;
  image: any;
  github: string;
  liveSite: string;
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
    stack: "React TypeScript Sass .NET C#",
    description: "Created for my own wedding. Features an RSVP system using Formik and Yup for validation, and an admin dashboard to view guest information. Over 100 real users.",
    story: "/weddingsitestory",
  },
];
