"use client";
import { useEffect } from "react";

const TrackVisit = () => {
  useEffect(() => {
    fetch("/api/track-visit", { method: "POST" });
  }, []);
  return null;
};

export default TrackVisit;
