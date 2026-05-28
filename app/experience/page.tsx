"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Calendar } from "lucide-react"

import Image from "next/image"

const workExperience = [
  {
    logo: "/images/logos/music-and-life.png",
    title: "Software Engineering Intern",
    company: "Music & Life Ltd",
    period: "May 2026 - Present",
    description: "incoming s26",
    link: "https://www.musicandlife.co.uk/",
  },
  {
    logo: "/images/logos/watq.png",
    title: "Quantum Hardware Designer",
    company: "WatQ",
    period: "Jan 2026 - Present",
    description: "Designed superconducting quantum circuits and devices",
    link: "https://www.linkedin.com/company/watq/posts/?feedView=all",
  },
  {
    logo: "/images/logos/waterloo-fab.png",
    title: "Semiconductor Process Designer",
    company: "Waterloo Hacker Fab",
    period: "Jan 2026 - Present",
    description: "NMOS FET construction, <100> P-type wafer process planning, MOSCAP process planning",
    link: "https://www.waterloofab.com/",
  },
  {
    logo: "/images/logos/iqc.png",
    title: "Quantum Outreach Educator",
    company: "Institute for Quantum Computing",
    period: "Nov 2025 - Present",
    description:
      "Assisting and coordinating IQC's quantum outreach initiatives, engaging students and the public through hands-on experiments, demonstrations, and interactive workshops to foster understanding of quantum mechanics and wave phenomena.",
    link: "https://uwaterloo.ca/institute-for-quantum-computing/",
  },
  {
    logo: "/images/logos/hardhaq.png",
    title: "UW Student Lead & Event Coordinator, Quantum Simulation Developer",
    company: "HardHaQ [North American Quantum Consortium (NAQC)]",
    period: "Sep 2025 - Present",
    description:
      "Responsible for coordination of event location, conference schedule, food/refreshments, photography/videography, presentation set up, custodial services, speaker gift baskets, conference applications and reviews.",
    link: "https://hardhaq.com/about-us/",
  },
  {
    logo: "/images/logos/midnight-sun.png",
    title: "Battery Systems Member",
    company: "Midnight Sun Solar Rayce Car Team",
    period: "Sep 2025 - Dec 2025",
    description:
      "Worked on battery systems for a solar-powered race car, contributing to design, testing, and integration of energy storage solutions.",
    link: "https://www.uwmidsun.com/",
  },
  {
    logo: "/images/logos/wanc.png",
    title: "Logistics Coordinator",
    company: "Waterloo Nanotechnology Conference",
    period: "Jun 2025 - Present",
    description:
      "Responsible for coordination of event location (ensuring rooms are available and booked), conference schedule, food/refreshments, photography/videography, presentation set up, custodial services, and any other additional needs.",
    link: "#",
  },
  {
    logo: "/images/logos/caution-tape.png",
    title: "Robotics Coach",
    company: "Caution Tape Robotics Club",
    period: "Oct 2023 - Jun 2025",
    description:
      "Led small groups (ages 6–12) through the mechanical engineering design process. Collaborated with robotics coaches weekly to develop and refine lesson plans for pre-competitive classes. Evaluated student progress in partnership with senior coaches and parents.",
    link: "https://www.ct839.com/en/",
  },
  {
    logo: "/images/logos/caution-tape.png",
    title: "Lead Mechanical Designer (839)",
    company: "Caution Tape Robotics Club",
    period: "Aug 2023 - May 2025",
    description:
      "Led mechanical design for the 839 VEX V5 Robotics Competition team. Co-Captain, Lead Scouter, Builder, and Backup Programmer. Division Quarterfinalist at VEX Robotics World Championship 2025.",
    link: "https://www.ct839.com/en/",
  },
  {
    logo: "/images/logos/nyas.png",
    title: "Biodegradable Materials Student Researcher",
    company: "The New York Academy of Sciences",
    period: "Sep 2024 - Nov 2024",
    description:
      "Conducted independent research project under the mentorship of academy scientists. Focused on materials science and nanotechnology applications in sustainable energy systems.",
    link: "https://www.nyas.org/learning/high-school-research-programs/the-junior-academy/",
  },
  {
    logo: "/images/logos/york-university.png",
    title: "Neuroendocrine Systems and Drug R&D Student Researcher",
    company: "York University",
    period: "Jul 2023 - Jul 2024",
    description:
      "Conducted student research in neuroendocrine systems and drug research & development under university supervision.",
    link: "https://www.linkedin.com/in/priscachien/details/projects/",
  },
  {
    logo: "/images/logos/demetres.png",
    title: "Hostess and Artisan",
    company: "Demetres",
    period: "Jul 2023 - Sep 2023",
    description:
      "Provided customer service in restaurant environment while also creating artistic dessert presentations. Balanced hospitality duties with creative food artistry.",
    link: "https://demetres.com/",
  },
  {
    logo: "/images/logos/ntcs.png",
    title: "Tutor",
    company: "North Toronto Christian School",
    period: "Dec 2021 - May 2023",
    description:
      "Tutored elementary and middle school students in English, Science, Math, and Bible Studies. Provided one-on-one tutoring, helping students improve their academic performance by around 7%.",
    link: "https://www.ntcs.on.ca/",
  },
  {
    logo: "/images/logos/ccaa.png",
    title: "Chinese Dance & Acrobatics Teaching Assistant",
    company: "Chinese Collective Arts Association",
    period: "Nov 2020 - Feb 2023",
    description:
      "Assisted in leading dancers and acrobats ages three to ten through dance routines and intensive training. Supported lead instructors in managing classes and individual student development.",
    link: "https://chineseculturalarts.org/",
  },
  {
    logo: "/images/logos/politics.png",
    title: "Student Outreach, Event Assistant, and Call Agent",
    company: "Politics",
    period: "Apr 2022 - Sep 2022",
    description:
      "Engaged in political outreach activities, assisted with campaign events, and conducted phone campaigns. Gained experience in civic engagement and political processes.",
    link: "#",
  },
]

