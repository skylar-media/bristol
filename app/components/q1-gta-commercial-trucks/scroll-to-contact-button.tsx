// components/ScrollToContactButton.tsx
"use client";

export default function ScrollToContactButton({ id }: { id?: string }) {
  const handleClick = () => {
    document
      .getElementById("contact-us")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      id={id}
      className="bg-red px-5 py-2 rounded-xl"
    >
      Get Quote & Save $50
    </button>
  );
}
