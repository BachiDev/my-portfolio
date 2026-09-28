"use client";

import { useEffect } from "react";

const TARGET = "https://bachi.dev/work";

// This repo is retired: the portfolio now lives at bachi.dev/work.
// This page only keeps old https://bachidev.github.io/my-portfolio/ links working.
export default function Home() {
  useEffect(() => {
    window.location.replace(TARGET);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        fontFamily: "system-ui, sans-serif",
        background: "#09090b",
        color: "#f5f5f5",
        textAlign: "center",
        padding: "1rem",
      }}
    >
      <h1>This portfolio has moved</h1>
      <p>You will be redirected to the new location in a moment.</p>
      <a href={TARGET} style={{ color: "#a78bfa" }}>
        Continue to bachi.dev/work
      </a>
    </main>
  );
}
