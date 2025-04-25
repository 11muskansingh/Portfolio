
import { useState } from "react";
import PageHeading from "@/components/shared/PageHeading";
import { Calendar, Tag, User, ArrowRight } from "lucide-react";

const updates = [
  {
    id: 1,
    title: "Launched New Portfolio Website",
    date: "April 20, 2025",
    category: "Project Launch",
    content: "Excited to announce the launch of my new portfolio website! Built with React, TypeScript, and Tailwind CSS, it showcases my latest projects and skills. Let me know what you think!",
    image: "https://via.placeholder.com/800x400/4ade80/FFFFFF?text=New+Portfolio",
  },
  {
    id: 2,
    title: "Started Learning Web3 Development",
    date: "April 10, 2025",
    category: "Learning",
    content: "I've started diving into Web3 development, learning about smart contracts, decentralized applications, and blockchain technology. Looking forward to incorporating these skills into future projects.",
  },
  {
    id: 3,
    title: "Published Article on React Performance",
    date: "March 25, 2025",
    category: "Publication",
    content: "Just published a comprehensive article on React performance optimization techniques. Covering memo, useMemo, useCallback, and more advanced strategies for building lightning-fast React applications.",
    link: "https://medium.com/@markchoi/react-performance-tips-2025",
  },
  {
    id: 4,
    title: "Speaking at ReactConf 2025",
    date: "March 15, 2025",
    category: "Event",
    content: "Thrilled to announce that I'll be speaking at ReactConf 2025! My talk will cover advanced state management patterns and how to build more maintainable React applications. Hope to see you there!",
    image: "https://via.placeholder.com/800x400/9b87f5/FFFFFF?text=ReactConf+2025",
  },
  {
    id: 5,
    title: "Open-Sourced New React Component Library",
    date: "February 28, 2025",
    category: "Open Source",
    content: "After months of work, I've released my React component library. It includes accessible, customizable components with TypeScript support and comprehensive documentation. Contributions are welcome!",
    link: "https://github.com/markchoi/react-components",
  },
  {
    id: 6,
    title: "Completed AWS Solutions Architect Certification",
    date: "February 10, 2025",
    category: "Certification",
    content: "Happy to share that I've completed my AWS Solutions Architect certification! Looking forward to leveraging these cloud architecture skills in upcoming projects.",
  },
];

const categories = ["All", "Project Launch", "Learning", "Publication", "Event", "Open Source", "Certification"];

const UpdatesPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredUpdates = activeCategory === "All" 
    ? updates 
    : updates.filter(update => update.category === activeCategory);

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
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              activeCategory === category
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
                  src={update.image} 
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
              
              <p className="text-muted-foreground mb-4">
                {update.content}
              </p>
              
              {update.link && (
                <a 
                  href={update.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  Read more <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Newsletter Signup */}
      <div className="mt-16 bg-card rounded-lg p-8 shadow-md text-center">
        <h2 className="text-2xl font-tech text-primary mb-4">Stay Updated</h2>
        <p className="mb-6 text-muted-foreground">Subscribe to my newsletter for monthly updates on new projects, articles, and tech insights.</p>
        
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
      </div>
    </div>
  );
};

export default UpdatesPage;
