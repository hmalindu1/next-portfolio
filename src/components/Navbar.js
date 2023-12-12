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
        <Link href="/">Home</Link> {/* Link to the Home page */}
        <Link href="/about">About</Link> {/* Link to the About page */}
        <Link href="/projects">Projects</Link> {/* Link to the Projects page */}
        <Link href="/articles">Articles</Link> {/* Link to the Articles page */}
      </nav>

      {/* Render the links */}
      <nav>
        <Link href="/" target="_blank">
          <LinkedInIcon />
        </Link>{" "}
        {/* Link to an external resource */}
        <Link href="/" target="_blank">
          <GithubIcon/>
        </Link>{" "}
        {/* Link to an external resource */}
        <Link href="/" target="_blank">
          <StackOverflowIcon/>
        </Link>{" "}
        {/* Link to an external resource */}
        <Link href="/" target="_blank">
          <MediumIcon/>
        </Link>{" "}
      </nav>

      {/* Render the logo */}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo /> {/* Render the Logo component */}
      </div>
    </header>
  );
};

export default Navbar;
