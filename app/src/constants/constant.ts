import { StaticImageData } from "next/image";
import { v4 as uuidV4 } from "uuid";
import {
  AddUser,
  BeefBurger,
  Invoice,
  Restaurant,
  Table,
  User,
  bistec,
  burger,
  juice,
  salmon,
} from "./icons.constant";
import { mapRoutes } from "./mapRoutes";
import { TCardLinkProps } from "@/app/app/page";

export type TProduct = {
  id: string;
  label: string;
  value: number;
  amount: number;
  src: StaticImageData;
  description: string;
};

export const fakeProducts: TProduct[] = [
  {
    id: "1",
    label: "Salmon salsa de camarones",
    value: 50200,
    amount: 2,
    src: salmon,
    description:
      "Salmón jugoso, cocido con salsa fresca de eneldo y limón, servido con vegetales al dente. Delicia única.",
  },
  {
    id: "2",
    label: "Churrasco",
    value: 25100,
    amount: 2,
    src: bistec,
    description:
      "Churrasco a la parrilla, sazonado a la perfección y servido con guarniciones frescas. Sabor inigualable.",
  },
  {
    id: "3",
    label: "Jugos Naturales",
    value: 10200,
    amount: 2,
    src: juice,
    description:
      "Jugos naturales de frutas frescas, exprimidos al momento. Una explosión de sabor en cada sorbo.",
  },
  {
    id: "4",
    label: "Hamburguesa",
    value: 16750,
    amount: 2,
    src: burger,
    description:
      "Hamburguesa clásica con ingredientes frescos y carne jugosa, acompañada de papas fritas crujientes.",
  },
  {
    id: "5",
    label: "Salmon salsa de camarones",
    value: 50200,
    amount: 2,
    src: salmon,
    description:
      "Salmón jugoso, cocido con salsa fresca de eneldo y limón, servido con vegetales al dente. Delicia única.",
  },
  {
    id: "6",
    label: "Churrasco",
    value: 25100,
    amount: 2,
    src: bistec,
    description:
      "Churrasco a la parrilla, sazonado a la perfección y servido con guarniciones frescas. Sabor inigualable.",
  },
  {
    id: "7",
    label: "Jugos Naturales",
    value: 10200,
    amount: 2,
    src: juice,
    description:
      "Jugos naturales de frutas frescas, exprimidos al momento. Una explosión de sabor en cada sorbo.",
  },
  {
    id: "8",
    label: "Hamburguesa",
    value: 16750,
    amount: 2,
    src: burger,
    description:
      "Hamburguesa clásica con ingredientes frescos y carne jugosa, acompañada de papas fritas crujientes.",
  },
];

export const appPageLinks: TCardLinkProps[] = [
  {
    id: uuidV4(),
    path: mapRoutes.table,
    image: Table,
    alt: "Table",
  },
  {
    id: uuidV4(),
    path: mapRoutes.order,
    image: Restaurant,
    alt: "Restaurant",
  },
  {
    id: uuidV4(),
    path: mapRoutes.invoice,
    image: Invoice,
    alt: "Invoice",
  },
  {
    id: uuidV4(),
    path: mapRoutes.menu,
    image: BeefBurger,
    alt: "BeefBurger",
  },
  {
    id: uuidV4(),
    path: mapRoutes.login,
    image: User,
    alt: "User",
  },
  {
    id: uuidV4(),
    path: mapRoutes.signUp,
    image: AddUser,
    alt: "AddUser",
  },
];
