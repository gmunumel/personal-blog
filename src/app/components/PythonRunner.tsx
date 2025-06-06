"use client";
import { useEffect, useRef, useState } from "react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/themes/prism-tomorrow.css";

const PythonRunner = ({ code }: { code: string }) => {
  const [output, setOutput] = useState<string>("Loading Python...");
  const [currentCode, setCurrentCode] = useState(code);
  const [loading, setLoading] = useState(true);
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    // Dynamically import the worker
    const worker = new Worker(new URL("./pyodide.worker.js", import.meta.url), {
      type: "module",
    });
    workerRef.current = worker;

    worker.onmessage = (event) => {
      if (event.data.type === "ready") {
        setLoading(false);
        setOutput("");
      } else if (event.data.type === "result") {
        setOutput(event.data.output || "(no output)");
      } else if (event.data.type === "error") {
        setOutput(event.data.error);
      }
    };

    worker.postMessage({ type: "init" });

    return () => {
      worker.terminate();
    };
  }, []);

  const runCode = () => {
    if (workerRef.current) {
      setOutput("Running...");
      workerRef.current.postMessage({ type: "run", code: currentCode });
    }
  };

  // Run code automatically on first load
  useEffect(() => {
    if (!loading) runCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <div className="my-4 p-4 rounded bg-gray-50 dark:bg-gray-900">
      <Editor
        value={currentCode}
        onValueChange={setCurrentCode}
        highlight={(code) =>
          Prism.highlight(code, Prism.languages.python, "python")
        }
        padding={10}
        textareaId="python-editor"
        className="w-full rounded mb-2 text-sm font-mono bg-white dark:bg-gray-800 text-black dark:text-white"
        style={{
          outline: "none",
        }}
        disabled={loading}
      />
      <button
        className="px-3 py-1 rounded bg-blue-600 text-white disabled:bg-gray-400 cursor-pointer transition-colors"
        onClick={runCode}
        disabled={loading}
      >
        {loading ? "Loading Python..." : "Run Python"}
      </button>
      <pre className="mt-2 bg-gray-800 p-2 rounded whitespace-pre-wrap text-xs">
        {output}
      </pre>
    </div>
  );
};

export default PythonRunner;
