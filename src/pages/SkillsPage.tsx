import PageHeading from "@/components/shared/PageHeading";
import { motion } from "framer-motion";
import {
  Database,
  Brain,
  Code,
  LayoutDashboard,
  GitBranch,
  Server,
  Terminal,
  BookOpen,
  GraduationCap,
  BadgeCheck,
  Settings2,
  Network,
  Wrench,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BrainCircuit } from "lucide-react";
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
      icon: "badge-check",
      title: "Problem Solver",
      description:
        "Solved 800+ DSA problems on LeetCode and have 5⭐ in Java and Problem Solving on HackerRank.",
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
      icon: "database",
      title: "Database Management",
      description:
        "Skilled in MongoDB and Firebase for efficient data modeling, queries, and real-time data handling.",
    },
  ];

  const languages = ["Java", "JavaScript", "Python", "C", "HTML5", "SQL"];

  const techStack = [
    "React.js",
    "Node.js",
    "Express.js",
    "Redux",
    "Next.js",
    "Mongoose",
    "Tailwind CSS",
  ];

  const mlAndDataScience = [
    "TensorFlow",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Data Analysis",
  ];

  const coursework = [
    "Data Structures and Algorithms",
    "Database Management Systems (DBMS)",
    "Operating System (OS)",
    "Computer Networks",
    "Object-Oriented Programming (OOPs)",
    "Machine Learning Fundamentals",
  ];

  const tools = ["Git", "GitHub", "Postman", "VS Code", "Firebase", "FastAPI"];

  return (
    <div className="container max-w-6xl mx-auto py-12 px-4">
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
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-xl hover:scale-105 transition-transform duration-300 h-full">
                <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                  <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    {skill.icon === "code" && (
                      <Code className="h-10 w-10 text-primary" />
                    )}
                    {skill.icon === "database" && (
                      <Database className="h-10 w-10 text-primary" />
                    )}
                    {skill.icon === "brain-circuit" && (
                      <BrainCircuit className="h-10 w-10 text-primary" />
                    )}
                    {skill.icon === "network" && (
                      <Network className="h-10 w-10 text-primary" />
                    )}
                    {skill.icon === "badge-check" && (
                      <BadgeCheck className="h-10 w-10 text-primary" />
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

      {/* Skills Sections */}
      {[
        {
          title: "Languages",
          icon: <Code className="h-6 w-6" />,
          data: languages,
        },
        {
          title: "Tech Stack",
          icon: <Settings2 className="h-6 w-6" />,
          data: techStack,
        },
        {
          title: "Data Science & Machine Learning",
          icon: <Brain className="h-6 w-6" />,
          data: mlAndDataScience,
        },
        {
          title: "Tools & Platforms",
          icon: <Wrench className="h-6 w-6" />,
          data: tools,
        },
        {
          title: "Coursework",
          icon: <BookOpen className="h-6 w-6" />,
          data: coursework,
        },
      ].map((section, index) => (
        <div key={index} className="mb-16">
          <h2 className="text-2xl font-tech text-primary mb-8 border-l-4 border-primary pl-4 flex items-center gap-2">
            {section.icon} {section.title}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {section.data.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Badge
                  variant="secondary"
                  className="px-5 py-3 text-base font-medium bg-primary/10 hover:bg-primary/20 transition-colors text-center w-full"
                >
                  {item}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsPage;
