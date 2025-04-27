import { useState } from "react";
import PageHeading from "@/components/shared/PageHeading";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = {
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY, // Access the key from the environment variable
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast({
          title: "Message failed to send.",
          description: "Please try again later.",
        });
      }
    } catch (error) {
      toast({
        title: "An error occurred.",
        description: "Please check your internet connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "spariharmuskan1106@gmail.com",
      link: "mailto:spariharmuskan1106@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+916392564972",
      link: "tel:+916392564972",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kanpur Nagar, Uttar Pradesh, India",
      link: "https://www.google.co.in/maps/place/Kanpur,+Uttar+Pradesh/",
    },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", link: "https://github.com/11muskansingh" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/muskan-singh-140137261/",
    },
    {
      icon: () => (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
          alt="LeetCode"
          className="w-5 h-5"
        />
      ),
      label: "LeetCode",
      link: "https://leetcode.com/u/Muskan_parihar/",
    },
    {
      icon: Instagram,
      label: "Instagram",
      link: "https://www.instagram.com/muskan.parihar_/",
    },
  ];

  return (
    <div className="container max-w-5xl mx-auto py-12">
      <PageHeading
        preTitle="Get in Touch"
        title="Contact Me"
        subtitle="Have a question or want to work together? Feel free to reach out!"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Contact Info */}
        <div className="md:col-span-1 space-y-8">
          <div className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-tech text-primary mb-6">
              Contact Information
            </h2>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-start hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="mt-1">
                    <item.icon className="w-5 h-5 mr-3" />
                  </div>
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-tech text-primary mb-6">
              Connect with Me
            </h2>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="w-10 h-10 bg-secondary flex items-center justify-center rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-tech text-primary mb-4">
              Availability
            </h2>
            <p className="text-muted-foreground mb-2">
              Currently available for Internship opportunities.
            </p>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm">Available for new projects</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <div className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-tech text-primary mb-6">
              Send Me a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full md:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Map or Office Hours */}
      {/* <div className="mt-12 bg-card rounded-lg p-6 shadow-md">
        <h2 className="text-xl font-tech text-primary mb-6 text-center">
          Office Hours
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="font-medium">Monday - Friday</p>
            <p className="text-muted-foreground">9:00 AM - 5:00 PM</p>
          </div>
          <div>
            <p className="font-medium">Saturday</p>
            <p className="text-muted-foreground">By Appointment</p>
          </div>
          <div>
            <p className="font-medium">Sunday</p>
            <p className="text-muted-foreground">Closed</p>
          </div>
          <div>
            <p className="font-medium">Time Zone</p>
            <p className="text-muted-foreground">Pacific (PST/PDT)</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ContactPage;
