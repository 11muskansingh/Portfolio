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

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="col-span-1">
          <img
            src="/lovable-uploads/cae73c1c-640c-4324-b445-8079f4895dfa.png"
            alt="Muskan"
            className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="col-span-2 space-y-4">
          <div className="bg-card rounded-lg p-6 shadow">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-primary/20 text-primary px-3 py-0.5 rounded-full text-sm">
                Full Stack Developer | AI & ML Enthusiast
              </span>
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="inline-block w-4 h-4 mr-1">📍</span> Uttar
                Pradesh, India
              </div>
              <a
                href="mailto:spariharmuskan1106@gmail.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                spariharmuskan1106@gmail.com
              </a>
            </div>

            <p className="mb-4">
              I am a dedicated MERN stack developer with a strong command over
              JavaScript, React, Node.js, and MongoDB, building dynamic,
              responsive, and scalable web applications.
            </p>
            <p className="mb-4">
              With over 800 problems solved on LeetCode, I have honed my
              algorithmic and problem-solving skills, ensuring optimal solutions
              for complex challenges..
            </p>
            <p className="mb-4">
              In addition to my development expertise, I am deeply passionate
              about AI/ML, constantly expanding my knowledge and working on
              integrating machine learning models to enhance the functionality
              and intelligence of my applications.
            </p>
            <p className="mb-4">
              This diverse background gives me the flexibility to adapt to a
              wider range of project needs.
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
