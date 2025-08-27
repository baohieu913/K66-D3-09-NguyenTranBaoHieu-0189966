import StepList from "@/app/(root)/components/section/home-page-work-method/StepList";
import SpiralSVG from "@/app/(root)/components/svgs/SpiralSVG";

const HomePageWorkMethod = () => {
  return (
    <div className="h-[1050px] bg-[url('/images/home-page/work.png')] bg-cover bg-no-repeat bg-center">
      {/* text and cicle */}
      <div className="flex justify-center pt-[80px] ">
        <div className="w-[667px]  h-[300px]  overflow-hidden">
          <div className="w-[667px]  h-[667px] border-[3px] border-[#EEB537] rounded-full">
            <div className=" w-[85%] mx-auto h-[250px] overflow-hidden mt-[50px] ">
              <div className="w-full h-[567px] bg-[#FFF7E7] rounded-full text-center pt-[73px] mx-auto ">
                <div className="flex justify-center mb-[25px]">
                  <SpiralSVG />
                </div>
                <h1 className="text-[#20184E] font-playfair text-[50px] font-medium capitalize ">
                  cách thức{" "}
                  <span className="text-[#EEB537] font-playfair">hoạt động</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* step list */}
      <StepList />
    </div>
  );
};

export default HomePageWorkMethod;
