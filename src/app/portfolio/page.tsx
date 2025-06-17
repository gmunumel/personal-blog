const PortfolioPage = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Portfolio</h1>
      <p className="mb-6 text-lg">
        Welcome to my portfolio! Here you can find a collection of my projects
        and work that showcases my skills and experience. Feel free to explore
        and reach out if you have any questions.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
          <h2 className="text-xl text-gray-900 dark:text-white font-semibold mb-2">
            Phonic-AI
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Live Audio Transcription. You can speak to a microphone and the app
            will transcribe your speech in real-time. It uses Whisper AI for
            transcription and React for the frontend.
          </p>
          <a
            href="https://phonic-ai.stackedge.dev/portfolio/phonic-ai"
            className="text-blue-600 dark:text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
    </main>
  );
};

export default PortfolioPage;
