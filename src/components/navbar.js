import { Link } from "gatsby"
import React from "react"

// Navbar consist of a logo, a group of links, and an optional arrow
const Navbar = () => (
  <nav>
    <Link to="/" title="Logo" className="logo">
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2560 1440"
        className="svg"
      >
        <title>NUCABE</title>
        <path
          className="cls-1"
          d="M71.3,588.9V980.8H463.1V588.9Zm320,320H143.2V660.8H391.3Z"
        />
        <path
          className="cls-1"
          d="M763.9,809.4V596.3h77.4V989L609.8,768.5V981.7H532.6V589.1Z"
        />
        <path
          className="cls-1"
          d="M1122,829.5V597.2h77.7V829.7q0,64.3-45.5,109.8t-109.6,45.3q-64.5,0-110.1-45.3T889,829.7V597.2h77.7V829.5c0,41.8,35.5,77.1,77.6,77.1S1122,871.1,1122,829.5Z"
        />
        <path
          className="cls-1"
          d="M1427.7,983.8q-80.5-.3-137.4-56.7t-57.2-137.7q0-80.2,57.2-137.9t137.4-57.4l-.2,1c59.3,0,106.4,26.3,138.1,56.9l-55,55c-23.2-22.8-50.7-34.3-82.7-34.3s-59.8,11.5-82.4,34.3-34.3,50.8-34.3,82.7,11.5,59.8,34.3,82.6,50.2,34.1,82.4,34.1,60.1-11.4,82.9-34.3l55.1,55C1534.3,958.3,1487.6,983.8,1427.7,983.8Z"
        />
        <path
          className="cls-1"
          d="M1752.5,589.3l175.3,391.9h-83.6l-26-58.4H1686.7l-25.9,58.4h-83.4Zm35.2,265.4-35-81.2-35.5,81.2Z"
        />
        <path
          className="cls-1"
          d="M2159.2,755.4c9.3,4.7,22.3,12.6,29.5,19.5q35.1,35.6,35,85.3t-35,85.3q-34.9,35.7-84.8,35.7H1961.2v-384h107.2q44.5,0,76.2,31.9c20.4,20.7,30.5,45,30.5,73.2C2175.1,720.7,2166.3,742.7,2159.2,755.4Zm-90.8-83.2h-30.2v70.3c6.8-.3,16.4-.9,28.8-1.9,18.3-2.1,33.8-15.7,33.8-35.3C2100.8,687.6,2086.4,672.2,2068.4,672.2Zm80.1,188c0-25.5-20.8-45.6-44.6-47.2s-42.6-.2-65.7-.2v93.1h65.7C2129,905.9,2148.5,885.2,2148.5,860.2Z"
        />
        <path
          className="cls-1"
          d="M2488.7,595.3v77.2H2334.6v77.2h115.5v77.1H2334.6V904h154.1v77.2H2257.1V595.3Zm-45.5-109.1-78.6,73.1-27.7-21.2,61.5-87.1Z"
        />
      </svg>
    </Link>
    <div className="links">
      <Link to="/sculpture">
        <div
          className={
            (typeof window !== `undefined` &&
            window.location.pathname.includes("sculpture")) ? "square" : "circle"
          }
        />
      </Link>
      <Link to="/graphics-design">
        <div
          className={
            (typeof window !== `undefined` &&
            window.location.pathname.includes("graphics-design")) ? "square" : "circle"
          }
        />
      </Link>
      <Link to="/product-design">
        <div
          className={
            (typeof window !== `undefined` &&
            window.location.pathname.includes("product-design")) ? "square" : "circle"
          }
        />
      </Link>
      <Link to="/interior-design">
        <div
          className={
            (typeof window !== `undefined` &&
            window.location.pathname.includes("interior-design")) ? "square" : "circle"
          }
        />
      </Link>
      <Link to="/drawing">
        <div
          className={
            (typeof window !== `undefined` &&
            window.location.pathname.includes("drawing")) ? "square" : "circle"
          }
        />
      </Link>
      <Link to="/writing">
        <div
          className={
            (typeof window !== `undefined` &&
            window.location.pathname.includes("writing")) ? "square" : "circle"
          }
        />
      </Link>
    </div>
    
  </nav>
)

export default Navbar
