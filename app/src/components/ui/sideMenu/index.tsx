"use client";
import React, { FC, useCallback } from "react";
import Image from "next/image";
import styles from "./sideMenu.module.css";
import {
  beefBurger,
  cafe,
  chicken,
  close,
  cupcake,
  especialFood,
  fish,
  fries,
  iceCream,
  juiceIcon,
  pizza,
  soup,
  steak,
} from "@/constants/icons.constant";

export const SideMenu: FC = () => {
  const closeModal = useCallback(() => {
    const menuDrawer = document.getElementById("menu-drawer-container");
    if (menuDrawer) menuDrawer.className = "";
  }, []);

  return (
    <aside id="menu-drawer-container" className={styles.container}>
      <button id="btn-close-drawer" onClick={closeModal}>
        <Image width={40} height={40} src={close} alt="Close" />
      </button>
      <h3>Menu</h3>
      <article>
        <ul>
          <li>
            <a href="menu">
              <Image width={40} height={40} src={beefBurger} alt="BeefBurger" />
              <p>Comidas rápidas</p>
            </a>
          </li>

          <li>
            <a href="menu">
              <Image width={40} height={40} src={steak} alt="Steak" />
              <p>Carnes</p>
            </a>
          </li>

          <li>
            <a href="menu">
              <Image width={40} height={40} src={fish} alt="Fish" />
              <p>Pescados</p>
            </a>
          </li>

          <li>
            <a href="menu">
              <Image width={40} height={40} src={pizza} alt="Pizza" />
              <p>Pizza</p>
            </a>
          </li>

          <li>
            <a href="menu">
              <Image width={40} height={40} src={soup} alt="Soup" />
              <p>Sopas</p>
            </a>
          </li>

          <li>
            <a href="menu">
              <Image width={40} height={40} src={chicken} alt="Chicken" />
              <p>Pollo</p>
            </a>
          </li>

          <li>
            <a href="menu">
              <Image
                width={40}
                height={40}
                src={especialFood}
                alt="EspecialFood"
              />
              <p>Platos Especiales</p>
            </a>
          </li>

          <li>
            <a href="menu">
              <Image width={40} height={40} src={fries} alt="Fries" />
              <p>Adicionales</p>
            </a>
          </li>

          <li>
            <a href="menu">
              <Image width={40} height={40} src={juiceIcon} alt="Juice" />
              <p>Vevidas frías</p>
            </a>
          </li>

          <li>
            <a href="menu">
              <Image width={40} height={40} src={cafe} alt="Cafe" />
              <p>Vevidas calientes</p>
            </a>
          </li>

          <li>
            <a href="menu">
              <Image width={40} height={40} src={iceCream} alt="IceCream" />
              <p>Helados</p>
            </a>
          </li>

          <li>
            <a href="menu">
              <Image width={40} height={40} src={cupcake} alt="Cupcake" />
              <p>Postres</p>
            </a>
          </li>
        </ul>
      </article>
    </aside>
  );
};
