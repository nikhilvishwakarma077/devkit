import { useState } from "react";
import { Copy, Check } from "lucide-react";

const CopyButton = ({ text = "" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1200);
    } catch (err) {
      console.log("Copy failed:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="p-2 rounded-md bg-zinc-800 hover:bg-zinc-700 border border-zinc-700"
    >
      {copied ? (
        <Check size={16} className="text-green-400" />
      ) : (
        <Copy size={16} />
      )}
    </button> 
  );
};

export default CopyButton;