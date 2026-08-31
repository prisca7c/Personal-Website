// app/projects/[slug]/page.tsx

import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink, Play, Youtube, FileText, Globe } from "lucide-react"
import { caseStudies, getCaseStudy } from "@/lib/case-studies"

const dotColor: Record<string, string> = {
  blue: "bg-blue-400",
  pink: "bg-pink-400",
  cyan: "bg-cyan-400",
  purple: "bg-purple-400",
  orange: "bg-orange-400",
  green: "bg-green-400",
}

const badgeColors = [
  "bg-blue-200/50 text-blue-800",
  "bg-purple-200/50 text-purple-800",
  "bg-green-200/50 text-green-800",
  "bg-orange-200/60 text-orange-800",
]

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return notFound()

  const builtWithIsCategorized = !Array.isArray(study.builtWith[0]) && typeof study.builtWith[0] === "object"

  const isYouTube = study.videoUrl && /youtube\.com|youtu\.be/.test(study.videoUrl)
  const isPdf = study.liveUrl && study.liveUrl.toLowerCase().endsWith(".pdf")
  const VideoIcon = isYouTube ? Youtube : Play
  const LiveIcon = isPdf ? FileText : Globe
  const liveLabel = isPdf ? "Open PDF" : "Open live demo"

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-pink-50/20 to-cyan-50/30">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12">

        <Link href="/projects" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 mb-8 text-sm">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <div className="flex gap-2 flex-wrap mb-4">
          {study.badges.map((badge, i) => (
            <span key={badge} className={`text-xs font-semibold px-3 py-1 rounded-md ${badgeColors[i % badgeColors.length]}`}>
              {badge}
            </span>
          ))}
        </div>

        <h1 className="text-4xl font-extrabold text-slate-900 mb-1">{study.title}</h1>
        <p className="text-slate-500 mb-6">{study.subtitle}</p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-300 via-pink-300 to-cyan-300 rounded-full opacity-60 mb-8" />

        <h2 className="text-xl font-bold text-slate-900 mb-4">Why?</h2>
        <p className="text-lg leading-relaxed text-slate-700 mb-10">{study.hook}</p>

        {study.bannerImage && (
          <img
            src={study.bannerImage}
            alt=""
            className="w-full h-auto object-contain rounded-2xl border-2 border-blue-200/60 mb-10"
          />
        )}

        {/* Explore */}
        {(study.liveUrl || study.videoUrl || study.repos.length > 0) && (
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Explore</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {study.videoUrl && (
                <a href={study.videoUrl} target="_blank" rel="noreferrer"
                  className="rounded-2xl overflow-hidden border-2 border-blue-200/60 bg-white block hover:shadow-lg transition-all">
                  <div
                    className={`h-36 flex items-center justify-center relative bg-cover bg-center ${study.videoUrlImage ? "" : "bg-gradient-to-br from-blue-100 via-pink-100 to-cyan-100"}`}
                    style={study.videoUrlImage ? { backgroundImage: `url(${study.videoUrlImage})` } : undefined}
                  >
                    <span className="absolute bottom-3 right-3 bg-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow">
                      <VideoIcon className="w-3 h-3" /> {isYouTube ? "Watch on YouTube" : "Watch demo video"}
                    </span>
                  </div>
                </a>
              )}
              {study.liveUrl && (
                <a href={study.liveUrl} target="_blank" rel="noreferrer"
                  className="rounded-2xl overflow-hidden border-2 border-blue-200/60 bg-white block hover:shadow-lg transition-all">
                  <div className="bg-slate-100 px-3 py-2 flex items-center gap-1.5 border-b border-slate-200">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="ml-2 bg-white rounded px-2 py-0.5 text-xs text-slate-500 flex-1 truncate">
                      {study.liveUrl.replace("https://", "")}
                    </span>
                  </div>
                  <div
                    className={`h-28 flex items-center justify-center relative bg-cover bg-center ${study.liveUrlImage ? "" : "bg-gradient-to-br from-blue-100 via-pink-100 to-cyan-100"}`}
                    style={study.liveUrlImage ? { backgroundImage: `url(${study.liveUrlImage})` } : undefined}
                  >
                    <span className="absolute bottom-3 right-3 bg-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow">
                      <LiveIcon className="w-3 h-3" /> {liveLabel}
                    </span>
                  </div>
                </a>
              )}
              {study.repos.map((repo, i) => (
                <a key={i} href={repo.url} target="_blank" rel="noreferrer"
                  className="flex items-center justify-between border-2 border-blue-200/60 rounded-2xl px-4 py-4 bg-white hover:shadow-lg transition-all">
                  <span className="flex items-center gap-2 font-semibold text-slate-900 text-sm">
                    <Github className="w-4 h-4" /> {repo.name}
                  </span>
                  <span className="text-xs text-blue-600 font-semibold flex items-center gap-1">
                    <ExternalLink className="w-3 h-3" /> GitHub
                  </span>
                </a>
              ))}
            </div>
            {study.statusLine && <p className="text-sm text-slate-500 mt-3">{study.statusLine}</p>}
          </section>
        )}

        {/* Process */}
        {study.process.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">The Process</h2>
            <div className="columns-1 md:columns-2 gap-8">
              {study.process.map((step, i) => (
                <div key={i} className="flex flex-col gap-3 mb-8 break-inside-avoid">
                  {step.image && (
                    <div>
                      {step.caption && <p className="text-xs text-slate-500 italic mb-1.5 leading-snug">{step.caption}</p>}
                      <img src={step.image} alt="" className="w-full h-auto object-contain rounded-xl border-2 border-blue-200/60" />
                    </div>
                  )}
                  <div className="flex gap-2 items-start flex-1">
                    <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${dotColor[step.dot]}`} />
                    <p className="text-lg leading-relaxed text-slate-700">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="w-24 h-1 bg-gradient-to-r from-blue-300 via-pink-300 to-cyan-300 rounded-full opacity-60 mb-10" />

        {/* Result */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Result!</h2>
          <div className="mb-4">
            {study.result.items.map((item, i) => (
              <div key={i} className="flex gap-2 items-start mb-2">
                <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${dotColor[item.dot]}`} />
                <p className="text-lg leading-relaxed text-slate-700">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="text-lg leading-relaxed text-slate-700">{study.result.narrative}</p>
        </section>

        {/* Built With */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">Built With</h2>
          {builtWithIsCategorized ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {(study.builtWith as { category: string; items: string[] }[]).map((cat) => (
                <div key={cat.category}>
                  <p className="text-xs font-extrabold uppercase tracking-wide text-blue-800 mb-2">{cat.category}</p>
                  <ul className="space-y-1">
                    {cat.items.map((item) => (
                      <li key={item} className="text-lg text-slate-700">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <ul className="columns-2 sm:columns-3" style={{ columnGap: "2rem" }}>
              {(study.builtWith as string[]).map((item) => (
                <li key={item} className="text-lg text-slate-700 border-b border-blue-100 py-1">{item}</li>
              ))}
            </ul>
          )}
        </section>

      </div>
    </div>
  )
}
