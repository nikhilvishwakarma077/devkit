import { useEffect, useState } from "react";
import PageHeader from "../../../common/components/PageHeader";
import Card from "../../../common/components/Card";
import Button from "../../../common/components/Button";
import CopyButton from "../components/CopyButton";

const PasswordGenerator = () => {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(12);
    const [options, setOptions] = useState({
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true,
    });

    const generatePassword = () => {
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const nums = "0123456789";
        const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

        let chars = "";

        if (options.uppercase) chars += upper;
        if (options.lowercase) chars += lower;
        if (options.numbers) chars += nums;
        if (options.symbols) chars += symbols;

        if (!chars) {
            setPassword("");
            return;
        }

        let result = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            result += chars[randomIndex];
        }

        setPassword(result);
    };

    const toggleOption = (key) => {
        setOptions((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    // 🔥 REAL TIME GENERATION
    useEffect(() => {
        generatePassword();
    }, [length, options]);

    const strength =
        password.length >= 20
            ? "Strong"
            : password.length >= 12
                ? "Medium"
                : "Weak";

    const strengthColor =
        strength === "Strong"
            ? "text-green-400"
            : strength === "Medium"
                ? "text-yellow-400"
                : "text-red-400";

    return (
        <div className="space-y-6">
            <PageHeader
                title="Password Generator"
                description="Real-time secure password generator"
            />

            {/* MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                {/* OUTPUT PANEL */}
                <Card className="lg:col-span-2 p-5 space-y-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-sm text-zinc-400">
                            Generated Password
                        </h2>
                        <CopyButton text={password} />
                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
                        <p className="text-green-400 break-all text-lg font-mono">
                            {password || "Generating..."}
                        </p>
                    </div>

                    {/* STRENGTH INDICATOR */}
                    <div className="flex justify-between text-sm">
                        <span className="text-zinc-400">Strength</span>
                        <span className={`${strengthColor} font-semibold`}>
                            {strength}
                        </span>
                    </div>
                </Card>

                {/* CONTROLS PANEL */}
                <Card className="p-5 space-y-6">

                    {/* LENGTH */}
                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="text-sm text-zinc-300">
                                Length
                            </span>
                            <span className="text-indigo-400 font-semibold">
                                {length}
                            </span>
                        </div>

                        <input
                            type="range"
                            min="6"
                            max="32"
                            value={length}
                            onChange={(e) => setLength(Number(e.target.value))}
                            className="w-full accent-indigo-500"
                        />
                    </div>

                    {/* OPTIONS */}
                    <div className="space-y-3">
                        <p className="text-sm text-zinc-400">
                            Character Options
                        </p>

                        {Object.keys(options).map((key) => (
                            <label
                                key={key}
                                className="flex items-center justify-between bg-zinc-900 border border-zinc-800 px-3 py-2 rounded-md cursor-pointer hover:border-indigo-500 transition"
                            >
                                <span className="text-sm capitalize text-zinc-300">
                                    {key}
                                </span>

                                <input
                                    type="checkbox"
                                    checked={options[key]}
                                    onChange={() => toggleOption(key)}
                                    className="accent-indigo-500"
                                />
                            </label>
                        ))}
                    </div>

                    {/* ACTION */}
                    <Button
                        onClick={generatePassword}
                        className="w-full"
                    >
                        Regenerate
                    </Button>
                </Card>
            </div>
        </div>
    );
};

export default PasswordGenerator;