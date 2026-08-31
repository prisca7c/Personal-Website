// lib/case-studies.ts
// Data for all individual project case study pages.
// Add this file to your repo at: lib/case-studies.ts

export interface ProcessStep {
  text: string
  image?: string
  caption?: string
  dot: "blue" | "pink" | "cyan" | "purple" | "orange" | "green"
}

export interface ResultItem {
  label: string
  dot: "blue" | "pink" | "cyan" | "purple" | "orange" | "green"
}

export interface Repo {
  name: string
  url: string
}

export interface CaseStudy {
  slug: string
  title: string
  subtitle: string
  badges: string[]
  hook: string
  liveUrl?: string
  liveUrlImage?: string
  videoUrl?: string
  videoUrlImage?: string
  repos: Repo[]
  statusLine?: string
  process: ProcessStep[]
  result: {
    items: ResultItem[]
    narrative: string
  }
  builtWith: string[] | { category: string; items: string[] }[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "electric-ai-wheelchair",
    title: "Electric AI Wheelchair",
    subtitle: "Customized AI Electric Wheelchair. 89 hours logged",
    badges: ["Hardware", "Firmware", "Robotics", "AI"],
    hook:
      "Electric wheelchairs cost thousands more than manual ones. I converted a standard manual wheelchair into a 24V motorized, AI assisted one myself, building it as a gift for my grandpa, who has Parkinson's, with obstacle sensing, fall detection, and GPS layered on top of standard drive controls.",
    repos: [{ name: "Customized AI Electric Wheelchair", url: "https://github.com/prisca7c/Customized-AI-Electric-Wheelchair" }],
    statusLine: "Design phase complete. PCB routed, BOM sourced, all mechanical parts modeled. Fabrication and first power on are next.",
    process: [
      {
        dot: "blue",
        image: "/images/wheelchair-3d-model.png",
        caption: "Full 3D model of the wheelchair with electronics integrated",
        text: "Modeled the entire wheelchair in CAD using real frame measurements. The battery box, PCB housing, and cable routing all had to clear the cross braces and leave room for the user's legs.",
      },
      {
        dot: "pink",
        image: "/images/wheelchair-pcb-schematic.png",
        caption: "PCB schematic in KiCad",
        text: "Designed the full schematic in KiCad with hierarchical sheets for power, motor control, comms, and sensors. Broke out every pin on the ATmega2560 for PWM, analog sensing, and serial comms.",
      },
      {
        dot: "orange",
        image: "/images/wheelchair-pcb-wiring.png",
        caption: "PCB wiring diagram. 24V copper pour on the back, 12V on the front",
        text: "At 10A continuous current, traces alone could not fit the compact 4 layer board. Switched to dedicated copper pours per voltage rail, which solved current capacity and doubled as heat spreading.",
      },
      {
        dot: "cyan",
        image: "/images/wheelchair-pcb-render.png",
        caption: "3D render of the finished PCB",
        text: "Passed KiCad's design rule checks after several routing iterations. Final board carries motor drivers, sensor headers, and comms for the Pi, ESP32, and ATmega all on one 150 by 100mm board.",
      },
      {
        dot: "purple",
        image: "/images/wheelchair-battery-box.png",
        caption: "Battery box, 3D printed",
        text: "Designed a fully enclosed battery box with ventilation and a mounting area for the BMS and main power switch. Mounts under the seat without interfering with leg room.",
      },
      {
        dot: "green",
        image: "/images/wheelchair-control-panel.png",
        caption: "User control panel where external modules connect",
        text: "Built a waterproof control panel with a hall effect joystick and six membrane buttons, magnetically mounted so it can be removed for cleaning.",
      },
      {
        dot: "blue",
        image: "/images/wheelchair-handle-lock.png",
        caption: "Handle with lock mechanism",
        text: "Designed a folding walker handle with a spring loaded locking pin, a rubber grip, and an emergency stop button built into the handle itself.",
      },
      {
        dot: "pink",
        image: "/images/wheelchair-pcb-housing.png",
        caption: "PCB housing, elevated for cooling and strapped to the frame legs",
        text: "The housing is raised off the frame to allow airflow and room for heatsinks or thermal pads, and straps directly to the four legs of the wheelchair for a secure mount.",
      },
    ],
    result: {
      items: [
        { label: "4 layer custom PCB, 150 by 100mm, passing all design rule checks", dot: "green" },
        { label: "6 custom 3D printed parts modeled to real wheelchair measurements", dot: "blue" },
        { label: "60 plus line item BOM fully sourced across Digi-Key and AliExpress", dot: "purple" },
        { label: "About 10 hour estimated runtime on the 24V lithium ion pack", dot: "pink" },
      ],
      narrative: "Design phase is done. Next milestone is fabrication, first power on, and physical assembly.",
    },
    builtWith: [
      { category: "Electronics", items: ["ATmega2560-16AU MCU", "ESP32-C3-MINI", "BTS7960B Motor Drivers", "L298N Motor Drivers", "LM7805 / AMS1117-3.3"] },
      { category: "Sensors", items: ["MPU6050 IMU", "GPS Module", "3x Ultrasonic Sensors", "Temperature Sensors", "DS3231 RTC"] },
      { category: "Firmware", items: ["ATmega2560 firmware", "ESP32-C3 firmware", "Raspberry Pi Zero (AI/vision)"] },
      { category: "Mechanical / 3D Printed", items: ["Armrest", "Battery Box", "Control Board Housing", "Handle + Lock Mechanism", "PCB Walls / Housing"] },
      { category: "Power", items: ["24V Li-ion (18650) Pack", "24V to 12V / 24V to 5V Bucks", "XT60 Connector"] },
    ],
  },
  {
    slug: "aura-67",
    title: "Aura-67",
    subtitle: "Hack the North 2025",
    badges: ["Robotics", "Computer Vision", "AI"],
    hook:
      "A self balancing robot you can control by talking to it. Say 'move toward the red cup' and a language model interprets the request, the vision system finds the target, and the robot drives there.",
    repos: [{ name: "Aura 67 (org)", url: "https://github.com/HTN-Aura-67" }],
    videoUrl: "https://www.youtube.com/shorts/rSfp2yne1f4",
    videoUrlImage: "/images/aura67-card.jpg",
    process: [
      {
        dot: "blue",
        image: "/images/aura67-team.jpg",
        caption: "Aura-67, head module with LED matrix eyes",
        text: "Built the self balancing controller using an IMU and gyroscope feedback loop running on an ESP32-S3.",
      },
      {
        dot: "green",
        image: "/images/aura67-gallery-2.jpg",
        caption: "Assembling the base",
        text: "Added a Raspberry Pi Zero 2 W in the head for camera capture and vision processing, streaming frames for object tracking.",
      },
      { dot: "orange", text: "Integrated a language model so natural language commands map to concrete actions like follow object, stop, or return to base." },
      {
        dot: "cyan",
        image: "/images/aura67-gallery-1.jpg",
        caption: "Live vision tracking dashboard",
        text: "Added a time of flight distance sensor in the head so the robot slows and stops automatically near obstacles.",
      },
    ],
    result: {
      items: [
        { label: "Two control modes: natural language and manual joystick", dot: "green" },
        { label: "Real time object tracking with an onboard camera", dot: "blue" },
        { label: "Built in obstacle slowing via time of flight sensing", dot: "purple" },
      ],
      narrative: "A working self balancing robot that follows spoken commands and tracks objects live.",
    },
    builtWith: ["C", "Python", "TypeScript", "React", "Next.js", "FastAPI", "OpenCV", "PyTorch", "TensorFlow", "ESP32", "Raspberry Pi"],
  },
  {
    slug: "accentbean-macropad",
    title: "Diacritics Macropad",
    subtitle: "8 key macropad built for typing accented letters",
    badges: ["Hardware", "Firmware", "Electronics"],
    hook:
      "An 8 key macropad with a rotary encoder and OLED display, built to make typing accented letters faster by holding a letter and an accent key at the same time.",
    repos: [{ name: "Hackpad", url: "https://github.com/prisca7c/Hackpad" }],
    process: [
      {
        dot: "blue",
        image: "/images/macropad-finished.png",
        caption: "The finished macropad, fully assembled",
        text: "Designed around a Seeed XIAO RP2040 running KMK firmware, with 8 mechanical switches and a rotary encoder for volume or scroll control.",
      },
      {
        dot: "pink",
        image: "/images/macropad-schematic.png",
        caption: "Schematic",
        text: "Laid out the schematic to keep the matrix wiring simple, since 8 keys plus an encoder does not need a large matrix.",
      },
      {
        dot: "orange",
        image: "/images/macropad-pcb.png",
        caption: "The PCB",
        text: "Routed the PCB to fit inside a compact case, with the OLED display connector positioned so the case magnets would not interfere with the screen.",
      },
      {
        dot: "cyan",
        image: "/images/macropad-case.png",
        caption: "Case and assembly",
        text: "Built a detachable magnetic OLED case using small magnets, so the display module can be popped off and reattached without tools.",
      },
    ],
    result: {
      items: [
        { label: "8 key macropad with working rotary encoder and OLED", dot: "green" },
        { label: "Detachable magnetic case, no tools required", dot: "blue" },
        { label: "KMK firmware handling combined letter plus accent key presses", dot: "purple" },
      ],
      narrative: "A working macropad that speeds up typing accented characters through simultaneous key holds.",
    },
    builtWith: ["Seeed XIAO RP2040", "KMK Firmware", "KiCad", "5x2mm Magnets", "Mechanical Switches"],
  },
  {
    slug: "peas-are-best-frozen",
    title: "Peas Are Best Frozen",
    subtitle: "Undercity Hackathon 2025. Finalist, Top 7",
    badges: ["Hardware", "Mechanical", "Firmware"],
    hook:
      "A snow peashooter inspired by Plants vs. Zombies. Turn it on and watch the peas fly out.",
    repos: [{ name: "Peas Are Best Frozen", url: "https://github.com/prisca7c/PEAS-ARE-BEST-FROZEN---Finalist-Undercity-2025" }],
    process: [
      {
        dot: "blue",
        image: "/images/peashooter-build.png",
        caption: "Build in progress",
        text: "Built the flywheel launch mechanism using two N20 gear motors driven by a TB6612FNG motor driver, controlled from an Arduino R3 with an ESP32 for wireless triggering.",
      },
      {
        dot: "pink",
        image: "/images/peashooter-final-assembly.png",
        caption: "Final assembly",
        text: "Housed the mechanism inside a mesh dome food cover shaped and painted to look like a Plants vs. Zombies peashooter, using deflated toy light up balls as the peas.",
      },
    ],
    result: {
      items: [
        { label: "Finalist, Top 7 at Undercity Hackathon 2025", dot: "green" },
        { label: "Working dual flywheel launch mechanism", dot: "blue" },
        { label: "Full costume build from repurposed household materials", dot: "purple" },
      ],
      narrative: "A working, judged, finalist project built almost entirely from recycled materials and 3D printed flywheel mounts.",
    },
    builtWith: ["ESP32", "Arduino R3", "TB6612FNG", "N20 Gear Motors", "3D Printed Parts"],
  },
  {
    slug: "bean-cake",
    title: "BEAN-CAKE",
    subtitle: "Spy bot on wheels",
    badges: ["Hardware", "Firmware", "Robotics"],
    hook:
      "A small, fast, quiet spy robot with a live streaming camera, controlled by a remote with two joysticks and a live video feed on a built in display.",
    repos: [{ name: "BEAN-CAKE", url: "https://github.com/bernininini/bean-cake" }],
    process: [
      {
        dot: "blue",
        image: "/images/beancake-bot.jpeg",
        caption: "The bot",
        text: "Built the bot around an ESP32-S3-CAM streaming MJPEG video over WiFi, driven by two high speed coreless motors for quiet tank style movement.",
      },
      {
        dot: "pink",
        image: "/images/beancake-remote.jpeg",
        caption: "The remote",
        text: "Built a handheld remote with dual analog joysticks and a 4 inch TFT display showing the live video feed, so the operator can drive while watching the stream.",
      },
    ],
    result: {
      items: [
        { label: "Live MJPEG video streaming over WiFi", dot: "green" },
        { label: "Tank style dual joystick control", dot: "blue" },
        { label: "Custom 3D printed frame and track system", dot: "purple" },
      ],
      narrative: "A working remote controlled spy bot with live video feedback on the controller itself.",
    },
    builtWith: ["ESP32-S3-CAM", "TFT ILI9341 Display", "TB6612FNG", "Coreless Motors", "LiPo Battery", "3D Printed Parts"],
  },
  {
    slug: "genetic-analysis-research",
    title: "Genetic Analysis Research",
    subtitle: "York University, with MSc Marishia Agard",
    badges: ["Biology", "Genetics", "Research"],
    hook:
      "Studied the neuroendocrine system that regulates renal organs in fruit flies, genetically modifying them with the Gal4/UAS system and testing hormone driven urine secretion.",
    repos: [],
    process: [
      {
        dot: "blue",
        image: "/images/genetic-malpighian.jpg",
        caption: "Pulled Malpighian tubules and guts",
        text: "Practiced dissecting the Malpighian tubules and guts of fruit flies, working from the torso down to the lower abdomen to extract them intact.",
      },
      {
        dot: "pink",
        image: "/images/genetic-gfp.jpg",
        caption: "Clear fluorescent protein using the Gal4/UAS system",
        text: "Used the Gal4/UAS system to genetically modify flies, add a GFP marker, and localize gene expression, then imaged the tissue under a fluorescent microscope.",
      },
      {
        dot: "orange",
        image: "/images/genetic-urine-droplet.jpg",
        caption: "15 microliter urine droplet tied to a pin",
        text: "Ran a Ramsay Assay to test diuretic effects of tachykinin hormones, comparing urine secretion between control and treatment wells over a one hour incubation.",
      },
    ],
    result: {
      items: [
        { label: "Hands on Gal4/UAS genetic modification and GFP tagging", dot: "green" },
        { label: "Completed a full Ramsay Assay comparing hormone treated and control groups", dot: "blue" },
        { label: "Ran heat and cold stress survival trials on live fruit flies", dot: "purple" },
      ],
      narrative: "A week of hands on genetics work bridging fruit fly biology to mammalian kidney function.",
    },
    builtWith: ["Gal4/UAS System", "Fluorescent Microscopy", "Ramsay Assay", "Drosophila melanogaster"],
  },
  {
    slug: "biodegradable-materials",
    title: "Biodegradable Materials Analysis",
    subtitle: "NYAS, Team 5169, mentored by Susanne Antonucci",
    badges: ["Research", "Sustainability", "Materials Science"],
    hook:
      "Researched which biodegradable materials could realistically replace plastic and synthetic textiles, and recommended hemp as the strongest overall alternative.",
    repos: [],
    process: [
      { dot: "blue", text: "Analyzed the scale of the plastic waste problem, including emissions data and per capita plastic footprint by region." },
      { dot: "pink", text: "Built a hypothesis around biodegradable textiles like wool, cotton, jute, and hemp as realistic plastic substitutes." },
      { dot: "orange", text: "Compared candidate materials using chemical composition databases and industry analysis." },
      { dot: "cyan", text: "Concluded hemp was the strongest plastic alternative, needing fewer resources than cotton or jute and breaking down faster than wool." },
    ],
    result: {
      items: [
        { label: "Identified hemp as the top plastic and textile alternative", dot: "green" },
        { label: "Quantified regional plastic footprint using World Bank data", dot: "blue" },
      ],
      narrative: "A research backed case for hemp as a scalable, lower resource alternative to plastic and conventional textiles.",
    },
    builtWith: ["Chemical Databases", "Industry Analysis", "Research Methodology"],
  },
  {
    slug: "pharmaceutical-chemistry",
    title: "Pharmaceutical Chemistry & Drug Design",
    subtitle: "York University, with Dr. Kyle Belozerov and Dr. Derek Jackson",
    badges: ["Chemistry", "Pharmaceuticals", "Drug Design"],
    hook:
      "Synthesized Aspirin and Oil of Wintergreen, extracted natural antimicrobial compounds from spices, and used Nanome to model a drug molecule and study drug-enzyme interactions.",
    repos: [],
    process: [
      {
        dot: "blue",
        image: "/images/pharmchem-antimicrobial.jpg",
        caption: "Clear antimicrobial activity",
        text: "Set up bioassays and extracted natural products from a variety of spices, several of which showed clear antimicrobial activity.",
      },
      {
        dot: "pink",
        image: "/images/pharmchem-drug-molecule.jpg",
        caption: "ASA:214(a) drug molecule",
        text: "Used Nanome to build and explore a unique drug molecule, studying drug-enzyme interactions in 3D.",
      },
      {
        dot: "orange",
        image: "/images/pharmchem-extraction.jpg",
        caption: "Natural product extraction solutions",
        text: "Synthesized Aspirin and Oil of Wintergreen, using Thin-Layer Chromatography (TLC) to verify each compound.",
      },
    ],
    result: {
      items: [
        { label: "Synthesized Aspirin and Oil of Wintergreen, verified with TLC", dot: "green" },
        { label: "Set up bioassays showing clear antimicrobial activity from spice extracts", dot: "blue" },
        { label: "Modeled a custom drug molecule in Nanome to study drug-enzyme interactions", dot: "purple" },
      ],
      narrative: "Hands on pharmaceutical chemistry work spanning classic organic synthesis, natural product bioassays, and computational drug design.",
    },
    builtWith: ["Thin-Layer Chromatography (TLC)", "Bioassays", "Nanome", "Organic Synthesis"],
  },
  {
    slug: "semiconductor-fabrication",
    title: "Semiconductor Fabrication",
    subtitle: "Hardware validating a MOSCAP fabrication process",
    badges: ["Semiconductors", "Fabrication", "Research"],
    hook:
      "Hardware validating our fabrication line by building a MOSCAP (metal oxide semiconductor capacitor), the simplest device that can prove our tube furnace, spin coater, lithography, etching, and sputtering steps actually work together.",
    repos: [],
    process: [
      {
        dot: "blue",
        text: "Validating our fabrication hardware machine by machine: a tube furnace to grow dielectric oxide, a spin coater to deposit masking film, a lithography system to pattern contacts, chemical stripping to relieve the pattern for aluminum and oxide etching, a sputter deposition system to deposit aluminum, and chemical etching to pattern the oxide and aluminum layers.",
      },
      {
        dot: "pink",
        image: "/images/semiconductor-spin-speed-curve.webp",
        caption: "Photoresist thickness vs spin speed",
        text: "Underexposed photoresist pushed us to spin faster, but manufacturer curves for S1818 through S1805 show the thickness curve going flat well before 10,000 RPM, our practical ceiling.",
      },
      {
        dot: "orange",
        image: "/images/semiconductor-lithography-test-pattern.webp",
        caption: "Lithography test pattern after development",
        text: "Dialing in development time between 100 seconds and 2 minutes on S1818 resist finally resolved crisp, well defined test pattern features.",
      },
      {
        dot: "cyan",
        text: "Designed a preliminary MOSCAP: a p-type silicon wafer of known resistivity, a thermally grown SiOx dielectric, a sputtered aluminum top gate, and a backside metal contact. It is not a fancy device, just a way to validate the accuracy and repeatability of the whole process.",
      },
      {
        dot: "purple",
        text: "Next up: a calibration curve for oxide growth rate in the tube furnace using an ellipsometer across 20, 40, 60, 80, and 100 minute runs at 1100C, plus getting set up in the wet lab to etch oxide with HF and aluminum with PAN or another wet etchant.",
      },
    ],
    result: {
      items: [
        { label: "Target: fabricate an array of metal pads that don't short through the oxide", dot: "green" },
        { label: "Target: observe clean C-V and I-V curves", dot: "blue" },
      ],
      narrative: "Still early. Process design and hardware validation are underway, with fabrication and characterization next.",
    },
    builtWith: ["Tube Furnace", "Spin Coater", "Lithography System", "Sputter Deposition System", "Chemical Etching", "Ellipsometer"],
  },
  {
    slug: "photonic-integrated-circuit",
    title: "Photonic Integrated Circuit",
    subtitle: "Upcoming",
    badges: ["Photonics", "Semiconductors", "Upcoming"],
    hook:
      "Working toward a photonic integrated circuit: a silicon chip with regular doping and planar geometry at the half micron scale, ideally 200 by 500nm. That resolution is still past our current fabrication capability, so this one is upcoming.",
    repos: [],
    process: [],
    result: {
      items: [],
      narrative: "Upcoming. Waiting on the resolution capability to hit the target half micron feature sizes.",
    },
    builtWith: ["Silicon Photonics"],
  },
  {
    slug: "chordially",
    title: "Chordially",
    subtitle: "AI Guitar Tutor",
    badges: ["Computer Vision", "AI", "Music Education"],
    hook:
      "Guitar lessons cost 50 to 100 dollars an hour. Chordially watches your fingers on the fretboard through computer vision and scores your chord accuracy in real time.",
    videoUrl: "https://www.youtube.com/watch?v=1qn4usBFnC4&t=1s",
    videoUrlImage: "/images/chordially-card.jpg",
    repos: [
      { name: "Computer Vision Guitar Tutor", url: "https://github.com/prisca7c/Computer-Vision-Guitar-Tutor" },
      { name: "Computer Vision Guitar Tutor", url: "https://github.com/nathanchiu05/Computer-Vision-Guitar-Tutor" },
    ],
    process: [
      {
        dot: "blue",
        image: "/images/chordially-tracking-1.png",
        caption: "Chordially landing page",
        text: "Tracked fingers on the fretboard using OpenCV and ArUco markers. Each marker's position was translated into string and fret coordinates in real time.",
      },
      {
        dot: "pink",
        image: "/images/chordially-tracking-3.png",
        caption: "Live fretboard tracking overlay on a real guitar",
        text: "Mapped exact fret coordinates with a 1/17.817 spacing model. This gave consistent accuracy across all 12 frets regardless of guitar size.",
      },
      {
        dot: "orange",
        image: "/images/chordially-tracking-2.png",
        caption: "Early ArUco marker tracking test",
        text: "Fingers kept blocking the markers mid chord, killing tracking. A 5 frame smoothing algorithm tolerated brief occlusion and cut lost marker incidents by about 40 percent.",
      },
      {
        dot: "cyan",
        image: "/images/chordially-tracking-4.png",
        caption: "Practice session dashboard with real-time feedback",
        text: "Hit under 50 milliseconds of latency at 30 plus FPS for real time feedback. This kept the on screen guide in sync with actual finger movement during play.",
      },
    ],
    result: {
      items: [
        { label: "Under 50ms tracking latency", dot: "green" },
        { label: "30 plus FPS real time performance", dot: "blue" },
        { label: "285 entry chord database with live accuracy scoring", dot: "purple" },
        { label: "About 40 percent fewer lost markers after the smoothing fix", dot: "pink" },
      ],
      narrative: "A real time tutor that tracks your fingers and scores your chords fast enough to keep up while you are actually playing.",
    },
    builtWith: ["Python", "OpenCV", "MediaPipe", "Flask", "Next.js", "Node.js", "TypeScript", "JavaScript", "PostgreSQL", "Supabase", "Tone.js"],
  },
  {
    slug: "neo-alert",
    title: "Neo=Alert",
    subtitle: "AI bradycardia early warning system",
    badges: ["AI/ML", "Healthcare"],
    hook:
      "A custom trained neural network, built from scratch rather than an API call, that watches NICU ECG and respiratory data and flags bradycardia risk before a crisis hits.",
    repos: [{ name: "htr-2024", url: "https://github.com/Badbird5907/htr-2024" }],
    liveUrl: "https://htr.ymci.ca/",
    liveUrlImage: "/images/neoalert-card.jpg",
    process: [
      { dot: "blue", text: "Sourced the PICS ECG and respiratory dataset and converted it into a Hugging Face dataset for training." },
      { dot: "pink", text: "Found a severe class imbalance of 99.4 to 0.6 percent and fixed it with statistical data augmentation." },
      { dot: "orange", text: "Built a CNN and RNN LSTM hybrid from scratch in PyTorch, landing on about 136 million parameters." },
      { dot: "cyan", text: "Trained on an Nvidia A100 using BF16 weights instead of FP32, cutting compute roughly in half." },
      { dot: "purple", text: "Built a Next.js dashboard with a 15 second sliding window over the data for doctors to review historical patterns." },
    ],
    result: {
      items: [
        { label: "About 98 percent evaluation accuracy on a from scratch model", dot: "green" },
        { label: "136 million parameter CNN and LSTM hybrid", dot: "blue" },
        { label: "Working sliding window dashboard over ECG and respiratory data", dot: "purple" },
      ],
      narrative: "A working early warning model built and trained from scratch, with an honest integration gap between the model and the live dashboard under hackathon time pressure.",
    },
    builtWith: ["PyTorch", "Python", "Next.js", "PostgreSQL", "Supabase", "TypeScript", "Hugging Face Datasets", "Accelerate"],
  },
  {
    slug: "honko-clock",
    title: "HonkO'Clock",
    subtitle: "Anti snooze alarm",
    badges: ["Hardware", "Arduino", "Game Design"],
    hook:
      "Regular alarms die to one lazy tap. HonkO'Clock forces you to actually wake up by making you play a goose themed obstacle dodging minigame before the buzzer will stop.",
    repos: [{ name: "goosealarm", url: "https://github.com/swaggy-mandy/goosealarm" }],
    videoUrl: "https://www.youtube.com/watch?v=YTsdKRVFXo0",
    videoUrlImage: "/images/honkoclock-webapp.jpeg",
    process: [
      {
        dot: "blue",
        image: "/images/honkoclock-figma-geese.png",
        text: "Designed the visual identity in Figma, including hand drawn geese made in Procreate.",
      },
      { dot: "pink", text: "Originally planned to use a SenseCAP Indicator, but hit compatibility issues and pivoted mid hackathon to a web app with no prior web dev experience on the team." },
      { dot: "orange", text: "Built the alarm and minigame hardware trigger using Arduino for the buzzer." },
      {
        dot: "cyan",
        image: "/images/honkoclock-webapp.jpeg",
        text: "Built the web app in JavaScript, React, and Node.js, with a goose character whose mood escalates if you fail the minigame.",
      },
    ],
    result: {
      items: [
        { label: "Working Arduino buzzer integrated with a software minigame", dot: "green" },
        { label: "Full mid hackathon pivot from hardware display to web app", dot: "blue" },
      ],
      narrative: "A working prototype where the hardware buzzer and software minigame are properly integrated after a full technology pivot mid build.",
    },
    builtWith: ["C++", "JavaScript", "Node.js", "React", "Figma", "Arduino"],
  },
  {
    slug: "baylee",
    title: "Baylee",
    subtitle: "Emotional intelligence health assistant robot",
    badges: ["Robotics", "Computer Vision", "AI"],
    hook:
      "Inspired by Baymax, Baylee is a mobile robot that reads your emotional state through facial recognition and responds accordingly, plus dispenses basic first aid supplies.",
    repos: [{ name: "UTRA2025", url: "https://github.com/Badbird5907/UTRA2025" }],
    process: [
      { dot: "blue", text: "Split into hardware and software teams to parallelize work under time pressure." },
      { dot: "pink", text: "Built three self moving cabinets for medicine, tissues, and sanitation using Arduino Unos and Nanos, a Raspberry Pi, and gearmotors." },
      { dot: "orange", text: "3D printed structural parts including standoffs, gears, and linear sliders, and built the outer shell from foam board and popsicle sticks." },
      { dot: "cyan", text: "Implemented LiDAR based navigation and an emotion recognition system detecting surprise, anger, happiness, and sadness." },
    ],
    result: {
      items: [
        { label: "Working emotion recognition via a RealSense camera sensor", dot: "green" },
        { label: "Manual override mechanism after the motor drive proved unreliable", dot: "blue" },
      ],
      narrative: "A functioning physical prototype with working emotion recognition and a manual override mechanical system after the automated one did not hold up.",
    },
    builtWith: ["Python", "OpenCV", "OpenVINO", "RealSense", "Redis", "TypeScript", "Ollama", "LLaMA"],
  },
  {
    slug: "build-a-burger",
    title: "Build-A-Burger",
    subtitle: "A physical burger assembly machine",
    badges: ["Mechanical", "Microcontrollers"],
    hook:
      "A physical machine that assembles a hamburger to your spec, built for a Dream Big hackathon theme around the idea that food plus engineering equals cooking.",
    repos: [],
    process: [
      { dot: "blue", text: "Built the physical structure from recycled cardboard to keep the build cheap and fast." },
      { dot: "pink", text: "Designed and 3D printed custom gears and a gear rack sized to the machine's exact dimensions." },
      { dot: "orange", text: "Controlled the motors with an ESP32 WiFi microcontroller." },
    ],
    result: {
      items: [
        { label: "A working mechanical burger assembly machine", dot: "green" },
      ],
      narrative: "A working burger assembly machine built almost entirely from recycled materials under tight time and hardware constraints.",
    },
    builtWith: ["ESP32", "Cardboard", "3D Printed Gears"],
  },
  {
    slug: "oss-oil-spill-sensor",
    title: "O.S.S.",
    subtitle: "Oil spill sensor",
    badges: ["Sensors", "Data Visualization", "Environmental"],
    hook:
      "A sensor based approach to detecting and containing oil spills, plotting the contamination boundary live so responders know exactly where to deploy a skimmer.",
    repos: [],
    process: [
      {
        dot: "blue",
        image: "/images/oss-tinkercad-circuit.png",
        caption: "Density sensor circuit built in Tinkercad",
        text: "Modeled and coded a density sensor in Tinkercad to distinguish oil from water samples.",
      },
      { dot: "pink", text: "Positioned sensors on all four sides of a sample area to continuously collect boundary data." },
      { dot: "orange", text: "Used Matplotlib to plot detected coordinates as a live scatter plot, visually mapping the spill's edges." },
    ],
    result: {
      items: [
        { label: "Working density based detection feeding a live scatter plot", dot: "green" },
        { label: "A Tinkercad model of the sensor itself", dot: "blue" },
      ],
      narrative: "A working simulation showing how sensor data could define a spill boundary well enough to guide cleanup.",
    },
    builtWith: ["Arduino", "Python", "Matplotlib", "Tinkercad"],
  },
  {
    slug: "iquhack-2026",
    title: "Multipartite Entanglement Detection using Classical Shadows",
    subtitle: "MIT iQuHACK 2026",
    badges: ["Quantum Computing", "Qiskit", "CUDA-Q", "Hackathon"],
    hook:
      "At MIT's iQuHACK 2026 we took on IQM Quantum Computers' multipartite entanglement challenge, proving entanglement two different ways: classical shadows for statistical detection and Mermin inequalities for a direct mathematical proof, across three real IQM quantum computers.",
    liveUrl: "/iqm-mit-quantum-hackathon.pdf",
    liveUrlImage: "/images/iquhack-dashboard-1.jpg",
    repos: [{ name: "IQM-Iquhack", url: "https://github.com/rahulranjansah/IQM-Iquhack" }],
    process: [
      {
        dot: "blue",
        image: "/images/iquhack-mit-campus.jpg",
        caption: "MIT, home of iQuHACK 2026",
        text: "Spent the weekend at MIT for iQuHACK 2026, tackling IQM Quantum Computers' multipartite entanglement challenge.",
      },
      {
        dot: "pink",
        image: "/images/iquhack-team.jpg",
        caption: "The team",
        text: "A great weekend with a fantastic team, and thanks to IQM and the iQuHACK organizers for the opportunity.",
      },
      {
        dot: "orange",
        text: "Built a classical shadows pipeline for efficient quantum state tomography, using randomized Pauli measurements to reconstruct density matrices and compute entanglement witnesses instead of running exponentially many measurements.",
      },
      {
        dot: "cyan",
        text: "Added a Mermin inequality test for direct Bell test violations, proving entanglement whenever correlations exceeded the classical bound.",
      },
      {
        dot: "purple",
        text: "Tested 5 entangled state families, GHZ, W, Cluster, Ring Cluster, and Dicke, across IQM's Sirius, Garnet, and Emerald quantum computers.",
      },
      {
        dot: "green",
        text: "Built the pipeline in both Qiskit and NVIDIA CUDA-Q. The CUDA-Q integration dynamically discovers IQM's QPU architecture at runtime and handles JIT transpilation, so the same code runs on different machines without modification.",
      },
      {
        dot: "blue",
        image: "/images/iquhack-dashboard-1.jpg",
        caption: "Entanglement detection across all state types",
        text: "Green cells show entanglement successfully detected for each state and qubit count combination, using witness expectation values from the classical shadows approach. W and Dicke states were the hardest to detect reliably given their more complex structure.",
      },
      {
        dot: "pink",
        image: "/images/iquhack-dashboard-2.jpg",
        caption: "Scaling, Mermin violation, and error budget analysis",
        text: "Topology aware routing improved fidelity by up to 100 percent on 5 qubit circuits, and T2 decoherence dominated the error budget at higher qubit counts.",
      },
    ],
    result: {
      items: [
        { label: "19 qubit entanglement detected on IQM Garnet", dot: "green" },
        { label: "GHZ and Cluster states most robust across qubit counts", dot: "blue" },
        { label: "Topology aware routing improved fidelity by up to 100 percent on 5 qubit circuits", dot: "purple" },
        { label: "Parallel pipelines in Qiskit and NVIDIA CUDA-Q with runtime QPU discovery and JIT transpilation", dot: "pink" },
      ],
      narrative: "A weekend spent proving entanglement two different ways across three real IQM quantum computers, with a pipeline portable enough to run unmodified on any of them.",
    },
    builtWith: ["Qiskit", "NVIDIA CUDA-Q", "IQM Quantum Computers", "Classical Shadows", "Mermin Inequality"],
  },
  {
    slug: "music-and-life",
    title: "Music & Life London",
    subtitle: "Software Engineering Intern",
    badges: ["Software", "Web Development"],
    hook:
      "Built the sign-in and studio portal for Music & Life London, a music studio and instrument shop in Harrow, London, as a software engineering intern.",
    repos: [],
    process: [
      {
        dot: "blue",
        image: "/images/musiclife-storefront.jpg",
        caption: "Music & Life London, Harrow",
        text: "Music & Life London is a music studio and instrument shop offering lessons, recitals, and instrument sales out of its Harrow storefront.",
      },
      {
        dot: "orange",
        image: "/images/musiclife-signin.webp",
        caption: "Studio sign-in portal",
        text: "Built a branded sign-in and registration flow for students and staff to access the studio portal.",
      },
      {
        dot: "pink",
        image: "/images/musiclife-recital.png",
        caption: "A student recital at the studio",
        text: "Built the studio's sign-in portal to support the community of students and families who come through for lessons and recitals.",
      },
    ],
    result: {
      items: [],
      narrative: "More details on this internship are on the way.",
    },
    builtWith: ["Web Development"],
  },
  {
    slug: "battery-midnight-sun",
    title: "Battery Pack",
    subtitle: "Midnight Sun Solar Race Car",
    badges: ["Hardware", "Batteries", "CFD"],
    hook:
      "Designed the 32S1P prismatic Li-ion cell layout for the team's solar race car battery pack, with tool-free modular trays, and ran CFD analysis in Ansys on the pack's cooling system.",
    repos: [],
    process: [
      {
        dot: "blue",
        image: "/images/battery-cell-layout-1.webp",
        caption: "Cell testing on a Rigol DL3031 electronic load",
        text: "Characterized individual prismatic Li-ion cells before pack assembly to validate capacity and internal resistance.",
      },
      {
        dot: "pink",
        image: "/images/battery-cell-layout-2.webp",
        caption: "32S1P cell layout in tool-free modular trays",
        text: "Designed a 32S1P prismatic Li-ion cell layout with tool-free modular trays, so individual cells or trays can be swapped without disassembling the whole pack.",
      },
      {
        dot: "orange",
        image: "/images/battery-cell-layout-3.jpg",
        caption: "Pack installed in the car chassis",
        text: "Fit the completed tray assembly into the car's chassis alongside the BMS and wiring harness.",
      },
      {
        dot: "cyan",
        image: "/images/battery-cfd-analysis.webp",
        caption: "Assembled battery pack enclosure",
        text: "Performed CFD analysis in Ansys on the battery pack's cooling system to check airflow and cell temperatures inside the sealed enclosure.",
      },
    ],
    result: {
      items: [
        { label: "32S1P prismatic Li-ion pack with tool-free modular trays", dot: "green" },
        { label: "CFD-analyzed cooling system in Ansys", dot: "blue" },
      ],
      narrative: "A modular, serviceable battery pack for the team's solar race car, with its cooling performance validated in simulation before track testing.",
    },
    builtWith: ["Ansys CFD", "Prismatic Li-ion Cells", "BMS"],
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}
