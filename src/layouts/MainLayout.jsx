import { Outlet } from "react-router-dom";
import Footer from "../common/components/Footer";
import Navbar from "../common/components/Navbar";

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">

            <Navbar />

            <main className="flex-1">
                <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    <Outlet />
                </div>
            </main>

            <Footer />

        </div>
    );
};

export default MainLayout;