
import PageHeading from "@/components/shared/PageHeading";
import { Calendar, MapPin, Building, ArrowRight, Award } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Google",
    location: "Mountain View, CA",
    period: "2020 - Present",
    description: "Leading the development of internal tools for data analysis and visualization, improving engineering productivity across multiple teams.",
    achievements: [
      "Architected and implemented a data visualization platform used by 200+ engineers",
      "Reduced build times by 40% through optimizing CI/CD pipelines",
      "Mentored junior engineers and conducted technical interviews"
    ],
    technologies: ["React", "TypeScript", "Go", "Kubernetes", "Google Cloud"]
  },
  {
    title: "Full Stack Developer",
    company: "Netflix",
    location: "Los Gatos, CA",
    period: "2017 - 2020",
    description: "Worked on the recommendation engine team to improve content personalization algorithms and user experience.",
    achievements: [
      "Improved recommendation algorithm accuracy by 15%",
      "Built A/B testing framework for recommendation features",
      "Reduced page load time by 30% through code optimization"
    ],
    technologies: ["Java", "Python", "React", "AWS", "Redis"]
  },
  {
    title: "Software Engineer",
    company: "Dropbox",
    location: "San Francisco, CA",
    period: "2015 - 2017",
    description: "Developed and maintained synchronization services for the core file sharing platform.",
    achievements: [
      "Implemented file version control features",
      "Optimized server-side file processing, reducing compute costs by 25%",
      "Contributed to open-source projects related to file synchronization"
    ],
    technologies: ["Python", "Django", "MySQL", "Redis", "AWS"]
  },
  {
    title: "Junior Developer",
    company: "Startup Hub",
    location: "San Francisco, CA",
    period: "2013 - 2015",
    description: "Full-stack development for various client projects across multiple industries.",
    achievements: [
      "Delivered 15+ web applications for clients in finance, healthcare, and e-commerce",
      "Implemented responsive designs and improved mobile user experiences",
      "Built custom CMS solutions for client content management"
    ],
    technologies: ["JavaScript", "PHP", "MySQL", "HTML/CSS", "jQuery"]
  }
];

const ExperiencePage = () => {
  return (
    <div className="container max-w-5xl mx-auto py-12">
      <PageHeading preTitle="Work History" title="Professional Experience" />
      
      {/* Work Experience Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-secondary transform -translate-x-1/2"></div>
        
        {/* Experience Items */}
        {experiences.map((exp, index) => (
          <div key={index} className={`mb-12 relative ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
            {/* Timeline dot */}
            <div className="absolute top-5 left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 z-10"></div>
            
            {/* Content card */}
            <div className={`bg-card rounded-lg shadow-md p-6 ml-10 md:ml-0 md:w-[calc(50%-24px)] ${index % 2 === 0 ? 'md:text-right md:mr-auto' : 'md:text-left'}`}>
              <div className="flex items-center mb-4 flex-wrap text-sm">
                <span className="bg-primary/20 text-primary px-3 py-0.5 rounded-full mb-2 mr-2">
                  {exp.title}
                </span>
                <div className="flex items-center mr-4 mb-2">
                  <Building className="w-4 h-4 mr-1" />
                  <span>{exp.company}</span>
                </div>
                <div className="flex items-center mb-2 mr-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{exp.location}</span>
                </div>
                <div className="flex items-center mb-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <p className={`mb-4 text-muted-foreground ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                {exp.description}
              </p>
              
              <div className={`mb-4 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <h3 className="font-medium mb-2 flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  Key Achievements:
                </h3>
                <ul className={`list-none space-y-2 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      {index % 2 === 1 && <ArrowRight className="w-4 h-4 mr-2 mt-1 text-primary flex-shrink-0" />}
                      <span>{achievement}</span>
                      {index % 2 === 0 && <ArrowRight className="w-4 h-4 ml-2 mt-1 text-primary hidden md:block flex-shrink-0" />}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                {exp.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-0.5 bg-secondary text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Downloadable Resume */}
      <div className="text-center mt-16">
        <p className="mb-4">Want to see my full resume?</p>
        <a 
          href="#"
          className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/80 transition-colors"
        >
          Download Resume (PDF)
          <svg 
            className="ml-2 w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ExperiencePage;
