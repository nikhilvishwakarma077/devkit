const Footer = () => {
    return (
        <footer className="border-t border-zinc-800 bg-zinc-950">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

                <div className="grid gap-8 text-center md:grid-cols-3 md:text-left">

                    {/* Brand */}
                    <div>
                        <h3 className="text-xl font-bold text-white">
                            DevKit
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-zinc-400">
                            A collection of useful developer tools built with
                            React and Tailwind CSS to improve productivity.
                        </p>
                    </div>

                    {/* Developer Info */}

                    <div>
                        <h4 className="mb-3 text-lg font-semibold text-white">
                            Developer
                        </h4>

                        <p className="text-zinc-400">
                            <span className="font-medium text-white">
                                Name:
                            </span>{" "}
                            Nikhil Vishwakarma
                        </p>

                        <p className="mt-2 text-zinc-400">
                            <span className="font-medium text-white">
                                Email:
                            </span>{" "}
                            <a
                                href="mailto:nikhilvishwakarma696@gmail.com"
                                className="mt-1 inline-block text-sm text-indigo-400 transition hover:text-indigo-300 hover:underline"
                            >
                                nikhilvishwakarma696@gmail.com
                            </a>
                        </p>
                    </div>

                    {/* Credits */}

                    <div>
                        <h4 className="mb-3 text-lg font-semibold text-white">
                            Credits
                        </h4>

                        <a
                            href="https://digitalheroesco.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-indigo-400 transition hover:text-indigo-300"
                        >
                            Built for Digital Heroes
                        </a>

                        <p className="mt-3 text-sm text-zinc-500">
                            React • Tailwind CSS • Vite
                        </p>
                    </div>

                </div>

                {/* Bottom */}

                <div className="mt-8 border-t border-zinc-800 pt-5 text-center text-sm text-zinc-500">
                    © {new Date().getFullYear()} DevKit. All Rights Reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;