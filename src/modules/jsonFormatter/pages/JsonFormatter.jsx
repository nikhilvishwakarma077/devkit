import { useState } from "react";
import PageHeader from "../../../common/components/PageHeader";
import Card from "../../../common/components/Card";
import Button from "../../../common/components/Button";
import CopyButton from "../../passwordGenerator/components/CopyButton";

const JsonFormatter = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
      setError("");
    } catch (err) {
      setError("Invalid JSON format");
      setOutput("");
    }
  };

  const minifyJSON = () => {
    try {
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      setOutput(minified);
      setError("");
    } catch (err) {
      setError("Invalid JSON format");
      setOutput("");
    }
  };

  const validateJSON = () => {
    try {
      JSON.parse(input);
      setError("");
      setOutput("Valid JSON ✅");
    } catch (err) {
      setError("Invalid JSON ❌");
      setOutput("");
    }
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  return (
    <div className="space-y-4 px-2 sm:px-4">
      <PageHeader
        title="JSON Formatter"
        description="Beautify, minify and validate JSON instantly"
      />

      {/* INPUT + OUTPUT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {/* INPUT */}
        <Card className="p-3 sm:p-4">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your JSON here..."
            className="w-full min-h-64 sm:min-h-80 lg:h-full bg-zinc-900 text-white p-3 rounded-md outline-none border border-zinc-700 resize-none"
          />
        </Card>

        {/* OUTPUT */}
        <Card className="p-3 sm:p-4 relative">
          <div className="absolute top-6 right-6 sm:top-4 sm:right-4">
            <CopyButton text={output} />
          </div>

          <pre className="w-full min-h-64 sm:min-h-80 lg:h-full overflow-auto bg-zinc-900 text-green-400 p-3 rounded-md border border-zinc-700 whitespace-pre-wrap wrap-break-word">
            {error ? (
              <span className="text-red-400">{error}</span>
            ) : output ? (
              output
            ) : (
              "Output..."
            )}
          </pre>
        </Card>
      </div>

      {/* ACTIONS */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-3">
        <Button onClick={formatJSON} className="w-full sm:w-auto">
          Beautify
        </Button>

        <Button onClick={minifyJSON} className="w-full sm:w-auto">
          Minify
        </Button>

        <Button onClick={validateJSON} className="w-full sm:w-auto">
          Validate
        </Button>

        <Button onClick={clearAll} variant="secondary" className="w-full sm:w-auto">
          Clear
        </Button>
      </div>

      {/* ERROR */}
      {error && (
        <p className="text-red-400 text-sm mt-2 wrap-break-word">
          {error}
        </p>
      )}
    </div>
  );
};

export default JsonFormatter;