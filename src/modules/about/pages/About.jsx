import PageHeader from "../../../common/components/PageHeader";
import Card from "../../../common/components/Card";
import { Link } from "lucide-react";
import { NavLink } from "react-router-dom";

const tools = [
  "JSON Formatter",
  "Password Generator",
  "Text Case Converter",
  "Word Counter",
  "UUID Generator",
  "Color Palette Generator",
  "Timestamp Converter",
];

const techStack = [
  "React",
  "React Router",
  "Tailwind CSS",
  "JavaScript (ES6+)",
  "Vite",
];

const features = [
  {
    title: "⚡ Lightning Fast",
    description:
      "Perform conversions and generate data instantly without unnecessary page reloads.",
  },
  {
    title: "📱 Fully Responsive",
    description:
      "Optimized for desktop, tablet and mobile devices with a modern interface.",
  },
  {
    title: "🔒 Privacy First",
    description:
      "Everything runs inside your browser. Your data never leaves your device.",
  },
  {
    title: "🎯 Developer Friendly",
    description:
      "Simple UI focused on productivity so you can spend more time building.",
  },
];

const stats = [
  {
    number: "5+",
    label: "Developer Tools",
  },
  {
    number: "100%",
    label: "Free to Use",
  },
  {
    number: "24/7",
    label: "Available",
  },
  {
    number: "0",
    label: "Ads Inside Tools",
  },
];

const About = () => {
  return (
    <div className="space-y-12">

      <PageHeader
        title="About DevKit"
        description="A modern collection of useful developer tools built for speed, simplicity and productivity."
      />

      {/* Hero */}
      <Card className="p-8 md:p-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">

          <div className="text-6xl">
            🚀
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Everything Developers Need
            <br />
            In One Place
          </h2>

          <p className="text-zinc-400 leading-8 text-lg">
            DevKit brings together the most frequently used developer
            utilities into one clean, fast and responsive web application.
            No unnecessary clutter, no complicated UI — just practical tools
            that help you work faster.
          </p>

        </div>
      </Card>

      {/* Stats */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {stats.map((item) => (
          <Card
            key={item.label}
            className="p-6 text-center hover:border-indigo-500 transition"
          >
            <h3 className="text-4xl font-bold text-indigo-400">
              {item.number}
            </h3>

            <p className="mt-2 text-zinc-400">
              {item.label}
            </p>

          </Card>
        ))}

      </div>

      {/* Included Tools */}
      <section>

        <h2 className="mb-6 text-3xl font-bold text-white">
          Included Tools
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {tools.map((tool) => (
            <Card
              key={tool}
              className="p-6 transition hover:-translate-y-1 hover:border-indigo-500"
            >
              <h3 className="text-lg font-semibold text-white">
                {tool}
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                A fast and reliable utility designed to simplify everyday
                development tasks.
              </p>

            </Card>
          ))}

        </div>

      </section>

      {/* Features */}
      <section>

        <h2 className="mb-6 text-3xl font-bold text-white">
          Why Choose DevKit?
        </h2>

        <div className="grid gap-5 md:grid-cols-2">

          {features.map((feature) => (
            <Card
              key={feature.title}
              className="p-6 hover:border-indigo-500 transition"
            >
              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                {feature.description}
              </p>

            </Card>
          ))}

        </div>

      </section>

      {/* Tech Stack */}
      <Card className="p-8">

        <h2 className="text-3xl font-bold text-white mb-6">
          Built With
        </h2>

        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-indigo-500 bg-indigo-500/10 px-5 py-2 text-sm text-indigo-300"
            >
              {tech}
            </span>
          ))}

        </div>

      </Card>

      {/* CTA */}
      <Card className="p-10 text-center">

        <div className="max-w-3xl mx-auto space-y-5">

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Build Faster with DevKit
          </h2>

          <p className="text-zinc-400 leading-8">
            Whether you're formatting JSON, generating secure passwords,
            converting timestamps, counting words, or creating beautiful
            color palettes, DevKit keeps your everyday tools organized in
            one place so you can focus on building amazing applications.
          </p>

          <NavLink to="/tools" className="rounded-xl bg-indigo-600 px-8 py-3 font-semibold transition hover:bg-indigo-500">
            Explore Tools
          </NavLink>

        </div>

      </Card>

    </div>
  );
};

export default About;