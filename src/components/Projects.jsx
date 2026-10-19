
import { projects } from '../data';
import { ExternalIcon, GitHubIcon } from './Icons';

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-white/5 py-20"
    >
      <div className="container-px">
        <div className="max-w-2xl">
          <h2 className="section-title">Projects</h2>

          <p className="mt-3 text-slate-400">
            A selection of things I've built, from AI assistants to full
            platforms.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-accent/40 hover:bg-white/[0.07]"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-white">
                  {p.title}
                </h3>

                <div className="flex shrink-0 items-center gap-3 text-slate-400">
                  <a
                    href={p.repo || p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                    aria-label={`${p.title} repository`}
                  >
                    <GitHubIcon className="h-5 w-5" />
                  </a>

                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                    aria-label={`${p.title} project link`}
                  >
                    <ExternalIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <p className="mt-3 flex-1 text-slate-400">
                {p.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-white/10 bg-ink-800 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
