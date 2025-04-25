import PageHeading from "@/components/shared/PageHeading";
import {
  Database,
  Brain,
  Code,
  LayoutDashboard,
  GitBranch,
  Server,
  Terminal,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BrainCircuit, Network, BadgeCheck } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SkillsPage = () => {
  const conceptualSkills = [
    {
      icon: "code",
      title: "Full-Stack Developer",
      description:
        "Proficient in MERN stack with experience in building real-world web applications like YouView and HireHub.",
    },
    {
      icon: "database",
      title: "Database Management",
      description:
        "Skilled in MongoDB and Firebase for efficient data modeling, queries, and real-time data handling.",
    },
    {
      icon: "brain-circuit",
      title: "AI/ML Enthusiast",
      description:
        "Currently learning ML with hands-on experience in regression, classification, and data analysis using Python.",
    },
    {
      icon: "network",
      title: "Cloud & Deployment",
      description:
        "Familiar with deploying full-stack apps on platforms like Render and integrating cloud storage using Cloudinary.",
    },
    {
      icon: "badge-check",
      title: "Problem Solver",
      description:
        "Solved 800+ DSA problems on LeetCode and have 5⭐ in Java and Problem Solving on HackerRank.",
    },
  ];

  const backendSkills = [
    { name: "Python", icon: <Code className="h-8 w-8" />, level: 90, years: 5 },
    {
      name: "Node.js",
      icon: <Code className="h-8 w-8" />,
      level: 85,
      years: 4,
    },
    {
      name: "Django",
      icon: <Server className="h-8 w-8" />,
      level: 88,
      years: 4,
    },
    {
      name: "FastAPI",
      icon: <Terminal className="h-8 w-8" />,
      level: 82,
      years: 3,
    },
    {
      name: "Git",
      icon: <GitBranch className="h-8 w-8" />,
      level: 90,
      years: 5,
    },
  ];

  const frontendSkills = [
    {
      name: "React.js",
      icon: <Code className="h-8 w-8" />,
      level: 92,
      years: 4,
    },
    {
      name: "TypeScript",
      icon: <Code className="h-8 w-8" />,
      level: 88,
      years: 3,
    },
    {
      name: "Tailwind CSS",
      icon: <LayoutDashboard className="h-8 w-8" />,
      level: 90,
      years: 3,
    },
    {
      name: "Next.js",
      icon: <Code className="h-8 w-8" />,
      level: 85,
      years: 2,
    },
  ];

  const mlLibraries = [
    {
      name: "TensorFlow",
      icon: <Brain className="h-8 w-8" />,
      level: 85,
      years: 3,
    },
    {
      name: "PyTorch",
      icon: <Brain className="h-8 w-8" />,
      level: 80,
      years: 2,
    },
    {
      name: "Scikit-learn",
      icon: <Brain className="h-8 w-8" />,
      level: 88,
      years: 3,
    },
    { name: "Pandas", icon: <Code className="h-8 w-8" />, level: 90, years: 4 },
    { name: "NumPy", icon: <Code className="h-8 w-8" />, level: 92, years: 4 },
  ];

  const skillsCatalog = {
    "Programming Languages": [
      "Python",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "SQL",
    ],
    "Web Technologies": [
      "React.js",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "GraphQL",
      "WebSockets",
    ],
    "Frameworks & Libraries": [
      "Django",
      "FastAPI",
      "Next.js",
      "Redux",
      "Material-UI",
      "Tailwind CSS",
    ],
    Databases: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "SQLite"],
    "DevOps & Tools": ["Git", "Docker", "AWS", "CI/CD", "Linux", "Nginx"],
    "Machine Learning": [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "OpenCV",
    ],
    "Best Practices": [
      "Clean Code",
      "Test-Driven Development",
      "Agile",
      "SOLID Principles",
      "Design Patterns",
    ],
  };

  return (
    <div className="container max-w-5xl mx-auto py-12">
      <PageHeading preTitle="Explore" title="My Skill Set" />

      {/* Conceptual Skills */}
      <div className="mb-16">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {conceptualSkills.map((skill, index) => (
            <SwiperSlide key={index}>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    {skill.icon === "code" && (
                      <Code className="h-8 w-8 text-primary" />
                    )}
                    {skill.icon === "database" && (
                      <Database className="h-8 w-8 text-primary" />
                    )}
                    {skill.icon === "brain-circuit" && (
                      <BrainCircuit className="h-8 w-8 text-primary" />
                    )}
                    {skill.icon === "network" && (
                      <Network className="h-8 w-8 text-primary" />
                    )}
                    {skill.icon === "badge-check" && (
                      <BadgeCheck className="h-8 w-8 text-primary" />
                    )}
                  </div>
                  <h3 className="text-xl font-tech font-bold text-primary mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Backend Skills */}
      <div className="mb-16">
        <h2 className="text-2xl font-tech text-primary mb-8 border-l-4 border-primary pl-4">
          Backend Technologies
        </h2>
        <div className="space-y-6">
          {backendSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm rounded-lg p-4"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground pl-16">
                {skill.years}+ years experience
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Frontend Skills */}
      <div className="mb-16">
        <h2 className="text-2xl font-tech text-primary mb-8 border-l-4 border-primary pl-4">
          Frontend Technologies
        </h2>
        <div className="space-y-6">
          {frontendSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm rounded-lg p-4"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground pl-16">
                {skill.years}+ years experience
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ML Libraries */}
      <div className="mb-16">
        <h2 className="text-2xl font-tech text-primary mb-8 border-l-4 border-primary pl-4">
          Machine Learning & Data Science
        </h2>
        <div className="space-y-6">
          {mlLibraries.map((skill, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm rounded-lg p-4"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground pl-16">
                {skill.years}+ years experience
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Catalog */}
      <div className="mb-16">
        <h2 className="text-2xl font-tech text-primary mb-8 border-l-4 border-primary pl-4">
          Skills Catalog
        </h2>
        <div className="grid gap-8">
          {Object.entries(skillsCatalog).map(([category, skills]) => (
            <div
              key={category}
              className="bg-card/50 backdrop-blur-sm rounded-lg p-6"
            >
              <h3 className="text-lg font-medium mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1 text-sm bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
