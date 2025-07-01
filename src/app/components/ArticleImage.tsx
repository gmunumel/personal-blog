import React, { useState } from "react";
import ImageModal from "@/app/components/ImageModal";

const ArticleImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        {...props}
        className={`border bg-white border-gray-200 dark:border-gray-700 shadow-md transition-transform duration-200 hover:scale-[1.02] p-6 rounded mx-auto ${
          props.className ?? ""
        }`}
        style={{ cursor: "zoom-in", ...props.style }}
        onClick={() => setOpen(true)}
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setOpen(true)}
        aria-label="Click to view full screen"
      />
      {open && props.src && (
        <ImageModal
          src={
            typeof props.src === "string"
              ? props.src
              : props.src
              ? URL.createObjectURL(props.src)
              : ""
          }
          alt={props.alt}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default ArticleImage;
