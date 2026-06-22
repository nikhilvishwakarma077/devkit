import { useState } from "react";
import PageHeader from "../../../common/components/PageHeader";
import Card from "../../../common/components/Card";
import Button from "../../../common/components/Button";

const WordCounter = () => {
    const [text, setText] = useState("");

    const getWordCount = (str) => {
        return str.trim().split(/\s+/).filter(Boolean).length;
    };

    const getCharCountWithSpaces = (str) => str.length;

    const getCharCountWithoutSpaces = (str) =>
        str.replace(/\s/g, "").length;

    const getSentenceCount = (str) => {
        return str
            .split(/[.!?]+/)
            .filter((s) => s.trim().length > 0).length;
    };

    const getLineCount = (str) => {
        return str.split("\n").filter((l) => l.trim().length > 0).length;
    };

    const getParagraphCount = (str) => {
        return str
            .split(/\n\s*\n/)
            .filter((p) => p.trim().length > 0).length;
    };

    return (
        <div className="space-y-5">
            <PageHeader
                title="Word Counter"
                description="Live word, character, sentence and paragraph counter"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* INPUT */}
                <Card className="p-4">
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Type or paste your text..."
                        className="w-full h-75 bg-zinc-900 text-white p-3 rounded-md border border-zinc-700 outline-none"
                    />
                </Card>

                {/* STATS */}
<Card className="p-5 space-y-4 text-zinc-200">
  <div className="grid grid-cols-2 gap-3">
    {/* WORDS */}
    <div className="bg-zinc-900 border border-zinc-600 rounded-lg p-3">
      <p className="text-xs text-zinc-400">Words</p>
      <p className="text-2xl font-semibold text-green-400">
        {getWordCount(text)}
      </p>
    </div>

    {/* CHAR WITH SPACES */}
    <div className="bg-zinc-900 border border-zinc-600 rounded-lg p-3">
      <p className="text-xs text-zinc-400">Chars (with spaces)</p>
      <p className="text-2xl font-semibold text-green-400">
        {getCharCountWithSpaces(text)}
      </p>
    </div>

    {/* CHAR NO SPACES */}
    <div className="bg-zinc-900 border border-zinc-600 rounded-lg p-3">
      <p className="text-xs text-zinc-400">Chars (no spaces)</p>
      <p className="text-2xl font-semibold text-green-400">
        {getCharCountWithoutSpaces(text)}
      </p>
    </div>

    {/* SENTENCES */}
    <div className="bg-zinc-900 border border-zinc-600 rounded-lg p-3">
      <p className="text-xs text-zinc-400">Sentences</p>
      <p className="text-2xl font-semibold text-green-400">
        {getSentenceCount(text)}
      </p>
    </div>

    {/* LINES */}
    <div className="bg-zinc-900 border border-zinc-600 rounded-lg p-3">
      <p className="text-xs text-zinc-400">Lines</p>
      <p className="text-2xl font-semibold text-green-400">
        {getLineCount(text)}
      </p>
    </div>

    {/* PARAGRAPHS */}
    <div className="bg-zinc-900 border border-zinc-600 rounded-lg p-3">
      <p className="text-xs text-zinc-400">Paragraphs</p>
      <p className="text-2xl font-semibold text-green-400">
        {getParagraphCount(text)}
      </p>
    </div>
  </div>
</Card>
            </div>

            {/* CLEAR ONLY */}
            <div>
                <Button variant="secondary" onClick={() => setText("")}>
                    Clear
                </Button>
            </div>
        </div>
    );
};

export default WordCounter;