import Image from "next/image";
import Link from "next/link";

import Button from "./Button";
import { NAV_LINKS } from "@/constants";

const Hero = () => {
  return (
    <section className="w-full px-12 py-12">
      <div className="p-8 bg-blue-20 rounded-xl h-screen bg-[url('/lines.png')] bg-center">
        {/* HEADER */}
        <nav className="flexBetween">
          <Link href="/" className="w-1/4">
            <Image src="/logo.png" alt="logo" width={68} height={68} />
          </Link>

          <ul className="w-3/6 flex items-center justify-center">
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key} className="mr-8 text-white">
                {link.label}
              </Link>
            ))}
          </ul>

          <ul className="w-1/4 flexEnd text-white">
            <Link href="/">login</Link>
            <Button
              type="button"
              title="Sign-Up"
              variant="btn_themer"
              margin="ml-4"
            />
          </ul>
        </nav>

        {/* BODY TEXTS */}

        <div className="py-12 body_texts flex flex-col items-center">
          <h1 className="w-2/4 regular-40 bold-40 text-white mb-3 text-center">
            Track{" "}
            <i>
              <b>Progressive Overload</b>
            </i>{" "}
            easily and Quickly
          </h1>
          <p className="text-white mb-5 text-center">
            our app helps you to track your fitness without any efforts
          </p>
          <div className="btn_container flexBetween">
            <Button
              type="button"
              title="Explore More"
              variant="btn_themer"
              margin="ml-0"
            />
            <Button
              type="button"
              title="watch demo"
              variant="btn_themer_border"
              margin="ml-4"
              icon="/play.png"
            />
          </div>

          <div className="hero_img">
            <Image
              src="/mockups.png"
              alt="phone_mockups"
              width={800}
              height={800}
            />
          </div>
        </div>

        {/* <div className="lines" /> */}
      </div>
    </section>
  );
};

export default Hero;
