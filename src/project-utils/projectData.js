//this page manage all the information of the project


import { 
  proj1_img1,
  proj3_img1,
  proj4_img1,
} from "../assets";

// import {} from "../assets";
import { p2a } from "../assets";
import { proj3_img2, proj3_img3, proj3_img4} from "../assets";

const projects = [
    {
      id: "proj-1",
      name: "Unreal Metahuman",
      slug: "unreal-metahuman",
      date: "2024",
      company: "Indepedent",
      position: "Designer & Developer",
      technologies: ["Unreal Engine", "Maya"],
      tags: ["Game"],
      featuredNum: 2,
      cover: proj1_img1,
      banner: proj1_img1,
      media: [],
      description: "Fully customized metahuman built using UE pipeline.", 
      overview: "I created the hyper-realistic digital version of myself using Unreal Metahuman Creator.",
      about: "I scanned myself using a lidar scanner with 0.02mm of accuracy. The scanned mesh and texture is then processed in Maya and imported into Unreal Engine. The final result is a fully rigged and animated",
      outcome: "The finished model can be seamlessly integrated into games with UE pipeline. The model can be used for various purposes such as game development, animation, and virtual production.",
      link: "proj-1",
    },
    // gesture-controlled car
    {
      id: "proj-2",
      name: "Gesture Controlled Assistive Car",
      slug: "gesture-controlled-assistive-car",
      date: "2024",
      company: "Boston University Engineering Design (EK210)",
      position: "Electrical & Software",
      technologies: ["Python", "Tensorflow", "OpenCV"],
      tags: ["Engineering"],
      featuredNum: 1,
      cover: p2a,
      banner: proj3_img1,
      media: [proj3_img2, proj3_img3, proj3_img4],
      description: "A handy little car that can be steered with your hand gestures. ",
      overview: "Detailed explanation of the AI Robot project...",
      about: "Detailed explanation of the AI Robot project...",
      outcome: "Detailed explanation of the AI Robot project...",
      link: "proj-2",
    },
    // promise across the wall
    {
      id: "proj-3",
      name: "2D Game: Promise Across the Wall",
      slug: "game-promise-across-the-wall",
      date: "2023",
      company: "UDC Game Jam 25",
      position: "Individual Developer",
      technologies: ["Unity", "Procreate","C#"],
      tags: ["Game"],
      featuredNum: 3,
      cover: proj3_img2,
      banner: proj3_img4,
      media: [],
      description: "This solo entry won first place in a 9-day game jam competition.",
      overview: "I initiated and worked solo as the Game Design and Developer in a 9-day game jam competition. In 9 days, I built a 2D immersive 3rd person game using Unity.",
      about: "In this project, I worked as the only developer building out the basic framework of the game, implemented dynamic split-camera movements using Cinemachine packages. Besides coding, I also worked on music & sound effects design, scene and level design using paid pixel assets, as well as incorporate original pixel character design using Procreate. I completed a finished, 2D game furnished with enriched lighting, sound effects, and character movements and elaborate UI within 9 days.",
      outcome: "The game submission placed 1st in the UDC Game Jam 25, including #1 in Theme, and #1 in Innovation category. The game was praised for its unique art style and engaging gameplay.",
      link: "proj-3",
    },

    {
      id: "proj-4",
      name: "Desgin project 4",
      slug: "design-project-4",
      date: "March 2025",
      company: "Tech Corp",
      position: "Lead Developer",
      technologies: ["Python", "Tensorflow", "OpenCV"],
      tags: ["Engineering"],
      featuredNum: 10,
      cover: proj4_img1,
      banner: proj3_img1,
      media: [proj3_img1],
      description: "A game project.",
      overview: "Detailed explanation of the AI Robot project...",
      about: "Detailed explanation of the AI Robot project...",
      outcome: "Detailed explanation of the AI Robot project...",
      link: "proj-4",
    },

   


    
  ];

  export { projects};