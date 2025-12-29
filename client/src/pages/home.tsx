import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profilePic from "@assets/profile-pic.png";
import { useTheme } from "@/components/theme-provider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Download,
  MapPin,
  Calendar,
  GraduationCap,
  Award,
  Code,
  Cloud,
  Server,
  Terminal,
  Container,
  GitBranch,
  Database,
  Shield,
  Network,
  Cpu,
  Box,
  Layers,
  ChevronRight,
  Sun,
  Moon,
  User,
  Send
} from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDownloadResume = () => {
    window.open("/api/download-resume", "_blank");
  };

  const onSubmit = (data: ContactFormData) => {
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon."
    });
    form.reset();
  };

  const skills = {
    "Cloud & Infrastructure": [
      { name: "AWS", icon: Cloud },
      { name: "EC2", icon: Server },
      { name: "S3", icon: Database },
      { name: "Lambda", icon: Code },
      { name: "IAM", icon: Shield },
      { name: "ELB", icon: Network }
    ],
    "DevOps Tools": [
      { name: "Kubernetes", icon: Layers },
      { name: "Docker", icon: Container },
      { name: "Helm", icon: Box },
      { name: "ArgoCD", icon: GitBranch },
      { name: "GitLab CI", icon: GitBranch },
      { name: "Jenkins", icon: GitBranch },
      { name: "N8N", icon: Network },
      { name: "Terraform", icon: Terminal }
    ],
    "Operating Systems": [
      { name: "Linux", icon: Terminal },
      { name: "RHEL", icon: Server },
      { name: "VMware", icon: Box }
    ],
    "Development": [
      { name: "Node.js", icon: Code },
      { name: "REST APIs", icon: Network },
      { name: "MongoDB", icon: Database },
      { name: "HTML/CSS", icon: Code }
    ]
  };

  const experiences = [
    {
      company: "Skillmine Technology Consulting Pvt Ltd",
      role: "DevOps Engineer",
      duration: "Jan 2025 – Present",
      location: "Bengaluru",
      highlights: [
        "Designed a ChatOps-based self-service platform enabling developers to perform Kubernetes and VPS operations through Microsoft Teams.",
        "Built GitOps-based scaling workflows using GitLab + ArgoCD enabling automatic syncing, drift correction, and auditability.",
        "Automated infrastructure operations using N8N workflows (StatefulSet restarts, PVC checks, VPS tasks), reducing operational toil by 40%.",
        "Developed secure Node.js (Restify) middleware for K8s API + GitLab CI interactions.",
        "Improved incident response with proactive health checks and webhook alerts reducing MTTR.",
        "Unified management of Kubernetes and VPS workloads via conversational automation."
      ]
    },
    {
      company: "Be-Practical Tech Solutions",
      role: "DevOps Intern",
      duration: "Aug 2024 – Present",
      location: "Bengaluru",
      highlights: [
        "Learnt DevOps lifecycle, CI/CD, Git, Jenkins, Containerization.",
        "Built Jenkins pipelines and multi-container Docker applications using Docker Compose.",
        "Gained foundational skills in Kubernetes and Terraform."
      ]
    },
    {
      company: "Be-Practical Tech Solutions",
      role: "AWS Intern",
      duration: "Jun 2024 – July 2024",
      location: "Bengaluru",
      highlights: [
        "Hands-on experience with EC2, S3, IAM, ELB, Lambda, SES.",
        "Hosted static websites on S3 and deployed EC2 instances."
      ]
    },
    {
      company: "Be-Practical Tech Solutions",
      role: "Linux and Networking Intern",
      duration: "May 2024",
      location: "Bengaluru",
      highlights: [
        "Hands-on with Linux (RHEL), FTP, NFS, SAMBA.",
        "Learnt about Linux fundamentals and file sharing services."
      ]
    }
  ];

  const projects = [
    {
      title: "Intelligent DevOps ChatOps Platform (DevOps Genie)",
      duration: "Jan 2025 – Present",
      description: "A ChatOps-based self-service platform enabling developers to perform Kubernetes and VPS operations through Microsoft Teams. It unifies infrastructure management and automates complex workflows.",
      technologies: ["Kubernetes", "ArgoCD", "GitLab CI", "N8N", "Node.js", "MongoDB", "Microsoft Teams Bot"],
      highlights: [
        "Automated scaling using GitOps + ArgoCD with audit trails.",
        "Implemented N8N workflow automations for K8s & VPS tasks.",
        "Developed Node.js middleware for secure Kubernetes & GitLab CI interactions.",
        "Reduced operational toil by 40% through conversational automation."
      ]
    },
    {
      title: "Smart Bridge",
      duration: "Jan 2024 – May 2024",
      description: "A smart bridge leverages advanced technologies to monitor and maintain the structural health, safety, and functionality of bridges. Integrating sensors, communication networks, and data analytics.",
      technologies: ["IoT", "Sensors", "Data Analytics", "Monitoring Systems"],
      highlights: [
        "Smart bridge can provide real-time information and predictive maintenance, enhancing the overall lifespan and reliability of the structure"
      ]
    },
    {
      title: "Energy Conservation Gadget Using Heat Source",
      duration: "Jan 2023 – May 2023",
      description: "Creating an energy conservation gadget using a heat source involves harnessing thermal energy and converting it into another form of energy, typically electrical energy.",
      technologies: ["Thermoelectric Generators", "Energy Conversion", "Electronics"],
      highlights: [
        "Designed thermal-to-electrical energy conversion system using TEGs"
      ]
    }
  ];

  const certifications = [
    {
      name: "Cloud Computing and DevOps, Linux OS",
      platform: "Be-Practical Tech Solutions",
      date: "Present"
    },
    {
      name: "IP Addressing and Subnetting",
      platform: "Udemy",
      date: "Sep 2024"
    },
    {
      name: "Fundamentals Of Network Security",
      platform: "Udemy",
      date: "Sep 2024"
    }
  ];

  const education = [
    {
      degree: "B.E (Electronics and Communication Engineering)",
      institution: "Vidya Vikas Institute of Engineering and Technology, Mysuru",
      duration: "2020 – 2024",
      score: "CGPA: 7.45"
    },
    {
      degree: "Secondary Education (PCMB)",
      institution: "Sri Vidyaniketan Pre-University College",
      duration: "2018 – 2020",
      score: "SCORE: 89.11%"
    },
    {
      degree: "Grade X",
      institution: "B.E.H.S, Gangavathi, Karnataka",
      duration: "2018",
      score: "SCORE: 79.6%"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-bold text-xl font-mono text-primary"
            >
              S SANJAY
            </motion.div>

            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm hover-elevate px-3 py-2 rounded-md transition-colors"
                data-testid="link-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-sm hover-elevate px-3 py-2 rounded-md transition-colors"
                data-testid="link-skills"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-sm hover-elevate px-3 py-2 rounded-md transition-colors"
                data-testid="link-experience"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm hover-elevate px-3 py-2 rounded-md transition-colors"
                data-testid="link-projects"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="text-sm hover-elevate px-3 py-2 rounded-md transition-colors"
                data-testid="link-education"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm hover-elevate px-3 py-2 rounded-md transition-colors"
                data-testid="link-contact"
              >
                Contact
              </button>
            </div>

            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
              className="hover-elevate"
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative max-w-4xl mx-auto text-center z-10"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
              <Cpu className="w-4 h-4 mr-2" />
              Cloud & DevOps Engineer
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
          >
            S SANJAY
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl text-muted-foreground mb-4"
          >
            Junior Cloud & DevOps Engineer
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Dedicated, Love to lead, Eager to learn
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-base text-muted-foreground/80 mb-12 max-w-3xl mx-auto italic"
          >
            "Being ambitious and hardworking, I am looking for a role, where I can apply my technical skills to accomplish the organizational goals as well as enhance my technical skills by learning new things."
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              data-testid="button-view-projects"
              className="gap-2"
            >
              View Projects
              <ChevronRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleDownloadResume}
              data-testid="button-download-resume"
              className="gap-2 backdrop-blur-sm"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="mailto:sanjayshetty7842@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors hover-elevate px-3 py-2 rounded-md"
              data-testid="link-email"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">sanjayshetty7842@gmail.com</span>
            </a>
            <a
              href="tel:+919353527842"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors hover-elevate px-3 py-2 rounded-md"
              data-testid="link-phone"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm">+91 9353527842</span>
            </a>
            <a
              href="https://www.linkedin.com/in/s-sanjay-s/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors hover-elevate px-3 py-2 rounded-md"
              data-testid="link-linkedin"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="https://github.com/sanjaysanju02"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors hover-elevate px-3 py-2 rounded-md"
              data-testid="link-github"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section - Two Column Layout with Avatar */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold mb-12 text-center"
            >
              About Me
            </motion.h2>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-12 mb-12 items-center">
              {/* Left: Profile Image/Avatar */}
              <motion.div variants={fadeInUp} className="flex justify-center">
                <div className="relative">
                  <Avatar className="w-64 h-64 border-4 border-primary/20" data-testid="avatar-profile">
                    <AvatarImage src={profilePic} alt="S Sanjay" className="object-cover" />
                    <AvatarFallback className="text-6xl font-bold bg-gradient-to-br from-primary to-primary/60 text-primary-foreground">
                      SS
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg" data-testid="badge-experience-overlay">
                    <p className="font-bold text-sm" data-testid="text-experience-years">1+ Year</p>
                    <p className="text-xs" data-testid="text-experience-label">Experience</p>
                  </div>
                </div>
              </motion.div>

              {/* Right: Career Objective and Info */}
              <motion.div variants={fadeInUp} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Career Objective</h3>
                  <p className="text-muted-foreground text-lg italic leading-relaxed border-l-4 border-primary pl-4" data-testid="text-career-objective">
                    "Being ambitious and hardworking, I am looking for a role, where I can apply my technical skills to accomplish the organizational goals as well as enhance my technical skills by learning new things."
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span data-testid="text-dob">DOB: 30-09-2002</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span data-testid="text-location">J C Nagar, Bangalore - 560006</span>
                    </div>
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <User className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">Languages</p>
                        <p data-testid="text-languages">English, Kannada, Hindi, Telugu</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <motion.div variants={fadeInUp}>
                <Card className="text-center h-full hover-elevate" data-testid="card-stat-experience">
                  <CardHeader>
                    <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <CardTitle data-testid="text-stat-experience-value">1+ Year</CardTitle>
                    <CardDescription data-testid="text-stat-experience-label">Professional Experience</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="text-center h-full hover-elevate" data-testid="card-stat-projects">
                  <CardHeader>
                    <Code className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <CardTitle data-testid="text-stat-projects-value">2 Projects</CardTitle>
                    <CardDescription data-testid="text-stat-projects-label">Completed Successfully</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="text-center h-full hover-elevate" data-testid="card-stat-certifications">
                  <CardHeader>
                    <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <CardTitle data-testid="text-stat-certifications-value">3 Certifications</CardTitle>
                    <CardDescription data-testid="text-stat-certifications-label">Cloud & DevOps</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            </div>

            {/* Strengths */}
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Strengths & Core Competencies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Problem Solving</Badge>
                    <Badge variant="secondary">Cloud Computing</Badge>
                    <Badge variant="secondary">Linux OS</Badge>
                    <Badge variant="secondary">Networking</Badge>
                    <Badge variant="secondary">HTML</Badge>
                    <Badge variant="secondary">CSS</Badge>
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">DevOps</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold mb-12 text-center"
            >
              Technical Skills
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <motion.div key={category} variants={fadeInUp}>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-xl">{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {items.map((skill) => (
                          <div
                            key={skill.name}
                            className="flex flex-col items-center gap-2 p-4 rounded-lg bg-accent/50 hover-elevate"
                            data-testid={`skill-${skill.name.toLowerCase()}`}
                          >
                            <skill.icon className="w-8 h-8 text-primary" />
                            <span className="text-sm font-medium text-center">{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section - With Timeline Connector */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold mb-12 text-center"
            >
              Professional Experience
            </motion.h2>

            <div className="relative">
              {/* Timeline Connector Line - Centered */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 hidden lg:block -translate-x-1/2" />

              <div className="space-y-8">
                {experiences.map((exp, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="relative"
                      data-testid={`experience-${index}`}
                    >
                      {/* Timeline Dot - Centered */}
                      <div className="absolute left-1/2 top-8 w-5 h-5 rounded-full bg-primary border-4 border-background hidden lg:block -translate-x-1/2 z-10" />

                      {/* Alternating Layout on Desktop */}
                      <div className="lg:grid lg:grid-cols-2 lg:gap-12">
                        {/* Left Column */}
                        <div className={`${isEven ? 'lg:pr-8' : ''}`}>
                          {isEven && (
                            <Card className="hover-elevate" data-testid={`card-experience-${exp.company.toLowerCase().replace(/\s+/g, '-')}`}>
                              <CardHeader>
                                <div className="flex flex-col gap-4">
                                  <div>
                                    <CardTitle className="text-xl mb-2" data-testid={`text-role-${index}`}>{exp.role}</CardTitle>
                                    <CardDescription className="text-base font-semibold text-foreground" data-testid={`text-company-${index}`}>
                                      {exp.company}
                                    </CardDescription>
                                  </div>
                                  <div className="flex flex-wrap gap-2">
                                    <Badge variant="outline" className="gap-1" data-testid={`badge-duration-${index}`}>
                                      <Calendar className="w-3 h-3" />
                                      {exp.duration}
                                    </Badge>
                                    <Badge variant="outline" className="gap-1" data-testid={`badge-location-${index}`}>
                                      <MapPin className="w-3 h-3" />
                                      {exp.location}
                                    </Badge>
                                  </div>
                                </div>
                              </CardHeader>
                              <CardContent>
                                <ul className="space-y-2">
                                  {exp.highlights.map((highlight, i) => (
                                    <li key={i} className="flex gap-2 text-muted-foreground" data-testid={`text-highlight-${index}-${i}`}>
                                      <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                                      <span>{highlight}</span>
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          )}
                        </div>

                        {/* Right Column */}
                        <div className={`${!isEven ? 'lg:pl-8' : ''}`}>
                          {!isEven && (
                            <Card className="hover-elevate" data-testid={`card-experience-${exp.company.toLowerCase().replace(/\s+/g, '-')}`}>
                              <CardHeader>
                                <div className="flex flex-col gap-4">
                                  <div>
                                    <CardTitle className="text-xl mb-2" data-testid={`text-role-${index}`}>{exp.role}</CardTitle>
                                    <CardDescription className="text-base font-semibold text-foreground" data-testid={`text-company-${index}`}>
                                      {exp.company}
                                    </CardDescription>
                                  </div>
                                  <div className="flex flex-wrap gap-2">
                                    <Badge variant="outline" className="gap-1" data-testid={`badge-duration-${index}`}>
                                      <Calendar className="w-3 h-3" />
                                      {exp.duration}
                                    </Badge>
                                    <Badge variant="outline" className="gap-1" data-testid={`badge-location-${index}`}>
                                      <MapPin className="w-3 h-3" />
                                      {exp.location}
                                    </Badge>
                                  </div>
                                </div>
                              </CardHeader>
                              <CardContent>
                                <ul className="space-y-2">
                                  {exp.highlights.map((highlight, i) => (
                                    <li key={i} className="flex gap-2 text-muted-foreground" data-testid={`text-highlight-${index}-${i}`}>
                                      <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                                      <span>{highlight}</span>
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section - With Visual Placeholders */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold mb-12 text-center"
            >
              Featured Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full hover-elevate overflow-hidden" data-testid={`card-project-${index}`}>
                    {/* Visual Placeholder with Gradient */}
                    <div className="h-48 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 flex items-center justify-center" data-testid={`img-project-placeholder-${index}`}>
                      <div className="text-center">
                        <Code className="w-16 h-16 mx-auto mb-2 text-primary/40" />
                        <p className="text-sm text-muted-foreground font-mono">Project Visualization</p>
                      </div>
                    </div>

                    <CardHeader>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <CardTitle className="text-xl" data-testid={`text-project-title-${index}`}>{project.title}</CardTitle>
                        <Badge variant="outline" className="shrink-0 text-xs" data-testid={`badge-project-duration-${index}`}>
                          {project.duration}
                        </Badge>
                      </div>
                      <CardDescription data-testid={`text-project-description-${index}`}>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold mb-2">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge key={tech} variant="secondary" className="text-xs" data-testid={`badge-tech-${index}-${techIndex}`}>
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold mb-2">Key Highlights</h4>
                          <ul className="space-y-1">
                            {project.highlights.map((highlight, i) => (
                              <li key={i} className="flex gap-2 text-sm text-muted-foreground" data-testid={`text-project-highlight-${index}-${i}`}>
                                <ChevronRight className="w-4 h-4 flex-shrink-0 text-primary" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold mb-12 text-center"
            >
              Education
            </motion.h2>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="hover-elevate" data-testid={`card-education-${index}`}>
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div>
                          <CardTitle className="text-lg mb-2" data-testid={`text-degree-${index}`}>{edu.degree}</CardTitle>
                          <CardDescription data-testid={`text-institution-${index}`}>{edu.institution}</CardDescription>
                        </div>
                        <div className="flex flex-col items-start sm:items-end gap-2">
                          <Badge variant="outline" data-testid={`badge-education-duration-${index}`}>
                            <GraduationCap className="w-3 h-3 mr-1" />
                            {edu.duration}
                          </Badge>
                          <Badge variant="secondary" data-testid={`badge-education-score-${index}`}>{edu.score}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Separator className="my-12" />

            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Certifications & Training
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="hover-elevate" data-testid={`card-certification-${index}`}>
                    <CardHeader>
                      <Award className="w-10 h-10 mb-3 text-primary" />
                      <CardTitle className="text-base" data-testid={`text-cert-name-${index}`}>{cert.name}</CardTitle>
                      <CardDescription className="text-sm" data-testid={`text-cert-platform-${index}`}>
                        {cert.platform}
                      </CardDescription>
                      <Badge variant="outline" className="w-fit mt-2" data-testid={`badge-cert-date-${index}`}>
                        {cert.date}
                      </Badge>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Two Column with Form */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold mb-6"
            >
              Get In Touch
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              I'm currently looking for new opportunities and would love to hear from you. Whether you have a question or just want to say hi, feel free to reach out!
            </motion.p>
          </motion.div>

          {/* Two Column Layout: Form on Left, Contact Details on Right */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Contact Form */}
            <motion.div variants={fadeInUp}>
              <Card className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              data-testid="input-contact-name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your.email@example.com"
                              data-testid="input-contact-email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message..."
                              className="min-h-32 resize-none"
                              data-testid="textarea-contact-message"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full gap-2"
                      data-testid="button-send-message"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </Button>
                  </form>
                </Form>
              </Card>
            </motion.div>

            {/* Right: Contact Details */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <Card className="p-6 hover-elevate">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:sanjayshetty7842@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="contact-email"
                    >
                      sanjayshetty7842@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover-elevate">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a
                      href="tel:+919353527842"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="contact-phone"
                    >
                      +91 9353527842
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover-elevate">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">J C Nagar, Bangalore - 560006</p>
                  </div>
                </div>
              </Card>

              <Separator />

              <div>
                <h3 className="font-semibold mb-4 text-center">Connect on Social</h3>
                <div className="flex justify-center gap-4">
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="gap-2"
                  >
                    <a
                      href="https://www.linkedin.com/in/s-sanjay-s/"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="contact-linkedin"
                    >
                      <Linkedin className="w-5 h-5" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="gap-2"
                  >
                    <a
                      href="https://github.com/sanjaysanju02"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="contact-github"
                    >
                      <Github className="w-5 h-5" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} S Sanjay. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Built with passion for Cloud & DevOps
          </p>
        </div>
      </footer>
    </div>
  );
}
