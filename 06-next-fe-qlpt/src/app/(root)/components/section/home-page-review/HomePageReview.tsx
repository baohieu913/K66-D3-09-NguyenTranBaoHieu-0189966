import Image from "next/image";

const HomePageReview = () => {
  return (
    <div className="bg-[#FAF9F6]">
      <div className="max-w-[1243px] mx-auto relative">
        <div className="flex ">
          {/* left side - text */}
          <div className="w-1/2 ">
            {/* image decoration */}
            <div className="absolute flex">
              <Image
                src="/images/home-page/review-decoration.png"
                width={165}
                height={412}
                alt="review decoration picture"
                className="mr-11"
              />
              <Image
                src="/images/home-page/review-decoration.png"
                width={165}
                height={412}
                alt="review decoration picture"
              />
            </div>
            <div className="pt-[214px] ">
              <h1 className="max-w-[405px] text-[#EEB537] font-playfair text-[50px] italic font-medium mb-[11.5px] ">
                Đánh Giá
                <span className="text-[#20184E] font-playfair">
                  {" "}
                  Từ Khách Hàng
                </span>
              </h1>
              <p className="max-w-[464px] text-[#313A5A] font-sans text-lg font-normal leadding-[160%] mb-7  ">
                Chúng tôi luôn lắng nghe ý kiến của bạn! Đọc những đánh giá mới
                nhất từ người dùng về trải nghiệm với phần mềm của chúng tôi
              </p>
              <div className="">
                <Image
                  src="/images/home-page/avatar.png"
                  width={153}
                  height={60}
                  alt="avatar reviewer picture"
                />
              </div>
            </div>
          </div>
          {/* right side - image */}
          <div className="w-1/2  pt-[99.2px]  pb-[109px] ">
            <Image
              src="/images/home-page/review-message.png"
              width={633}
              height={660}
              alt="review message picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageReview;
