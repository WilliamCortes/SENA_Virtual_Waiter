"use client";
import { FC, useCallback } from "react";
import Image from "next/image";
import { beefBurger } from "@/constants/icons.constant";

export const Header: FC = () => {
  const openModal = useCallback(() => {
    const menuDrawer = document.getElementById("menu-drawer-container");
    if (menuDrawer) menuDrawer.className = "open";
  }, []);

  return (
    <header>
      <button id="btn-menu-drawer" onClick={openModal}>
        <Image width={60} height={50} src={beefBurger} alt="BeefBurger" />
      </button>
      <h2>Tu Mesero Virtual</h2>
    </header>
  );
};
