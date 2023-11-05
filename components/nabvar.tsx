import Image from "next/image";
import logo from "../public/logo.svg";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center items-center pt-16 pb-0">
      <div className="max-w-[1300px] w-full flex justify-between items-center gap-8">
        <ul className="flex text-sm gap-12 justify-center items-center">
          <li className="cursor-pointer">Коллекции</li>
          <li className="cursor-pointer">Акции</li>
          <li className="cursor-pointer">Вайт-лист</li>
        </ul>
        <Image
          src={logo}
          alt="logo"
          width={237}
          height={58}
          className="cursor-pointer"
          placeholder="blur"
        />
        <ul className="flex text-sm gap-12 justify-center items-center">
          <li className="cursor-pointer">Создатель nft</li>
          <li className="cursor-pointer">Топы</li>
          <li className="cursor-pointer">Контакты</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
