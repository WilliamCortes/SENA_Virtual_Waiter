import React from "react";
import Image from "next/image";
import Link from "next/link";
import { homePage, restaurant, user } from "@/constants/icons.constant";
import { mapRoutes } from "../../../constants/mapRoutes";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link href={mapRoutes.home}>
              <Image width={60} height={50} src={homePage} alt="HomePage" />
            </Link>
          </li>
          <li>
            <Link href={mapRoutes.order}>
              <Image width={60} height={50} src={restaurant} alt="Restaurant" />
            </Link>
          </li>
          <li>
            <Link href={mapRoutes.login}>
              <Image width={60} height={50} src={user} alt="User" />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
