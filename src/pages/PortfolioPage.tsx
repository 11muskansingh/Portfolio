import { useState } from "react";
import PageHeading from "@/components/shared/PageHeading";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Youtube, Apple, PlayCircle } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "HireHub",
    type: "Dev Projects",
    image: "../../public/images/hirehub.png",
    description:
      "HireHub is a full-stack job portal designed to simplify the job search and hiring process. With role-based access, real-time updates, and a responsive UI, it connects recruiters and job seekers in a seamless hiring ecosystem.",
    tags: ["MERN", "Firebase", "Job Hunt"],
    links: {
      github: "https://github.com/11muskansingh/HireHub",
      demo: "https://hirehub-gz47.onrender.com/",
    },
  },
  {
    id: 2,
    title: "YouView",
    type: "Dev Projects",
    image: "../../public/images/YouView.png",
    description:
      "YouView is a fully functional YouTube clone providing users with a complete video browsing and streaming experience. Built with a modern tech stack, YouView allows users to search, upload, interact with, and organize videos within a visually appealing and intuitive interface.",
    tags: ["MERN", "Secure Login", "Video Upload"],
    links: {
      github: "https://github.com/11muskansingh/YouView",
      demo: "https://you-view-teal.vercel.app/",
    },
  },
  {
    id: 3,
    title: "ReactJS Projects",
    type: "Dev Projects",
    image: "../public/images/ReactJs.png",
    description:
      "A collection of ReactJS projects showcasing various features and functionalities, including a password generator and more.",
    tags: ["React", "Copy", "Pawword Management"],
    links: {
      github: "https://github.com/11muskansingh/ReactJS-Projects",
    },
  },
  {
    id: 4,
    title: "Stone Paper Scissors Game",
    type: "Dev Projects",
    image: "../public/images/Sps.png",
    description:
      "Stone Paper Scissors is a fun and interactive web game where players compete against the computer using classic hand signs. Built with clean UI and smooth animations, it offers an engaging and responsive gaming experience.",
    tags: ["JavaScript", "Game", "Responsive UI", "Fun Project"],
    links: {
      github: "https://github.com/11muskansingh/Stone-Paper-Scissor-game",
      demo: "https://stone-paper-scissor-game-roan.vercel.app/",
    },
  },
  {
    id: 5,
    title: "Netflix Clone",
    type: "Dev Projects",
    image: "../public/images/Netflix.png",
    description:
      "This project is a static clone of the Netflix website, showcasing fundamental HTML and CSS skills. It aims to replicate the Netflix homepage with a focus on responsive design.",
    tags: ["UI Clone", "Responsive Design", "Frontend Project"],
    links: {
      github: "https://github.com/11muskansingh/HTML-CSS-Project",
      demo: "https://html-css-project-dun.vercel.app/",
    },
  },
  {
    id: 6,
    title: "TalkHub",
    type: "ML Projects",
    image: "../public/images/Talkhub.png",
    description:
      "talkHub is an AI-powered voice assistant that allows users to interact with the application using voice commands and receive spoken responses. This project leverages OpenAI's API for natural language processing and conversation generation, making it a powerful and versatile voice assistant.",
    tags: ["AI", "Voice Assistant", "OpenAI API"],
    links: {
      github: "https://github.com/chinmaypandey62/talkHub",
      demo: "#",
    },
  },
];

type FilterType = "All" | "Dev Projects" | "ML Projects";

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Dev Projects") return project.type === "Dev Projects";
    if (activeFilter === "ML Projects") return project.type === "ML Projects";
  });

  const filters: FilterType[] = ["All", "Dev Projects", "ML Projects"];

  return (
    <div className="container max-w-6xl mx-auto py-12">
      <PageHeading
        preTitle="Take a look at"
        title="My Projects"
        subtitle="Here are some of the projects I've worked on recently"
      />

      {/* Filters */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-secondary rounded-full p-1">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary-foreground/10"
              }`}
            >
              {filter} {filter === "All" && `(${projects.length})`}
              {filter === "Dev Projects" &&
                `(${projects.filter((p) => p.type === "Dev Projects").length})`}
              {filter === "ML Projects" &&
                `(${projects.filter((p) => p.type === "ML Projects").length})`}
              {/* {filter === "Utilities" &&
                `(${projects.filter((p) => p.type === "Utility").length})`} */}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all group"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full p-4">
                <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
                  {project.type}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-tech font-bold mb-2 text-primary">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-secondary text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3 mt-4">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    className="p-2 bg-secondary rounded-full hover:bg-primary/20 transition-colors"
                    title="View code on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}

                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    className="p-2 bg-secondary rounded-full hover:bg-primary/20 transition-colors"
                    title="View live demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}

                {/* {project.links.youtube && (
                  <a
                    href={project.links.youtube}
                    className="p-2 bg-secondary rounded-full hover:bg-primary/20 transition-colors"
                    title="Watch on YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                )} */}

                {/* {project.links.appStore && (
                  <a
                    href={project.links.appStore}
                    className="p-2 bg-secondary rounded-full hover:bg-primary/20 transition-colors"
                    title="Download on App Store"
                  >
                    <Apple className="w-5 h-5" />
                  </a>
                )} */}

                {/* {project.links.playStore && (
                  <a
                    href={project.links.playStore}
                    className="p-2 bg-secondary rounded-full hover:bg-primary/20 transition-colors"
                    title="Get it on Google Play"
                  >
                    <PlayCircle className="w-5 h-5" />
                  </a>
                )} */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More Projects Button */}
      {/* <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          Load More Projects
        </Button>
      </div> */}
    </div>
  );
};

export default PortfolioPage;
