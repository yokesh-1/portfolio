
import { experience } from '../data';

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-white/5 py-20"
    >
      <div className="container-px">
        <div className="max-w-2xl">
          <h2 className="section-title">Experience</h2>

          <p className="mt-3 text-slate-400">
            A track record of building and shipping real products.
          </p>
        </div>

        <div className="mt-10 border-l border-white/10 pl-6 sm:pl-8">
          {experience.map((job, i) => (
            <div key={i} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[1.65rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-ink-950 sm:-left-[2.15rem]" />

              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">
                  {job.role}
                  <span className="text-accent-soft">
                    {' '}
                    {job.company}
                  </span>
                </h3>

                <span className="text-sm text-slate-500">
                  {job.period}
                </span>
              </div>

              <ul className="mt-3 space-y-2">
                {job.points.map((point, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-slate-400"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
