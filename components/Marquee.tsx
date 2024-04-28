"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimate, useInView } from "framer-motion";
import { MARQUEE_TAGS } from "@/constants";

const Marquee = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      const animation = animate(
        scope.current,
        {
          x: -1000, // Animate the x position to scroll horizontally
        },
        {
          type: "tween",
          duration: 10, // Adjust duration as needed
          repeat: Infinity, // Repeat animation infinitely
          repeatType: "loop", // Loop animation
          ease: "linear", // Use linear easing for seamless scrolling
        }
      );

      return () => {
        animation.stop(); // Stop animation when component unmounts
      };
    }
  }, [isInView]);
  return (
    <section className="mt-80 mb-16 w-full overflow-x-hidden krivon">
      <motion.div
        ref={scope}
        initial={{ opacity: 1, x: 0 }}
        className="w-128 scrolling_wrapper flex gap-0 overflow-x-auto child_of_krivon">
        {MARQUEE_TAGS.map((tag) => (
          <div
            key={tag.key}
            className="flex items-center gap-2 mr-5 krivon_babies">
            <Image src={tag.icon} alt="icon" width={36} height={36} />
            <label className="font-semibold w-full">{tag.label}</label>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Marquee;
