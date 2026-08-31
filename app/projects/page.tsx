"use client"

import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"

type Category = "hardware" | "process" | "software"

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
  categories?: Category[]
  award: string
}

const mockProjects: Project[] = [
  {
    id: 28,
    slug: "electric-ai-wheelchair",
    name: "Electric AI Wheelchair",
    description: "Manual wheelchair turned electric! This wheelchair uses electronic components such as modules and a PCB to make this wheelchair much for user interactive (and helps make life easier when you can't walk). I built this custom wheelchair because electric wheelchairs cost too much.",
    image: "/images/wheelchair-3d-model.png",
    codeLink: "https://github.com/prisca7c/Customized-AI-Electric-Wheelchair",
    demoLink: "not built yet",
    date: "2025-07-27",
    type: "hardware",
    tags: ["Web Development", "Firmware", "Electronics", "Robotics", "AI"],
    categories: ["hardware", "software"],
  },
  {
    id: 29,
    slug: "chordially",
    name: "Chordially (Hack the Valley X)",
    description: "Master guitar techniques with real-time hand tracking, personalized feedback, and an intelligent AI tutor that adapts to your learning pace.",
    image: "/images/chordially-card.jpg",
    codeLink: "https://github.com/nathanchiu05/Computer-Vision-Guitar-Tutor",
    demoLink: "https://devpost.com/software/ai-music-tutor",
    date: "2025-10-05",
    type: "hackathon",
    tags: ["Web Development", "AI"],
    categories: ["software"],
  },
  {
    id: 30,
    slug: "honko-clock",
    name: "HONK O' CLOCK (Technova)",
    description: "Regular alarms die to one lazy tap. HonkO'Clock forces you to play a goose themed obstacle dodging minigame before the buzzer will stop.",
    image: "/images/honkoclock-figma-geese.png",
    codeLink: "https://github.com/swaggy-mandy/goosealarm",
    demoLink: "https://devpost.com/software/project-name-luc8ph?ref_content=user-portfolio&ref_feature=in_progress",
    date: "2025-09-26",
    type: "hackathon",
    tags: ["Web Development", "Firmware", "Electrical", "Robotics"],
    categories: ["hardware", "software"],
  },
  {
    id: 31,
    slug: "aura-67",
    name: "Aura-67 (Hack the North)",
    description: "Self-balancing robot that follows natural-language commands and tracks objects with real-time computer vision.",
    image: "/images/aura67-team.jpg",
    codeLink: "https://github.com/HTN-Aura-67",
    demoLink: "https://devpost.com/software/aura-67?ref_content=user-portfolio&ref_feature=in_progress",
    date: "2025-09-12",
    type: "hackathon",
    tags: ["Web Development", "Firmware", "Electrical", "Robotics"],
    categories: ["hardware", "software"],
  },
  {
    id: 14,
    slug: "peas-are-best-frozen",
    name: "Peas Are Best Frozen (Undercity Hackathon)",
    description:
      "A snow peashooter inspired by the video game Plants vs. Zombies. Turn on the shooter and watch the peas fly out!",
    image: "/images/peashooter-final-assembly.png",
    codeLink: "https://github.com/prisca7c/Undercity",
    demoLink: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/dfe9f9703f4788b4bee81e907d5816168c87b1a2_img_2172.mov",
    date: "2025-07-11",
    type: "hackathon",
    tags: ["Robotics"],
    categories: ["hardware", "software"],
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
    categories: ["process"],
  },
  {
    id: 16,
    slug: "baylee",
    name: "Baylee (UTRAHacks)",
    description: "Let’s revolutionize health care, one emotion at a time.",
    image: "/images/baylee-card.png",
    codeLink: "https://github.com/Badbird5907/UTRA2025",
    demoLink: "https://devpost.com/software/baylee",
    date: "2025-02-01",
    type: "hackathon",
    tags: ["Firmware", "Electrical"],
    categories: ["hardware", "software"],
    award: "Best Use of Gen AI"
  },
  {
    id: 17,
    slug: "oss-oil-spill-sensor",
    name: "O.S.S (ElleHacks)",
    description: "Generate data for sensors and plot points on Matplotlib. Choose the farthest points around an oil spill to throw a skimmer. A Tinkercad-coded/built density sensor model is available for use as well.",
    image: "/images/oss-card.jpeg",
    codeLink: "https://www.tinkercad.com/things/jYIspEysYSF?sharecode=1ljc3PHq6QdpT4oOubdF68DmC-8tZFG0BMOgNkd53QM",
    demoLink: "https://devpost.com/software/o-s-s",
    date: "2023-02-17",
    type: "hackathon",
    tags: ["Firmware"],
    categories: ["hardware", "software"],
    award: "Finalist, Top 10"
  },
  {
    id: 18,
    slug: "neo-alert",
    name: "Neo=Alert (Hack the Ridge)",
    description: "Revolutionizing healthcare in under-resourced hospitals with our custom built AI-powered (not an API call) early warning system, designed to prevent bradycardia deaths. NEE WOO, WEEE WOO!",
    image: "/images/neoalert-card.jpg",
    codeLink: "https://github.com/Badbird5907/htr-2024",
    demoLink: "https://devpost.com/software/neo-alert",
    date: "2024-12-14",
    type: "hackathon",
    tags: ["AI"],
    categories: ["software"],
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
    image: "/images/macropad-finished.png",
    codeLink: "https://github.com/prisca7c/Hackpad",
    demoLink: "N/A",
    date: "2025-06-26",
    type: "hardware",
    tags: ["Electronics"],
    categories: ["hardware"],
  },
  {
    id: 22,
    slug: "bean-cake",
    name: "BeanCake",
    description: "A small, fast, quiet spy robot with a live streaming camera, controlled by a remote with two joysticks and a live video feed on a built in display.",
    image: "/images/beancake-bot.jpeg",
    codeLink: "https://github.com/bernininini/bean-cake",
    demoLink: "https://www.reddit.com/user/spicycoughdrops/comments/1mkl523/beancake/",
    date: "2025-05-01",
    type: "hardware",
    tags: ["Firmware", "Electronics", "Robotics", "3D Print"],
    categories: ["hardware", "software"],
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
    categories: ["process"],
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
    categories: ["process"],
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
    categories: ["process"],
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
    categories: ["software"],
  },
  {
    id: 33,
    slug: "music-and-life",
    name: "Software Engineering Intern",
    description: "Built the sign-in and studio portal for Music & Life London, a music studio and instrument shop in Harrow, London.",
    image: "/images/musiclife-storefront.jpg",
    codeLink: "#",
    demoLink: "#",
    date: "2026-05-11",
    type: "software",
    tags: ["Web Development"],
    categories: ["software"],
  },
  {
    id: 36,
    slug: "semiconductor-fabrication",
    name: "Semiconductor Fabrication",
    description: "Hardware validating our fabrication line by building a MOSCAP: growing dielectric oxide, patterning contacts, and sputtering aluminum across the tube furnace, spin coater, lithography, and etching steps.",
    image: "/images/semiconductor-lithography-test-pattern.webp",
    codeLink: "#",
    demoLink: "#",
    date: "2026-03-10",
    type: "research",
    tags: ["Semiconductors", "Fabrication"],
    categories: ["process"],
  },
  {
    id: 37,
    name: "Quantum Educator",
    description: "Quantum outreach and education at the Institute for Quantum Computing, with a strong optics component.",
    image: "/images/iqc-building.jpg",
    codeLink: "#",
    demoLink: "#",
    date: "2025-10-25",
    type: "outreach",
    tags: ["Quantum Computing", "Outreach", "Optics"],
    categories: ["process"],
  },
  {
    id: 38,
    name: "HardHAQ / NAQC",
    description: "Using ANSYS HFSS and COMSOL Multiphysics to simulate trapped ion and photonic (Lumerical) hardware for HardHAQ, in partnership with the National Association of Quantum Clubs.",
    image: "/images/hardhaq-card.webp",
    codeLink: "#",
    demoLink: "#",
    date: "2025-11-15",
    type: "outreach",
    tags: ["Quantum Computing", "Clubs", "HFSS", "COMSOL"],
    categories: ["process", "hardware"],
  },
  {
    id: 39,
    slug: "battery-midnight-sun",
    name: "Battery (Midnight Sun)",
    description: "Designed a 32S1P prismatic Li-ion cell layout with tool-free modular trays for the team battery pack, and performed CFD analysis in Ansys on the pack's cooling system.",
    image: "/images/battery-cell-layout-2.webp",
    codeLink: "#",
    demoLink: "#",
    date: "2025-09-12",
    type: "hardware",
    tags: ["Batteries", "Solar Racing"],
    categories: ["hardware"],
  },
  {
    id: 40,
    name: "VEX Robotics",
    description: "A project involving VEX Robotics.",
    image: "/images/robot-competition.jpeg",
    codeLink: "#",
    demoLink: "#",
    date: "2024-08-30",
    type: "hardware",
    tags: ["Robotics", "VEX"],
    categories: ["hardware"],
  },
]

