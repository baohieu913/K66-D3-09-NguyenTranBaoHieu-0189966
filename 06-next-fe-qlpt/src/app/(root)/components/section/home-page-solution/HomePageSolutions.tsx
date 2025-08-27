import Image from "next/image";

import ActionButton from "@/components/shared/ActionButton";

const HomePageSolutions = () => {
  return (
    <div className="h-[893px] bg-[url('/images/home-page/solution.png')] -mt-[7%] ">
      {/* content */}
      <div className="max-w-[1220px] mx-auto flex justify-between items-center">
        {/* picture left side */}
        <div className="max-w-[550px] pt-[169px]">
          <Image
            src="/images/home-page/chart.png"
            width={550}
            height={550}
            alt="dashboard picture"
            className="w-[90%]"
          />
        </div>
        {/* text right side */}
        <div className="max-w-[530px] pt-[240px]">
          {/* heading */}
          <div className="mb-5 max-w-[530px]">
            <h1 className="text-[#EEB537] font-playfair text-[50px] italic font-medium ">
              Giải Pháp Tối Ưu
              <span className="text-[#20184E] not-italic font-playfair">
                {" "}
                Cho Các Chủ Nhà Trọ
              </span>
            </h1>
          </div>
          {/* promotion */}
          <div className="mb-11">
            <p className="text-[#20184E] font-sans text-xl font-normal leadding-[143%] max-w-[440px] leadding-[150%] ">
              Chào mừng bạn đến với quanlytro.net, nơi cung cấp phần mềm quản lý
              phòng trọ và nhà cho thuê hàng đầu. Với giải pháp toàn diện của
              chúng tôi, việc quản lý nhà trọ chưa bao giờ dễ dàng và hiệu quả
              đến thế.
            </p>
          </div>
          {/* action buttons */}
          <div className="">
            <ActionButton
              href="/pricing"
              className="text-center text-lg px-8 py-4 bg-[#EEB537] hover:bg-yellow-600 hover:border-yellow-600"
            >
              Xem chi tiết
            </ActionButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageSolutions;
