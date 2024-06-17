import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: FC<NavLinkProps> = ({ href, children }) => (
  <Link href={href} className="hover:text-red-500 focus:text-red-500">
    {children}
  </Link>
);

const Header: FC = () => {
  return (
    <div className="fixed w-full bg-transparent py-5">
      <div className="flex justify-between max-w-screen-3xl mx-auto p-4">
        <div className="text-xl font-semibold">
        <Image
              src="/logo.png" // Path to your image
              height="80"
              width="150"
              quality={100} // Optional: define the quality of the image
              alt="Background Image" // Optional: define a meaningful alt attribute
       />
        </div>
        <div className="flex gap-10 text-lg text-white">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#products">Products</NavLink>
          <NavLink href="#news">News</NavLink>
          <NavLink href="#contacts">Contacts</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;