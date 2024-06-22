"use client";
import Link from "next/link";
import LanguageDropDownMenu from "./LanguageDropDown.jsx";
import { useState } from "react";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <nav className="nav-layout">
        <h3>Brand Logo</h3>
        <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="public/how-it-works">How it works?</Link>
          </li>
          <li>
            <Link href="/public/faqs">FAQ</Link>
          </li>
          <li>
            <Link href="/public/faqs">Contact</Link>
          </li>
          <div className="d-flex gap-400">
            <button className="button login-button1">Login</button>
            <button className="button sign-up-button1">Sign Up</button>
          </div>
        </ul>

        <div className="d-flex items-center gap-400">
          <LanguageDropDownMenu></LanguageDropDownMenu>
          <button className="button login-button">Login</button>
          <button className="button sign-up-button">Sign Up</button>
          <svg
            onClick={() => setIsOpen(!isOpen)}
            id="humburger-icon"
            width="2rem"
            className="w-6 h-6 font-size-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </nav>
      <main>{children}</main>
    </header>
  );
};

export default Layout;
