import { useState } from "react";
import PageHeader from "../../../common/components/PageHeader";
import Card from "../../../common/components/Card";
import Button from "../../../common/components/Button";

const TimestampConverter = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    const convertTimestamp = () => {
        setError("");
        setResult(null);

        if (!input) return;

        let date;

        // Detect if input is timestamp (numeric) or date string
        if (!isNaN(input)) {
            // assume unix timestamp (seconds or ms)
            const num = Number(input);
            date = new Date(num < 1e12 ? num * 1000 : num);
        } else {
            date = new Date(input);
        }

        if (isNaN(date.getTime())) {
            setError("Invalid timestamp or date format");
            return;
        }

        setResult({
            iso: date.toISOString(),
            local: date.toString(),
            utc: date.toUTCString(),
            timestamp: date.getTime(),
        });
    };

    const getCurrentTime = () => {
        const date = new Date();

        setResult({
            iso: date.toISOString(),
            local: date.toString(),
            utc: date.toUTCString(),
            timestamp: date.getTime(),
        });

        setError("");
    };

    const clearAll = () => {
        setInput("");
        setResult(null);
        setError("");
    };

    return (
        <div className="space-y-5">
            <PageHeader
                title="Timestamp Converter"
                description="Convert between timestamps and human-readable dates"
            />

            {/* INPUT */}
            <Card className="p-4 space-y-3">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter timestamp or date (e.g. 1700000000 or 2024-01-01)"
                    className="w-full bg-zinc-900 text-white p-3 rounded-md border border-zinc-700 outline-none"
                />

                <div className="flex gap-3">
                    <Button onClick={convertTimestamp}>
                        Convert
                    </Button>
                    <Button onClick={getCurrentTime}>
                        Current Time
                    </Button>
                    <Button variant="secondary" onClick={clearAll}>
                        Clear
                    </Button>
                </div>

                {error && (
                    <p className="text-red-400 text-sm">{error}</p>
                )}
            </Card>

            {/* OUTPUT */}
            {result && (
                <Card className="p-4 space-y-4 text-sm">
                    <h3 className="text-zinc-200 font-semibold text-base mb-2">
                        Conversion Result
                    </h3>

                    {/* ISO */}
                    <div className="p-3 rounded-md border border-zinc-800 bg-zinc-900">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-zinc-400 font-medium">
                                ISO 8601 (International Standard Format)
                            </span>
                        </div>
                        <p className="text-green-400 break-all">{result.iso}</p>
                    </div>

                    {/* Local */}
                    <div className="p-3 rounded-md border border-zinc-800 bg-zinc-900">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-zinc-400 font-medium">
                                Local Date & Time (Your System Format)
                            </span>
                        </div>
                        <p className="text-green-400 break-all">{result.local}</p>
                    </div>

                    {/* UTC */}
                    <div className="p-3 rounded-md border border-zinc-800 bg-zinc-900">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-zinc-400 font-medium">
                                UTC (Coordinated Universal Time)
                            </span>
                        </div>
                        <p className="text-green-400 break-all">{result.utc}</p>
                    </div>

                    {/* Timestamp */}
                    <div className="p-3 rounded-md border border-zinc-800 bg-zinc-900">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-zinc-400 font-medium">
                                Unix Timestamp (Milliseconds)
                            </span>
                        </div>
                        <p className="text-green-400 break-all">{result.timestamp}</p>
                    </div>
                </Card>
            )}
        </div>
    );
};

export default TimestampConverter;