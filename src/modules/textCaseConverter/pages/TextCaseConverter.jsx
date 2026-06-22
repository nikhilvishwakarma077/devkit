import { useState } from "react";
import PageHeader from "../../../common/components/PageHeader";
import Card from "../../../common/components/Card";
import Button from "../../../common/components/Button";
import CopyButton from "../../passwordGenerator/components/CopyButton";

const TextCaseConverter = () => {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const toUpperCase = () => setOutput(text.toUpperCase());

  const toLowerCase = () => setOutput(text.toLowerCase());

  const toTitleCase = () => {
    const result = text
      .toLowerCase()
      .split(" ")
      .map((word) =>
        word ? word[0].toUpperCase() + word.slice(1) : ""
      )
      .join(" ");

    setOutput(result);
  };

  const toSentenceCase = () => {
    const result =
      text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

    setOutput(result);
  };

  const clearAll = () => {
    setText("");
    setOutput("");
  };

  return (
    <div className="space-y-5">
      <PageHeader
        title="Text Case Converter"
        description="Convert text between different formats instantly"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* INPUT */}
        <Card className="p-4">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your text..."
            className="w-full h-75 bg-zinc-900 text-white p-3 rounded-md border border-zinc-700 outline-none"
          />
        </Card>

        {/* OUTPUT */}
        <Card className="p-4 relative">
          <div className="absolute top-6 right-6 ">
            <CopyButton text={output} />
          </div>

          <div className="w-full h-75 bg-zinc-900 text-green-400 p-3 rounded-md border border-zinc-700 overflow-auto">
            {output || "Converted text"}
          </div>
        </Card>
      </div>

      {/* ACTIONS */}
      <Card className="p-4 space-y-3">
        <div className="flex flex-wrap gap-3">
          <Button onClick={toUpperCase}>UPPERCASE</Button>
          <Button onClick={toLowerCase}>lowercase</Button>
          <Button onClick={toTitleCase}>Title Case</Button>
          <Button onClick={toSentenceCase}>Sentence case</Button>
          <Button variant="secondary" onClick={clearAll}>
            Clear
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default TextCaseConverter;