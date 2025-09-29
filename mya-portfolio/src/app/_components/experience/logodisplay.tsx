"use client";
import Dpulogo from "../svg/dpulogo";
import Nulogo from "../svg/nulogo";
import { GiStealthBomber } from "react-icons/gi";
import { GrPersonalComputer } from "react-icons/gr";
import { useEffect, useState } from "react";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

export default function LogoDisplay({ icon }: { icon: string }) {
  const isMdUp = useMediaQuery("(min-width: 768px)");
  
  if (!isMdUp) return null;

  const logoComponents = {
    dpulogo: Dpulogo,
    nulogo: Nulogo,
    freelance: GrPersonalComputer,
    ninja: GiStealthBomber
  };

  const LogoComponent = logoComponents[icon as keyof typeof logoComponents];
  
  if (!LogoComponent) return null;

  return (
    <div className="inline-flex flex-row items-center justify-center p-5 btn-base">
      <LogoComponent className="w-6 h-6" />
    </div>
  );
}
