import { profile } from "@/content/profile";

export function ProfileLinks(props: React.ComponentProps<"nav">) {
  return (
    <nav {...props}>
      <ul className="flex flex-wrap gap-x-5 gap-y-1">
        {profile.links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.newTab ? "_blank" : undefined}
              rel={link.newTab ? "noreferrer noopener" : undefined}
              className="link"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
