import { Link } from "react-router-dom";
import { Search, Code2, Palette, FileJson, ShieldCheck, Type, ArrowRight } from "lucide-react";

import Card from "../../../common/components/Card";
import Button from "../../../common/components/Button";

const popularTools = [
    {
        title: "JSON Formatter",
        icon: <FileJson size={28} />,
        path: "/tools/json-formatter",
    },
    {
        title: "Password Generator",
        icon: <ShieldCheck size={28} />,
        path: "/tools/password-generator",
    },
    {
        title: "Word Counter",
        icon: <Type size={28} />,
        path: "/tools/word-counter",
    },
    {
        title: "Color Palette",
        icon: <Palette size={28} />,
        path: "/tools/color-palette",
    },
];

const stats = [
    {
        value: "5+",
        label: "Developer Tools",
    },
    {
        value: "100%",
        label: "Responsive",
    },
    {
        value: "Fast",
        label: "React + Vite",
    },
    {
        value: "Free",
        label: "Open Source",
    },
];

const categories = [
    "Formatting",
    "Generators",
    "Text Tools",
    "Converters",
    "Utilities",
    "Color Tools",
];

export default function Home() {
    return (
        <div className="space-y-16">

            {/* Hero */}

            <section className="relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-8 py-16 lg:px-16">

                {/* Background Blur */}
                <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

                <div className="relative grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left */}
                    <div>

                        <span className="inline-flex items-center rounded-full bg-indigo-100 dark:bg-indigo-500/20 px-4 py-1 text-sm font-medium text-indigo-600">
                            🚀 Developer Toolkit
                        </span>

                        <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-zinc-900 dark:text-white">
                            Build Faster with
                            <span className="text-indigo-600"> DevKit</span>
                        </h1>

                        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 leading-8">
                            A collection of lightweight developer utilities designed to improve
                            productivity. Format JSON, generate passwords, count words, create
                            color palettes, and much more—all in one place.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link to="/tools">
                                <Button>Explore Tools</Button>
                            </Link>

                            <Link to="/about">
                                <Button variant="secondary">Learn More</Button>
                            </Link>
                        </div>

                    </div>

                    {/* Right */}

                    <div className="hidden lg:flex justify-center">

                        <div className="w-full max-w-md rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 p-6 shadow-xl">

                            <div className="flex gap-2 mb-5">
                                <span className="h-3 w-3 rounded-full bg-red-400"></span>
                                <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                                <span className="h-3 w-3 rounded-full bg-green-400"></span>
                            </div>

                            <div className="space-y-3 text-sm font-mono">

                                <div className="rounded-lg bg-zinc-200 dark:bg-zinc-700 p-3">
                                    JSON Formatter ✓
                                </div>

                                <div className="rounded-lg bg-zinc-200 dark:bg-zinc-700 p-3">
                                    Password Generator ✓
                                </div>

                                <div className="rounded-lg bg-zinc-200 dark:bg-zinc-700 p-3">
                                    Word Counter ✓
                                </div>

                                <div className="rounded-lg bg-zinc-200 dark:bg-zinc-700 p-3">
                                    Color Palette ✓
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* Popular */}

            <section className="relative">

                <div className="flex items-center justify-between mb-8">

                    <div>

                        <h2 className="text-3xl font-bold text-zinc-100">
                            Popular Tools
                        </h2>

                        <p className="mt-2 text-zinc-400">
                            Frequently used developer utilities.
                        </p>

                    </div>

                    <Link
                        to="/tools"
                        className="
                group
                flex
                items-center
                gap-2
                rounded-full
                border
                border-zinc-800
                bg-zinc-900/70
                px-5
                py-2.5
                text-cyan-400
                transition-all
                hover:border-cyan-500/40
                hover:bg-zinc-800
            "
                    >
                        View All

                        <ArrowRight
                            size={18}
                            className="transition-transform group-hover:translate-x-1"
                        />

                    </Link>

                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                    {popularTools.map((tool) => (

                        <Link
                            key={tool.title}
                            to={tool.path}
                            className="group"
                        >

                            <Card
                                className="
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        border-zinc-800
                        bg-zinc-900/70
                        backdrop-blur-xl
                        p-6
                        transition-all
                        duration-500
                        hover:border-cyan-400/40
                        hover:shadow-[0_0_40px_rgba(34,211,238,.08)]
                    "
                            >

                                {/* Left Accent */}

                                <div
                                    className="
                            absolute
                            left-0
                            top-0
                            h-full
                            w-1
                            bg-linear-to-b
                            from-cyan-400
                            via-violet-500
                            to-fuchsia-500
                            scale-y-0
                            origin-top
                            transition-transform
                            duration-500
                            group-hover:scale-y-100
                        "
                                />

                                {/* Spotlight */}

                                <div
                                    className="
                            absolute
                            inset-0
                            opacity-0
                            transition-opacity
                            duration-500
                            group-hover:opacity-100
                            bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.08),transparent_60%)]
                        "
                                />

                                <div
                                    className="
                            relative
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-cyan-500/20
                            bg-linear-to-br
                            from-cyan-500/15
                            to-violet-500/15
                            text-cyan-300
                            transition-all
                            duration-500
                            group-hover:rotate-6
                            group-hover:scale-110
                        "
                                >
                                    {tool.icon}
                                </div>

                                <h3 className="relative mt-6 text-lg font-semibold text-zinc-100">
                                    {tool.title}
                                </h3>

                                <p className="relative mt-2 text-sm text-zinc-400">
                                    Open utility instantly
                                </p>

                                <div
                                    className="
                            relative
                            mt-6
                            flex
                            items-center
                            gap-2
                            text-cyan-400
                            opacity-0
                            transition-all
                            duration-300
                            group-hover:opacity-100
                        "
                                >

                                    Open tool

                                    <ArrowRight
                                        size={16}
                                        className="transition-transform group-hover:translate-x-1"
                                    />

                                </div>

                            </Card>

                        </Link>

                    ))}

                </div>

            </section>

            {/* Stats */}

            <section className="relative">

                <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[140px]" />

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    {stats.map((item, index) => (

                        <Card
                            key={item.label}
                            className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-zinc-800
                    bg-zinc-900/70
                    backdrop-blur-xl
                    p-7
                    transition-all
                    duration-500
                    hover:border-cyan-500/30
                    hover:shadow-[0_0_35px_rgba(34,211,238,.08)]
                "
                        >

                            {/* Decorative Dot */}

                            <div className="absolute right-5 top-5 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]" />

                            {/* Background Number */}

                            <span
                                className="
                        absolute
                        -right-5
                        bottom-0
                        text-8xl
                        font-black
                        text-white/3
                        select-none
                    "
                            >
                                0{index + 1}
                            </span>

                            <p className="text-sm uppercase tracking-[3px] text-zinc-500">
                                {item.label}
                            </p>

                            <h2
                                className="
                        mt-4
                        text-5xl
                        font-black
                        bg-linear-to-r
                        from-cyan-300
                        via-sky-400
                        to-violet-400
                        bg-clip-text
                        text-transparent
                    "
                            >
                                {item.value}
                            </h2>

                            {/* Progress */}

                            <div className="mt-8 h-2 overflow-hidden rounded-full bg-zinc-800">

                                <div
                                    className="
                            h-full
                            w-3/4
                            rounded-full
                            bg-linear-to-r
                            from-cyan-400
                            to-violet-500
                            transition-all
                            duration-700
                            group-hover:w-full
                        "
                                />

                            </div>

                        </Card>

                    ))}

                </div>

            </section>

            {/* Categories */}

            <section className="relative">

                {/* Background Glow */}

                <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
                <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

                <h2 className="mb-8 text-3xl font-bold tracking-tight text-zinc-100">
                    Browse Categories
                </h2>

                <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-6">

                    {categories.map((item, index) => (

                        <Card
                            key={item}
                            className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-zinc-800
                    bg-zinc-900/70
                    backdrop-blur-xl
                    p-6
                    text-center
                    transition-all
                    duration-500
                    hover:-translate-y-3
                    hover:border-cyan-400/40
                    hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
                "
                        >

                            {/* Animated Top Line */}

                            <div
                                className="
                        absolute
                        left-0
                        top-0
                        h-0.5
                        w-full
                        origin-left
                        scale-x-0
                        bg-linear-to-r
                        from-cyan-400
                        via-violet-400
                        to-fuchsia-500
                        transition-transform
                        duration-500
                        group-hover:scale-x-100
                    "
                            />

                            {/* Glow Orb */}

                            <div
                                className="
                        absolute
                        -right-12
                        -top-12
                        h-32
                        w-32
                        rounded-full
                        bg-cyan-400/10
                        blur-3xl
                        opacity-0
                        transition-all
                        duration-500
                        group-hover:opacity-100
                        group-hover:scale-125
                    "
                            />

                            {/* Floating Icon */}

                            <div
                                className="
                        mx-auto
                        mb-5
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-cyan-400/20
                        bg-linear-to-br
                        from-cyan-500/15
                        to-violet-500/15
                        text-cyan-300
                        transition-all
                        duration-500
                        group-hover:-translate-y-2
                        group-hover:rotate-6
                        group-hover:scale-110
                        
                    "
                            >
                                <Code2 size={30} />
                            </div>

                            <p
                                className="
                        relative
                        font-semibold
                        text-zinc-200
                        transition-colors
                        duration-300
                        group-hover:text-white
                    "
                            >
                                {item}
                            </p>

                        </Card>

                    ))}

                </div>

            </section>

        </div>
    );
}