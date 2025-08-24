import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
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
  Search,
  BarChart,
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
  Figma
} from "lucide-react";
import Layout from "@/components/Layout";
import { downloadResume } from "@/utils/resume";
import { useState } from "react";

export default function About() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleResumeDownload = async () => {
    setIsDownloading(true);
    await downloadResume();
    setTimeout(() => setIsDownloading(false), 1000);
  };

  const skills = [
    { name: "UI/UX Design", level: 95, category: "Design" },
    { name: "User Research", level: 90, category: "Research" },
    { name: "Prototyping", level: 92, category: "Design" },
    { name: "Figma", level: 98, category: "Tools" },
    { name: "Adobe Creative Suite", level: 88, category: "Tools" },
    { name: "Design Systems", level: 94, category: "Design" },
    { name: "HTML/CSS", level: 85, category: "Development" },
    { name: "React", level: 80, category: "Development" },
    { name: "Usability Testing", level: 87, category: "Research" },
    { name: "Wireframing", level: 93, category: "Design" }
  ];

  const values = [
    {
      icon: Users,
      title: "User-Centered Design",
      description: "Every design decision is made with the end user in mind. I believe great design solves real problems for real people."
    },
    {
      icon: Lightbulb,
      title: "Innovation & Creativity",
      description: "Pushing boundaries and exploring new possibilities to create unique and memorable experiences."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focusing on measurable outcomes and business goals while maintaining exceptional user experience."
    },
    {
      icon: Heart,
      title: "Passion for Craft",
      description: "Continuous learning and attention to detail in every pixel, interaction, and user journey."
    }
  ];

  const careerJourney = [
    {
      id: "current-lead",
      year: "2024",
      period: "Aug 2024 - Current",
      title: "UI/UX Lead",
      company: "Growify Digital Technology",
      location: "Erode",
      type: "work",
      icon: Crown,
      gradient: "from-purple-500 to-pink-500",
      bgPattern: "bg-gradient-to-br from-purple-50 to-pink-50",
      size: "large",
      featured: true,
      description: "Leading UI/UX initiatives and team development at a growing digital technology company. Overseeing design strategy, client relationships, and team expansion while delivering high-quality digital solutions.",
      achievements: [
        "Developed over 20 websites and web applications for diverse clients",
        "Delivered branding, UI/UX design, and development services to enhance user engagement",
        "Recruited and trained designers and developers to improve client service delivery"
      ],
      technologies: ["Figma", "Adobe Creative Suite", "UI/UX Design", "Branding", "Team Leadership"]
    },
    {
      id: "freelance-senior",
      year: "2024",
      period: "May 2024 - Current",
      title: "Senior UI/UX Designer",
      company: "DC Innovision",
      location: "Tamil Nadu",
      type: "work",
      icon: Rocket,
      gradient: "from-blue-500 to-cyan-500",
      bgPattern: "bg-gradient-to-br from-blue-50 to-cyan-50",
      size: "medium",
      featured: false,
      description: "Providing expert design consultation and strategy for innovative digital solutions. Focus on creating comprehensive design systems and conducting thorough user research to drive product success.",
      achievements: [
        "Directed UX strategy and design systems for 5+ web applications",
        "Conducted usability tests and user research that enhanced task flow efficiency by 30%",
        "Worked closely with developers and product teams to deliver features that raised user satisfaction"
      ],
      technologies: ["Figma", "User Research", "Design Systems", "Usability Testing", "UX Strategy"]
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
      gradient: "from-green-500 to-emerald-500",
      bgPattern: "bg-gradient-to-br from-green-50 to-emerald-50",
      size: "medium",
      featured: false,
      description: "Contributed to design strategy and implementation for digital products. Specialized in creating user-centered design solutions and conducting comprehensive user research to optimize user experience.",
      achievements: [
        "Directed UX strategy and design systems for 5+ web applications",
        "Conducted usability tests and user research that enhanced task flow efficiency by 30%",
        "Worked closely with developers and product teams to deliver features that raised user satisfaction"
      ],
      technologies: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"]
    },
    {
      id: "developer-role",
      year: "2023",
      period: "Feb 2023 - Jan 2024",
      title: "UI Developer",
      company: "Zeeeboobaa Technologies",
      location: "Erode",
      type: "work",
      icon: Monitor,
      gradient: "from-orange-500 to-red-500",
      bgPattern: "bg-gradient-to-br from-orange-50 to-red-50",
      size: "medium",
      featured: false,
      description: "Specialized in developing responsive user interfaces for fintech applications. Focused on performance optimization and creating seamless user experiences using modern web technologies.",
      achievements: [
        "Developed responsive UIs for fintech offerings utilizing HTML, CSS, JavaScript, Bootstrap",
        "Enhanced load times by 40% via performance improvement",
        "Contributed significantly towards launching 5+ digital offerings"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Design", "Performance Optimization"]
    },
    {
      id: "design-education",
      year: "2023",
      period: "Feb 2023",
      title: "UX/UI Design & Visual Communication",
      company: "Buff Creative College",
      location: "College",
      type: "education",
      icon: Figma,
      gradient: "from-indigo-500 to-purple-500",
      bgPattern: "bg-gradient-to-br from-indigo-50 to-purple-50",
      size: "small",
      featured: false,
      description: "Comprehensive program in UX/UI design and visual communication, covering modern design principles, user research methodologies, and industry-standard design tools and practices.",
      achievements: [
        "Completed advanced UX/UI design curriculum",
        "Mastered industry-standard design tools and methodologies",
        "Built portfolio of professional design projects"
      ],
      technologies: ["Figma", "Adobe Creative Suite", "Design Principles", "Visual Communication", "User Research"]
    },
    {
      id: "chemistry-degree",
      year: "2018",
      period: "Apr 2018",
      title: "B.Sc. Chemistry",
      company: "Sengunthar Arts & Science College",
      location: "College",
      type: "education",
      icon: GraduationCap,
      gradient: "from-teal-500 to-blue-500",
      bgPattern: "bg-gradient-to-br from-teal-50 to-blue-50",
      size: "small",
      featured: false,
      description: "Bachelor's degree in Chemistry providing strong analytical and problem-solving skills that complement design thinking and user research methodologies.",
      achievements: [
        "Completed Bachelor's degree in Chemistry",
        "Developed analytical and problem-solving skills",
        "Built foundation for systematic approach to design research"
      ],
      technologies: ["Analytical Thinking", "Problem Solving", "Research Methodology", "Scientific Method"]
    }
  ];

  const achievements = [
    { icon: Award, number: "50+", label: "Projects Completed" },
    { icon: Users, number: "20+", label: "Happy Clients" },
    { icon: Clock, number: "3+", label: "Years Experience" },
    { icon: BarChart, number: "40%", label: "Avg. UX Improvement" }
  ];

  const interests = [
    { icon: Code, name: "Frontend Development" },
    { icon: BookOpen, name: "UX Research" },
    { icon: Palette, name: "Digital Art" },
    { icon: Coffee, name: "Coffee & Design" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-background to-primary-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">
                <Users className="w-4 h-4 mr-2" />
                About Vickash
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                Designing Digital 
                <span className="text-primary"> Experiences That Matter</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm a passionate UI/UX designer with over 3 years of experience creating 
                intuitive, beautiful, and user-centered digital experiences. My mission is 
                to bridge the gap between user needs and business goals through thoughtful design.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  
                  className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
                >
                 <a href="https://drive.google.com/file/d/1yU1TQXv9yDIk4tAHmpofyWQ8nL2MeVjR/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex">
                   <Download className="mr-2 w-4 h-4" />
                    Download Resume
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://www.linkedin.com/in/vickash-shivan-415139267/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 w-4 h-4" />
                    LinkedIn Profile
                  </a>
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={achievement.label} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <achievement.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{achievement.number}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="w-full max-w-md mx-auto">
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets%2F0c313c2d09f34b648b6967b58f4f7809%2F295d4c0c397a46ab894b3a291cd53fa3" 
                    alt="Vickash Shivan - UI/UX Designer" 
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

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              My <span className="text-primary">Design Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From curious beginner to experienced designer, here's how I've grown 
              and what drives my passion for creating exceptional user experiences.
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <Card className="p-8 mb-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4">The Beginning</h3>
                <p className="text-muted-foreground mb-4">
                  My journey into UI/UX design started with a simple frustration: why were 
                  so many digital products difficult to use? This curiosity led me to explore 
                  the world of user experience design, where I discovered the perfect blend 
                  of creativity, psychology, and problem-solving.
                </p>
                <p className="text-muted-foreground">
                  I began by teaching myself through online courses, design books, and 
                  countless hours of practice. Every project taught me something new about 
                  user behavior, visual hierarchy, and the importance of iteration.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 mb-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4">Finding My Voice</h3>
                <p className="text-muted-foreground mb-4">
                  As I gained experience, I developed my own design philosophy: 
                  <strong> simplicity with purpose</strong>. I believe the best designs 
                  are invisible to users – they accomplish their goals effortlessly 
                  without having to think about the interface.
                </p>
                <p className="text-muted-foreground">
                  This philosophy guides every project I work on, from initial research 
                  and wireframing to final pixel-perfect implementations. I focus on 
                  understanding not just what users do, but why they do it.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4">Looking Forward</h3>
                <p className="text-muted-foreground">
                  Today, I'm passionate about creating designs that make a real difference 
                  in people's lives. Whether it's streamlining a complex workflow, 
                  making an app more accessible, or helping a business connect with 
                  their customers, I approach each project with empathy, curiosity, 
                  and a commitment to excellence.
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
              Skills & <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive skill set covering the entire design process, 
              from research and strategy to implementation and testing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="p-6 animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <CardContent className="p-0">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{skill.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {skill.category}
                    </Badge>
                  </div>
                  <Progress value={skill.level} className="h-2 mb-2" />
                  <div className="text-sm text-muted-foreground">
                    {skill.level}% Proficiency
                  </div>
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
              Design <span className="text-primary">Philosophy</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The core principles that guide my approach to every design challenge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="p-8 hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
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

      {/* Career Journey Section - Unique Design */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 via-primary-50/30 to-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Career <span className="text-primary">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From analytical thinking to design leadership - every step shaped my unique perspective.
            </p>
          </div>

          {/* Featured Current Role */}
          <div className="mb-12 animate-scale-in">
            <div className="text-center mb-8">
              <Badge variant="outline" className="text-primary border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium">
                <Star className="w-4 h-4 mr-2" />
                Current Position
              </Badge>
            </div>

            {careerJourney.filter(item => item.featured).map((item) => (
              <Card key={item.id} className="relative overflow-hidden border-0 shadow-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-5`}></div>
                <CardContent className="relative p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} p-0.5 shadow-lg`}>
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                        <item.icon className="w-10 h-10 text-purple-600" />
                      </div>
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">{item.title}</h3>
                        <Badge className={`bg-gradient-to-r ${item.gradient} text-white border-0`}>
                          {item.period}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-primary" />
                          <span className="font-medium text-primary">{item.company}</span>
                        </div>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{item.location}</span>
                      </div>

                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">{item.description}</p>

                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                          <h4 className="font-semibold text-foreground mb-3 flex items-center">
                            <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                            Key Achievements
                          </h4>
                          <div className="space-y-2">
                            {item.achievements.map((achievement, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.gradient} mt-2 flex-shrink-0`}></div>
                                <span className="text-muted-foreground">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center">
                            <Settings className="w-4 h-4 mr-2 text-primary" />
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech, index) => (
                              <Badge key={index} variant="secondary" className="text-xs bg-white/50">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Work Experience Grid */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Professional Experience</h3>
              <div className="flex-grow h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careerJourney.filter(item => !item.featured && item.type === 'work').map((item, index) => (
                <Card key={item.id} className={`group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${item.bgPattern} border-0 overflow-hidden animate-slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`h-2 bg-gradient-to-r ${item.gradient}`}></div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} p-0.5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-gray-700" />
                        </div>
                      </div>

                      <div className="text-right">
                        <Badge variant="outline" className="text-xs border-primary/20 bg-white/50">
                          {item.year}
                        </Badge>
                        <div className="text-xs text-muted-foreground mt-1">{item.period}</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="w-3 h-3 text-primary" />
                        <span className="text-sm font-medium text-primary">{item.company}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <Globe className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{item.location}</span>
                        <Badge variant="default" className="text-xs ml-auto">
                          Experience
                        </Badge>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 overflow-hidden" style={{display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical'}}>
                      {item.description}
                    </p>

                    {/* Key highlights */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-3 h-3 text-primary" />
                        <span className="text-xs font-semibold text-foreground">Highlights</span>
                      </div>
                      <div className="space-y-1">
                        {item.achievements.slice(0, 2).map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.gradient} mt-1.5 flex-shrink-0`}></div>
                            <span className="text-xs text-muted-foreground overflow-hidden" style={{display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}}>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Code className="w-3 h-3 text-primary" />
                        <span className="text-xs font-semibold text-foreground">Technologies</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {item.technologies.slice(0, 3).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs bg-white/60">
                            {tech}
                          </Badge>
                        ))}
                        {item.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs bg-white/60">
                            +{item.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Section - Unique Design */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-foreground">Academic Journey</h3>
              <div className="flex-grow h-px bg-gradient-to-r from-blue-600/30 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {careerJourney.filter(item => item.type === 'education').map((item, index) => (
                <Card key={item.id} className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Academic Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-60"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full opacity-40"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-100 to-transparent rounded-tr-full opacity-40"></div>

                  {/* Academic Header */}
                  <div className={`relative h-20 bg-gradient-to-r ${item.gradient} p-4 flex items-center`}>
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-white font-bold text-lg leading-tight">{item.title}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge className="bg-white/20 text-white border-white/30 text-xs">
                          {item.year}
                        </Badge>
                        <span className="text-white/80 text-sm">{item.period}</span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="relative p-6">
                    {/* Institution Info */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <BookOpen className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h5 className="font-bold text-foreground">{item.company}</h5>
                          <span className="text-sm text-muted-foreground">{item.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                      {item.description}
                    </p>

                    {/* Academic Achievements */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                          <Award className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-foreground">Academic Achievements</span>
                      </div>
                      <div className="space-y-2">
                        {item.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start gap-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills & Knowledge */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                          <Lightbulb className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-foreground">Knowledge & Skills</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Academic Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                        <GraduationCap className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Journey Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground">4+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground">6+</div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground">20+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground">Lead</div>
              <div className="text-sm text-muted-foreground">Current Role</div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Beyond <span className="text-primary">Design</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              When I'm not designing, you'll find me exploring new technologies, 
              contributing to design communities, and continuously learning about 
              emerging trends in user experience.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {interests.map((interest, index) => (
                <div key={interest.name} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
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
              Ready to Work <span className="text-primary">Together?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate with 
              passionate teams. Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg"
                asChild
              >
                <a href="/contact">Start a Project</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleResumeDownload}
                disabled={isDownloading}
                className="border-primary/20 hover:border-primary hover:bg-primary/5"
              >
                <Download className="mr-2 w-4 h-4" />
                {isDownloading ? "Downloading..." : "Get Resume"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
