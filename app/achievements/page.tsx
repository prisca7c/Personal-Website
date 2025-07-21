"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Trophy, Medal, Award, Star, Calendar, GraduationCap, Brain } from "lucide-react"

const achievements = [
  {
    category: "University Scholarships",
    icon: GraduationCap,
    color: "from-purple-400 to-indigo-400",
    items: [
      {
        title: "Paul B. Spafford Entrance Scholarship",
        date: "Jun 2025",
        description:
          "Two scholarships, valued at up to $5,000 each, awarded to outstanding undergraduate first-year students entering Nanotechnology Engineering. This fund has been established by Paul B. Spafford.",
        level: "University",
        value: "$5,000",
      },
    ],
  },
  {
    category: "STEM Competitions & Hackathons",
    icon: Trophy,
    color: "from-blue-400 to-cyan-400",
    items: [
      {
        title: "Finalist - Undercity Hackathon 2025",
        date: "2025",
        description: "Reached finals in competitive hackathon focused on urban innovation",
        level: "Regional",
      },
      {
        title: "Best Use of GenAI - UTRAHacks 2025",
        date: "2025",
        description: "Awarded for innovative application of generative AI technology",
        level: "University",
      },
      {
        title: "Division Quarterfinalist - VEX Robotics World Championship 2025",
        date: "2025",
        description: "Reached quarterfinals at the world's largest robotics competition",
        level: "International",
      },
      {
        title: "Excellence Award - Toronto VEX V5 Robotics Competition 2025",
        date: "2025",
        description: "Recognized for overall robot design and performance excellence",
        level: "Regional",
      },
      {
        title: "Inspire Award - Mecha Mayhem VEX V5 Signature Event 2025",
        date: "2025",
        description: "Awarded for inspiring team collaboration and community impact",
        level: "Regional",
      },
      {
        title: "Bronze Medal - Toronto Science Fair 2025",
        date: "2025",
        description: "Third place recognition for scientific research project",
        level: "Regional",
      },
      {
        title: "2nd Place - Hack the Ridge 2024",
        date: "2024",
        description: "Runner-up in competitive programming hackathon",
        level: "Regional",
      },
      {
        title: "1st Place - Apocalypse Hackathon 2024",
        date: "2024",
        description: "First place winner in disaster preparedness themed hackathon",
        level: "Regional",
      },
      {
        title: "1st Place - SvRobotics Coding Competition 2021",
        date: "2021",
        description: "Winner of programming competition in robotics context",
        level: "Local",
      },
      {
        title: "Semifinalist - ClimateScience Olympiad 2024",
        date: "2024",
        description: "Reached semifinals in environmental science competition",
        level: "National",
      },
      {
        title: "Finalist - Ellehacks 2023",
        date: "2023",
        description: "Finalist in women-focused hackathon competition",
        level: "Regional",
      },
    ],
  },
  {
    category: "Academic Excellence",
    icon: Medal,
    color: "from-green-400 to-teal-400",
    items: [
      {
        title: "ICS4U Computer Science Highest Merit - YMCI 2024",
        date: "2024",
        description: "Highest achievement in Grade 12 Computer Science course",
        level: "Academic",
      },
      {
        title: "Computing & Technology Highest Merit - NTCS 2021",
        date: "2021",
        description: "Top performance in computing and technology program",
        level: "Academic",
      },
      {
        title: "Nehemiah Award - NTCS 2023",
        date: "2023",
        description: "Special recognition for character and leadership",
        level: "Academic",
      },
      {
        title: "Fish Art Contest Winner - NTCS 2021",
        date: "2021",
        description: "Winner of school art competition",
        level: "Academic",
      },
      {
        title: "Visual Arts Highest Merit - NTCS 2021",
        date: "2021",
        description: "Highest achievement in visual arts program",
        level: "Academic",
      },
    ],
  },
  {
    category: "Robotics Competitions",
    icon: Award,
    color: "from-orange-400 to-red-400",
    items: [
      {
        title: "Judges Award - Toronto VEX V5 Robotics Competition 2024",
        date: "2024",
        description: "Special recognition from competition judges",
        level: "Regional",
      },
      {
        title: "Amaze Award - PAS-VEX V5 Robotics Signature Event 2024",
        date: "2024",
        description: "Awarded for exceptional robot design and innovation",
        level: "Regional",
      },
      {
        title: "Inspire Award - Minnesota VEX V5 Signature Event 2024",
        date: "2024",
        description: "Recognition for team spirit and community engagement",
        level: "International",
      },
      {
        title: "1st Place Division - CETA Robotics Competition 2024",
        date: "2024",
        description: "Division champion in competitive robotics tournament",
        level: "Regional",
      },
      {
        title: "2nd Place Division - CETA Robotics Competition 2024",
        date: "2024",
        description: "Runner-up in division competition",
        level: "Regional",
      },
      {
        title: "2nd Overall - CETA Robotics Competition 2024",
        date: "2024",
        description: "Second place overall in major robotics competition",
        level: "Regional",
      },
      {
        title: "Tournament Semifinalists - VEX V5 Robotics Provincial Championship 2023",
        date: "2023",
        description: "Reached semifinals at provincial level competition",
        level: "Provincial",
      },
      {
        title: "Innovate Award - CanSTEAM VEX V5 Robotics Competition 2022",
        date: "2022",
        description: "Recognized for innovative engineering solutions",
        level: "National",
      },
    ],
  },
  {
    category: "Dance & Performance Arts",
    icon: Star,
    color: "from-pink-400 to-rose-400",
    items: [
      {
        title: "Platinum Award - Taoli World Dance Competition 2024",
        date: "2024",
        description: "Highest level achievement in international Chinese dance competition",
        level: "International",
      },
      {
        title: "Grand Finalist Qualifier - Taoli World Dance Competition 2024",
        date: "2024",
        description: "Qualified for grand finals at world championship level",
        level: "International",
      },
      {
        title: "1st Place Division - StarCatchers Dance Competition 2024",
        date: "2024",
        description: "Division champion in competitive dance tournament",
        level: "Regional",
      },
      {
        title: "Special Judges Award - StarCatchers Dance Competition 2024",
        date: "2024",
        description: "Special recognition from competition judges",
        level: "Regional",
      },
      {
        title: "2nd Place Overall - Inspire Dance Challenge 2024",
        date: "2024",
        description: "Runner-up in overall competition rankings",
        level: "Regional",
      },
      {
        title: "2nd Place Division - Ottawa Wushu Provincial Championships 2024",
        date: "2024",
        description: "Provincial level achievement in martial arts competition",
        level: "Provincial",
      },
      {
        title: "Highest Scoring Routine (OVERALL CHAMPION) - Fever Dance Championships 2023",
        date: "2023",
        description: "Overall champion with highest scoring performance",
        level: "Regional",
      },
      {
        title: "1st Place Overall Small Group Division - Fever Dance Championships 2023",
        date: "2023",
        description: "Small group division champion",
        level: "Regional",
      },
      {
        title: "1st Place Overall Large Group Division - Fever Dance Championships 2023",
        date: "2023",
        description: "Large group division champion",
        level: "Regional",
      },
      {
        title: "Special Judges Award - Fever Dance Championships 2023",
        date: "2023",
        description: "Special recognition for outstanding performance",
        level: "Regional",
      },
      {
        title: "Platinum Award - View Dance Challenge 2023",
        date: "2023",
        description: "Highest achievement level in dance competition",
        level: "Regional",
      },
      {
        title: "High Gold Award - View Dance Challenge 2023",
        date: "2023",
        description: "High gold level performance recognition",
        level: "Regional",
      },
      {
        title: "3rd Place Division - Montreal Wushu Competition 2023",
        date: "2023",
        description: "Third place in competitive martial arts tournament",
        level: "Provincial",
      },
      {
        title: "Highest Scoring Routine (OVERALL CHAMPION) - Inspire Dance Challenge 2021",
        date: "2021",
        description: "Overall champion with highest scoring performance",
        level: "Regional",
      },
      {
        title: "1st Place Line Division - Inspire Dance Challenge 2021",
        date: "2021",
        description: "Line division champion",
        level: "Regional",
      },
      {
        title: "1st Place Small Group Division - Inspire Dance Challenge 2021",
        date: "2021",
        description: "Small group division champion",
        level: "Regional",
      },
      {
        title: "Special Judges Award - Inspire Dance Challenge 2021",
        date: "2021",
        description: "Special recognition for outstanding performance",
        level: "Regional",
      },
      {
        title: "2nd Place Division - View Dance Challenge 2021",
        date: "2021",
        description: "Runner-up in division competition",
        level: "Regional",
      },
      {
        title: "High Gold Line Award - View Dance Challenge 2021",
        date: "2021",
        description: "High gold level achievement in line category",
        level: "Regional",
      },
      {
        title: "High Gold Small Group Award - View Dance Challenge 2021",
        date: "2021",
        description: "High gold level achievement in small group category",
        level: "Regional",
      },
    ],
  },
  {
    category: "Arts & Creative Recognition",
    icon: Star,
    color: "from-yellow-400 to-orange-400",
    items: [
      {
        title: "1st Place Abstract Watercolour - Toronto Kiwanis Festival Visual Arts Competition 2024",
        date: "2024",
        description: "First place in abstract watercolor category",
        level: "Regional",
      },
      {
        title: "1st Place Mixed Media - Toronto Kiwanis Festival Visual Arts Competition 2024",
        date: "2024",
        description: "Champion in mixed media art category",
        level: "Regional",
      },
    ],
  },
  {
    category: "Intellectual Competitions",
    icon: Brain,
    color: "from-indigo-400 to-purple-400",
    items: [
      {
        title: "Participant - 30th Puzzle & 16th Sudoku World Championships",
        date: "2024",
        description: "Competed at the international level in puzzle and sudoku world championships",
        level: "International",
      },
    ],
  },
]

