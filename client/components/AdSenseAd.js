"use client";

import { useEffect } from "react";

export default function AdSenseAd() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-4592493088244067"
      data-ad-slot="1666205960"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}