import {  Outlet } from "react-router-dom";
import {  Hero } from "../components/hero";



export const Root = () => {
  return (
    <>
      < Hero />
      <Outlet />
    </>
  );
};
