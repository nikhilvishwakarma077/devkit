import { Braces, KeyRound, Type, FileText, Fingerprint, Palette, Clock3 } from "lucide-react";

const tools = [
    {
        id: 1,
        title: "JSON Formatter",
        description: "Beautify, Minify & Validate JSON",
        icon: Braces,
        path: "/tools/json-formatter",
    },
    {
        id: 2,
        title: "Password Generator",
        description: "Generate strong secure passwords",
        icon: KeyRound,
        path: "/tools/password-generator",
    },
    {
        id: 3,
        title: "Text Case Converter",
        description: "Convert text into multiple cases",
        icon: Type,
        path: "/tools/text-case-converter",
    },
    {
        id: 4,
        title: "Word Counter",
        description: "Count words, characters & lines",
        icon: FileText,
        path: "/tools/word-counter",
    },
    {
        id: 5,
        title: "UUID Generator",
        description: "Generate unique UUIDs instantly",
        icon: Fingerprint,
        path: "/tools/uuid-generator",
    },
    {
        id: 6,
        title: "Color Palette",
        description: "Generate beautiful color palettes",
        icon: Palette,
        path: "/tools/color-palette",
    },
    {
        id: 7,
        title: "Timestamp Converter",
        description: "Convert Unix & Human timestamps",
        icon: Clock3,
        path: "/tools/timestamp-converter",
    },
];

export default tools;