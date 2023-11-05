import Image from "next/image";

const MainSection = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="max-w-[1400px] w-full flex justify-center items-center">
        <div className="max-w-[1200px] w-full flex flex-col">
          <h1 className="text-[128px] font-bold w-full text-right leading-[105px]">
            NFT MARKET
          </h1>
          <h2 className="text-[128px] font-semibold italic w-full text-left leading-[105px]">
            СО СКИДКАМИ
          </h2>
        </div>
        <div className="max-w-[300px] w-full">
          <Image src="photo1.svg" alt="cat" width={307} height={417} />
        </div>
      </div>
      <div className="max-w-[1400px] w-full flex gap-6 translate-y-[-80px]">
        <button className="rounded-[36px] bg-white border border-white hover:bg-transparent hover:text-white transition text-xl py-6 px-11 text-black font-medium">
          Купить NFT
        </button>
        <button className="rounded-[36px] translate-y-[15px] border border-[#1FEAA1] hover:text-black hover:bg-[#1FEAA1] transition bg-transparent text-xl py-6 px-11 text-[#1FEAA1] font-medium">
          Галерея
        </button>
        <p className="text-[#1FEAA1] max-w-[670px] translate-y-[15px]">
          NFT, также уникальный токен — вид криптографических токенов, каждый
          экземпляр которых уникален и не может быть обменян или заменён другим
          аналогичным токеном, хотя обычно они взаимозаменяемы по своей природе.
        </p>
      </div>
      <div className="max-w-[1400px] w-full flex gap-4 justify-start items-start">
        <div className="relative flex flex-col justify-start items-center">
          <Image src="/kaban.svg" alt="kaban" width={367} height={214} />
          <div className="plus z-20">
            <Image src="/plus.svg" alt="plus" width={23} height={23} />
          </div>
        </div>
        <div className="relative flex flex-col justify-start items-center translate-y-[-11px]">
          <Image src="/monkey.svg" alt="monkey" width={367} height={214} />
          <div className="plus z-20">
            <Image src="/plus.svg" alt="plus" width={23} height={23} />
          </div>
        </div>
        <div className="relative flex flex-col justify-start items-center">
          <Image src="/hero.svg" alt="hero" width={367} height={214} />
          <div className="plus z-20">
            <Image src="/plus.svg" alt="plus" width={23} height={23} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
