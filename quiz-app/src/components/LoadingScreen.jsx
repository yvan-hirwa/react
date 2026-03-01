import React from "react";

function LoadingScreen() {
  return (
    <div className="w-xl h-130 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex flex-col justify-center items-center">
      <div className="w-10 h-10 border-4 border-indigo-500 border-t-white/5 rounded-full animate-spin"></div>
    </div>
  );
}

export default LoadingScreen;
