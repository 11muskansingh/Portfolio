import { useState } from "react";
import PageHeading from "@/components/shared/PageHeading";
import { Calendar, Tag, User, ArrowRight } from "lucide-react";

const updates = [
  {
    id: 1,
    title: "Launched New Portfolio Website",
    date: "April 20, 2025",
    category: "Project Launch",
    content:
      "Excited to announce the launch of my new portfolio website! Built with React, Tailwind CSS, and a focus on clean design and responsiveness, it highlights my projects, achievements, and skills in full-stack development.",
    image: "/images/portfolio.png",
  },
  {
    id: 2,
    title: "Launched HireHub – Full-Stack Job Portal",
    date: "April 15, 2025",
    category: "Project Launch",
    content:
      "Released HireHub, a scalable full-stack job portal built using the MERN stack with Firebase Authentication. It features role-based dashboards, job posting, application tracking, resume upload, and personalized job recommendations for users.",
  },
  {
    id: 3,
    title: "Rejected After Final Interview at BNY CodeDivas 2025",
    date: "February 15, 2025",
    category: "Growth Timeline",
    content:
      "Participated in BNY CodeDivas 2025. Successfully cleared two online assessments and the first interview round. Despite strong performance, faced rejection after the second interview. Learned valuable insights into technical skills and behavioral interview strategies.",
  },
  {
    id: 4,
    title: "Solved 800+ Coding Questions on LeetCode",
    date: "March 30, 2025",
    category: "Achievement",
    content:
      "Reached a major milestone by solving over 800 coding problems on LeetCode using Java. This journey has sharpened my problem-solving and algorithmic thinking significantly.",
  },
  {
    id: 5,
    title: "Rejected in OA Rounds - DE Shaw, LinkedIn, Microsoft",
    date: "December 20, 2024",
    category: "Growth Timeline",
    content:
      "Gave online assessments for DE Shaw, LinkedIn, and Microsoft in December 2024. Although did not clear the OA rounds, gained deep exposure to company-specific problem patterns and enhanced speed-solving strategies for future assessments.",
  },
  {
    id: 6,
    title: "Completed YouView – YouTube Full-Stack Clone",
    date: "October 15, 2024",
    category: "Project Launch",
    content:
      "Developed YouView, a full-stack YouTube clone with features like video uploads, streaming, likes, comments, user authentication using JWT, history tracking, and category-wise search and filtering using MERN stack.",
  },
  {
    id: 7,
    title: "Rejected in Online Assessment Round at Goldman Sachs",
    date: "October 10, 2024",
    category: "Growth Timeline",
    content:
      "Resume shortlisted for Goldman Sachs. Cleared the Aptitude Test round successfully. However, faced rejection in the Online Assessment round. Gained important experience in aptitude-based filtering processes and refined time management under pressure.",
  },
  {
    id: 8,
    title: "Achieved Top 10% Ranking on LeetCode",
    date: "August 10, 2024",
    category: "Achievement",
    content:
      "Achieved a top 10% global ranking on LeetCode with a rating of 1700+, demonstrating consistent performance in data structures and algorithms.",
  },
  {
    id: 9,
    title: "Completed Node.js Course by Scaler",
    date: "June 5, 2024",
    category: "Certification",
    content:
      "Completed the Comprehensive Node.js Course by Scaler, gaining deep understanding of Express.js, REST APIs, and server-side development.",
  },
  {
    id: 10,
    title: "Completed JavaScript Course by Scaler",
    date: "April 15, 2024",
    category: "Certification",
    content:
      "Successfully completed the JavaScript Mastery Course by Scaler, strengthening core JS concepts including ES6+, closures, and asynchronous programming.",
  },
];

const categories = [
  "All",
  "Project Launch",
  "Achievement",
  "Growth Timeline",
  "Certification",
];

const UpdatesPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredUpdates =
    activeCategory === "All"
      ? updates
      : updates.filter((update) => update.category === activeCategory);

  return (
    <div className="container max-w-5xl mx-auto py-12">
      <PageHeading
        preTitle="Latest News"
        title="Updates & Activity"
        subtitle="Stay up to date with my latest projects, publications, and learning journey"
      />

      {/* Categories Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${activeCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-secondary hover:bg-secondary-foreground/10"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Updates Timeline */}
      <div className="space-y-12">
        {filteredUpdates.map((update) => (
          <div
            key={update.id}
            className="bg-card rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg"
          >
            {update.image && (
              <div className="w-full h-48 md:h-64 overflow-hidden">
                <img
                  src={update?.image}
                  alt={update.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
            )}

            <div className="p-6">
              <div className="flex flex-wrap gap-2 items-center mb-4">
                <span className="bg-primary/20 text-primary px-3 py-0.5 rounded-full text-sm">
                  {update.category}
                </span>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-1" />
                  {update.date}
                </div>
              </div>

              <h2 className="text-xl font-bold mb-4">{update.title}</h2>

              <p className="text-muted-foreground mb-4">{update.content}</p>

              {/* {update.link && (
                <a
                  href={update.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  Read more <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              )} */}
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Signup */}
      {/* <div className="mt-16 bg-card rounded-lg p-8 shadow-md text-center">
        <h2 className="text-2xl font-tech text-primary mb-4">Stay Updated</h2>
        <p className="mb-6 text-muted-foreground">
          Subscribe to my newsletter for monthly updates on new projects,
          articles, and tech insights.
        </p>

        <form className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded-lg border border-input bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/80 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div> */}
    </div>
  );
};

export default UpdatesPage;
