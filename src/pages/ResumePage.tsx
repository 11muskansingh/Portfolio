import PageHeading from "@/components/shared/PageHeading";
import { FileDown } from "lucide-react";

const ResumePage = () => {
  return (
    <div className="container max-w-5xl mx-auto py-12 px-4">
      <PageHeading title="My Resume" />

      {/* PDF Viewer - For all screens */}
      <div className="w-full relative pb-[141.4%] mb-12">
        <iframe
          src="/images/Muskan_Singh_s_Resume.pdf#view=Fit"
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: "none" }}
          title="Muskan Singh Resume"
        ></iframe>
      </div>

      {/* Download Resume Button */}
      <div className="text-center">
        <a
          href="/images/Muskan_Singh_s_Resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/80 transition-colors"
        >
          Download Resume (PDF)
          <FileDown className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default ResumePage;
