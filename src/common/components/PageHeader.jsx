const PageHeader = ({ title, description }) => {
    return (
        <div className="mb-10">

            <h1 className="text-3xl font-bold">
                {title}
            </h1>

            <p className="mt-2 text-zinc-400">
                {description}
            </p>

        </div>
    );
};

export default PageHeader;