export default function ExperiencePage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-blue-50"
      style={{ fontFamily: "'Noto Sans', 'M PLUS 1p', sans-serif" }}
    >
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button
              variant="ghost"
              size="lg"
              className="transition-all duration-300 text-slate-600 hover:text-slate-800 hover:bg-white/50"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1
            className="text-4xl font-bold text-slate-800"
            style={{ fontFamily: "'Zen Kaku Gothic New', 'Noto Sans JP', sans-serif" }}
          >
            Experience
          </h1>
        </div>

        {/* Experience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workExperience.map((job, index) => (
            <a
              key={index}
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="rounded-2xl border-2 border-blue-200/60 bg-gradient-to-br from-white/70 to-blue-50/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full flex flex-col overflow-hidden">

                {/* Top: Title, Company, Period */}
                <div className="px-6 pt-6 pb-4">
                  <h3
                    className="text-lg font-bold text-slate-800 mb-1 leading-snug"
                    style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
                  >
                    {job.title}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm mb-2">{job.company}</p>
                  <div className="flex items-center gap-2 text-slate-500">
                    <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="text-xs">{job.period}</span>
                  </div>
                </div>

                {/* Middle: Logo */}
                <div className="flex items-center justify-center bg-white/60 mx-6 rounded-xl py-5 border border-blue-100/60">
                  <div className="relative w-28 h-16">
                    <Image
                      src={job.logo}
                      alt={`${job.company} logo`}
                      fill
                      className="object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = "none"
                        const parent = target.parentElement
                        if (parent) {
                          parent.innerHTML = `<span class="text-slate-400 text-xs text-center px-2">${job.company}</span>`
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Bottom: Description */}
                <div className="px-6 py-4 flex-grow">
                  <p className="text-slate-700 text-sm leading-relaxed">{job.description}</p>
                </div>

              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
