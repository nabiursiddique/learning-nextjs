import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div>
            <h1>This is about page</h1>
            <Link href={'/'}>Home page</Link>
            <br />
            <Link href={'/about/aboutteacher'}>About Teacher</Link>
            <br />
            <Link href={'/about/aboutstudent'}>About student</Link>
        </div>
    );
};

export default About;