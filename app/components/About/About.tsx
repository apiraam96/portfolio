import Heading from "../ui/Heading";

export default function About() {
  return (
    <div
      id="about"
      className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr, 1fr] border-red-500"
    >
      <Heading as="h2" size="xl" className="col-start-1">
        About Me
      </Heading>
      <div className="prose prose-xl prose-slate prose-invert col-start-1"></div>
    </div>
  );
}
