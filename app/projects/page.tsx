"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink, Calendar, Tag, ChevronDown } from "lucide-react"

interface Project {
  id: number
  name: string
  description: string
  image: string
  codeLink: string
  demoLink: string
  date: string
  type: string
  tags: string[]
}

const mockProjects: Project[] = [
  {
    id: 1,
    name: "AI-Powered Tutoring System",
    description:
      "Developed an AI-powered tutoring system using Python and TensorFlow, providing personalized learning experiences for students. Implemented adaptive learning algorithms and natural language processing techniques to enhance student engagement and comprehension.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "https://github.com/prisca7c/ai-tutor",
    demoLink: "https://ai-tutor-demo.vercel.app",
    date: "2024-03-10",
    type: "ai",
    tags: ["Python", "TensorFlow", "NLP", "Machine Learning"],
  },
  {
    id: 2,
    name: "Autonomous Robot Navigation",
    description:
      "Designed and implemented an autonomous navigation system for a mobile robot using ROS (Robot Operating System) and LiDAR sensors. Developed path planning algorithms and obstacle avoidance strategies to enable the robot to navigate complex environments.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "https://github.com/prisca7c/robot-nav",
    demoLink: "https://robot-nav-demo.vercel.app",
    date: "2023-12-15",
    type: "robotics",
    tags: ["C++", "ROS", "LiDAR", "Robotics"],
  },
  {
    id: 3,
    name: "Nanomaterials Synthesis Platform",
    description:
      "Developed a web platform for simulating nanomaterials synthesis processes using computational chemistry methods. Integrated molecular dynamics simulations and density functional theory calculations to predict the properties of novel nanomaterials.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "https://github.com/prisca7c/nano-synth",
    demoLink: "https://nano-synth-demo.vercel.app",
    date: "2024-01-20",
    type: "nanotechnology",
    tags: ["React", "Molecular Dynamics", "DFT", "Nanomaterials"],
  },
  {
    id: 4,
    name: "Smart Agriculture System",
    description:
      "Designed and implemented a smart agriculture system using IoT sensors and machine learning algorithms to optimize crop yields and resource utilization. Developed predictive models for irrigation scheduling and pest control based on environmental data.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "https://github.com/prisca7c/smart-agri",
    demoLink: "https://smart-agri-demo.vercel.app",
    date: "2023-11-01",
    type: "ai",
    tags: ["IoT", "Machine Learning", "Agriculture", "Python"],
  },
  {
    id: 5,
    name: "VEX Robotics Arm Control",
    description:
      "Developed a control system for a VEX robotics arm using PID control algorithms and inverse kinematics. Implemented a user interface for controlling the arm's movements and performing pick-and-place tasks.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "https://github.com/prisca7c/vex-arm",
    demoLink: "https://vex-arm-demo.vercel.app",
    date: "2023-10-10",
    type: "robotics",
    tags: ["C++", "PID Control", "Robotics", "VEX"],
  },
  {
    id: 6,
    name: "AI Hackathon Project: Health Monitoring App",
    description:
      "Developed a mobile app for remote health monitoring using sensor data and machine learning algorithms. Won second place at the AI for Good Hackathon for innovative use of AI in healthcare.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "https://github.com/prisca7c/health-app",
    demoLink: "https://health-app-demo.vercel.app",
    date: "2024-04-05",
    type: "hackathon",
    tags: ["React Native", "Machine Learning", "Healthcare", "Mobile"],
  },
  {
    id: 7,
    name: "Quantum Dot Simulation",
    description:
      "Simulated the electronic properties of quantum dots using numerical methods and computational physics. Investigated the effects of quantum confinement and electron-electron interactions on the energy levels and optical properties of quantum dots.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "https://github.com/prisca7c/quantum-dots",
    demoLink: "https://quantum-dots-demo.vercel.app",
    date: "2023-09-22",
    type: "nanotechnology",
    tags: ["Python", "Computational Physics", "Quantum Dots", "Simulation"],
  },
  {
    id: 8,
    name: "AI-Driven Music Generation",
    description:
      "Developed an AI-driven music generation system using deep learning models and generative adversarial networks (GANs). Trained the model on a large dataset of music to generate original compositions in various styles.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "https://github.com/prisca7c/ai-music",
    demoLink: "https://ai-music-demo.vercel.app",
    date: "2023-08-15",
    type: "ai",
    tags: ["Python", "Deep Learning", "GANs", "Music Generation"],
  },
  {
    id: 9,
    name: "Robotics Challenge Entry",
    description:
      "Designed and built a robot for the annual robotics challenge, focusing on object recognition and manipulation. Implemented computer vision algorithms and motion planning techniques to enable the robot to perform complex tasks.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "https://github.com/prisca7c/robot-challenge",
    demoLink: "https://robot-challenge-demo.vercel.app",
    date: "2023-07-01",
    type: "robotics",
    tags: ["C++", "Computer Vision", "Robotics", "Motion Planning"],
  },
  {
    id: 10,
    name: "Nanotechnology Conference Website",
    description:
      "Developed a website for the International Nanotechnology Conference, featuring information about the conference program, speakers, and registration details. Implemented a responsive design and user-friendly interface to enhance the user experience.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "https://github.com/prisca7c/nano-conf",
    demoLink: "https://nano-conf-demo.vercel.app",
    date: "2023-06-10",
    type: "nanotechnology",
    tags: ["React", "Next.js", "Web Development", "Nanotechnology"],
  },
  {
    id: 11,
    name: "AI Chatbot for Customer Support",
    description:
      "Developed an AI chatbot for customer support using natural language processing and machine learning techniques. Trained the chatbot on a large dataset of customer inquiries to provide automated responses and resolve common issues.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "https://github.com/prisca7c/ai-chatbot",
    demoLink: "https://ai-chatbot-demo.vercel.app",
    date: "2023-05-01",
    type: "ai",
    tags: ["Python", "NLP", "Machine Learning", "Chatbot"],
  },
  {
    id: 12,
    name: "Hackathon Project: Disaster Relief App",
    description:
      "Developed a mobile app for disaster relief efforts, providing real-time information about emergency resources and evacuation routes. Won first place at the Hack for Good Hackathon for innovative use of technology in disaster response.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "https://github.com/prisca7c/disaster-app",
    demoLink: "https://disaster-app-demo.vercel.app",
    date: "2023-04-15",
    type: "hackathon",
    tags: ["React Native", "Mobile App", "Disaster Relief", "Hackathon"],
  },
  {
    id: 13,
    name: "graggleblogfiggle",
    description: "A little pea trying to make it big in the world.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "https://github.com/Stwikeyy/graggleblogfiggle",
    demoLink: "https://docs.google.com/presentation/d/1pm3ocpUQKqpZ2OpVfdYTIdS68fsuPbH9ZrrdBp5Dfzk/edit?usp=sharing",
    date: "2024-05-01",
    type: "hackathon",
    tags: ["Software", "Web Development"],
  },
  {
    id: 14,
    name: "Peas Are Best Frozen",
    description:
      "A snow peashooter inspired by the video game Plants vs. Zombies. Turn on the shooter and watch the peas fly out!",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "https://github.com/prisca7c/Undercity",
    demoLink: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/dfe9f9703f4788b4bee81e907d5816168c87b1a2_img_2172.mov",
    date: "2025-07-01",
    type: "hackathon",
    tags: ["Software", "Robotics"],
  },
  {
    id: 15,
    name: "An Analysis of Biodegradable Materials to Reduce Waste Generation",
    description: "A research project analyzing biodegradable materials and their impact on waste generation.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "#",
    demoLink: "#",
    date: "2024-11-01", // Placeholder date
    type: "research",
    tags: ["Materials Science", "Environmental", "Research"],
  },
  {
    id: 16,
    name: "Baylee",
    description: "A hackathon project named Baylee.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "#",
    demoLink: "#",
    date: "2025-01-01",
    type: "hackathon",
    tags: ["Software"],
  },
  {
    id: 17,
    name: "O.S.S",
    description: "A hackathon project named O.S.S.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "#",
    demoLink: "#",
    date: "2023-02-01",
    type: "hackathon",
    tags: ["Software"],
  },
  {
    id: 18,
    name: "Neo=Alert",
    description: "A hackathon project named Neo=Alert.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "#",
    demoLink: "#",
    date: "2024-12-01",
    type: "hackathon",
    tags: ["Software"],
  },
  {
    id: 19,
    name: "BeanWalker",
    description: "A project named BeanWalker.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "#",
    demoLink: "#",
    date: "2025-06-01",
    type: "software",
    tags: ["Software"],
  },
  {
    id: 20,
    name: "Popp.n Bean",
    description: "A project named Popp.n Bean.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "#",
    demoLink: "#",
    date: "2025-07-01",
    type: "software",
    tags: ["Software"],
  },
  {
    id: 21,
    name: "Custom Macropad",
    description: "A custom macropad hardware project.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "#",
    demoLink: "#",
    date: "2025-07-01",
    type: "hardware",
    tags: ["Hardware", "Electronics"],
  },
  {
    id: 22,
    name: "BeanCake",
    description: "A project named BeanCake.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "#",
    demoLink: "#",
    date: "2025-05-01",
    type: "software",
    tags: ["Software"],
  },
  {
    id: 23,
    name: "Genetic Analysis",
    description: "A project focused on genetic data analysis.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "#",
    demoLink: "#",
    date: "2024-08-01",
    type: "research",
    tags: ["Biology", "Data Analysis", "Bioinformatics"],
  },
  {
    id: 24,
    name: "Pharmaceutical Chemistry",
    description: "A project exploring concepts in pharmaceutical chemistry.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "#",
    demoLink: "#",
    date: "2024-09-01",
    type: "research",
    tags: ["Chemistry", "Pharmaceuticals"],
  },
  {
    id: 25,
    name: "LCD Jumping Game",
    description: "A simple jumping game implemented on an LCD screen.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "#",
    demoLink: "#",
    date: "2023-10-01",
    type: "hardware",
    tags: ["Electronics", "Game Development"],
  },
  {
    id: 26,
    name: "Sushi API",
    description: "An API for managing sushi restaurant data.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "#",
    demoLink: "#",
    date: "2024-02-01",
    type: "software",
    tags: ["API", "Web Development"],
  },
  {
    id: 27,
    name: "Drug Design",
    description: "A project involving computational drug design.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "#",
    demoLink: "#",
    date: "2024-11-01",
    type: "research",
    tags: ["Chemistry", "Computational", "Drug Discovery"],
  },
]

