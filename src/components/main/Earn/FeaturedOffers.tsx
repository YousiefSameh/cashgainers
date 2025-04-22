import useWrapperSwipe from "@hooks/useWrapperSwipe";
import SpecialHeading from "@components/shared/SpecialHeading";
import { FaFireAlt } from "react-icons/fa";
import { PiCoinVerticalFill } from "react-icons/pi";
import { IoLogoAndroid } from "react-icons/io";
import OfferCard from "./Cards/OfferCard";

const FeaturedOffers = () => {
	const {handleMouseDown, handleMouseMove, handleMouseUp, scrollContainerRef} = useWrapperSwipe();
	return (
    <section className="pt-6 md:pt-0">
      <div className="head px-3 md:px-0">
        <SpecialHeading title="Featured Offers" icon={<FaFireAlt />} />
      </div>
      <div
        ref={scrollContainerRef}
        className="content flex items-center overflow-x-auto gap-3 md:gap-5 px-3 py-5 cursor-grab scroll-smooth"
        style={{ scrollbarWidth: "none" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {Array.from({ length: 12 }, (_, index) => (
          <OfferCard
            key={index}
            index={index}
            title="Alibaba.com"
            provider="Farly"
            price={200.0}
            image="https://cdn.farly.io/img_apps/alibaba/icone.png"
            platform="android"
          />
        ))}
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box p-0">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 outline-none border-none top-2 z-[90000] ">
              ✕
            </button>
          </form>
          <div className="header relative overflow-hidden pt-[35px] px-[24px] pb-[25px] flex items-center justify-start">
            <div className="background bg-[url('https://www.farly.io/d/3504/76379/icon/?sub=3504&gaid=[GAID]')] bg-cover bg-no-repeat rounded-lg size-[100px] blur-[100px] inset-0"></div>
            <div className="flex absolute h-fit gap-4 px-[24px]">
              <div className="imag">
                <img
                  src="https://www.farly.io/d/3504/76379/icon/?sub=3504&gaid=[GAID]"
                  className="size-[100px]"
                  alt=""
                />
              </div>
              <div className="text space-y-2">
                <h3 className="font-bold text-lg">
                  Alibaba.com - B2B marketplace
                </h3>
                <div className="price mt-2 flex items-center gap-2">
                  <span className="text-yellow-400 text-xl">
                    <PiCoinVerticalFill />
                  </span>
                  <span>$200.00</span>
                </div>
                <div className="offers-devices flex items-center bg-[#383d52d6] text-[1rem] text-[#ddd] justify-center gap-1 w-fit p-[5px] rounded-[5px] z-[2] left-[-4px] top-[5px]">
                  <IoLogoAndroid />
                </div>
              </div>
            </div>
          </div>
          <div className="content relative overflow-y-auto px-6 pt-4 bg-[#111923] max-h-[350px]">
            <div className="about">
              <span className="text-lg">About</span>
              <hr className="border border-neutral-700" />
              <div className="content bg-[#16202B] p-4 rounded-lg my-3">
                <p className="text-base-content/60 text-sm">
                  Alibaba. com is one of the world’s leading B2B ecommerce
                  marketplaces. Our app allows you to source products from
                  global suppliers, all from the convenience of your mobile
                  device.
                </p>
              </div>
            </div>
            <div className="goals">
              <span className="text-lg">Goals</span>
              <hr className="border border-neutral-700" />
              <div className="content flex flex-col gap-3 mt-4">
                <div className="goal bg-[#16202B] p-4 rounded-lg flex items-center justify-between">
                  <div className="goal-started flex items-center gap-2">
                    <div
                      aria-label="success"
                      className="status status-success"
                    ></div>
                    <p className="text-base-content/60 text-sm">
                      Open and use it.
                    </p>
                  </div>
                  <div className="coins flex items-center gap-2">
                    <span className="text-yellow-400 text-sm">
                      <PiCoinVerticalFill />
                    </span>
                    <span className="text-sm">$200.00</span>
                  </div>
                </div>
                <div className="goal bg-[#16202B] p-4 rounded-lg flex items-center justify-between">
                  <div className="goal-started flex items-center gap-2">
                    <div
                      aria-label="success"
                      className="status status-success"
                    ></div>
                    <p className="text-base-content/60 text-sm">
                      Open and use it.
                    </p>
                  </div>
                  <div className="coins flex items-center gap-2">
                    <span className="text-yellow-400 text-sm">
                      <PiCoinVerticalFill />
                    </span>
                    <span className="text-sm">$200.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="details mt-7">
              <hr className="border border-neutral-700 outline-none" />
              <div className="content flex items-center p-2 justify-between flex-wrap gap-4">
                <div className="categories">
                  <span className="block mb-2">Categories</span>
                  <div className="flex items-center gap-2">
                    <div className="badge badge-info text-white">Offers</div>
                    <div className="badge badge-info text-white">Games</div>
                  </div>
                </div>
                <div className="provider">
                  <span className="block mb-2">Provider</span>
                  <p className="text-base-content/60">Farly</p>
                </div>
                <div className="Mystatus flex flex-col">
                  <span className="block mb-2">Status</span>
                  <div className="badge badge-error text-white">
                    Not Started
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="button px-6 py-4 bg-[#111923]">
            <a href="#" className="btn btn-soft btn-lg btn-accent w-[100px]">
              Start
            </a>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default FeaturedOffers;
