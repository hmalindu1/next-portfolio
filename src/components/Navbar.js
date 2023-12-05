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
        <header className='w-full px-32 py-8 font-medium'>
            <nav>
                {/* Render the links */}
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/articles">Articles</Link>
            </nav>
        </header>
    );
};

export default Navbar