import React, { useEffect } from "react";
import Image from "next/image";
import fileImg from "@/../public/file.png";

const FolderModal = ({
  item,
  closeModal,
  onFileClick,
}: {
  item: folder;
  closeModal: () => void;
  onFileClick: (file: file) => void;
}) => {
  useEffect(() => {
    if (window === undefined) return;
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [closeModal]);

  const handleUrl = (url: string) => {
    if (window === undefined) return;
    window.open(url, "_blank");
  };
  {
    /*
        Challenge: 2
        Make the modal draggable.
        Solution: https://discord.gg/CRuWmVjYh2
      */
  }
  return (
    <div
      className="fixed bg-black text-white border-white border-2 border-b-4 p-4 pixelated"
      style={{ minWidth: "50rem", minHeight: "20rem" }} // Adjust size as needed
    >
      <div className="flex flex-row border-b border-white/50 border-dotted mt-2">
        <h1 className="flex-grow">{item.name}</h1>
        <button className="hover:text-white/60" onClick={closeModal}>
          x
        </button>
      </div>
      <div className="p-4">
        {item.files.map((file) => (
          <div key={file.name} className="flex flex-row items-center gap-2">
            <Image src={fileImg} alt="File" width={24} height={24} />
            <p
              className="cursor-pointer hover:underline"
              onClick={() => {
                if (file.haveContent) {
                  onFileClick(file);
                } else {
                  handleUrl(file.url as string);
                }
              }}
            >
              {file.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FolderModal;
