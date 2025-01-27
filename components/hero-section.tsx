"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { MotionDiv, MotionH1, MotionP } from "./motion-wrapper";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Accounting background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-logofBlue/ z-10"></div>
      <div className="container relative z-20 flex h-full flex-col items-center justify-center gap-8 text-white">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <MotionH1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-4 text-5xl font-bold leading-tight md:text-6xl"
          >
            LOGOF CONSULT <span className="font-bold">Accounting</span>
          </MotionH1>
          <MotionP
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-8 text-2xl md:text-3xl"
          >
            Expert Accounting and Bookkeeping Services
          </MotionP>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-logofYellow text-white hover:bg-yellow-700"
          >
            Get Started
          </Button>
        </MotionDiv>
      </div>
    </section>
  );
}
