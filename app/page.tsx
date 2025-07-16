"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Github,
  FileText,
  Linkedin,
  Instagram,
  ArrowRight,
  Star,
  Code,
  Zap,
  Users,
  Award,
  ExternalLink,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Header from "@/components/Header"
import Skills from "@/components/Skills"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({})
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])



  const projects = [
    {
      title: "Task Management App",
      description: "Full-stack task management application with real-time updates",
      tech: ["React", "Node.js", "MongoDB"],
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "E-learning Platform",
      description: "Online learning platform with video streaming and progress tracking",
      tech: ["Next.js", "PostgreSQL", "AWS"],
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "API Gateway Service",
      description: "Microservices API gateway with authentication and rate limiting",
      tech: ["Node.js", "Redis", "Docker"],
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with real-time insights",
      tech: ["React", "D3.js", "Firebase"],
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "E-commerce Mobile App",
      description: "Cross-platform mobile app for online shopping with payment integration",
      tech: ["React Native", "Stripe", "Redux"],
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "AI Chat Bot",
      description: "Intelligent chatbot with natural language processing capabilities",
      tech: ["Python", "TensorFlow", "FastAPI"],
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Blockchain Wallet",
      description: "Secure cryptocurrency wallet with multi-chain support",
      tech: ["Web3.js", "Solidity", "React"],
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Video Streaming Platform",
      description: "Netflix-like streaming platform with content management system",
      tech: ["Next.js", "AWS S3", "MongoDB"],
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(projects.length / 3))
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, projects.length])

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  // Manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(projects.length / 3))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(projects.length / 3)) % Math.ceil(projects.length / 3))
  }

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      content:
        "Miraya delivered exceptional work that exceeded our expectations. The attention to detail and user experience was outstanding.",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      name: "David Chen",
      role: "CTO at StartupXYZ",
      content:
        "Working with Miraya was a game-changer. The combination of design and development skills is rare and valuable.",
      avatar: "/placeholder.svg?height=50&width=50",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Centered Header */}
      <Header/>

      <main className="pt-4">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 mb-32" id="hero" data-animate>
          <div
            className={`transition-all duration-1000 ${isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="relative mb-8">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
                  <Image
                    src="/images/me.png"
                    alt="Miraya"
                    width={120}
                    height={120}
                    className="relative rounded-full border-4 border-white shadow-xl"
                  />
                
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Hey, I'm Sarath.
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Software Developer.
                  </span>
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  I build scalable web applications and love solving complex problems with clean code.
                  <br />
                  <span className="font-semibold text-gray-800">
                    Passionate about creating efficient, user-friendly solutions.
                  </span>
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Button className="bg-gradient-to-r from-gray-900 to-gray-700 text-white hover:from-gray-800 hover:to-gray-600 rounded-full px-8 py-3 text-lg transition-all duration-300 hover:scale-105 shadow-lg group">
                    Hire me
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <div className="flex items-center space-x-2 text-green-600">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-medium">Open to Opportunities</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 lg:pl-12">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                    <Code className="h-8 w-8 text-blue-600 mb-3" />
                    <h3 className="font-bold text-gray-800 mb-2">Full-Stack</h3>
                    <p className="text-sm text-gray-600">End-to-end web applications</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                    <Zap className="h-8 w-8 text-green-600 mb-3" />
                    <h3 className="font-bold text-gray-800 mb-2">Performance</h3>
                    <p className="text-sm text-gray-600">Optimized and scalable solutions</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                    <Users className="h-8 w-8 text-purple-600 mb-3" />
                    <h3 className="font-bold text-gray-800 mb-2">Collaboration</h3>
                    <p className="text-sm text-gray-600">Team player and mentor</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                    <Award className="h-8 w-8 text-orange-600 mb-3" />
                    <h3 className="font-bold text-gray-800 mb-2">Quality</h3>
                    <p className="text-sm text-gray-600">Clean, maintainable code</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <Skills isVisible={isVisible}/>

        {/* Projects Section - Slider */}
        <section className="max-w-6xl mx-auto px-6 mb-32" id="projects" data-animate>
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Featured Projects
            </h2>

            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              {/* Slider Container */}
              <div className="overflow-hidden rounded-2xl">
                <div
                  ref={sliderRef}
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(projects.length / 3) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                        {projects.slice(slideIndex * 3, slideIndex * 3 + 3).map((project, index) => (
                          <Card
                            key={`${slideIndex}-${index}`}
                            className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 bg-gradient-to-br from-white to-gray-50 group overflow-hidden"
                          >
                            <div className="relative overflow-hidden">
                              <Image
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              <Button
                                size="icon"
                                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 opacity-0 group-hover:opacity-100 transition-all duration-300"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                            </div>
                            <CardContent className="p-6">
                              <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors">
                                {project.title}
                              </h3>
                              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                  <Badge
                                    key={tech}
                                    variant="secondary"
                                    className="bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 hover:from-blue-100 hover:to-purple-100 transition-colors"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 z-10"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 z-10"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Slide Indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: Math.ceil(projects.length / 3) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              {/* Auto-play indicator */}
              <div className="flex justify-center mt-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <div
                    className={`w-2 h-2 rounded-full ${isAutoPlaying ? "bg-green-500 animate-pulse" : "bg-gray-400"}`}
                  ></div>
                  <span>{isAutoPlaying ? "Auto-playing" : "Paused"}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-4xl mx-auto px-6 mb-32" id="about" data-animate>
          <div
            className={`transition-all duration-1000 delay-400 ${isVisible.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white via-gray-50 to-white">
              <CardContent className="p-12">
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  About Me
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                  <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed text-lg">
                    <p>I'm Sarath, a passionate Software Developer who loves building things that make a difference.</p>

                    <p>
                      <strong className="text-gray-900">What I do:</strong> I create robust web applications using
                      modern technologies. From frontend interfaces to backend APIs, I enjoy the entire development
                      process.
                    </p>

                    <p>
                      I specialize in JavaScript/TypeScript, React, Node.js, and database design. I believe in writing
                      clean, maintainable code and following best practices to deliver high-quality software.
                    </p>

                    <p>
                      I'm always learning new technologies and staying up-to-date with industry trends. I enjoy
                      collaborating with teams and mentoring junior developers.
                    </p>

                    <p className="font-semibold text-gray-900">Let's build something amazing together!</p>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                      <Award className="h-8 w-8 text-blue-600 mb-3" />
                      <h3 className="font-bold text-gray-800 mb-2">150k+</h3>
                      <p className="text-sm text-gray-600">Developer Community</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
                      <Star className="h-8 w-8 text-green-600 mb-3" />
                      <h3 className="font-bold text-gray-800 mb-2">50+</h3>
                      <p className="text-sm text-gray-600">Projects Delivered</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
                      <Users className="h-8 w-8 text-purple-600 mb-3" />
                      <h3 className="font-bold text-gray-800 mb-2">3+</h3>
                      <p className="text-sm text-gray-600">Years Experience</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    variant="outline"
                    className="rounded-full px-8 py-3 border-2 hover:bg-gray-50 transition-all duration-300 hover:scale-105 bg-transparent"
                  >
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Read my blog about design & development →
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-4xl mx-auto px-6 mb-32" id="testimonials" data-animate>
          <div
            className={`transition-all duration-1000 delay-500 ${isVisible.testimonials ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              What People Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.name}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="max-w-4xl mx-auto px-6 mb-32" id="experience" data-animate>
          <div
            className={`transition-all duration-1000 delay-600 ${isVisible.experience ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white via-gray-50 to-white">
              <CardContent className="p-12">
                <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Work Experience
                </h2>

                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

                  <div className="space-y-8">
                    {[
                      {
                        period: "Jan 2024 - Present",
                        role: "Senior Software Developer",
                        company: "TechCorp",
                        color: "blue",
                        current: true,
                      },
                      {
                        period: "Jun 2022 - Dec 2023",
                        role: "Full Stack Developer",
                        company: "StartupXYZ",
                        color: "green",
                        current: false,
                      },
                      {
                        period: "Mar 2021 - May 2022",
                        role: "Frontend Developer",
                        company: "WebSolutions",
                        color: "purple",
                        current: false,
                      },
                      {
                        period: "Jan 2020 - Feb 2021",
                        role: "Junior Developer",
                        company: "DevStudio",
                        color: "orange",
                        current: false,
                      },
                    ].map((job, index) => (
                      <div key={index} className="relative flex items-start group">
                        <div
                          className={`absolute left-6 w-4 h-4 rounded-full border-4 border-white shadow-lg ${
                            job.current ? "bg-green-500 animate-pulse" : "bg-gray-400"
                          } group-hover:scale-125 transition-transform duration-300`}
                        ></div>

                        <div className="ml-16 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 w-full">
                          <p className="text-sm text-gray-500 mb-2 font-medium">{job.period}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <span className="font-bold text-gray-800 text-lg">{job.role}</span>
                              {job.company && (
                                <>
                                  <span className="text-gray-600">at</span>
                                  <Badge
                                    variant="secondary"
                                    className={`bg-${job.color}-100 text-${job.color}-800 hover:bg-${job.color}-200 transition-colors`}
                                  >
                                    <span className={`w-2 h-2 bg-${job.color}-500 rounded-full mr-2`}></span>
                                    {job.company}
                                  </Badge>
                                </>
                              )}
                            </div>
                            {job.current && (
                              <Badge className="bg-green-100 text-green-800 animate-pulse">Current</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="max-w-2xl mx-auto px-6 mb-32" id="newsletter" data-animate>
          <div
            className={`transition-all duration-1000 delay-700 ${isVisible.newsletter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-50 via-white to-purple-50">
              <CardContent className="p-12 text-center">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Subscribe to my Newsletter
                  </h2>
                  <p className="text-gray-600 mb-2 text-lg">
                    Tired of balancing code, design, deadlines, and new tools?
                  </p>
                  <p className="text-gray-600 mb-4 text-lg">
                    You're not alone. Every week I send you what actually works.
                  </p>
                  <p className="text-gray-800 font-semibold text-xl">No fluff, just results.</p>
                </div>

                <div className="max-w-md mx-auto space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="rounded-full border-2 border-gray-200 focus:border-blue-500 transition-colors h-12 text-center"
                  />
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 rounded-full h-12 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                    Subscribe Now
                  </Button>
                  <p className="text-sm text-gray-500">
                    No spam, unsubscribe anytime.
                    <span className="font-semibold text-gray-700"> Over 1.5k subscribers.</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What I've Been Up To */}
        <section className="max-w-2xl mx-auto px-6 mb-20" id="interests" data-animate>
          <div
            className={`transition-all duration-1000 delay-800 ${isVisible.interests ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Here's What I've Been Up To
            </h2>

            <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
              <CardContent className="p-12">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <span className="text-4xl">🎮</span>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <span className="text-4xl">⚔️</span>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <span className="text-4xl">🎭</span>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <span className="text-4xl">✨</span>
                  </div>
                </div>
                <div className="space-y-3 text-center">
                  <p className="font-bold text-xl tracking-wider">DEMON SLAYER</p>
                  <p className="font-bold text-xl tracking-wider">A SILENT VOICE</p>
                  <p className="font-bold text-xl tracking-wider">ATTACK ON TITAN</p>
                  <p className="font-bold text-xl tracking-wider">SPIRITED AWAY</p>
                  <p className="font-bold text-xl tracking-wider">RASCAL DOES NOT DREAM</p>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-gray-400">When I'm not coding, you'll find me watching anime or at the gym 🏋️‍♂️</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-12">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
              <p className="text-gray-400 mb-6">Ready to turn your ideas into reality?</p>
              <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-3 font-semibold transition-all duration-300 hover:scale-105">
                Get In Touch
              </Button>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">© 2025 Sarath O S. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
