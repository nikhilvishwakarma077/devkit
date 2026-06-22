import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const themes = [
    {
        accent: "cyan",
        border: "group-hover:border-cyan-400/70",
        icon: "text-cyan-300 bg-cyan-400/10",
        text: "text-cyan-300",
        glow: "group-hover:shadow-cyan-500/20",
        line: "from-cyan-400 to-blue-500",
    },
    {
        accent: "violet",
        border: "group-hover:border-violet-400/70",
        icon: "text-violet-300 bg-violet-400/10",
        text: "text-violet-300",
        glow: "group-hover:shadow-violet-500/20",
        line: "from-violet-400 to-fuchsia-500",
    },
    {
        accent: "emerald",
        border: "group-hover:border-emerald-400/70",
        icon: "text-emerald-300 bg-emerald-400/10",
        text: "text-emerald-300",
        glow: "group-hover:shadow-emerald-500/20",
        line: "from-emerald-400 to-teal-500",
    },
    {
        accent: "orange",
        border: "group-hover:border-orange-400/70",
        icon: "text-orange-300 bg-orange-400/10",
        text: "text-orange-300",
        glow: "group-hover:shadow-orange-500/20",
        line: "from-orange-400 to-amber-500",
    },
];

const ToolCard = ({ tool }) => {
    const Icon = tool.icon;
    const theme = themes[tool.id % themes.length];

    return (
        <Link
            to={tool.path}
            className={`
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-zinc-800
                bg-[#111216]
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#17181d]
                hover:shadow-2xl
                ${theme.border}
                ${theme.glow}
            `}
        >
            {/* top neon line */}

            <div
                className={`absolute left-0 top-0 h-0.5 w-full bg-linear-to-r ${theme.line}`}
            />

            {/* corner glow */}

            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/5 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />

            {/* icon */}

            <div
                className={`mb-5 inline-flex rounded-xl p-3 ${theme.icon}`}
            >
                <Icon size={24} />
            </div>

            <h2 className="mb-2 text-xl font-semibold text-zinc-100">
                {tool.title}
            </h2>

            <p className="mb-6 text-sm leading-relaxed text-zinc-400">
                {tool.description}
            </p>

            <div
                className={`flex items-center gap-2 font-medium ${theme.text}`}
            >
                Open Tool

                <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                />
            </div>
        </Link>
    );
};

export default ToolCard;