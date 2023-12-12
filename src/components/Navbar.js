/* ==================================== Audit Log ======================================== *
 * Title: Navbar Component
 * Author: Hashan
 * Created on: 8 Dec 2023
 * Description: Navbar component for the UI
/* ======================================================================================== */

import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { GithubIcon, LinkedInIcon, StackOverflowIcon, MediumIcon } from "./Icons";

const CustomLink = ({ href, title, className = "" }) => {
  return (
    <Link href={href} className={`${className}`}>{title}</Link>
  )
}

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
        <CustomLink href="/" title={"Home"}/>
        <CustomLink href="/about" title={"About"} />
        <CustomLink href="/projects" title={"Projects"} />
        <CustomLink href="/articles" title={"Articles"} />
      </nav>

      {/* Render the links */}
      <nav className="flex items-center justify-center flex-wrap">
        <a href="/" target="_blank">
          <LinkedInIcon />
        </a>{" "}
        {/* a to an external resource */}
        <a href="/" target="_blank">
          <GithubIcon/>
        </a>{" "}
        {/* a to an external resource */}
        <a href="/" target="_blank">
          <StackOverflowIcon/>
        </a>{" "}
        {/* a to an external resource */}
        <a href="/" target="_blank">
          <MediumIcon/>
        </a>{" "}
      </nav>

      {/* Render the logo */}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo /> {/* Render the Logo component */}
      </div>
    </header>
  );
};

export default Navbar;
