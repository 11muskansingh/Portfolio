import PageHeading from "@/components/shared/PageHeading";
import {
  Guitar,
  Video,
  Pencil,
  LineChart,
  CircleHelp,
  Image,
  Code,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutPage = () => {
  const interests = [
    {
      icon: <Pencil className="h-8 w-8" />,
      title: "Drawing",
      description: "Sketching and creating art to express my creativity.",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Coding challenges",
      description:
        "Solving algorithmic problems to sharpen my programming skills.",
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Investing",
      description: "Learning the basics of stocks and personal finance.",
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "AI video editing",
      description: "Learning to use AI tools to enhance my videos.",
    },
  ];

  const testimonials = [
    {
      name: "Aarav Sharma",
      position: "Classmate at XYZ University",
      text: "Muskan is a highly motivated individual with exceptional problem-solving skills. Her ability to collaborate and contribute innovative ideas makes her a valuable team member.",
    },
    {
      name: "Ishita Patel",
      position: "Project Partner at XYZ University",
      text: "Working with Muskan on our projects has been a great experience. Her technical expertise and dedication to excellence are truly commendable.",
    },
    {
      name: "Rohan Gupta",
      position: "Lab Partner at XYZ University",
      text: "Muskan's attention to detail and her ability to simplify complex concepts have been instrumental in our academic success. She is a dependable and hardworking individual.",
    },
  ];

  return (
    <div className="container max-w-5xl mx-auto py-12">
      <PageHeading preTitle="Hello..." title="A little bit about me..." />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center mb-16">
        {/* Avatar */}
        <div className="flex justify-center">
          <img
            src="/images/avatar.png"
            alt="Muskan"
            className="w-48 h-48 object-cover rounded-lg shadow-md md:w-56 md:h-56"
          />
        </div>

        {/* About Info */}
        <div className="md:col-span-2 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <span className="bg-green-200 text-green-700 px-4 py-1 rounded-full text-sm font-semibold tracking-wide w-fit mx-auto md:mx-0">
              Full Stack Developer | AI & ML Enthusiast
            </span>
            <div className="flex flex-col items-center md:items-end text-gray-400 text-sm space-y-1">
              <div className="flex items-center gap-1">
                📍 <span>Uttar Pradesh, India</span>
              </div>
              <a
                href="mailto:spariharmuskan1106@gmail.com"
                className="hover:text-green-500 transition-colors"
              >
                spariharmuskan1106@gmail.com
              </a>
            </div>
          </div>

          <div className=" p-6 rounded-lg shadow-lg space-y-4 text-gray-300 text-justify">
            <p>
              I am a passionate MERN stack developer skilled in JavaScript,
              React, Node.js, and MongoDB, focused on building dynamic and
              scalable web applications.
            </p>
            <p>
              With over 800 problems solved on LeetCode, I have strengthened my
              problem-solving abilities, ensuring efficient solutions to complex
              challenges.
            </p>
            <p>
              I am also deeply enthusiastic about AI/ML, consistently expanding
              my knowledge and integrating intelligent models into applications
              to enhance functionality.
            </p>
            <p>I look forward to collaborating with you!</p>
          </div>
        </div>
      </div>

      {/* Client Testimonials Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-tech text-primary border-l-4 border-primary pl-4 mb-8">
          Client testimonials
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <blockquote className="text-foreground mb-6">
                  "{testimonial.text}"
                </blockquote>
                <div className="mt-4">
                  <h3 className="font-medium text-primary">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Personal Interests Section */}
      <div>
        <h2 className="text-2xl font-tech text-primary border-l-4 border-primary pl-4 mb-8">
          Personal interests
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {interests.map((interest, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  {interest.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{interest.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {interest.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
