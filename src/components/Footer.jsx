
import { profile } from '../data';
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from './Icons';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-px flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-slate-500">
          {new Date().getFullYear()} {profile.name}. Built with React &amp;
          Tailwind CSS.
        </p>

        <div className="flex items-center gap-5 text-slate-400">
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
    </footer>
  );
}
