import PageHeading from "@/components/shared/PageHeading";
import { GraduationCap, BookOpen, Award, Calendar } from "lucide-react";

const educations = [
  {
    degree: "Bachelor of Technology",
    institution: "Pranveer Singh Institute of Technology",
    location: "Kanpur, India",
    period: "2022 - 2026",
    description:
      "Computer Science and Engineering with a specialization in Artificial Intelligence.",
    achievements: [
      "Maintained a GPA of 9.03 till 5th semester",
      "Developed multiple academic projects involving machine learning and full-stack development",
      "Received faculty commendation for academic excellence and contributions to departmental initiatives",
      "Participated in hackathons and coding competitions, securing top positions",
    ],
  },
  {
    degree: "Intermediate",
    institution: "Guru Harrai Academy",
    location: "Kanpur, India",
    period: "2020 - 2022",
    // description:
    //   "Double major in Computer Science and Electrical Engineering with a minor in Mathematics.",
    achievements: [
      "Secured distinction in all core subjects",
      "Recognized for excellence in Mathematics by faculty",
      "Led peer study groups and assisted classmates with exam preparation",
      "Ranked among the top 5 students in the batch",
    ],
  },
];

const certifications = [
  {
    title: "Node.js Certification",
    issuer: "Scalable Path",
    date: "2024",
    credentialId: "AWS-ASA-12345",
    skills: ["Node.js", "JavaScript", "Backend Development"],
  },
  {
    title: "JavaScaript Certification",
    issuer: "Infosys Springboard",
    date: "2024",
    credentialId: "GCP-123-XYZ",
    skills: ["JavaScript", "Web Development"],
  },
  {
    title: "Java Basic Certification",
    issuer: "HackerRank",
    date: "2024",
    credentialId: "CKA-234567",
    skills: ["Java", "Programming", "Data Structures"],
  },
];

const courses = [
  "Data Structures and Algorithms",
  "Object-Oriented Programming",
  "Database Management Systems",
  "Operating Systems",
  "Machine Learning Fundamentals",
  "Artificial Intelligence Basics",
];

const EducationPage = () => {
  return (
    <div className="container max-w-5xl mx-auto py-12">
      <PageHeading
        preTitle="Learning Journey"
        title="Education & Certifications"
      />

      {/* Formal Education */}
      <div className="mb-16">
        <h2 className="text-2xl font-tech text-primary mb-8 flex items-center">
          <GraduationCap className="mr-2" />
          Formal Education
        </h2>

        <div className="space-y-12">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-secondary"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>

              <div className="bg-card rounded-lg p-6 shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <p className="text-muted-foreground">
                      {edu.institution}, {edu.location}
                    </p>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {edu.period}
                  </div>
                </div>

                <p className="mb-4">{edu.description}</p>

                <div>
                  <h4 className="font-medium mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-16">
        <h2 className="text-2xl font-tech text-primary mb-8 flex items-center">
          <Award className="mr-2" />
          Professional Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-border"
            >
              <div className="mb-4 pb-4 border-b border-border">
                <h3 className="text-lg font-bold">{cert.title}</h3>
                <p className="text-muted-foreground text-sm">{cert.issuer}</p>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Issued:</span>
                  <span>{cert.date}</span>
                </div>
                {/* <div className="flex justify-between">
                  <span className="text-muted-foreground">Expires:</span>
                  <span>{cert?.expires}</span>
                </div> */}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Credential ID:</span>
                  <span className="text-sm">{cert.credentialId}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <h4 className="text-sm font-medium mb-2">Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-secondary text-xs rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Courses */}
      <div>
        <h2 className="text-2xl font-tech text-primary mb-8 flex items-center">
          <BookOpen className="mr-2" />
          Additional Courses
        </h2>

        <div className="bg-card rounded-lg p-6 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courses.map((course, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                <span>{course}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