export default function ProjectsPage() {
  const [sortBy, setSortBy] = useState("date")
  const [filterType, setFilterType] = useState("all")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const sortedAndFilteredProjects = mockProjects
    .filter((project) => filterType === "all" || project.type === filterType)
    .sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      } else if (sortBy === "name") {
        return a.name.localeCompare(b.name)
      } else if (sortBy === "type") {
        return a.type.localeCompare(b.type)
      }
      return 0
    })

  const projectTypes = ["all", ...Array.from(new Set(mockProjects.map((p) => p.type)))]

  return (
    <div
      className={`min-h-screen transition-all duration-700 ease-in-out bg-gradient-to-br from-rose-50 via-purple-50 to-blue-50`}
      style={{ fontFamily: "'Noto Sans', 'M PLUS 1p', sans-serif" }}
    >
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-6">
            <Link href="/">
              <Button
                variant="ghost"
                size="lg"
                className={`transition-all duration-300 text-slate-600 hover:text-slate-800 hover:bg-white/50`}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1
              className={`text-5xl font-bold transition-colors duration-500 text-slate-800`}
              style={{ fontFamily: "'Zen Kaku Gothic New', 'Noto Sans JP', sans-serif" }}
            >
              Projects
            </h1>
          </div>
        </div>

        {/* Filters and Sorting */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="relative">
            <Button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              variant="outline"
              className={`transition-all duration-300 border-purple-200 bg-white/70 text-slate-600 hover:bg-white/90`}
            >
              <Tag className="w-4 h-4 mr-2" />
              Filter: {filterType === "all" ? "All Types" : filterType}
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
            {isFilterOpen && (
              <div
                className={`absolute top-full left-0 mt-2 w-48 rounded-lg border shadow-lg z-10 border-purple-200 bg-white/95 backdrop-blur-sm`}
              >
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setFilterType(type)
                      setIsFilterOpen(false)
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-purple-500/20 transition-colors ${
                      filterType === type ? "bg-purple-500/30" : ""
                    } text-slate-700`}
                  >
                    {type === "all" ? "All Types" : type}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Button
            onClick={() => setSortBy("date")}
            variant={sortBy === "date" ? "default" : "outline"}
            className={`transition-all duration-300 ${
              sortBy === "date"
                ? "bg-purple-500 text-white"
                : "border-purple-200 bg-white/70 text-slate-600 hover:bg-white/90"
            }`}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Sort by Date
          </Button>

          <Button
            onClick={() => setSortBy("name")}
            variant={sortBy === "name" ? "default" : "outline"}
            className={`transition-all duration-300 ${
              sortBy === "name"
                ? "bg-purple-500 text-white"
                : "border-purple-200 bg-white/70 text-slate-600 hover:bg-white/90"
            }`}
          >
            Sort by Name
          </Button>

          <Button
            onClick={() => setSortBy("type")}
            variant={sortBy === "type" ? "default" : "outline"}
            className={`transition-all duration-300 ${
              sortBy === "type"
                ? "bg-purple-500 text-white"
                : "border-purple-200 bg-white/70 text-slate-600 hover:bg-white/90"
            }`}
          >
            Sort by Type
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedAndFilteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl border-2 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl border-purple-200 bg-gradient-to-br from-white/70 to-purple-50/70 backdrop-blur-sm shadow-lg`}
            >
              <img src={project.image || "/placeholder.svg"} alt={project.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700`}>
                    {project.type}
                  </span>
                  <span className={`text-sm text-slate-500`}>{new Date(project.date).toLocaleDateString()}</span>
                </div>

                <h3
                  className={`text-xl font-bold mb-3 transition-colors duration-500 text-slate-800`}
                  style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
                >
                  {project.name}
                </h3>

                <p
                  className={`text-sm mb-4 leading-relaxed transition-colors duration-500 text-slate-600`}
                  style={{ fontFamily: "'M PLUS 1p', sans-serif" }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className={`px-2 py-1 rounded text-xs bg-slate-100 text-slate-600`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 px-4 py-2 rounded-lg border-2 transition-all duration-300 hover:scale-105 text-center text-sm font-semibold border-purple-200 bg-white/70 text-slate-600 hover:bg-white/90`}
                  >
                    <Github className="w-4 h-4 inline mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-center text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600`}
                  >
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
