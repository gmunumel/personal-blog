"use client";
import { useState } from "react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-bash";
// Add more Prism language imports as needed
// import "prismjs/themes/prism-tomorrow.css";

type Props = {
  code: string;
  language: string;
};

const GenericCodeEditor = ({ code, language }: Props) => {
  const [currentCode, setCurrentCode] = useState(code);

  const grammar = Prism.languages[language] || Prism.languages.plain;

  return (
    <div className="my-4 p-4 rounded bg-gray-50 dark:bg-gray-900">
      <Editor
        value={currentCode}
        onValueChange={setCurrentCode}
        highlight={(code) => Prism.highlight(code, grammar, language)}
        padding={10}
        textareaId={`${language}-editor`}
        className="w-full rounded mb-2 text-sm font-mono bg-white dark:bg-gray-800 text-black dark:text-white"
        style={{
          outline: "none",
        }}
        disabled={false}
      />
    </div>
  );
};

export default GenericCodeEditor;
