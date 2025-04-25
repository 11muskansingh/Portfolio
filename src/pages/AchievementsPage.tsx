
import PageHeading from "@/components/shared/PageHeading";
import { Trophy, Star, Bookmark, Calendar, ExternalLink } from "lucide-react";

const achievements = [
  {
    title: "Google Developer Expert",
    category: "Recognition",
    date: "2023",
    description: "Selected as a Google Developer Expert for Web Technologies, recognizing expertise and contributions to the developer community.",
    icon: "trophy"
  },
  {
    title: "Open Source Maintainer",
    category: "Community",
    date: "2022 - Present",
    description: "Maintaining React-DataViz, an open source data visualization library with over 5,000 stars on GitHub used by companies worldwide.",
    icon: "star"
  },
  {
    title: "International JavaScript Conference Speaker",
    category: "Speaking",
    date: "2023",
    description: "Delivered talks on Advanced React Patterns and Performance Optimization at JSConf and React Summit.",
    icon: "speaker"
  },
  {
    title: "Top Writer - Medium",
    category: "Writing",
    date: "2022",
    description: "Recognized as a top writer in Technology with articles reaching over 500,000 developers, focusing on web performance and architecture.",
    icon: "bookmark"
  }
];

const patents = [
  {
    title: "Method and System for Optimizing Cloud Resource Allocation",
    filed: "2021",
    issued: "2023",
    number: "US 12,345,678",
    description: "A novel approach to dynamically allocating cloud resources based on predictive usage patterns and machine learning."
  },
  {
    title: "Real-time Data Processing Pipeline Architecture",
    filed: "2020",
    issued: "2022",
    number: "US 23,456,789",
    description: "An efficient architecture for processing large volumes of data in real-time with minimal latency and high fault tolerance."
  }
];

const publications = [
  {
    title: "Advances in Distributed Frontend Architectures",
    publisher: "ACM Computing Surveys",
    date: "2023",
    link: "#"
  },
  {
    title: "Performance Optimization Techniques for React Applications",
    publisher: "IEEE Software Journal",
    date: "2022",
    link: "#"
  },
  {
    title: "Machine Learning Approaches to UI/UX Personalization",
    publisher: "International Journal of Human-Computer Interaction",
    date: "2021",
    link: "#"
  }
];

const AchievementsPage = () => {
  return (
    <div className="container max-w-5xl mx-auto py-12">
      <PageHeading preTitle="Recognition" title="Achievements & Awards" />
      
      {/* Major Achievements */}
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-border flex"
            >
              <div className="mr-4">
                {achievement.icon === "trophy" && (
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                    <Trophy className="w-6 h-6" />
                  </div>
                )}
                {achievement.icon === "star" && (
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                    <Star className="w-6 h-6" />
                  </div>
                )}
                {achievement.icon === "speaker" && (
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                    <svg 
                      className="w-6 h-6" 
                      fill="currentColor" 
                      viewBox="0 0 20 20" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                {achievement.icon === "bookmark" && (
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                    <Bookmark className="w-6 h-6" />
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2 flex-wrap">
                  <h3 className="font-bold">{achievement.title}</h3>
                  <span className="text-xs bg-secondary px-2 py-0.5 rounded">
                    {achievement.category}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-2">
                  {achievement.description}
                </p>
                
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3 mr-1" />
                  {achievement.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Patents */}
      <div className="mb-16">
        <h2 className="text-2xl font-tech text-primary mb-8 flex items-center border-b pb-2 border-border">
          Patents
        </h2>
        
        <div className="space-y-6">
          {patents.map((patent, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-6 shadow-md"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <h3 className="font-bold">{patent.title}</h3>
                <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                  Patent #{patent.number}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">
                {patent.description}
              </p>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex space-x-4">
                  <span className="text-muted-foreground">Filed: {patent.filed}</span>
                  <span className="text-muted-foreground">Issued: {patent.issued}</span>
                </div>
                
                <a 
                  href="#"
                  className="text-primary hover:underline inline-flex items-center"
                >
                  View patent <ExternalLink className="ml-1 w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Publications */}
      <div>
        <h2 className="text-2xl font-tech text-primary mb-8 flex items-center border-b pb-2 border-border">
          Publications
        </h2>
        
        <div className="bg-card rounded-lg p-6 shadow-md">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-muted-foreground">
                <th className="pb-3 font-medium">Title</th>
                <th className="pb-3 font-medium">Publisher</th>
                <th className="pb-3 font-medium">Year</th>
                <th className="pb-3 font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {publications.map((pub, index) => (
                <tr key={index}>
                  <td className="py-4 font-medium">{pub.title}</td>
                  <td className="py-4 text-muted-foreground">{pub.publisher}</td>
                  <td className="py-4 text-muted-foreground">{pub.date}</td>
                  <td className="py-4 text-right">
                    <a 
                      href={pub.link}
                      className="text-primary hover:underline inline-flex items-center"
                    >
                      Read <ExternalLink className="ml-1 w-3 h-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;
