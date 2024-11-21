"use client";
import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,

  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  videoSrc, // Adăugăm sursa videoclipului
  videoClassName,
  titleClassName,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  videoSrc?: string; // Nouă proprietate pentru videoclip
  videoClassName?: string;
  titleClassName?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "hsu@jsmastery.pro";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 font-courier",
        className
      )}
      style={{
        background: "rgb(0,0,0)",
        backgroundColor:
          "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)",
      }}
    >
      {/* Înlocuim imaginea cu videoclip */}
      <div
        className={`${
          id === 6 ? "flex justify-start" : "flex justify-center"
        } h-full`}
      >
        <div className="w-full h-full absolute">
          {videoSrc && (
            <video
              src={videoSrc}
              loop
              autoPlay
              muted
              playsInline
              className={cn(
                videoClassName,
                "object-cover object-center w-full h-full"
              )}
            />
          )}
        </div>
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 font-courier relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 text-left w-full"
          )}
        >
          {/* Afișăm descrierea doar dacă id !== 1 */}
          {id !== 1 && (
            <div className="font-courier font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10 text-left">
              {description}
            </div>
          )}

          <div
            className={`font-courier text-lg lg:text-3xl max-w-screen-md font-bold z-10 text-left`}
          >
            {title}
          </div>

          {id === 1 && (
            <p className="mt-4 text-base lg:text-lg text-gray-300 w-full">
              {description}
            </p>
          )}
          {id === 2 && <GridGlobe />}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8"></div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
