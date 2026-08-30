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
  videoUrl?: string
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
        image: "https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/166f4aef03582ae01d89af806c910cd2c8c8cbac_screenshot_2025-08-06_at_12.11.10___pm.png",
        caption: "Full 3D model of the wheelchair with electronics integrated",
        text: "Modeled the entire wheelchair in CAD using real frame measurements. The battery box, PCB housing, and cable routing all had to clear the cross braces and leave room for the user's legs.",
      },
      {
        dot: "pink",
        image: "https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/db5fbfbd7e0bc10afd8826d6d762fca40e77c986_screenshot_2025-07-31_at_6.03.55___pm.png",
        caption: "PCB schematic in KiCad",
        text: "Designed the full schematic in KiCad with hierarchical sheets for power, motor control, comms, and sensors. Broke out every pin on the ATmega2560 for PWM, analog sensing, and serial comms.",
      },
      {
        dot: "orange",
        image: "https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/2088c6bd565283fb86d54fb9dd4002a4eb6d0ba1_screenshot_2025-08-10_at_12.36.56___am.png",
        caption: "PCB wiring diagram. 24V copper pour on the back, 12V on the front",
        text: "At 10A continuous current, traces alone could not fit the compact 4 layer board. Switched to dedicated copper pours per voltage rail, which solved current capacity and doubled as heat spreading.",
      },
      {
        dot: "cyan",
        image: "https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/c32bfd65033bf6cd5111087478672b11de6f7187_screenshot_2025-08-10_at_12.43.31___am.png",
        caption: "3D render of the finished PCB",
        text: "Passed KiCad's design rule checks after several routing iterations. Final board carries motor drivers, sensor headers, and comms for the Pi, ESP32, and ATmega all on one 150 by 100mm board.",
      },
      {
        dot: "purple",
        image: "https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/ed4c907d60fad636032d58342cff35c47ba04015_screenshot_2025-07-31_at_6.32.34___pm.png",
        caption: "Battery box, 3D printed",
        text: "Designed a fully enclosed battery box with ventilation and a mounting area for the BMS and main power switch. Mounts under the seat without interfering with leg room.",
      },
      {
        dot: "green",
        image: "https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/22308247853b5489cdd5da76ab8be6df6bacaa96_screenshot_2025-07-31_at_10.06.07___pm.png",
        caption: "User control panel where external modules connect",
        text: "Built a waterproof control panel with a hall effect joystick and six membrane buttons, magnetically mounted so it can be removed for cleaning.",
      },
      {
        dot: "blue",
        image: "https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/5a6ffb811a8e9d410a96445789bcb36389fe2946_screenshot_2025-07-31_at_10.58.33___pm.png",
        caption: "Handle with lock mechanism",
        text: "Designed a folding walker handle with a spring loaded locking pin, a rubber grip, and an emergency stop button built into the handle itself.",
      },
      {
        dot: "pink",
        image: "https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/807179f9a7847059bade0cff423d6ac2a8ea9139_screenshot_2025-08-01_at_12.14.26___am.png",
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
    subtitle: "Hack the North 2025. Built with Jiucheng Zang, Alex Xu, Hadi Ahmed",
    badges: ["Robotics", "Computer Vision", "AI"],
    hook:
      "A self balancing robot you can control by talking to it. Say 'move toward the red cup' and a language model interprets the request, the vision system finds the target, and the robot drives there.",
    repos: [{ name: "Aura 67 (org)", url: "https://github.com/HTN-Aura-67" }],
    videoUrl: "https://www.youtube.com/shorts/rSfp2yne1f4",
    process: [
      { dot: "blue", text: "Built the self balancing controller using an IMU and gyroscope feedback loop running on an ESP32-S3." },
      { dot: "pink", text: "Added a Raspberry Pi Zero 2 W in the head for camera capture and vision processing, streaming frames for object tracking." },
      { dot: "orange", text: "Integrated a language model so natural language commands map to concrete actions like follow object, stop, or return to base." },
      { dot: "cyan", text: "Added a time of flight distance sensor in the head so the robot slows and stops automatically near obstacles." },
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
    title: "AccentBean Macropad",
    subtitle: "8 key macropad with a magnetic OLED case",
    badges: ["Hardware", "Firmware", "Electronics"],
    hook:
      "An 8 key macropad with a rotary encoder and OLED display, built to make typing accented letters faster by holding a letter and an accent key at the same time.",
    repos: [{ name: "Hackpad", url: "https://github.com/prisca7c/Hackpad" }],
    process: [
      {
        dot: "blue",
        image: "https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/d027a40ad0b68be71379af5d2603084f67f54375_screenshot_2025-07-08_at_7.30.15___pm.png",
        caption: "The finished macropad, fully assembled",
        text: "Designed around a Seeed XIAO RP2040 running KMK firmware, with 8 mechanical switches and a rotary encoder for volume or scroll control.",
      },
      {
        dot: "pink",
        image: "https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/c16fb42ad5822b43e1b5c67144fcf3d18da33a6f_screenshot_2025-07-03_at_12.34.16___pm.png",
        caption: "Schematic",
        text: "Laid out the schematic to keep the matrix wiring simple, since 8 keys plus an encoder does not need a large matrix.",
      },
      {
        dot: "orange",
        image: "https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/8e10bcd23eab8864fc64e5b52788887678444a88_screenshot_2025-07-03_at_12.34.50___pm.png",
        caption: "The PCB",
        text: "Routed the PCB to fit inside a compact case, with the OLED display connector positioned so the case magnets would not interfere with the screen.",
      },
      {
        dot: "cyan",
        image: "https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/8f6b16612fc019ec54dbd6c83626b20a98677aa6_screenshot_2025-07-07_at_4.44.58___pm.png",
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
    subtitle: "Undercity Hackathon 2025. Finalist, Top 7. Built with Bernice Qiu",
    badges: ["Hardware", "Mechanical", "Firmware"],
    hook:
      "A snow peashooter inspired by Plants vs. Zombies. Turn it on and watch the peas fly out.",
    repos: [{ name: "Peas Are Best Frozen", url: "https://github.com/prisca7c/PEAS-ARE-BEST-FROZEN---Finalist-Undercity-2025" }],
    process: [
      {
        dot: "blue",
        image: "https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/ec0848b1ee13ad6145224811795387bd96a72782_screenshot_2025-08-01_at_10.04.33___pm.png",
        caption: "Build in progress",
        text: "Built the flywheel launch mechanism using two N20 gear motors driven by a TB6612FNG motor driver, controlled from an Arduino R3 with an ESP32 for wireless triggering.",
      },
      {
        dot: "pink",
        image: "https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/3b5c93c9a5382334d7de017a60c849d9f15c4010_screenshot_2025-08-01_at_10.05.21___pm.png",
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
        image: "https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/dd96ab56cc75483d5874863f88bd0fe8a44abc28_whatsapp_image_2025-08-07_at_10.11.06_pm__2_.jpeg",
        caption: "The bot",
        text: "Built the bot around an ESP32-S3-CAM streaming MJPEG video over WiFi, driven by two high speed coreless motors for quiet tank style movement.",
      },
      {
        dot: "pink",
        image: "https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/c5beb9c20556b898a1f16a963e7fa23293595cd2_whatsapp_image_2025-08-07_at_10.11.07_pm.jpeg",
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
        image: "https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/dde2975a7834dd27be6fe814b98f4b9c917eae85_img_4104.jpg",
        caption: "Pulled Malpighian tubules and guts",
        text: "Practiced dissecting the Malpighian tubules and guts of fruit flies, working from the torso down to the lower abdomen to extract them intact.",
      },
      {
        dot: "pink",
        caption: "Clear fluorescent protein using the Gal4/UAS system",
        text: "Used the Gal4/UAS system to genetically modify flies, add a GFP marker, and localize gene expression, then imaged the tissue under a fluorescent microscope.",
      },
      {
        dot: "orange",
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
    slug: "chordially",
    title: "Chordially",
    subtitle: "AI Guitar Tutor",
    badges: ["Computer Vision", "AI", "Music Education"],
    hook:
      "Guitar lessons cost 50 to 100 dollars an hour. Chordially watches your fingers on the fretboard through computer vision and scores your chord accuracy in real time.",
    liveUrl: "https://v0-ai-music-tutor.vercel.app",
    repos: [
      { name: "Computer Vision Guitar Tutor", url: "https://github.com/prisca7c/Computer-Vision-Guitar-Tutor" },
      { name: "Computer Vision Guitar Tutor", url: "https://github.com/nathanchiu05/Computer-Vision-Guitar-Tutor" },
    ],
    process: [
      {
        dot: "blue",
        image: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/819/592/datas/original.png",
        caption: "PLACEHOLDER, tell me what this shows",
        text: "Tracked fingers on the fretboard using OpenCV and ArUco markers. Each marker's position was translated into string and fret coordinates in real time.",
      },
      {
        dot: "pink",
        image: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/819/608/datas/original.png",
        caption: "PLACEHOLDER, tell me what this shows",
        text: "Mapped exact fret coordinates with a 1/17.817 spacing model. This gave consistent accuracy across all 12 frets regardless of guitar size.",
      },
      {
        dot: "orange",
        image: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/819/596/datas/original.png",
        caption: "PLACEHOLDER, tell me what this shows",
        text: "Fingers kept blocking the markers mid chord, killing tracking. A 5 frame smoothing algorithm tolerated brief occlusion and cut lost marker incidents by about 40 percent.",
      },
      {
        dot: "cyan",
        image: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/819/805/datas/original.png",
        caption: "PLACEHOLDER, tell me what this shows",
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
    process: [
      { dot: "blue", text: "Designed the visual identity in Figma, including hand drawn geese made in Procreate." },
      { dot: "pink", text: "Originally planned to use a SenseCAP Indicator, but hit compatibility issues and pivoted mid hackathon to a web app with no prior web dev experience on the team." },
      { dot: "orange", text: "Built the alarm and minigame hardware trigger using Arduino for the buzzer." },
      { dot: "cyan", text: "Built the web app in JavaScript, React, and Node.js, with a goose character whose mood escalates if you fail the minigame." },
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
      { dot: "blue", text: "Modeled and coded a density sensor in Tinkercad to distinguish oil from water samples." },
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
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}
