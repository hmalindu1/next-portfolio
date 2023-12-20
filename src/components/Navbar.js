/* ==================================== Audit Log ======================================== *
 * Title: Navbar Component
 * Author: Hashan
 * Created on: 8 Dec 2023
 * Description: Navbar component for the UI
/* ======================================================================================== */

import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import {
  GithubIcon,
  LinkedInIcon,
  StackOverflowIcon,
  MediumIcon,
} from "./Icons";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1.5px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

/**
 * Renders the Navbar component.
 *
 * @return {React.Element} The rendered Navbar component.
 */
const Navbar = () => {
  return (
    // Render the header element with the specified classes
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      {/* Render the links */}
      <nav>
        {/* Render the links */}
        <CustomLink href="/" title="Home" className="mr-4 " />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>

      {/* Render the links */}
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          href="/"
          target="_blank"
          className="w-6 mx-3"
        >
          <LinkedInIcon />
        </motion.a>
        {/* a to an external resource */}
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          href="/"
          target="_blank"
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
        {/* a to an external resource */}
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          href="/"
          target="_blank"
          className="w-6 mx-3"
        >
          <StackOverflowIcon />
        </motion.a>
        {/* a to an external resource */}
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          href="/"
          target="_blank"
          className="w-6 mx-3"
        >
          <MediumIcon />
        </motion.a>
      </nav>

      {/* Render the logo */}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo /> {/* Render the Logo component */}
      </div>
    </header>
  );
};

export default Navbar;
