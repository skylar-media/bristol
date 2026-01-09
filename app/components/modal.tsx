"use client";

import "animate.css/animate.css";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  id: string;
  title: string;
  size?: string;
  body: ReactNode;
  trigger_text: ReactNode;
  embed_src?: string;
};

export default function Modal({
  id,
  title,
  size = "md",
  body,
  trigger_text,
}: ModalProps) {
  const [content, setContent] = useState<ReactNode>("");
  const [mounted, setMounted] = useState(false); // ✅ ensures client-only rendering

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const openModal = () => {
    const modal = document.getElementById(id);
    const overlay = document.getElementById(`${id}-overlay`);
    setContent(body);
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      modal?.classList.add("active");
      overlay?.classList.add("active");
    }, 200);
  };

  const closeModal = () => {
    const modal = document.getElementById(id);
    const overlay = document.getElementById(`${id}-overlay`);
    modal?.classList.remove("active");
    overlay?.classList.remove("active");
    document.body.style.overflow = "";
    const form = modal?.querySelector("form") as HTMLFormElement | null;
    form?.reset();

    const iframe = document.getElementById(
      "youtube-iframe"
    ) as HTMLIFrameElement | null;
    if (iframe) {
      const src = iframe.getAttribute("src");
      if (src) iframe.setAttribute("src", src);
    }

    setTimeout(() => setContent(""), 500);
  };

  const modalMarkup = (
    <>
      <div className={`modal inactive ${size}`} id={id}>
        <div className="modal-header">
          <div className="title">{title}</div>
          <button className="close-modal" onClick={closeModal}>
            &times;
          </button>
        </div>
        <div className={`modal-body ${size === "full" ? "container" : ""}`}>
          {content}
        </div>
      </div>

      <div className="overlay" id={`${id}-overlay`} onClick={closeModal}></div>
    </>
  );

  return (
    <>
      <span className="cursor-pointer" onClick={openModal}>
        {trigger_text}
      </span>

      {/* ✅ Only render portal after client mount */}
      {mounted && createPortal(modalMarkup, document.body)}
    </>
  );
}
