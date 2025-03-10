//this page manage all the information of the project


import { 
  proj1_img1,
  proj2_img1,
  proj3_img1,
} from "../assets";

const projects = [
    {
      id: "proj-1",
      name: "Unreal Metahuman",
      slug: "unreal-metahuman",
      date: "2024",
      company: "Indepedent",
      position: "Developer",
      technologies: ["Python", "Tensorflow", "OpenCV", "React", "Node"],
      tags: ["Game"],
      featuredNum: 2,
      media: [proj1_img1],
      description: "An AI-powered robot for automation.An AI-powered robot for automation.",
      overview: "Detailed explanation of the AI Robot project...",
      about: "Detailed explanation of the AI Robot project...",
      outcome: "Detailed explanation of the AI Robot project...",
      link: "proj-1",
    },

    {
      id: "proj-2",
      name: "Game project",
      slug: "game-project",
      date: "March 2025",
      company: "Tech Corp",
      position: "Lead Developer",
      technologies: ["Python", "Tensorflow", "OpenCV"],
      tags: ["Game"],
      featuredNum: 1,
      media: [proj2_img1],
      description: "A game project.",
      overview: "Detailed explanation of the AI Robot project...",
      about: "Detailed explanation of the AI Robot project...",
      outcome: "Detailed explanation of the AI Robot project...",
      link: "proj-2",
    },

    {
      id: "proj-3",
      name: "Desgin project",
      slug: "design-project",
      date: "March 2025",
      company: "Tech Corp",
      position: "Lead Developer",
      technologies: ["Python", "Tensorflow", "OpenCV"],
      tags: ["Game"],
      featuredNum: 1,
      media: [proj3_img1],
      description: "A game project.",
      overview: "Detailed explanation of the AI Robot project...",
      about: "Detailed explanation of the AI Robot project...",
      outcome: "Detailed explanation of the AI Robot project...",
      link: "proj-3",
    },
    
  ];

  export { projects};