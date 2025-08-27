import InterestList from "@/app/(root)/components/section/home-page-interest/InterestList";
import SpiralSVG from "@/app/(root)/components/svgs/SpiralSVG";

const HomePageInterest = () => {
  return (
    <div className="h-[845px] bg-[url('/images/home-page/interest-background.png')] bg-cover bg-no-repeat ">
      {/* heading */}
      <div className=" text-center flex justify-center pt-[82px] ">
        <h1 className="text-[#20184E] text-center font-playfair lg:text-[50px] italic font-medium leading-[75px] max-w-[720px] text-[36px] md:text-[48px]">
          Lợi Ích Khi Sử Dụng Phần Mềm
          <span className="not-italic font-playfair"> Của Chúng Tôi</span>
        </h1>
      </div>
      {/* svg */}
      <div className="flex justify-center  mt-7 mb-[68px] ">
        <SpiralSVG />
      </div>
      {/* description items */}
      <div className="px-[8%]">
        <InterestList />
      </div>
    </div>
  );
};

export default HomePageInterest;