const levelColors = {
  International: "bg-red-100 text-red-700 border-red-200",
  National: "bg-purple-100 text-purple-700 border-purple-200",
  Provincial: "bg-blue-100 text-blue-700 border-blue-200",
  Regional: "bg-orange-100 text-orange-700 border-orange-200",
  Local: "bg-green-100 text-green-700 border-green-200",
  University: "bg-indigo-100 text-indigo-700 border-indigo-200",
  Academic: "bg-yellow-100 text-yellow-700 border-yellow-200",
}

export default function AchievementsPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-blue-50"
      style={{ fontFamily: "'Noto Sans', 'M PLUS 1p', sans-serif" }}
    >
      <div className="container mx-auto px-4 py-8 max-w-7xl">
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
              Achievements
            </h1>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {achievements.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border-2 border-blue-200/60 shadow-lg"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center shadow-lg`}
                >
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h2
                  className="text-xl font-bold text-slate-800"
                  style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
                >
                  {category.category}
                </h2>
              </div>

              {/* Achievement Items */}
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-l-4 border-blue-300 pl-4 py-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-base font-semibold text-slate-800 leading-tight">{item.title}</h3>
                      <div className="flex items-center gap-1 text-slate-500 text-xs ml-2">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </div>
                    </div>

                    <p className="text-slate-700 mb-2 leading-relaxed text-sm">{item.description}</p>

                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium border ${
                          levelColors[item.level as keyof typeof levelColors]
                        }`}
                      >
                        {item.level}
                      </span>
                      {item.value && (
                        <span className="px-2 py-1 bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-medium">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
