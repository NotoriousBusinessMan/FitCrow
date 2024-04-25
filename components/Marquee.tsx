import { MARQUEE_TAGS } from "@/constants";
import Image from "next/image";
import React from "react";

const Marquee = () => {
  return (
    <section className="mt-72 mb-16 w-full overflow-hidden krivon">
      <div className="scrolling_wrapper flex gap-0 overflow-x-auto child_of_krivon">
        {MARQUEE_TAGS.map((tag) => (
          <div
            key={tag.key}
            className="flex items-center gap-2 mr-5 krivon_babies">
            <Image src={tag.icon} alt="icon" width={36} height={36} />
            <label className="font-semibold w-full">{tag.label}</label>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
