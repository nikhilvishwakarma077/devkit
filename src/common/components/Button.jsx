import clsx from "clsx";

const variants = {
    primary: 
        "bg-indigo-600 hover:bg-indigo-500 text-white",

    secondary:
        "bg-zinc-800 hover:bg-zinc-700 text-white",

    danger:
        "bg-red-600 hover:bg-red-500 text-white",

    success:
        "bg-emerald-600 hover:bg-emerald-500 text-white",

    outline:
        "border border-zinc-700 hover:border-indigo-500 hover:bg-zinc-900 text-white",
};

const Button = ({
    children,
    variant = "primary",
    className,
    ...props
}) => {
    return (
        <button
            className={clsx(
                "rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;