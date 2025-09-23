import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Download,
  ExternalLink,
  Award,
  Users,
  Clock,
  Target,
  Lightbulb,
  Heart,
  Code,
  Palette,
  BookOpen,
  Coffee,
  Building2,
  Briefcase,
  GraduationCap,
  Star,
  Zap,
  TrendingUp,
  Globe,
  Layers,
  Rocket,
  Crown,
  Settings,
  Monitor,
  Smartphone,
  Figma,
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { downloadResume } from "@/utils/resume";
import { useState } from "react";

// It's highly recommended to use a library like React Helmet to manage page titles and meta descriptions for SEO.
// Example:
// <Helmet>
//   <title>About Me | Vickash Shivan | Product Designer</title>
//   <meta name="description" content="Learn more about Vickash Shivan, a passionate product designer with a journey from chemistry to creating human-centered digital experiences." />
// </Helmet>

export default function About() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleResumeDownload = async () => {
    setIsDownloading(true);
    await downloadResume();
    setTimeout(() => setIsDownloading(false), 1000);
  };

  const skills = {
    Design: ["UI/UX Design", "Prototyping", "Wireframing", "Design Systems"],
    Research: ["User Research", "Usability Testing"],
    Tools: ["Figma", "Adobe Creative Suite"],
    Development: ["HTML/CSS", "React"],
  };

  const values = [
    {
      icon: Users,
      title: "User-Centricity",
      description:
        "I believe that the best design solves real problems for real people. Every decision I make is guided by a deep understanding of the end user.",
    },
    {
      icon: Lightbulb,
      title: "Creative Innovation",
      description:
        "I constantly push the boundaries of what's possible, exploring new ideas and technologies to create unique and memorable experiences.",
    },
    {
      icon: Target,
      title: "Impact-Driven",
      description:
        "I focus on delivering measurable results and achieving business goals, all while maintaining an exceptional user experience.",
    },
    {
      icon: Heart,
      title: "Passion for the Craft",
      description:
        "I am a lifelong learner with a meticulous attention to detail. I pour my heart into every pixel, interaction, and user journey.",
    },
  ];

  const careerJourney = [
    {
      id: "current-lead",
      year: "2024",
      period: "Aug 2024 - Present",
      title: "UI/UX Lead",
      company: "Growify Digital Technology",
      location: "Erode",
      type: "work",
      icon: Crown,
      description:
        "Leading the UI/UX team to deliver high-quality digital solutions. My role involves mentoring designers, defining design strategy, and ensuring our work exceeds client expectations.",
      achievements: [
        "Led the design of over 20 websites and web applications for a diverse range of clients.",
        "Successfully recruited and trained a team of designers and developers, improving our delivery capacity.",
      ],
    },
    {
      id: "freelance-senior",
      year: "2024",
      period: "May 2024 - Present",
      title: "Senior UI/UX Designer",
      company: "DC Innovision",
      location: "Tamil Nadu",
      type: "work",
      icon: Rocket,
      description:
        "As a design consultant, I provide expert strategy and guidance on innovative digital products. I specialize in creating comprehensive design systems and conducting in-depth user research.",
      achievements: [
        "Directed the UX strategy and design systems for more than 5 web applications.",
        "Conducted usability tests that led to a 30% improvement in task flow efficiency.",
      ],
    },
    {
      id: "spartans-designer",
      year: "2024",
      period: "Jan 2024 - Jun 2024",
      title: "UI/UX Designer",
      company: "Internet Spartans",
      location: "Coimbatore",
      type: "work",
      icon: Layers,
      description:
        "I contributed to the design strategy and implementation of various digital products, focusing on user-centered design solutions and optimizing the user experience through research.",
      achievements: [
        "Played a key role in the UX strategy for several web applications.",
        "My user research and design suggestions contributed to a significant increase in user satisfaction.",
      ],
    },
    {
      id: "developer-role",
      year: "2023",
      period: "Feb 2023 - Jan 2024",
      title: "UI Developer",
      company: "Zeeoboobaa Technologies",
      location: "Erode",
      type: "work",
      icon: Monitor,
      description:
        "I specialized in developing responsive and performant user interfaces for fintech applications, using modern web technologies to create seamless user experiences.",
      achievements: [
        "Developed responsive UIs for multiple fintech products using HTML, CSS, JavaScript, and Bootstrap.",
        "Improved application load times by 40% through performance optimization techniques.",
      ],
    },
    {
      id: "design-education",
      year: "2023",
      period: "Feb 2023",
      title: "UX/UI Design & Visual Communication",
      company: "Buff Creative College",
      location: "Online",
      type: "education",
      icon: Figma,
      description:
        "This comprehensive program provided me with a strong foundation in modern design principles, user research methodologies, and industry-standard design tools.",
      achievements: [
        "Completed an advanced curriculum in UX/UI design.",
        "Mastered a range of industry-standard design tools and methodologies.",
      ],
    },
    {
      id: "chemistry-degree",
      year: "2018",
      period: "Apr 2018",
      title: "B.Sc. Chemistry",
      company: "Sengunthar Arts & Science College",
      location: "Tiruchengode",
      type: "education",
      icon: GraduationCap,
      description:
        "My degree in Chemistry gave me a strong foundation in analytical thinking and problem-solving, skills that I now apply to my design process.",
      achievements: [
        "Developed strong analytical and problem-solving skills.",
        "Built a foundation for a systematic and methodical approach to design research.",
      ],
    },
  ];

  const interests = [
    { icon: Code, name: "Frontend Development" },
    { icon: BookOpen, name: "Reading about Psychology" },
    { icon: Palette, name: "Digital Illustration" },
    { icon: Coffee, name: "Exploring new Coffee Shops" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-background to-primary-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <Badge
                variant="outline"
                className="mb-4 text-primary border-primary/20 bg-primary/5"
              >
                <Users className="w-4 h-4 mr-2" />
                My Story
              </Badge>

              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                From Chemistry to Human-Centered{" "}
                <span className="text-primary">Design</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm a designer with a unique journey. My background in science
                taught me to be a curious and analytical thinker, skills I now
                use to create intuitive and impactful digital experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
                  asChild
                >
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://www.linkedin.com/in/vickash-shivan-415139267/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 w-4 h-4" />
                    LinkedIn Profile
                  </a>
                </Button>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="w-full max-w-md mx-auto">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F0c313c2d09f34b648b6967b58f4f7809%2F295d4c0c397a46ab894b3a291cd53fa3"
                    alt="A professional and friendly portrait of Vickash Shivan, product designer."
                    className="w-full rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <Palette className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              My <span className="text-primary">Design Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My path to design has been unconventional, but it's given me a
              unique perspective and a passion for creating truly human-centered
              products.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <Card className="p-8 mb-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4">
                  The Spark of Curiosity
                </h3>
                <p className="text-muted-foreground mb-4">
                  My journey into the world of design began with a simple
                  question that I couldn't shake: why are so many digital
                  products so frustrating to use? This question sparked a
                  curiosity that led me down a rabbit hole of articles, books,
                  and online courses about user experience. I was fascinated by
                  the intersection of psychology, technology, and creativity.
                </p>
                <p className="text-muted-foreground">
                  I started by redesigning the apps I used every day, just for
                  fun. With each project, I learned something new about user
                  behavior, visual hierarchy, and the power of iteration. I was
                  hooked.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 mb-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4">
                  Finding My Design Voice
                </h3>
                <p className="text-muted-foreground mb-4">
                  As I honed my skills, I began to develop my own design
                  philosophy: <strong>simplicity with purpose</strong>. I
                  believe that the best designs are almost invisible. They
                  empower users to achieve their goals effortlessly, without
                  ever having to think about the interface.
                </p>
                <p className="text-muted-foreground">
                  This philosophy is at the heart of every project I take on. I
                  start by diving deep into user research, seeking to understand
                  not just *what* users do, but *why* they do it. This
                  empathy-driven approach allows me to create solutions that are
                  not only beautiful but also truly useful.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4">
                  Looking to the Future
                </h3>
                <p className="text-muted-foreground">
                  Today, I'm passionate about using my skills to create designs
                  that make a tangible difference in people's lives. Whether
                  it's streamlining a complex workflow, making an app more
                  accessible, or helping a business connect with its customers
                  on a deeper level, I approach every challenge with curiosity,
                  empathy, and an unwavering commitment to excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              My Skills & <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I have a comprehensive skillset that covers the entire design
              process, from initial research and strategy to final
              implementation and testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillsList]) => (
              <Card key={category} className="p-6 animate-scale-in">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-lg mb-4">{category}</h3>
                  <ul className="space-y-2">
                    {skillsList.map((skill) => (
                      <li key={skill} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              My Design <span className="text-primary">Philosophy</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These are the core principles that guide my approach to every
              design challenge I take on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="p-8 hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mb-6">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Journey Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 via-primary-50/30 to-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              My Career <span className="text-primary">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From analytical chemistry to design leadership, every step of my
              journey has shaped my unique perspective and approach to design.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-border rounded-full"></div>
            {careerJourney.map((item, index) => (
              <div
                key={item.id}
                className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} mb-8`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <Card className="p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mr-4`}
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.company}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.period}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-xs">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Beyond the <span className="text-primary">Pixels</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              When I'm not designing, you can find me exploring new
              technologies, getting lost in a good book, or searching for the
              perfect cup of coffee.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {interests.map((interest, index) => (
                <div
                  key={interest.name}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <interest.icon className="w-8 h-8 text-primary" />
                  </div>
                  <p className="font-medium">{interest.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-background to-primary-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Let's Create Something{" "}
              <span className="text-primary">Amazing</span> Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate with
              passionate people. If you have a project in mind or just want to
              say hello, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg"
                asChild
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleResumeDownload}
                disabled={isDownloading}
                className="border-primary/20 hover:border-primary hover:bg-primary/5"
              >
                <Download className="mr-2 w-4 h-4" />
                {isDownloading ? "Downloading..." : "Download My Resume"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
