"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Timeline } from "./timeline";

const imageClass =
  "h-20 w-full rounded-none object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60";

const createPortContent = (images: string[], portName: string) => (
  <div>
    <div className="grid grid-cols-2 gap-4">
      {images.map((image, index) => (
        <Image
          key={image}
          src={image}
          alt={`${portName} ${index + 1}`}
          width={500}
          height={500}
          className={imageClass}
        />
      ))}
    </div>
  </div>
);

/* =========================================================
   EASTBOUND ROUTE

   Khor Fakkan
        ↓
   Mundra
        ↓
   Karachi
        ↓
   Nhava Sheva
        ↓
   Colombo
        ↓
   Port Klang
        ↓
   Hong Kong
        ↓
   Shanghai
========================================================= */

const eastboundData = [
  {
    title: "Khor Fakkan Port",
    content: createPortContent(
      [
        "/images/Khor Fakkan port 1.jpg",
        "/images/Khor Fakkan port 2.jpg",
        "/images/Khor Fakkan port 3.jpg",
        "/images/Khor Fakkan port 4.jpg",
      ],
      "Khor Fakkan Port"
    ),
  },

  {
    title: "Mundra Port",
    content: createPortContent(
      [
        "/images/Mundra port 1.jpg",
        "/images/Mundra port 2.jpg",
        "/images/Mundra port 3.jpg",
        "/images/V port 4.jpg",
      ],
      "Mundra Port"
    ),
  },

  {
    title: "Karachi Port",
    content: createPortContent(
      [
        "/images/Karachi port 1.jpg",
        "/images/Karachi port 2.jpg",
        "/images/Karachi port 3.jpg",
        "/images/Karachi port 4.jpg",
      ],
      "Karachi Port"
    ),
  },

  {
    title: "Nhava Sheva Port",
    content: createPortContent(
      [
        "/images/Nhava Sheva port1.jpg",
        "/images/Nhava Sheva port 2.jpg",
        "/images/Nhava Sheva port 3.jpg",
        "/images/Nhava Sheva port 4.jpg",
      ],
      "Nhava Sheva Port"
    ),
  },

  {
    title: "Colombo Port",
    content: createPortContent(
      [
        "/images/Colombo  port 1.jpg",
        "/images/Colombo  port 2.jpg",
        "/images/Colombo port 3.jpg",
        "/images/Colombo  port 4.jpg",
      ],
      "Colombo Port"
    ),
  },

  {
    title: "Port Klang",
    content: createPortContent(
      [
        "/images/Port Klang port 1.jpg",
        "/images/Port Klang port2.jpg",
        "/images/Port Klang port 3.jpg",
        "/images/Port Klang port 4.jpg",
      ],
      "Port Klang"
    ),
  },

  {
    title: "Hong Kong Port",
    content: createPortContent(
      [
        "/images/Hong Kong port 1.jpg",
        "/images/Hong Kong port 2.jpg",
        "/images/Hong Kong port 3.jpg",
        "/images/Hong Kong port 4.jpg",
      ],
      "Hong Kong Port"
    ),
  },

  {
    title: "Shanghai Port",
    content: createPortContent(
      [
        "/images/Shanghai port 1.jpg",
        "/images/Shanghai port 2.jpg",
        "/images/Shanghai port 3.jpg",
        "/images/Shanghai port 4.jpg",
      ],
      "Shanghai Port"
    ),
  },
];

/* =========================================================
   WESTBOUND ROUTE

   Shanghai
        ↓
   Ningbo
        ↓
   Shekou
        ↓
   Singapore
        ↓
   Port Klang
        ↓
   Nhava Sheva
        ↓
   Mundra
        ↓
   Karachi
========================================================= */

