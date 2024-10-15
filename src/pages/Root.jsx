import { Link, Outlet } from "react-router-dom";
import {  Hero } from "../components/hero";



export const Root = () => {
  return (
    <>
    <img className="logo" src="2094510.png" alt=""></img>
    <Hero title="PokeApi" />
      <Outlet />
    </>
  );
};
