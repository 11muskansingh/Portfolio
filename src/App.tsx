import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAppSelector } from "./hooks/use-app-selector";

// Import pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import EducationPage from "./pages/EducationPage";
import ExperiencePage from "./pages/ResumePage";
import PortfolioPage from "./pages/PortfolioPage";
import AchievementsPage from "./pages/AchievementsPage";
import UpdatesPage from "./pages/UpdatesPage";
import ContactPage from "./pages/ContactPage";

// Import layout components
import Layout from "./components/layout/Layout";
import ResumePage from "./pages/ResumePage";

const queryClient = new QueryClient();

const AppContent = () => {
  const { mode } = useAppSelector((state) => state.theme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
    document.documentElement.classList.toggle("light", mode === "light");
  }, [mode]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="education" element={<EducationPage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="achievements" element={<AchievementsPage />} />
          <Route path="updates" element={<UpdatesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AppContent />
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
