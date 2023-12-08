import React from 'react'
import Link from "next/link";

/**
 * Renders the Navbar component.
 *
 * @return {React.Element} The rendered Navbar component.
 */
const Navbar = () => {
    return (
        // Render the header element with the specified classes
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
            <nav>
                {/* Render the links */}
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/articles">Articles</Link>
            </nav>
            <h1>Logo</h1>
            <nav>
                <Link href="/" target='_blank'>T</Link>
                <Link href="/" target='_blank'>T</Link>
                <Link href="/" target='_blank'>T</Link>
                <Link href="/" target='_blank'>T</Link>
                <Link href="/" target='_blank'>T</Link>
                <Link href="/" target='_blank'>T</Link>
            </nav>
        </header>
    );
};

export default Navbar