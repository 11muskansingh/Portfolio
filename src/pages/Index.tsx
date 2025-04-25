import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center -mt-16">
      <div className="text-center space-y-6 max-w-3xl animate-fade-in">
        <p className="text-primary font-tech tracking-wider">Hello World...</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-tech">
          I'm <span className="text-primary">Muskan Singh</span>
        </h1>
        <div className="flex items-center justify-center h-8">
          <p className="text-xl font-medium">
            Web Developer <span className="animate-blink">|</span>
          </p>
        </div>
        <p className="text-lg opacity-80 mt-6 px-4">
          I specialize in crafting dynamic, high-performance web applications
          that blend cutting-edge technologies with intuitive user experiences.
          With a keen eye for clean, modular code, I seamlessly integrate
          AI-driven solutions, cloud infrastructures, and robust backend
          architectures to build scalable, future-ready applications.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button asChild size="lg" className="font-tech">
            <Link to="/about">
              Get to know me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-tech">
            <Link to="/portfolio">View my work</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