const westboundData = [
  {
    title: "Shanghai Port",
    content: createPortContent(
      [
        "/images/Shanghai port 1.jpg",
        "/images/Shanghai port 2.jpg",
        "/images/Shanghai port 3.jpg",
        "/images/Shanghai port 4.jpg",
      ],
      "Shanghai Port"
    ),
  },

  {
    title: "Ningbo Port",
    content: createPortContent(
      [
        "/images/Ningbo port1.jpg",
        "/images/Ningbo port 2.jpg",
        "/images/Ningbo  port3.jpg",
        "/images/Ningbo port4.jpg",
      ],
      "Ningbo Port"
    ),
  },

  {
    title: "Shekou Port",
    content: createPortContent(
      [
        "/images/Shekou port 1.jpg",
        "/images/Shekou port2.jpg",
        "/images/Shekou port3.jpg",
        "/images/Shekou port 4.jpg",
      ],
      "Shekou Port"
    ),
  },

  {
    title: "Singapore Port",
    content: createPortContent(
      [
        "/images/Singapore port1.jpg",
        "/images/Singapore port2.jpg",
        "/images/Singapore port3.jpg",
        "/images/Singapore port 4.jpg",
      ],
      "Singapore Port"
    ),
  },

  {
    title: "Port Klang",
    content: createPortContent(
      [
        "/images/Port Klang port 1.jpg",
        "/images/Port Klang port2.jpg",
        "/images/Port Klang port 3.jpg",
        "/images/Port Klang port 4.jpg",
      ],
      "Port Klang"
    ),
  },

  {
    title: "Nhava Sheva Port",
    content: createPortContent(
      [
        "/images/Nhava Sheva Port1.jpg",
        "/images/Nhava Sheva Port 2.jpg",
        "/images/Nhava Sheva Port 3.jpg",
        "/images/Nhava Sheva Port 4.jpg",
      ],
      "Nhava Sheva Port"
    ),
  },

  {
    title: "Mundra Port",
    content: createPortContent(
      [
        "/images/Mundra Port 1.jpg",
        "/images/Mundra Port 2.jpg",
        "/images/Mundra Port 3.jpg",
        "/images/V port 4.jpg",
      ],
      "Mundra Port"
    ),
  },

  {
    title: "Karachi Port",
    content: createPortContent(
      [
        "/images/Karachi Port 1.jpg",
        "/images/Karachi Port 2.jpg",
        "/images/Karachi Port 3.jpg",
        "/images/Karachi Port 4.jpg",
      ],
      "Karachi Port"
    ),
  },
];

export function RouteMap() {
  const [isVisible, setIsVisible] = useState(false);

  const [activeRoute, setActiveRoute] = useState<
    "eastbound" | "westbound"
  >("eastbound");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  /* Show completely separate data for EB and WB */
  const currentData =
    activeRoute === "eastbound" ? eastboundData : westboundData;

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 md:py-16 lg:py-32">
        {/* Heading */}
        <div className="mb-4 text-center">
          <h1
            className="my-2 bg-gradient-to-b from-[#24479B] via-[#20408a] to-[#0C1835] bg-clip-text text-[26px] font-plus-jakarta-sans font-medium leading-[1.4] tracking-normal text-transparent md:text-[30px] 2xl:text-[36px]"
            style={{
              animation: isVisible
                ? "slideInUp 0.6s ease-out 0s both"
                : "none",
            }}
          >
            Shipping Route Network
          </h1>

          <p
            className="mx-auto max-w-sm text-base leading-relaxed tracking-tight text-[#000000]/70 sm:max-w-3xl lg:text-lg"
            style={{
              animation: isVisible
                ? "slideInUp 0.6s ease-out 0.1s both"
                : "none",
            }}
          >
            Our comprehensive route connecting major ports
          </p>

          {/* Route Toggle Buttons */}
          <div
            className="mt-8 flex justify-center gap-4"
            style={{
              animation: isVisible
                ? "slideInUp 0.6s ease-out 0.2s both"
                : "none",
            }}
          >
            {/* Eastbound */}
            <button
              onClick={() => setActiveRoute("eastbound")}
              className={`rounded-full px-6 py-2 font-plus-jakarta-sans text-sm font-medium transition-all duration-300 md:text-base ${
                activeRoute === "eastbound"
                  ? "bg-[#24479B] text-white shadow-lg shadow-[#24479B]/20"
                  : "border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50"
              }`}
            >
              Eastbound
            </button>

            {/* Westbound */}
            <button
              onClick={() => setActiveRoute("westbound")}
              className={`rounded-full px-6 py-2 font-plus-jakarta-sans text-sm font-medium transition-all duration-300 md:text-base ${
                activeRoute === "westbound"
                  ? "bg-[#24479B] text-white shadow-lg shadow-[#24479B]/20"
                  : "border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50"
              }`}
            >
              Westbound
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative w-full overflow-clip">
          <Timeline data={currentData} />
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}