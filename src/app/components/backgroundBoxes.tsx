"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export function Background() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-transparent flex flex-col items-center justify-center rounded-lg min-h-screen">
      <div className="absolute inset-0 w-full h-full bg-transparent z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none min-h-screen" />

      <Boxes />
    </div>
  );
}
