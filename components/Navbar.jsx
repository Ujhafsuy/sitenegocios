'use client';
import Link from "next/link";
import { useEffect } from "react";
import "@styles/navbar.css";

export default function Navbar() {
  
  useEffect(() => {
    const mobileMenu = document.querySelector(".mobile-menu");
    const navList = document.querySelector(".nav-list");
    const navLinks = document.querySelectorAll(".nav-list li");
    const activeClass = "active";

    const animateLinks = () => {
      navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
      });
    };

    const handleClick = () => {
      navList.classList.toggle(activeClass);
      mobileMenu.classList.toggle(activeClass);
      animateLinks();
    };
  
    if (mobileMenu) {
      mobileMenu.addEventListener("click", handleClick);
    }
    
    return () => {
      if (mobileMenu) {
        mobileMenu.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <div className="navbar-main">
      <nav className="navbar-content">
        <h1><Link href="/" className="logo">Seu logo</Link></h1>
        <div className="mobile-menu">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className="nav-list">
          <li><Link href="/sobre">Sobre nós</Link></li>
          <li><Link href="/orcamento">Fazer orçamento</Link></li>
          <li><Link href="/produtos">Produtos</Link></li>
          <li><Link href="/contatos">Contatos</Link></li>
        </ul>
      </nav>
    </div>
  );
}