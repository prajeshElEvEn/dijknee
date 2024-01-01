import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href={"/"}>
        <Image
          src={"https://links.papareact.com/a943ae"}
          alt="Disney Logo"
          width={120}
          height={100}
          className="cursor-pointer"
        />
      </Link>
      <div className="flex space-x-2"></div>
    </header>
  );
};

export default Header;
