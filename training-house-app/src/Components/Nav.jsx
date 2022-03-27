import React, { useEffect, useRef, useContext, useState } from "react";
import { Context } from "./LoginContext";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  const [loginDropDown, setLoginDropDown] = useContext(Context);
  const [checkActive, setCheckActive] = useState("");

  const Navigation = useRef();
  const LogoColor = useRef();
  const Burg = useRef();
  const NavLinks = useRef();

  useEffect(() => {
    window.onscroll = () => {
      const height = 10;
      if (window.scrollY > height) {
        Navigation.current.style.background = "#187e5f";
        Navigation.current.style.borderBottom = "10px solid #f8ecd6";
        LogoColor.current.style.color = "#f8ecd6";
        Burg.current.children[0].style.background = "#f8ecde";
        Burg.current.children[1].style.background = "#f8ecde";
      } else {
        Navigation.current.style.background = "";
        Navigation.current.style.borderBottom = "";
        LogoColor.current.style.color = "#f8bc4c";
        Burg.current.children[0].style.background = "#f8bc4c";
        Burg.current.children[1].style.background = "#f8bc4c";
      }
    };
  }, []);

  useEffect(() => {
    const checkState = localStorage.getItem("state");
    setCheckActive(checkState);
  }, []);

  useEffect(() => {
    localStorage.setItem("state", checkActive);
  }, [checkActive]);

  const openUp = () => {
    NavLinks.current.classList.toggle("reveal");
    Burg.current.children[0].classList.toggle("roll-down");
    Burg.current.children[1].classList.toggle("roll-up");
  };

  const closeUp = () => {
    NavLinks.current.classList.remove("reveal");
    Burg.current.children[0].classList.remove("roll-down");
    Burg.current.children[1].classList.remove("roll-up");
  };

  return (
    <NavBar ref={Navigation}>
      <NavLink href="/">
        <Logo
          ref={LogoColor}
          onClick={() => {
            setCheckActive("");
          }}
        >
          Spink.
        </Logo>
      </NavLink>
      <Links ref={NavLinks}>
        <li>
          <GalleryLink
            to="/Gallery"
            onClick={() => {
              setCheckActive("gallery");
              setTimeout(closeUp, 100);
              NavLinks.current.style.flex = 0.2;
            }}
          >
            Gallery
          </GalleryLink>
        </li>
        {checkActive !== "gallery" ? (
          <li>
            <NavLink href="#about" onClick={closeUp}>
              About Us
            </NavLink>
          </li>
        ) : null}
        {checkActive !== "gallery" ? (
          <li>
            <NavLink href="#services" onClick={closeUp}>
              Services
            </NavLink>
          </li>
        ) : null}
        <li>
          <NavLink href="#contact" onClick={closeUp}>
            Contact Us
          </NavLink>
        </li>
        {checkActive !== "gallery" ? (
          <li>
            <NavLink
              href="#login__register__page"
              onClick={() => {
                setLoginDropDown(!loginDropDown);
                setTimeout(closeUp, 1000);
              }}
            >
              Log In
            </NavLink>
          </li>
        ) : null}
      </Links>
      <Burger ref={Burg} onClick={openUp}>
        <span></span>
        <span></span>
      </Burger>
    </NavBar>
  );
};

const NavLink = styled.a`
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff6e4;
  font-weight: 400;
  font-size: 0.8rem;
  transition: all 0.4s linear;
  .cream {
    color: #f8ecd6;
  }
  &::before {
    content: "";
    position: absolute;
    height: 3px;
    width: 0;
    background: #f8ecd6;
    bottom: -0.5rem;
    left: 0;
    transition: all 0.4s linear;
  }
  &:hover::before {
    width: 50%;
  }
`;

const GalleryLink = styled(Link)`
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff6e4;
  font-weight: 400;
  font-size: 0.8rem;
  transition: all 0.4s linear;
  &::before {
    content: "";
    position: absolute;
    height: 3px;
    width: 0;
    background: #f8ecd6;
    bottom: -0.5rem;
    left: 0;
    transition: all 0.4s linear;
  }
  &:hover::before {
    width: 50%;
  }
`;

const NavBar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  z-index: 1000;
  transition: all 0.4s linear;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Logo = styled.h3`
  font-size: 1.3rem;
  font-weight: 500;
  text-transform: uppercase;
  color: #f8bc4c;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex: 0.5;
  @media (max-width: 800px) {
    position: absolute;
    flex-flow: column;
    background: #187e5f;
    width: 100vw;
    height: 50vh;
    top: -100vh;
    align-items: center;
    justify-content: space-evenly;
    left: 0;
    transition: all 0.5s ease-in-out;
    &.reveal {
      top: 0;
    }
  }
`;

const Burger = styled.div`
  flex-flow: column;
  align-items: flex-end;
  display: none;
  gap: 0.3rem;
  z-index: 300;
  span {
    height: 3px;
    width: 3rem;
    background: #f8bc4c;
    transition: all 0.4s ease-in-out;
  }
  span:first-child {
    &.roll-down {
      transform: translateY(4px) rotate(45deg);
      width: 2rem;
    }
  }
  span:last-child {
    width: 2rem;
    &.roll-up {
      transform: translateY(-4px) rotate(-45deg);
    }
  }
  @media (max-width: 800px) {
    display: flex;
  }
`;

export default Nav;
