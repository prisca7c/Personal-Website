"use client"

import React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Link from "next/link"
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Twitter,
  Bot,
  Users,
  Trophy,
  Palette,
  Briefcase,
  Download,
  FolderOpen,
  Archive,
  Phone,
  BookOpen,
  ExternalLink,
  MapPin,
  Award,
  Heart,
  GraduationCap,
  ChevronDownIcon,
} from "lucide-react"

export default function Component() {
  const [openDropdowns, setOpenDropdowns] = useState<number[]>([])
  const galleryRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = (index: number) => {
    setOpenDropdowns((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/prisca7c", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/prisca-chien-292979220/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:prisca.meredith.chien@gmail.com", label: "Email" },
    { icon: Twitter, href: "https://x.com/prisca59885764", label: "X (Twitter)" },
  ]

  const dropdownSections = [
    {
      icon: GraduationCap,
      title: "Enrichment Programs",
      description: "Academic development",
      content: {
        text: "Participated in various enrichment programs including quantum computing courses, research projects, and specialized STEM programs. Engaged in advanced academic opportunities that develop technical skills and scientific understanding.",
        images: [
          {
            src: "/images/nyasja-project.png",
            caption: "New York Academy of Sciences Junior Academy - Biodegradable Materials Research Project 2024",
          },
          {
            src: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/72bff354e35e66b12c1d70bb91ef732a28043def_screenshot_2025-07-25_at_7.22.20___am.png",
            caption: "Qiskit Global Summer School - IBM Quantum Computing 2025",
          },
        ],
        specialImages: [
          {
            src: "/images/kicad-pcb-design.png",
            caption: "KiCad PCB Design @Hack Club - Custom Macropad Electronics Project 2025",
          },
          {
            src: "/images/qsys-quantum-lecture.png",
            caption: "Quantum School for Young Students - Advanced Quantum Systems Course 2024",
          },
        ],
      },
    },
    {
      icon: Bot,
      title: "Robotics",
      description: "Intelligent systems",
      content: {
        text: "Assistant coach at Caution Tape Robotics Club. Experience with VEX robotics, autonomous systems, and mentoring students in competitive robotics. Lead Mechanical Designer, Lead Scouter, Builder, and Backup Programmer of 839 VEX V5 Team.",
        images: [
          {
            src: "/images/robotics-workshop.jpeg",
            caption: "I'm trying to figure out how stuff works 2024",
          },
          { src: "/images/vex-robot-competition.jpeg", caption: "V3 robot in action! 2025" },
        ],
      },
    },
    {
      icon: Users,
      title: "School Clubs",
      description: "Community engagement",
      content: {
        text: "Active leadership in student organizations, competitions, and outreach events. Engaged in creative arts, environmental initiatives, and technology education programs.",
        images: [
          {
            src: "/images/science-fair-project.jpeg",
            caption: "Co-Presidents @ Toronto Science Fair with our project FlightFusion 2025",
          },
          { src: "/images/student-group-photo.jpeg", caption: "Engineering & Robotics Team Exec Photo 2024" },
          {
            src: "/images/ewaste-collection.png",
            caption: "2000 lbs of E-waste succesfully donated to Quantum Lifecycle Partners 2023",
          },
          {
            src: "/images/robotics-team-photo.jpeg",
            caption: "Robotics Team Group Photo with Competition Robots 2024",
          },
          { src: "/images/school-performance.jpeg", caption: "School Dance Team Performance 2025" },
          {
            src: "/images/community-outreach-event.jpeg",
            caption: "Community Outreach Event - Face Painting Station 2023",
          },
        ],
      },
    },
    {
      icon: Heart,
      title: "Volunteering",
      description: "Community service",
      content: {
        text: "Volunteered in political campaigns, robotics competitions, and community events.",
        images: [
          { src: "/images/political-campaign-volunteer.jpeg", caption: "Political Campaign Volunteer Work 2022" },
          {
            src: "/images/robotics-demonstration.jpeg",
            caption: "PuMP+ @ Ontario Science Centre PuMP+ - VEX IQ & V5 Robotics Demonstration 2023",
          },
          {
            src: "/images/first-robotics-badge.jpeg",
            caption: "FIRST Robotics Competition Field Resetter Volunteer Badge 2023",
          },
          {
            src: "/images/sudoku-championships.jpeg",
            caption: "Volunteering at Puzzle and Sudoku World Championships @Toronto, ON 2023",
          },
        ],
      },
    },
    {
      icon: Trophy,
      title: "Sports",
      description: "Athletic pursuits",
      content: {
        text: "9 years Chinese dance and 3 years Wushu experience. Acrobatics enthusiast with focus on flexibility, tumbling, and performance arts. Competitive Chinese dance performer with multiple awards and international recognition.",
        images: [
          { src: "/images/acrobatics-progression.png", caption: "Firebird Jump Skill Development 2021-2024" },
          { src: "/images/flexibility-progression.png", caption: "Scorpion Flexibility Skill Progression 2018-2020" },
          { src: "/images/dance-competition-progression.png", caption: "Chinese Dance Competition Awards 2018-2024" },
          { src: "/images/international-stage-performance.jpeg", caption: "CNE International Stage Performance 2022" },
          { src: "/images/martial-arts-group.jpeg", caption: "3rd Place Ottawa Wushu Provincial Championships 2023" },
          { src: "/images/dance-stage-performance.png", caption: "Chinese Traditional Dance Stage Performance 2022" },
        ],
        videos: [
          { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/recorded-1151425030597%20%282%29-xhLZxaNQwIRzXrVatLK9yQZX0fYrbm.mp4", caption: "Front Aerial 2023" },
          {
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-07-21%20at%2012.56.48%20AM-QJ38gm1lgbg1LS7m4niXevQYZqFM1B.mp4",
            caption: "Acro Sequence - Taoli World Dance Competition @Irvine, CA 2024",
          },
        ],
      },
    },
    {
      icon: Palette,
      title: "Visual Arts",
      description: "Creative expression",
      content: {
        text: "5/6 ORIGINAL ARTWORKS. Expereinced in illustration, painting, and mixed media. ",
        images: [
          { src: "/images/prisca-personal-artwork.jpeg", caption: "What it Means to be Prisca 2021" },
          { src: "/images/skittles-artwork.jpeg", caption: "Skittles Acrylic Painting 2021" },
          {
            src: "/images/kaleidoscopic-sculpture.jpeg",
            caption: "Kaleidoscopic Epipelagic 2021 - 1st Place Mixed Media Toronto Kiwanis Festival 2024",
          },
          { src: "/images/mystical-artwork.jpeg", caption: "Pencil Drawing 2022" },
        ],
        specialImages: [
          {
            src: "/images/religious-artwork.jpeg",
            caption: "Doctrine of Salvation 2023 - 1st Place Abstract Watercolour Toronto Kiwanis Festival 2024",
          },
          { src: "/images/feather-artwork.jpeg", caption: "Feather Art 2021" },
        ],
      },
    },
  ]

  const currentCourses = [
    { code: "MATH117", name: "Calculus 1 for Engineering" },
    { code: "NE100", name: "Introduction to Nanotechnology Engineering" },
    { code: "NE109", name: "Societal and Environmental Impacts of Nanotechnology" },
    { code: "NE111", name: "Introduction to Programming for Engineers" },
    { code: "NE112", name: "Linear Algebra for Nanotechnology Engineers" },
    { code: "NE121", name: "Chemical Principles" },
  ]

  // Gallery images with your real photos and captions
  const galleryImages = [
    {
      src: "/images/gallery-10.jpeg",
      alt: "Conference presentation",
      caption: "Finalist Top 10 Demos - Undercity Hackathon @San Francisco, CA 2025",
      type: "image",
    },
    {
      src: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/e3f72580cfd4aa6670c64818b1d9034469bf589b_screenshot_2025-09-30_at_5.30.12___pm.png",
      alt: "KiCad PCB Layout",
      caption: "PCB Design for Custom Electric Wheelchair 2025",
      type: "image",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-07-21%20at%204.46.45%20PM-TSrYqiAFomozzzndm1lNBtXglwVNKs.mp4",
      alt: "Robot in action",
      caption: "Flywheel Demo - Undercity Hackathon 2025",
      type: "video",
    },
    {
      src: "/images/robot-competition.jpeg",
      alt: "VEX Robotics Competition Robot",
      caption: "VEX V5 Robotics Competition @Newark, NJ 2024",
      type: "image",
    },
    {
      src: "/images/gallery-5.png",
      alt: "Engineering project collaboration",
      caption: "1st Place Peashooter - Apocalypse Hackathon 2024",
      type: "image",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-07-21%20at%206.28.16%20PM-TBAMrueRj7PJOz57aobE6hoh5Ci4sx.mp4",
      alt: "New Gallery Video 1",
      caption: "Dissected Malpighian tubules and gut from a fruit fly (0.37cm)",
      type: "video",
    },
    {
      src: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/db5fbfbd7e0bc10afd8826d6d762fca40e77c986_screenshot_2025-07-31_at_6.03.55___pm.png",
      alt: "KiCad Schematic Diagram",
      caption: "KiCad Schematic for Custom Electric Wheelchair 2025",
      type: "image",
    },
    {
      src: "/images/dance-performance.jpeg",
      alt: "Traditional dance performance",
      caption: "World Grand Finalists Interview - Taoli World Dance Competition @Irvine, CA 2025",
      type: "image",
    },
    {
      src: "/images/microscopic-material.jpeg",
      alt: "Microscopic Material",
      caption: "15μ Urine Secretion Droplet on Fruit Fly Malpighian Tubule tied to Pin",
      type: "image",
    },
    {
      src: "/images/macropad-3d-exploded.png",
      alt: "3D Exploded View of Macropad",
      caption: "3D Exploded View of Custom Macropad 2025",
      type: "image",
    },
    {
      src: "/images/gallery-7.jpeg",
      alt: "York Mills CI Toronto Science Fair Medalists 2025",
      caption: "York Mills CI Toronto Science Fair Medalists 2025",
      type: "image",
    },
  ]

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50/30 via-pink-50/20 to-cyan-50/30"
      style={{
        fontFamily: "'Noto Sans', 'M PLUS 1p', sans-serif",
        backgroundImage:
          "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 219, 226, 0.1) 0%, transparent 50%)",
      }}
    >
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Main Layout */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left Column - Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Title Section with Social Links */}
            <section className="mb-8">
              <div className="mb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h1
                      className="text-6xl font-bold mb-4 text-slate-800"
                      style={{ fontFamily: "'Zen Kaku Gothic New', 'Noto Sans JP', sans-serif" }}
                    >
                      Prisca Chien
                      <div className="w-full h-1 bg-gradient-to-r from-blue-300 via-pink-300 to-cyan-300 rounded-full mt-2 opacity-60"></div>
                    </h1>
                    {/* New flex container for the engineer title, location, and social links */}
                    <div className="flex items-center justify-between w-full">
                      <div>
                        <h2
                          className="text-xl font-light text-slate-600 mb-4"
                          style={{ fontFamily: "'Zen Kaku Gothic New', 'Noto Sans JP', sans-serif" }}
                        >
                          <span className="bg-blue-200/40 px-1 py-0.5 rounded-md">
                            Intending Nanoelectronics Engineer
                          </span>
                          <div className="w-32 h-0.5 bg-gradient-to-r from-pink-300 to-blue-300 rounded-full mt-1 opacity-60"></div>
                        </h2>
                        {/* Location */}
                        <div className="flex items-center gap-2 mb-4">
                          <MapPin className="w-5 h-5 text-blue-500" />
                          <span className="text-lg text-slate-600" style={{ fontFamily: "'M PLUS 1p', sans-serif" }}>
                            Toronto, Ontario, Canada
                          </span>
                        </div>
                      </div>
                      {/* Social Links */}
                      <div className="flex gap-4 mx-14">
                        {socialLinks.map((social, index) => (
                          <a
                            key={index}
                            href={social.href}
                            target={social.href.startsWith("http") ? "_blank" : "_self"}
                            rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="p-3 rounded-xl border-2 border-blue-200/60 bg-white/60 hover:bg-white/80 text-slate-600 hover:text-slate-800 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg"
                            aria-label={social.label}
                          >
                            {React.createElement(social.icon, { className: "w-5 h-5" })}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section className="mb-8">
              <div className="text-lg leading-relaxed text-slate-700" style={{ fontFamily: "'M PLUS 1p', sans-serif" }}>
                <p className="mb-4 py-0 mt-0">
                  <span className="bg-purple-200/40 px-1 py-0.5 rounded-md">
                   UWaterloo Nanotechnology Engineering student
                  </span>{" "}
                  passionate in materials science, quantum, mechatronics, hackathons, visual arts, and Chinese dance.
                </p>
              </div>
            </section>

            {/* Three Navigation Buttons - Fixed Styling */}
            <div className="flex gap-4 flex-wrap">
              <Link href="/experience">
                <Button className="px-6 py-3 text-lg font-semibold rounded-xl border-2 border-blue-200/60 bg-white hover:bg-white text-black hover:text-black backdrop-blur-sm shadow-lg shadow-yellow-300/50 hover:shadow-yellow-400/70 transition-all duration-300 hover:scale-105">
                  <Briefcase className="w-5 h-5 mr-2" />
                  View Experience
                </Button>
              </Link>

              <Link href="/projects">
                <Button className="px-6 py-3 text-lg font-semibold rounded-xl border-2 border-blue-200/60 bg-white hover:bg-white text-black hover:text-black backdrop-blur-sm shadow-lg shadow-yellow-300/50 hover:shadow-yellow-400/70 transition-all duration-300 hover:scale-105">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Projects
                </Button>
              </Link>

              <Link href="/achievements">
                <Button className="px-6 py-3 text-lg font-semibold rounded-xl border-2 border-blue-200/60 bg-white hover:bg-white text-black hover:text-black backdrop-blur-sm shadow-lg shadow-yellow-300/50 hover:shadow-yellow-400/70 transition-all duration-300 hover:scale-105">
                  <Award className="w-5 h-5 mr-2" />
                  View Achievements
                </Button>
              </Link>
              
              <a href="/resume-prisca-chien.pdf" download="Prisca_Chien_Resume.pdf">
                <Button className="px-6 py-3 text-lg font-semibold rounded-xl border-2 border-blue-200/60 bg-white hover:bg-white text-black hover:text-black backdrop-blur-sm shadow-lg shadow-yellow-300/50 hover:shadow-yellow-400/70 transition-all duration-300 hover:scale-105">
                  <Download className="w-5 h-5 mr-2" />
                  View Resume
                </Button>
              </a>
            </div>

            {/* Current Events Section */}
            <section className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <FolderOpen className="w-8 h-8 text-blue-500" />
                <h2
                  className="text-3xl font-bold text-slate-800"
                  style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
                >
                  <span className="bg-blue-200/40 px-1 py-0.5 rounded-md">Current Events</span>
                </h2>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-pink-400 to-cyan-400 rounded-full mb-6 opacity-60"></div>
              <div className="text-lg leading-relaxed text-slate-700" style={{ fontFamily: "'M PLUS 1p', sans-serif" }}>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <span className="bg-purple-200/40 px-1 py-0.5 rounded-md">
                        Organizing the Waterloo Nanotechnology Conference
                      </span>{" "}
                      for 250+ attendees as a Logistics Coordinator
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>5x Hackathon Awardee</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Building a{" "}
                      <span className="bg-green-200/40 px-1 py-0.5 rounded-md">customized electric wheelchair</span>{" "}
                      from scratch using PCBs and 3D prints
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Qiskit Global Summer School</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>NASA Space Apps Waterloo Challenger</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Past Events Section */}
            <section className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <Archive className="w-8 h-8 text-blue-500" />
                <h2
                  className="text-3xl font-bold text-slate-800"
                  style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
                >
                  <span className="bg-pink-200/40 px-1 py-0.5 rounded-md">Past Events</span>
                </h2>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-pink-400 to-cyan-400 rounded-full mb-6 opacity-60"></div>
              <div
                className="text-lg leading-relaxed mb-6 text-slate-700"
                style={{ fontFamily: "'M PLUS 1p', sans-serif" }}
              >
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <span className="bg-blue-200/40 px-1 py-0.5 rounded-md">
                        Toronto Science Fair School Club President
                      </span>{" "}
                      2024-2025; successfully mentored 5 medalists
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Engineering & Robotics School Club Co-President and Competition Team Mentor 2024-2025</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Hosted CETA Robotics Competition 2025 @York Mills CI</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Co-Captain, Lead Mechanical Designer, Lead Scouter, Builder, and Backup Programmer of{" "}
                      <span className="bg-green-200/40 px-1 py-0.5 rounded-md">
                        839 VEX V5 Robotics Competition Team
                      </span>{" "}
                      2023-2025
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Division Quarterfinalist @ VEX Robotics World Championship 2025</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>World Platinum Grand Finalist Recipient @ Taoli World Dance Competition 2024</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Horizontal Line Above Dropdown Sections */}
            <div className="w-full h-1 bg-gradient-to-r from-blue-300 via-pink-300 to-cyan-300 rounded-full mb-8 opacity-60"></div>

            {/* Dropdown Sections */}
            <section className="mt-8">
              <div className="space-y-6 my-0">
                {dropdownSections.map((section, index) => {
                  const isOpen = openDropdowns.includes(index)

                  return (
                    <div key={index}>
                      <Collapsible open={isOpen} onOpenChange={() => toggleDropdown(index)}>
                        <CollapsibleTrigger className="w-full text-left group">
                          <div
                            className={`flex items-center justify-between py-6 px-8 rounded-2xl border-2 transition-all duration-500 ${
                              isOpen
                                ? "border-blue-300 bg-gradient-to-r from-white/70 to-blue-50/70 shadow-blue-300/20 shadow-2xl"
                                : "border-blue-200/60 bg-gradient-to-r from-white/60 to-blue-50/60 group-hover:from-white/80 group-hover:to-blue-50/80"
                            } backdrop-blur-sm shadow-lg`}
                          >
                            <div className="flex items-center gap-4">
                              {React.createElement(section.icon, {
                                className: "w-8 h-8 text-blue-500 transition-colors duration-300",
                              })}
                              <div>
                                <h3
                                  className="text-2xl font-bold text-slate-800"
                                  style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
                                >
                                  {section.title}
                                </h3>
                                <p className="text-sm text-slate-600">{section.description}</p>
                              </div>
                            </div>
                            <ChevronDown
                              className={`w-6 h-6 transition-all duration-300 ${
                                isOpen ? "rotate-180" : ""
                              } text-slate-600`}
                            />
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="px-8 pb-8 text-slate-700 mb-0">
                            <p className="text-lg leading-relaxed mb-7 mt-7">{section.content.text}</p>

                            {/* Videos for Sports section - Side by side */}
                            {section.content.videos && (
                              <div className="mb-6 flex justify-center gap-4">
                                {section.content.videos.map((video, videoIndex) => (
                                  <div key={videoIndex} className="w-64">
                                    <video
                                      controls
                                      className="w-full h-96 object-cover rounded-lg"
                                      poster="/placeholder.svg?height=384&width=256"
                                    >
                                      <source src={video.src} type="video/mp4" />
                                      Your browser does not support the video tag.
                                    </video>
                                    <p className="text-sm italic text-center mt-2">{video.caption}</p>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Image grid – handles normal, special, and tall images */}
                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                              {[...(section.content.specialImages ?? []), ...section.content.images].map(
                                (image: { src: string; caption: string }, imgIndex: number) => {
                                  const tallArt =
                                    image.src === "/images/religious-artwork.jpeg" ||
                                    image.src === "/images/feather-artwork.jpeg"
                                  const tallSports = section.title === "Sports"
                                  const tallSpecial =
                                    section.title === "Enrichment Programs" &&
                                    (section.content.specialImages ?? []).length > 0

                                  return (
                                    <div key={imgIndex} className="space-y-2">
                                      <img
                                        src={image.src || "/placeholder.svg"}
                                        alt={`${section.title} ${imgIndex + 1}`}
                                        className={`w-full object-cover rounded-lg ${
                                          tallArt ? "h-96" : tallSports || tallSpecial ? "h-72" : "h-56"
                                        }`}
                                      />
                                      <p className="text-sm italic">{image.caption}</p>
                                    </div>
                                  )
                                },
                              )}
                            </div>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </div>
                  )
                })}
              </div>
            </section>
          </div>

          {/* Right Column - Gallery with Real Photos (Narrower) */}
          <div className="lg:col-span-4">
            <div className="sticky top-8">
              {/* Scroll Down Indicator */}
              <div className="text-center mb-4">
                <p className="text-sm text-slate-500 font-medium flex items-center justify-center gap-2">
                  <ChevronDownIcon className="w-4 h-4 animate-bounce" />
                  Scroll down!
                  <ChevronDownIcon className="w-4 h-4 animate-bounce" />
                </p>
              </div>

              <div
                ref={galleryRef}
                className="h-[600px] overflow-y-auto space-y-6 pr-4 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-transparent"
              >
                {galleryImages.map((item, i) => (
                  <div key={i} className="group relative">
                    {item.type === "image" ? (
                      <img
                        src={item.src || "/placeholder.svg"}
                        alt={item.alt}
                        className="w-full h-80 object-cover shadow-slate-900/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                        style={{
                          borderRadius: i % 4 === 0 ? "24px" : i % 4 === 1 ? "12px" : i % 4 === 2 ? "32px" : "16px",
                        }}
                      />
                    ) : (
                      <video
                        src={item.src}
                        controls
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-80 object-cover shadow-slate-900/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                        style={{
                          borderRadius: i % 4 === 0 ? "24px" : i % 4 === 1 ? "12px" : i % 4 === 2 ? "32px" : "16px",
                        }}
                      >
                        <source src={item.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}

                    {/* Caption overlay */}
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm text-white p-4"
                      style={{
                        borderRadius: `0 0 ${
                          i % 4 === 0 ? "24px" : i % 4 === 1 ? "12px" : i % 4 === 2 ? "32px" : "16px"
                        } ${i % 4 === 0 ? "24px" : i % 4 === 1 ? "12px" : i % 4 === 2 ? "32px" : "16px"}`,
                      }}
                    >
                      <p className="text-sm font-medium">{item.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Line Above Three Columns */}
        <div className="mt-12 mb-6 w-full h-1 bg-gradient-to-r from-blue-300 via-pink-300 to-cyan-300 rounded-full opacity-60"></div>

        {/* Three Column Section - Current Courses, Skills, Resume & Contact */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Current Courses Column */}
          <div className="p-8 rounded-2xl border-2 border-blue-200/60 bg-gradient-to-br from-white/60 to-blue-50/60 backdrop-blur-sm shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <BookOpen className="w-8 h-8 text-blue-500" />
              <h3
                className="text-2xl font-bold text-slate-800"
                style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
              >
                Current Courses
              </h3>
            </div>
            <div className="text-slate-700" style={{ fontFamily: "'M PLUS 1p', sans-serif" }}>
              <div className="space-y-4">
                {currentCourses.map((course, index) => (
                  <div key={index} className="border-l-2 border-blue-400 pl-4">
                    <p className="font-semibold text-sm">{course.code}</p>
                    <p className="text-sm opacity-90">{course.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Column */}
          <div className="p-8 rounded-2xl border-2 border-blue-200/60 bg-gradient-to-br from-white/60 to-blue-50/60 backdrop-blur-sm shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <Award className="w-8 h-8 text-blue-500" />
              <h3
                className="text-2xl font-bold text-slate-800"
                style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
              >
                Skills
              </h3>
            </div>
            <div className="text-lg leading-relaxed text-slate-700" style={{ fontFamily: "'M PLUS 1p', sans-serif" }}>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold mb-1">Technical</p>
                  <p className="text-sm">
                    Python, Arduino (C++), MATLAB, C/C++, Fusion 360, Onshape, Shapr3D, Tinkercad, KiCad, Carbide Create, VEX Robotics Design
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Research</p>
                  <p className="text-sm">Materials Science, Organic & Analytical Chemistry, Experimental Biology, Quantum Mechanics, Data Analysis</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Software</p>
                  <p className="text-sm">SolidWorks, Nanome</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Leadership</p>
                  <p className="text-sm">Team Management, Lesson Planning, Event Coordination, Public Speaking, Parent Communication, Customer Service</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Languages</p>
                  <p className="text-sm">English (Native), Cantonese (Conversational)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Resume & Contact Column */}
          <div className="p-8 rounded-2xl border-2 border-blue-200/60 bg-gradient-to-br from-white/60 to-blue-50/60 backdrop-blur-sm shadow-lg">
            {/* Resume Section */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <Download className="w-6 h-6 text-blue-500" />
                <h3
                  className="text-xl font-bold text-slate-800"
                  style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
                >
                  Resume
                </h3>
              </div>
              <p className="text-sm mb-4 text-slate-600" style={{ fontFamily: "'M PLUS 1p', sans-serif" }}>
                Download my complete resume with detailed experience and projects.
              </p>
              <a href="/resume-prisca-chien.pdf" download="Prisca_Chien_Resume.pdf">
                <Button className="w-full px-4 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg transition-all duration-300 hover:scale-105">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </a>
            </div>

            {/* Contact Section */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Phone className="w-6 h-6 text-blue-500" />
                <h3
                  className="text-xl font-bold text-slate-800"
                  style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
                >
                  Contact
                </h3>
              </div>
              <p className="text-sm mb-4 text-slate-600" style={{ fontFamily: "'M PLUS 1p', sans-serif" }}>
                Let's connect! Reach out for collaborations or opportunities.
              </p>
              <a href="mailto:prisca.meredith.chien@gmail.com">
                <Button className="w-full px-4 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-pink-400 to-blue-400 hover:from-pink-500 hover:to-blue-500 text-white shadow-lg transition-all duration-300 hover:scale-105">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
              </a>
            </div>

            {/* Bible Verse Section */}
            <div className="mt-6">
              <p
                className="text-sm italic text-center text-slate-500"
                style={{ fontFamily: "'M PLUS 1p', sans-serif" }}
              >
                "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving,
                present your requests to God. And the peace of God, which transcends all understanding, will guard your
                hearts and your minds in Christ Jesus." - Philippians 4:6-7
              </p>
            </div>
          </div>
        </div>

        {/* Three Boxes with Background Images */}
      </div>

      {/* Footer */}
      <footer className="py-4">
        <div className="container mx-auto px-6">
          <div className="flex justify-start">
            <p className="text-sm text-slate-500" style={{ fontFamily: "'M PLUS 1p', sans-serif" }}>
              Last updated: 30 Sep 2025
            </p>
          </div>
          <div className="flex justify-end">
            <p className="text-sm text-slate-500" style={{ fontFamily: "'M PLUS 1p', sans-serif" }}>
              © 2025 Prisca Chien
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
