import Image from "next/image";

import StarSVG from "@/app/(root)/components/svgs/StarSVG";
import ActionButton from "@/components/shared/ActionButton";
// import { AppConfig } from "@/consts/app-config";

const HomePageIntro = () => {
  return (
    <div className=" h-[952px] bg-[url('/images/home-page/background.png')] relative z-50">
      <div className="flex ml-[9%] ">
        {/* text left side */}
        <div className=" pt-[252px]  w-1/2">
          <div className="max-w-[640px] ">
            {/* heading */}
            <div className="mb-5 ">
              <h1 className="text-white font-playfair  text-[64px] font-bold leading-[134%]">
                Phần mền quản lý
              </h1>
              <div className="flex space-x-12 ">
                <h1 className="text-[#EEB537] font-playfair text-[64px] font-bold leading-[134%] italic ">
                  Nhà Trọ Tối Ưu
                </h1>
                <StarSVG />
              </div>
            </div>
            {/* promotion */}
            <div className="mb-11 ">
              <p className="text-white font-sans text-[30px] font-normal leadding-[143%] max-w-[528px]">
                Giải pháp quản lý nhà trọ toàn diện, hiệu quả và tiết kiệm thời
                gian.
              </p>
            </div>
            {/* action buttons */}
            <div className="">
              <ActionButton
                href='/pricing'
                className="mb-5 text-center text-lg px-8 py-4 hover:bg-yellow-600 hover:border-yellow-600"
              >
                Đăng ký dùng thử miễn phí
              </ActionButton>
            </div>
          </div>
        </div>
        {/* picture right side */}
        <div className=" w-1/2 overflow-hidden  pt-[155px] ">
          <div className="w-[984px] h-[637px]  ">
            <Image
              src="/images/home-page/dashboard.png"
              width={984}
              height={637}
              alt="dashboard picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageIntro;
