import React from 'react';
import './Footer.css';

export default function Footer() {

    return (
        <footer>
            <hr />
            <p>&copy; {new Date().getFullYear()} My Website|| Written by: Szen Inso</p>
        </footer>
    )
}