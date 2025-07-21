"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Calendar, Building, Bot, GraduationCap, Users, Briefcase, FlaskConical } from "lucide-react"

const workExperience = [
  {
    icon: Building,
    title: "Logistics Coordinator",
    company: "Waterloo Nanotechnology Conference",
    period: "Jun 2025 - Present · 2 mos",
    description:
      "Responsible for coordination of event location (ensuring rooms are available and booked), conference schedule, food/refreshments, photography/videography, presentation set up, custodial services, and any other additional needs such as tables/chairs, speaker gift baskets, conference applications and reviews, etc.",
    skills: ["Event Management", "Coordination", "Project Planning", "Vendor Relations"],
    achievements: [
      "Coordinated logistics for 200+ attendees across multiple venues",
      "Managed vendor relationships and budget allocation",
      "Implemented streamlined check-in process reducing wait times by 40%",
    ],
  },
  {
    icon: Bot,
    title: "Assistant Robotics Coach",
    company: "Caution Tape Robotics Club",
    period: "Oct 2023 - Jun 2025 · 1 yr 9 mos",
    description:
      "Led small groups (ages 6-12) through the mechanical engineering design process. Collaborated with robotics coaches weekly to develop and refine lesson plans for pre-competitive classes. Evaluated student progress in partnership with senior coaches and parents.",
    skills: ["Leadership", "Teaching", "Robotics", "Mentoring", "Curriculum Development"],
    achievements: [
      "Mentored 30+ students in robotics fundamentals and competition preparation",
      "Developed curriculum for pre-competitive robotics classes",
      "Achieved 85% student retention rate across program sessions",
    ],
  },
  {
    icon: FlaskConical,
    title: "Student Researcher",
    company: "The New York Academy of Sciences",
    period: "Sep 2024 - Nov 2024 · 3 mos",
    description:
      "Conducted independent research project under the mentorship of academy scientists. Focused on materials science and nanotechnology applications in sustainable energy systems.",
    skills: ["Research", "Data Analysis", "Scientific Writing", "Materials Science"],
    achievements: [
      "Completed independent research project on nanomaterials",
      "Presented findings to academy review board",
      "Gained experience in scientific methodology and peer review process",
    ],
  },
  {
    icon: Users,
    title: "Hostess and Artisan",
    company: "Demetres",
    period: "Jul 2023 - Sep 2023 · 3 mos",
    description:
      "Provided customer service in restaurant environment while also creating artistic dessert presentations. Balanced hospitality duties with creative food artistry.",
    skills: ["Customer Service", "Food Artistry", "Time Management", "Teamwork"],
    achievements: [
      "Maintained high customer satisfaction ratings",
      "Created innovative dessert presentations",
      "Developed strong multitasking abilities in fast-paced environment",
    ],
  },
  {
    icon: GraduationCap,
    title: "Academic Tutor",
    company: "North Toronto Christian School",
    period: "Dec 2021 - May 2023 · 1 yr 6 mos",
    description:
      "Tutored elementary and middle school students. Subjects include: English, Science, Math, and Bible Studies. Provided one-on-one tutoring helping students improve their academic performance around 7% higher.",
    skills: ["Tutoring", "Mathematics", "Science", "English", "Curriculum Planning"],
    achievements: [
      "Improved student academic performance by an average of 7%",
      "Developed personalized learning plans for 15+ students",
      "Maintained consistent communication with parents and teachers",
    ],
  },
  {
    icon: Users,
    title: "Teaching Assistant",
    company: "Chinese Collective Arts Association",
    period: "Nov 2020 - Feb 2023 · 2 yrs 4 mos",
    description:
      "Assisted in leading dancers and acrobats from ages three to ten through dance routines and intensive training. Supported lead instructors in managing classes and individual student development.",
    skills: ["Dance Instruction", "Child Development", "Performance Arts", "Team Leadership"],
    achievements: [
      "Successfully guided young performers through complex routines",
      "Assisted in preparing students for competitions and performances",
      "Developed patience and communication skills working with young children",
    ],
  },
  {
    icon: Briefcase,
    title: "Student Outreach, Event Assistant, and Call Agent",
    company: "Politics",
    period: "Apr 2022 - Sep 2022 · 6 mos",
    description:
      "Engaged in political outreach activities, assisted with campaign events, and conducted phone campaigns. Gained experience in civic engagement and political processes.",
    skills: ["Public Speaking", "Event Coordination", "Communication", "Civic Engagement"],
    achievements: [
      "Successfully conducted voter outreach campaigns",
      "Assisted in organizing multiple political events",
      "Developed strong communication and persuasion skills",
    ],
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

        {/* Experience Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-pink-300"></div>

          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={index} className="relative flex items-start gap-6">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                    <job.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white/70 backdrop-blur-sm rounded-2xl p-6 border-2 border-blue-200/60 shadow-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-1">{job.title}</h3>
                      <p className="text-blue-600 font-semibold">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-slate-500">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium text-sm">{job.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-700 mb-4 leading-relaxed">{job.description}</p>

                  {/* Key Achievements */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Key Achievements</h4>
                    <ul className="space-y-1">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-slate-700 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Skills Developed</h4>
                    <div className="flex flex-wrap gap-1">
                      {job.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
