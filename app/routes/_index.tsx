import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import CustomSheet from "~/components/CustomSheet";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>

      {/* Button for Opening Sheet from Parent */}
      <button type="button" onClick={handleOpen}>
        Open Me
      </button>

      {/* Custom Sheet that is Open with Parent Button and Close with Child Closing Button */}
      <CustomSheet isOpen={isOpen} handleClose={handleClose} />
    </div>
  );
}
