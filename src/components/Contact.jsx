
import { profile } from '../data';
import { ArrowIcon, MailIcon } from './Icons';

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-white/5 py-20"
    >
      <div className="container-px">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800 to-ink-900 p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]" />
          </div>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Let's build something together
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Have a project in mind or just want to say hi? My inbox is always
            open. I'll get back to you as soon as I can.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent/25 transition hover:bg-accent-soft"
            >
              <MailIcon className="h-4 w-4" />
              {profile.email}
            </a>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/5"
            >
              Download Resume
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
