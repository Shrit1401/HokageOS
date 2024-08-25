import React from "react";
import Image from "next/image";
import fileImg from "@/../public/file.png";
import folderImg from "@/../public/folder.png";

type Item = file | folder;

interface ItemGridProps {
  items: Item[];
  onFileClick: (file: file) => void;
  onFolderClick: (folder: folder) => void;
}

const ItemGrid: React.FC<ItemGridProps> = ({
  items,
  onFileClick,
  onFolderClick,
}) => (
  <div
    className="grid gap-4 auto-cols-max"
    style={{
      gridAutoFlow: "column",
      gridTemplateRows: "repeat(auto-fill, minmax(100px, 1fr))",
      gridAutoColumns: "min-content",
      justifyContent: "end",
      maxHeight: "calc(100vh - 2rem)",
    }}
  >
    {items.map((item) => (
      <div
        key={item.name}
        className="flex flex-col items-center gap-2 cursor-pointer hover:underline p-2 rounded-lg"
        onClick={() => {
          if ("isInFolder" in item) {
            const fileItem = item as file;
            if (fileItem.haveContent) {
              onFileClick(fileItem);
            } else {
              window.open(fileItem.url as string, "_blank");
            }
          } else {
            onFolderClick(item as folder);
          }
        }}
      >
        <Image
          src={"isInFolder" in item ? fileImg : folderImg}
          alt={"isInFolder" in item ? "file" : "folder"}
          width={70}
          height={70}
        />
        <span className="text-sm bg-black text-white px-1">{item.name}</span>
      </div>
    ))}
  </div>
);

export default ItemGrid;
