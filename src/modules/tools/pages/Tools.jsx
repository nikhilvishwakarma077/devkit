// import { useMemo, useState } from "react";
// import { Link } from "react-router-dom";
// import PageHeader from "../../../common/components/PageHeader";
// import Card from "../../../common/components/Card";
// import Button from "../../../common/components/Button";
// import tools from "../../../data/tools";
// import ToolCard from "../components/ToolCard";


// const Tools = () => {
//     const [search, setSearch] = useState("");

//     const filteredTools = useMemo(() => {
//         return tools.filter((tool) =>
//             tool.title.toLowerCase().includes(search.toLowerCase())
//         );
//     }, [search]);

//     return (
//         <div className="space-y-8">
//             <PageHeader
//                 title="Developer Tools"
//                 description="Browse all available utilities."
//             />


//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                 {filteredTools.map((tool) => (
//                     <ToolCard key={tool.id} tool={tool} />
//                 ))}
//             </div>

//             {filteredTools.length === 0 && (
//                 <Card className="p-10 text-center">
//                     <p className="text-zinc-400">
//                         No tools found.
//                     </p>
//                 </Card>
//             )}
//         </div>
//     );
// };

// export default Tools;


import { useMemo, useState } from "react";
import PageHeader from "../../../common/components/PageHeader";
import Card from "../../../common/components/Card";
import tools from "../../../data/tools";
import ToolCard from "../components/ToolCard";

const Tools = () => {
    const [search, setSearch] = useState("");

    const filteredTools = useMemo(() => {
        return tools.filter((tool) =>
            tool.title.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    return (
        <div className="space-y-10">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-linear-to-br from-zinc-950 via-zinc-900 to-zinc-950 p-8">
                <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
                <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

                <PageHeader
                    title="Developer Tools"
                    description="A collection of modern utilities to boost your workflow."
                />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredTools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                ))}
            </div>

            {filteredTools.length === 0 && (
                <Card className="border-zinc-800 bg-zinc-900/70 p-10 text-center">
                    <p className="text-zinc-400">No tools found.</p>
                </Card>
            )}
        </div>
    );
};

export default Tools;