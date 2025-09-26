import { GithubIcon, LinkedinIcon } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="flex items-center justify-between border-t py-4 font-mono text-sm">
      <p>&copy; {new Date().getFullYear()} Mahmoud Omiesh</p>
      <ul className="flex gap-2">
        <li>
          <Button variant="link" asChild>
            <a href="https://github.com/MahmoudOmiesh" target="_blank">
              <GithubIcon />
              GitHub
            </a>
          </Button>
        </li>
        <li>
          <Button variant="link" asChild>
            <a href="https://linkedin.com/in/mahmoud-omiesh" target="_blank">
              <LinkedinIcon />
              LinkedIn
            </a>
          </Button>
        </li>
      </ul>
    </footer>
  );
}
