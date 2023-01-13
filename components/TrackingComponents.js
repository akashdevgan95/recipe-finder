"use client";

import React, { useEffect } from "react";

const TrackingComponents = () => {
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      const els = Array.from(document.querySelectorAll(".client")).concat(
        Array.from(document.querySelectorAll(".server")).flat()
      );

      if (e.key == "d") {
        els.map((el) => el.classList.add("debug"));
      } else if (e.key == "r") {
        els.map((el) => el.classList.remove("debug"));
      }
    });
  }, []);
  return <></>;
};

export default TrackingComponents;
