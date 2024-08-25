"use client";
import React, { useState, useEffect } from "react";
import { files, folders } from "@/lib/data";
import FileModal from "@/components/filemodal";
import FolderModal from "@/components/folderModal";
import RandomQuote from "@/components/RandomQuote";
import ItemGrid from "@/components/ItemGrid";
import { quotes } from "@/lib/quote";

const Home: React.FC = () => {
  const [selectedFolder, setSelectedFolder] = useState<folder | null>(null);
  const [selectedFile, setSelectedFile] = useState<file | null>(null);
  const [randomQuote, setRandomQuote] = useState<{
    quote: string;
    author: string;
  } | null>(null);

  {
    /*
        Challenge: 3
        Generating The Random Quote.
        Solution: https://discord.gg/CRuWmVjYh2
      */
  }

  const nakedFiles = files.filter((file) => !file.isInFolder);
  const allItems = [...nakedFiles, ...folders];
  allItems.sort((a, b) => a.name.length - b.name.length);

  const handleFileModalOpen = (file: file) => {
    setSelectedFile(file);
  };

  const handleFolderModalOpen = (folder: folder) => {
    setSelectedFolder(folder);
  };

  const closeModals = () => {
    setSelectedFile(null);
    setSelectedFolder(null);
  };

  return (
    <main className="h-screen w-full relative overflow-hidden">
      {/*
        Challenge: 1
        Add a bigger noise to the background video.
        Solution: https://discord.gg/CRuWmVjYh2
      */}
      <div className="absolute inset-0">
        <div id="movie-bg" />
        <video
          src="./bg.mp4"
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
        />
      </div>

      <div
        className="
        absolute inset-0
        bg-gradient-to-b from-black to-transparent
        flex flex-col justify-center items-center
        text-6xl text-white
        font-bold w-[full]
        pointer-events-none
        select-none
      "
      >
        <RandomQuote quote={randomQuote} />
      </div>

      <div className="absolute inset-0 flex justify-start p-4">
        <div className="h-full overflow-y-auto">
          <ItemGrid
            items={allItems}
            onFileClick={handleFileModalOpen}
            onFolderClick={handleFolderModalOpen}
          />
        </div>
      </div>

      {selectedFolder && (
        <FolderModal
          item={selectedFolder}
          closeModal={closeModals}
          onFileClick={handleFileModalOpen}
        />
      )}
      {selectedFile && (
        <FileModal item={selectedFile} closeModal={closeModals} />
      )}
    </main>
  );
};

export default Home;
