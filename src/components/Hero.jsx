
import { profile } from '../data';
import {
  ArrowIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from './Icons';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />

        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-indigo-500/10 blur-[100px]" />
      </div>

      <div className="container-px">
        <div className="animate-fade-up">
          <span className="chip mb-6 gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available for new projects
          </span>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
            {profile.name}

            <span className="block bg-gradient-to-r from-accent-soft to-indigo-300 bg-clip-text text-transparent">
              {profile.role}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent/25 transition hover:bg-accent-soft"
            >
              View my work
              <ArrowIcon />
            </a>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/5"
            >
              <DownloadIcon />
              Download Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5 text-slate-400">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>

            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>

            <a
              href={profile.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
              aria-label="Twitter"
            >
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
