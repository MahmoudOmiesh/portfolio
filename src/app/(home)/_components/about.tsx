import { Section } from "~/components/section";

export function About() {
  return (
    <Section id="about" label="About">
      <div className="text-muted-foreground space-y-4">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
          fugiat iure expedita atque error, eveniet perferendis consequuntur.
          Itaque quaerat facilis delectus magni, aspernatur nostrum tempore
          laborum earum dolorem numquam ipsum quia sequi tempora dolor ea
          quidem! Ut repellat voluptatum, minus cumque, saepe, perspiciatis
          nihil expedita perferendis obcaecati dolores voluptatem placeat?
        </p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit sequi doloremque nesciunt expedita, voluptatem
          exercitationem ex laborum quo illum facilis odit soluta earum ab ipsum
          recusandae officiis assumenda labore atque?
        </p>
      </div>
    </Section>
  );
}
