let pyodideReadyPromise = null;
let pyodide = null;

self.onmessage = async (event) => {
  const { type, code } = event.data;

  if (type === "init") {
    if (!pyodideReadyPromise) {
      importScripts("https://cdn.jsdelivr.net/pyodide/v0.27.6/full/pyodide.js");
      pyodideReadyPromise = self.loadPyodide();
      pyodide = await pyodideReadyPromise;
    }
    self.postMessage({ type: "ready" });
    return;
  }

  if (type === "run" && pyodide) {
    try {
      await pyodide.runPythonAsync(`
import sys
from io import StringIO
sys.stdout = StringIO()
`);
      await pyodide.runPythonAsync(code);
      const output = pyodide.runPython("sys.stdout.getvalue()");
      self.postMessage({ type: "result", output });
    } catch (err) {
      self.postMessage({ type: "error", error: err.message });
    }
  }
};