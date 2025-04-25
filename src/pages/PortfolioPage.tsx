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
      "A RESTful API backend built with Node.js, designed for high-performance data processing and real-time event handling.",
    tags: ["API", "REST", "Backend"],
    links: {
      github: "#",
      demo: "#",
      youtube: "#",
    },
  },
  {
    id: 2,
    title: "YouView",
    type: "App",
    image: "../../public/images/YouView.png",
    description:
      "A cross-platform email client built with Flutter, providing efficient communication with an intuitive UI for managing emails.",
    tags: ["Flutter", "E-mail", "Communication"],
    links: {
      github: "#",
      demo: "#",
      appStore: "#",
      playStore: "#",
    },
  },
  {
    id: 3,
    title: "ReactJS Projects",
    type: "App",
    image: "../public/images/ReactJs.png",
    description:
      "A fully-featured productivity app developed with React Native, enabling users to organize tasks, notes, and projects across multiple devices. It offers cloud sync, intuitive UI, and collaboration features.",
    tags: ["React", "Organization", "Notes"],
    links: {
      github: "#",
      demo: "#",
      appStore: "#",
      playStore: "#",
    },
  },
  {
    id: 4,
    title: "SmartCash",
    type: "Website",
    image: "https://via.placeholder.com/250/4ADE80/000000?text=SmartCash",
    description:
      "A comprehensive financial management website that helps users track expenses, create budgets, and visualize spending patterns.",
    tags: ["Finance", "Dashboard", "Analytics"],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    id: 5,
    title: "Snappy",
    type: "App",
    image: "https://via.placeholder.com/250/F97316/FFFFFF?text=Snappy",
    description:
      "A social photo-sharing application with advanced filters, effects, and community features.",
    tags: ["Photography", "Social", "Mobile"],
    links: {
      github: "#",
      demo: "#",
      appStore: "#",
      playStore: "#",
    },
  },
  {
    id: 6,
    title: "Sweet Scoops",
    type: "Website",
    image: "https://via.placeholder.com/250/F472B6/FFFFFF?text=Sweet+Scoops",
    description:
      "An e-commerce website for an ice cream brand with online ordering, delivery tracking, and customer loyalty program.",
    tags: ["E-commerce", "Food", "Delivery"],
    links: {
      github: "#",
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
        title="My Portfolio"
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
                `(${projects.filter((p) => p.type === "App").length})`}
              {filter === "ML Projects" &&
                `(${projects.filter((p) => p.type === "Website").length})`}
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

                {project.links.youtube && (
                  <a
                    href={project.links.youtube}
                    className="p-2 bg-secondary rounded-full hover:bg-primary/20 transition-colors"
                    title="Watch on YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                )}

                {project.links.appStore && (
                  <a
                    href={project.links.appStore}
                    className="p-2 bg-secondary rounded-full hover:bg-primary/20 transition-colors"
                    title="Download on App Store"
                  >
                    <Apple className="w-5 h-5" />
                  </a>
                )}

                {project.links.playStore && (
                  <a
                    href={project.links.playStore}
                    className="p-2 bg-secondary rounded-full hover:bg-primary/20 transition-colors"
                    title="Get it on Google Play"
                  >
                    <PlayCircle className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More Projects Button */}
      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          Load More Projects
        </Button>
      </div>
    </div>
  );
};

export default PortfolioPage;
