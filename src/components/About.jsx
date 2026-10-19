
import { about, profile } from '../data';

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-white/5 py-20"
    >
      <div className="container-px grid gap-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <h2 className="section-title">About</h2>

          <p className="mt-3 text-sm text-slate-500">
            Who I am and what I do
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-lg leading-relaxed text-slate-300">
            {about.summary}
          </p>

          <p className="mt-4 text-slate-400">
            Based in {profile.location}. When I'm not shipping code, I'm
            exploring new models, reading papers, and contributing to open
            source.
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-4">
            {about.highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
              >
                <dt className="text-2xl font-bold text-white sm:text-3xl">
                  {h.value}
                </dt>

                <dd className="mt-1 text-xs text-slate-400 sm:text-sm">
                  {h.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
