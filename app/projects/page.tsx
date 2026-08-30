"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

interface Project {
  id: number
  slug?: string
  name: string
  description: string
  image: string
  codeLink: string
  demoLink: string
  date: string
  type: string
  tags: string[]
  award: string
}

const mockProjects: Project[] = [
  {
    id: 28,
    slug: "electric-ai-wheelchair",
    name: "Electric AI Wheelchair",
    description: "Manual wheelchair turned electric! This wheelchair uses electronic components such as modules and a PCB to make this wheelchair much for user interactive (and helps make life easier when you can't walk). I built this custom wheelchair because electric wheelchairs cost too much.",
    image: "https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/166f4aef03582ae01d89af806c910cd2c8c8cbac_screenshot_2025-08-06_at_12.11.10___pm.png",
    codeLink: "https://github.com/prisca7c/Customized-AI-Electric-Wheelchair",
    demoLink: "not built yet",
    date: "2025-07-27",
    type: "hardware",
    tags: ["Software", "Web Development", "Hardware", "Firmware", "Electronics", "Robotics", "AI"],
  },
  {
    id: 29,
    slug: "chordially",
    name: "Chordially",
    description: "Master guitar techniques with real-time hand tracking, personalized feedback, and an intelligent AI tutor that adapts to your learning pace.",
    image: "https://img.youtube.com/vi/1qn4usBFnC4/hqdefault.jpg",
    codeLink: "https://github.com/nathanchiu05/Computer-Vision-Guitar-Tutor",
    demoLink: "https://devpost.com/software/ai-music-tutor",
    date: "2025-10-05",
    type: "hackathon",
    tags: ["Software", "Web Development", "AI"],
  },
  {
    id: 30,
    slug: "honko-clock",
    name: "HONK O' CLOCK",
    description: "Regular alarms die to one lazy tap. HonkO'Clock forces you to play a goose themed obstacle dodging minigame before the buzzer will stop.",
    image: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/783/461/datas/original.png",
    codeLink: "https://github.com/swaggy-mandy/goosealarm",
    demoLink: "https://devpost.com/software/project-name-luc8ph?ref_content=user-portfolio&ref_feature=in_progress",
    date: "2025-09-26",
    type: "hackathon",
    tags: ["Software", "Web Development", "Hardware", "Firmware", "Electrical", "Robotics"],
  },
  {
    id: 31,
    slug: "aura-67",
    name: "Aura-67 (Hack the North 2025)",
    description: "Self-balancing robot that follows natural-language commands and tracks objects with real-time computer vision.",
    image: "https://img.youtube.com/vi/rSfp2yne1f4/hqdefault.jpg",
    codeLink: "https://github.com/HTN-Aura-67",
    demoLink: "https://devpost.com/software/aura-67?ref_content=user-portfolio&ref_feature=in_progress",
    date: "2025-09-12",
    type: "hackathon",
    tags: ["Software", "Web Development", "Hardware", "Firmware", "Electrical", "Robotics"],
  },
  {
    id: 13,
    name: "graggleblogfiggle (Apocalypse Hackathon 2024)",
    description: "A little pea trying to make it big in the world.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "https://github.com/Stwikeyy/graggleblogfiggle",
    demoLink: "https://docs.google.com/presentation/d/1pm3ocpUQKqpZ2OpVfdYTIdS68fsuPbH9ZrrdBp5Dfzk/edit?usp=sharing",
    date: "2024-05-17",
    type: "hackathon",
    tags: ["Software", "Web Development"],
    award: "1st Place"
  },
  {
    id: 14,
    slug: "peas-are-best-frozen",
    name: "Peas Are Best Frozen (Undercity Hackathon 2025)",
    description:
      "A snow peashooter inspired by the video game Plants vs. Zombies. Turn on the shooter and watch the peas fly out!",
    image: "https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/3b5c93c9a5382334d7de017a60c849d9f15c4010_screenshot_2025-08-01_at_10.05.21___pm.png",
    codeLink: "https://github.com/prisca7c/Undercity",
    demoLink: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/dfe9f9703f4788b4bee81e907d5816168c87b1a2_img_2172.mov",
    date: "2025-07-11",
    type: "hackathon",
    tags: ["Software", "Robotics"],
    award: "Finalist, Top 7"
  },
  {
    id: 15,
    slug: "biodegradable-materials",
    name: "An Analysis of Biodegradable Materials to Reduce Waste Generation (NYASJA 2024)",
    description: "A research project analyzing biodegradable materials and their impact on waste generation.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "N/A",
    demoLink: "https://joinlaunchpad.com/#/projects/5169/an-analysis-of-biodegradable-materials-to-reduce-waste-generation",
    date: "2024-11-01",
    type: "research",
    tags: ["Materials Science", "Environmental", "Research"],
  },
  {
    id: 16,
    slug: "baylee",
    name: "Baylee (UTRAHacks 2025)",
    description: "Let’s revolutionize health care, one emotion at a time.",
    image: "https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/003/253/758/datas/medium.png",
    codeLink: "https://github.com/Badbird5907/UTRA2025",
    demoLink: "https://devpost.com/software/baylee",
    date: "2025-02-01",
    type: "hackathon",
    tags: ["Software", "Hardware", "Firmware", "Electrical"],
    award: "Best Use of Gen AI"
  },
  {
    id: 17,
    slug: "oss-oil-spill-sensor",
    name: "O.S.S (ElleHacks 2023)",
    description: "Generate data for sensors and plot points on Matplotlib. Choose the farthest points around an oil spill to throw a skimmer. A Tinkercad-coded/built density sensor model is available for use as well.",
    image: "https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/387/204/datas/medium.jpeg",
    codeLink: "https://www.tinkercad.com/things/jYIspEysYSF?sharecode=1ljc3PHq6QdpT4oOubdF68DmC-8tZFG0BMOgNkd53QM",
    demoLink: "https://devpost.com/software/o-s-s",
    date: "2023-02-17",
    type: "hackathon",
    tags: ["Software", "Hardware", "Firmware"],
    award: "Finalist, Top 10"
  },
  {
    id: 18,
    slug: "neo-alert",
    name: "Neo=Alert (Hack the Ridge 2024)",
    description: "Revolutionizing healthcare in under-resourced hospitals with our custom built AI-powered (not an API call) early warning system, designed to prevent bradycardia deaths. NEE WOO, WEEE WOO!",
    image: "https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/003/183/795/datas/medium.jpg",
    codeLink: "https://github.com/Badbird5907/htr-2024",
    demoLink: "https://devpost.com/software/neo-alert",
    date: "2024-12-01",
    type: "hackathon",
    tags: ["Software", "AI"],
    award: "2nd Place"
  },

  /*
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
  */
  {
    id: 21,
    slug: "accentbean-macropad",
    name: "Diacritics Macropad",
    description: "An 8 key macropad with a rotary encoder and magnetic OLED case, built to make typing accented letters faster by holding a letter and an accent key at the same time.",
    image: "https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/d027a40ad0b68be71379af5d2603084f67f54375_screenshot_2025-07-08_at_7.30.15___pm.png",
    codeLink: "https://github.com/prisca7c/Hackpad",
    demoLink: "N/A",
    date: "2025-06-26",
    type: "hardware",
    tags: ["Hardware", "Electronics", ""],
  },
  {
    id: 22,
    slug: "bean-cake",
    name: "BeanCake",
    description: "A small, fast, quiet spy robot with a live streaming camera, controlled by a remote with two joysticks and a live video feed on a built in display.",
    image: "https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/dd96ab56cc75483d5874863f88bd0fe8a44abc28_whatsapp_image_2025-08-07_at_10.11.06_pm__2_.jpeg",
    codeLink: "https://github.com/bernininini/bean-cake",
    demoLink: "https://www.reddit.com/user/spicycoughdrops/comments/1mkl523/beancake/",
    date: "2025-05-01",
    type: "hardware",
    tags: ["Software", "Hardware", "Firmware", "Electronics", "Robotics", "3D Print"],
  },
  {
    id: 23,
    slug: "genetic-analysis-research",
    name: "Genetic Analysis",
    description: "A project focused on genetic data analysis.",
    image: "/images/genetic-malpighian.jpg",
    codeLink: "#",
    demoLink: "#",
    date: "2024-08-01",
    type: "research",
    tags: ["Biology", "Data Analysis", "Bioinformatics"],
  },
  {
    id: 24,
    slug: "pharmaceutical-chemistry",
    name: "Pharmaceutical Chemistry",
    description: "A project exploring concepts in pharmaceutical chemistry.",
    image: "/images/pharmchem-antimicrobial.jpg",
    codeLink: "#",
    demoLink: "#",
    date: "2024-09-01",
    type: "research",
    tags: ["Chemistry", "Pharmaceuticals"],
  },
  {
    id: 27,
    slug: "pharmaceutical-chemistry",
    name: "Drug Design",
    description: "A project involving computational drug design.",
    image: "/images/pharmchem-drug-molecule.jpg",
    codeLink: "#",
    demoLink: "#",
    date: "2024-11-01",
    type: "research",
    tags: ["Chemistry", "Computational", "Drug Discovery"],
  },
  {
    id: 32,
    slug: "iquhack-2026",
    name: "Multipartite Entanglement Detection using Classical Shadows (MIT iQuHACK)",
    description: "Detected multipartite entanglement across IQM's Sirius, Garnet, and Emerald quantum computers using classical shadows and Mermin inequality tests, built in both Qiskit and NVIDIA CUDA-Q.",
    image: "/images/iquhack-team.jpg",
    codeLink: "https://github.com/rahulranjansah/IQM-Iquhack",
    demoLink: "/iqm-mit-quantum-hackathon.pdf",
    date: "2026-01-24",
    type: "hackathon",
    tags: ["Quantum Computing", "Qiskit", "CUDA-Q"],
  },
  {
    id: 33,
    slug: "music-and-life",
    name: "Software Engineering Intern",
    description: "Built the sign-in and studio portal for Music & Life London, a music studio and instrument shop in Harrow, London.",
    image: "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/469448909_122124976682550415_1404006354554094678_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=h13Ipu49k1IQ7kNvwF_hH93&_nc_oc=AdooIAUqMcyfL-3BdBnltCVcMh41AnNpnRS6-PARr6wvOfKfevaZZaAIyj6ib6Ri5Tg&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=uGYEDwXtXKfWFTNPxkuqaQ&_nc_ss=7b289&oh=00_AQJSQZBfibs2tsiHu429wHagyp5NfeAGqEvI392KC_aBWw&oe=6A9A6A09",
    codeLink: "#",
    demoLink: "#",
    date: "2024-09-01",
    type: "software",
    tags: ["Software", "Web Development"],
  },
  {
    id: 34,
    name: "Waterloo Nanotechnology Conference",
    description: "Logistics Coordinator responsible for event location, conference schedule, food and refreshments, photography and videography, presentation set up, custodial services, and other conference needs like speaker gifts and applications.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "#",
    demoLink: "#",
    date: "2025-06-01",
    type: "work",
    tags: ["Event Coordination", "Nanotechnology"],
  },
  {
    id: 35,
    name: "Quantum Hardware (Qiskit)",
    description: "A project involving quantum hardware and Qiskit.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "#",
    demoLink: "#",
    date: "2025-09-01",
    type: "research",
    tags: ["Quantum Computing", "Qiskit"],
  },
  {
    id: 36,
    name: "Semiconductor Fabrication",
    description: "A project involving semiconductor fabrication.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "#",
    demoLink: "#",
    date: "2025-09-01",
    type: "research",
    tags: ["Semiconductors", "Fabrication"],
  },
  {
    id: 37,
    name: "Quantum Outreach",
    description: "A project involving quantum outreach and education.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "#",
    demoLink: "#",
    date: "2025-09-01",
    type: "outreach",
    tags: ["Quantum Computing", "Outreach"],
  },
  {
    id: 38,
    name: "HardHAQ / NAQC",
    description: "A project involving HardHAQ and the National Association of Quantum Clubs.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "#",
    demoLink: "#",
    date: "2025-09-01",
    type: "outreach",
    tags: ["Quantum Computing", "Clubs"],
  },
  {
    id: 39,
    name: "Battery (Midnight Sun)",
    description: "A project involving battery systems with Midnight Sun.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "#",
    demoLink: "#",
    date: "2025-09-01",
    type: "hardware",
    tags: ["Batteries", "Solar Racing"],
  },
  {
    id: 40,
    name: "VEX Robotics",
    description: "A project involving VEX Robotics.",
    image: "/placeholder.svg?height=200&width=300",
    codeLink: "#",
    demoLink: "#",
    date: "2025-09-01",
    type: "hardware",
    tags: ["Robotics", "VEX"],
  },
]

const MONTH_ABBR = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function formatDate(dateString: string) {
  const d = new Date(dateString)
  return `${MONTH_ABBR[d.getUTCMonth()]} ${d.getUTCDate()} ${d.getUTCFullYear()}`
}

export default function ProjectsPage() {
  const router = useRouter()

  const sortedProjects = [...mockProjects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => project.slug && router.push(`/projects/${project.slug}`)}
              className={`rounded-2xl border-2 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl border-purple-200 bg-gradient-to-br from-white/70 to-purple-50/70 backdrop-blur-sm shadow-lg ${
                project.slug ? "cursor-pointer" : ""
              }`}
            >
              <img src={project.image || "/placeholder.svg"} alt={project.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700`}>
                    {project.type}
                  </span>
                  <span className={`text-sm text-slate-500`}>{formatDate(project.date)}</span>
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
                    onClick={(e) => e.stopPropagation()}
                    className={`flex-1 px-4 py-2 rounded-lg border-2 transition-all duration-300 hover:scale-105 text-center text-sm font-semibold border-purple-200 bg-white/70 text-slate-600 hover:bg-white/90`}
                  >
                    <Github className="w-4 h-4 inline mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
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
