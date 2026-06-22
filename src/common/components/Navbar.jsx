import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Code2, Menu, X } from "lucide-react";

const navLinks = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Tools",
        path: "/tools",
    },
    {
        name: "About",
        path: "/about",
    },
];

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">

            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-3"
                >
                    <div className="rounded-xl bg-linear-to-r from-cyan-500 to-violet-600 p-2 shadow-lg shadow-cyan-500/20">

                        <Code2
                            size={18}
                            className="text-white"
                        />

                    </div>

                    <span className="text-xl font-bold tracking-wide text-white">
                        DevKit
                    </span>

                </Link>

                {/* Desktop Nav */}
                <nav className="hidden items-center gap-8 md:flex">

                    {navLinks.map((link) => (

                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `transition-colors ${isActive
                                    ? "text-cyan-400"
                                    : "text-zinc-300 hover:text-white"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>

                    ))}

                </nav>

                {/* Mobile Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="
                rounded-xl
                border
                border-zinc-800
                bg-zinc-900
                p-2
                transition
                hover:border-cyan-500
                md:hidden
            "
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

            </div>

            {/* Mobile Menu */}
            <div
                className={`
            overflow-hidden
            transition-all
            duration-300
            md:hidden
            ${isOpen ? "max-h-96 border-t border-zinc-800" : "max-h-0"}
        `}
            >

                <nav className="space-y-2 bg-zinc-950 px-4 py-4">

                    {navLinks.map((link) => (

                        <NavLink
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `
                        block
                        rounded-xl
                        px-4
                        py-3
                        transition-all
                        ${isActive
                                    ? "bg-cyan-500/10 text-cyan-400"
                                    : "text-zinc-300 hover:bg-zinc-900 hover:text-white"
                                }
                        `
                            }
                        >
                            {link.name}
                        </NavLink>

                    ))}

                </nav>

            </div>

        </header>
    );
};

export default Navbar;