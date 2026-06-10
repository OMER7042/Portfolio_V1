"use client";

import {
  Cloud,
  fetchSimpleIcons,
  renderSimpleIcon,
  ICloud,
} from "react-icon-cloud";
import { useEffect, useState } from "react";

// These are the slug names from simpleicons.org
// Each slug = one icon in the sphere
const slugs = [
  "typescript",
  "javascript",
  "python",
  "react",
  "nodedotjs",
  "nextdotjs",
  "express",
  "angular",
  "flask",
  "docker",
  "kubernetes",
  "googlecloud",
  "firebase",
  "mysql",
  "mongodb",
  "sqlite",
  "git",
  "github",
  "vercel",
  "html5",
  "css3",
  "tailwindcss",
  "jira",
];

// Cloud config — controls how the sphere looks and behaves
const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2.0,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export default function TechCloud() {
  const [icons, setIcons] = useState<any>(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs }).then((data) => {
      setIcons(data);
    });
  }, []);

  const renderedIcons = icons
    ? Object.values(icons.simpleIcons).map((icon: any) =>
        renderSimpleIcon({
          icon,
          bgHex: "#080B10",
          fallbackHex: "#ffffff",
          minContrastRatio: 1.2,
          size: 42,
          aProps: {
            href: undefined,
            target: undefined,
            rel: undefined,
            onClick: (e: any) => e.preventDefault(),
          },
        }),
      )
    : null;

  if (!renderedIcons) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-accent/30 border-t-accent animate-spin" />
      </div>
    );
  }

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>{renderedIcons}</Cloud>
  );
}
