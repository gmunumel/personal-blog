const Loader = () => {
  return (
    <div className="flex items-center justify-center h-32">
      <span className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mr-2"></span>
      <span className="text-lg text-gray-600 dark:text-gray-300">
        Loading...
      </span>
    </div>
  );
};

export default Loader;
