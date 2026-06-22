import { useState } from "react";
import PageHeader from "../../../common/components/PageHeader";
import Card from "../../../common/components/Card";
import Button from "../../../common/components/Button";
import CopyButton from "../../passwordGenerator/components/CopyButton";

const UUIDGenerator = () => {
    const [uuid, setUuid] = useState("");

    const generateUUID = () => {
        // fallback-safe UUID v4 generator (no crypto dependency issues)
        const newUuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            (char) => {
                const random = (Math.random() * 16) | 0;
                const value = char === "x" ? random : (random & 0x3) | 0x8;
                return value.toString(16);
            }
        );

        setUuid(newUuid);
    };

    const clearAll = () => setUuid("");

    return (
        <div className="space-y-5">
            <PageHeader
                title="UUID Generator"
                description="Generate unique identifiers (UUID v4)"
            />

            {/* OUTPUT */}
            <Card className="p-4 relative">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                    <p className="text-green-400 break-all text-sm sm:text-base">
                        {uuid || "Click generate to create UUID"}
                    </p>

                    <div className="self-end sm:self-auto">
                        <CopyButton text={uuid} />
                    </div>

                </div>
            </Card>

            {/* ACTIONS */}
            <div className="flex gap-3">
                <Button onClick={generateUUID}>Generate UUID</Button>
                <Button variant="secondary" onClick={clearAll}>
                    Clear
                </Button>
            </div>
        </div>
    );
};

export default UUIDGenerator;