const MONTH_ABBR = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function formatDate(dateString: string) {
  const d = new Date(dateString)
  return `${MONTH_ABBR[d.getUTCMonth()]} ${d.getUTCDate()} ${d.getUTCFullYear()}`
}

const FILTERS: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "hardware", label: "Hardware" },
  { value: "process", label: "Process" },
  { value: "software", label: "Software" },
]

function ProjectsContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const filterParam = searchParams.get("filter")
  const activeFilter: Category | "all" =
    filterParam === "hardware" || filterParam === "process" || filterParam === "software" ? filterParam : "all"

  const setFilter = (value: Category | "all") => {
    const query = value === "all" ? "" : `?filter=${value}`
    router.replace(`/projects${query}`, { scroll: false })
  }

  const sortedProjects = [...mockProjects]
    .filter((project) => activeFilter === "all" || project.categories?.includes(activeFilter))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

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

        {/* Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {FILTERS.map((f) => (
            <Button
              key={f.value}
              onClick={() => setFilter(f.value)}
              variant={activeFilter === f.value ? "default" : "outline"}
              className={`transition-all duration-300 ${
                activeFilter === f.value
                  ? "bg-purple-500 text-white"
                  : "border-purple-200 bg-white/70 text-slate-600 hover:bg-white/90"
              }`}
            >
              {f.label}
            </Button>
          ))}
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
                <div className="flex items-center justify-end mb-3">
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

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className={`px-2 py-1 rounded text-xs bg-slate-100 text-slate-600`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={null}>
      <ProjectsContent />
    </Suspense>
  )
}
