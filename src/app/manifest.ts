import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "(주)청아 SP&T",
    short_name: "청아 SP&T",
    description: "(주)청아 SP&T - 수산 전문 OEM·ODM 위탁가공 플랫폼",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1a1b4b",
    icons: [
      { src: "/favicon-180.png", sizes: "180x180", type: "image/png" },
      {
        src: "/favicon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
