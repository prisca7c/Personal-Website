"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Calendar, Building, Bot, GraduationCap, Users, Briefcase, FlaskConical, ExternalLink } from "lucide-react"

const workExperience = [
  {
    icon: Building,
    title: "Logistics Coordinator",
    company: "Waterloo Nanotechnology Conference",
    period: "Jun 2025 - Present",
    description:
      "Responsible for coordination of event location (ensuring rooms are available and booked), conference schedule, food/refreshments, photography/videography, presentation set up, custodial services, and any other additional needs such as tables/chairs, speaker gift baskets, conference applications and reviews, etc.",
    skills: ["Event Management", "Coordination", "Project Planning", "Vendor Relations"],
    link: "#", // Add your link here
  },
  {
    icon: Bot,
    title: "Assistant Robotics Coach",
    company: "Caution Tape Robotics Club",
    period: "Oct 2023 - Jun 2025",
    description:
      "Led small groups (ages 6-12) through the mechanical engineering design process. Collaborated with robotics coaches weekly to develop and refine lesson plans for pre-competitive classes. Evaluated student progress in partnership with senior coaches and parents.",
    skills: ["Leadership", "Teaching", "Robotics", "Mentoring", "Curriculum Development"],
    link: "#", // Add your link here
  },
  {
    icon: FlaskConical,
    title: "Student Researcher",
    company: "The New York Academy of Sciences",
    period: "Sep 2024 - Nov 2024",
    description:
      "Conducted independent research project under the mentorship of academy scientists. Focused on materials science and nanotechnology applications in sustainable energy systems.",
    skills: ["Research", "Data Analysis", "Scientific Writing", "Materials Science"],
    link: "#", // Add your link here
  },
  {
    icon: Users,
    title: "Hostess and Artisan",
    company: "Demetres",
    period: "Jul 2023 - Sep 2023",
    description:
      "Provided customer service in restaurant environment while also creating artistic dessert presentations. Balanced hospitality duties with creative food artistry.",
    skills: ["Customer Service", "Food Artistry", "Time Management", "Teamwork"],
    link: "#", // Add your link here
  },
  {
    icon: GraduationCap,
    title: "Academic Tutor",
    company: "North Toronto Christian School",
    period: "Dec 2021 - May 2023",
    description:
      "Tutored elementary and middle school students. Subjects include: English, Science, Math, and Bible Studies. Provided one-on-one tutoring helping students improve their academic performance around 7% higher.",
    skills: ["Tutoring", "Mathematics", "Science", "English", "Curriculum Planning"],
    link: "#", // Add your link here
  },
  {
    icon: Users,
    title: "Teaching Assistant",
    company: "Chinese Collective Arts Association",
    period: "Nov 2020 - Feb 2023",
    description:
      "Assisted in leading dancers and acrobats from ages three to ten through dance routines and intensive training. Supported lead instructors in managing classes and individual student development.",
    skills: ["Dance Instruction", "Child Development", "Performance Arts", "Team Leadership"],
    link: "#", // Add your link here
  },
  {
    icon: Briefcase,
    title: "Student Outreach, Event Assistant, and Call Agent",
    company: "Politics",
    period: "Apr 2022 - Sep 2022",
    description:
      "Engaged in political outreach activities, assisted with campaign events, and conducted phone campaigns. Gained experience in civic engagement and political processes.",
    skills: ["Public Speaking", "Event Coordination", "Communication", "Civic Engagement"],
    link: "#", // Add your link here
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
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
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
        </div>

        {/* Experience Grid - Rectangular Boxes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workExperience.map((job, index) => (
            <a
              key={index}
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="p-6 rounded-2xl border-2 border-blue-200/60 bg-gradient-to-br from-white/70 to-blue-50/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full flex flex-col">
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                    <job.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-800 mb-1">{job.title}</h3>
                    <p className="text-blue-600 font-semibold text-sm">{job.company}</p>
                  </div>
                </div>

                {/* Period */}
                <div className="flex items-center gap-2 text-slate-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{job.period}</span>
                </div>

                {/* Description */}
                <p className="text-slate-700 text-sm mb-4 leading-relaxed flex-grow">{job.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {job.skills.slice(0, 4).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                  {job.skills.length > 4 && (
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                      +{job.skills.length - 4} more
                    </span>
                  )}
                </div>

                {/* Link indicator */}
                <div className="flex items-center gap-2 text-blue-500 font-semibold text-sm mt-auto group-hover:text-blue-600 transition-colors">
                  <span>View Details</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
