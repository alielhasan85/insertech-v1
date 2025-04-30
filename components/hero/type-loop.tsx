// components/hero/type-loop.tsx
"use client";

import { Typewriter } from "react-simple-typewriter";

export default function TypeLoop() {
  return (
    <span className="text-blue-600">
      <Typewriter
        words={[
          "mobile apps",
          "web platforms",
          "e-commerce",
          "fintech solutions",
          "AI products",
          "UI/UX",
        ]}
        loop={0} // 0 = infinite
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={40}
        delaySpeed={1800}
      />
    </span>
  );
}
