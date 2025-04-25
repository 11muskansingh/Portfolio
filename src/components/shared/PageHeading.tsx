
import { cn } from "@/lib/utils";

interface PageHeadingProps {
  preTitle?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

const PageHeading = ({ preTitle, title, subtitle, className }: PageHeadingProps) => {
  return (
    <div className={cn("text-center mb-12", className)}>
      {preTitle && (
        <p className="text-sm md:text-base opacity-70 mb-1">
          <span className="text-primary">{preTitle}</span>
        </p>
      )}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-tech">
        {title.split(' ').map((word, i) => (
          <span key={i}>
            {i > 0 && ' '}
            {i === 1 ? <span className="text-primary">{word}</span> : word}
          </span>
        ))}
      </h1>
      {subtitle && <p className="text-lg mt-3 opacity-80 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default PageHeading;
