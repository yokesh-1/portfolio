
import { skills } from '../data';

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-white/5 py-20"
    >
      <div className="container-px">
        <div className="max-w-2xl">
          <h2 className="section-title">Skills</h2>

          <p className="mt-3 text-slate-400">
            The tools and technologies I use to design, build, and ship AI
            products end to end.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((cat) => (
            <div
              key={cat.group}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-accent/40"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-soft">
                {cat.group}
              </h3>

              <ul className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
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
