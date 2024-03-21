import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { appPageLinks } from "@/constants/constant";

export type TCardLinkProps = {
  id: string;
  path: string;
  image: StaticImageData;
  alt: string;
};

const CardLink: FC<TCardLinkProps> = ({ path, image, alt }) => {
  return (
    <Link className="home-card" href={path}>
      <Image width={100} height={100} src={image} alt={alt} />
    </Link>
  );
};

export default function AppPage() {
  return (
    <section className="main-content">
      <div className="home-container">
        {appPageLinks.map((item) => (
          <CardLink key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
