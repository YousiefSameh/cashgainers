import { useState } from "react";
import { useCountry } from "@hooks/useCountry";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaHome } from "react-icons/fa";
import { IoCashOutline, IoChatboxEllipsesOutline } from "react-icons/io5";
import { PiRanking } from "react-icons/pi";
import { TbCoins } from "react-icons/tb";
import { MdArrowRight } from "react-icons/md";
import { RiMedalLine } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";
import { MdLocalOffer } from "react-icons/md";
import ReactCountryFlag from "react-country-flag";

const Sidebar = () => {
  const navigate = useNavigate();
  const { country, loading } = useCountry();
  const [showMenu, setShowMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleNumberOfOrderCategories = (category: string) => {
    if (category === "all") return 0;
    return 0;
  };

  const handleRewardsClick = () => {
    // dispatch(openDailyTasks());
  };

  return (
    <>
      <aside
        className={`${
          showSidebar ? "block" : "hidden"
        } md:block w-[210px] md:w-[240px] bg-panel-bg z-20 max-h-screen h-full fixed top-0 left-0 overflow-y-auto py-4 shadow-lg border-r border-base-300`}
        aria-label="Sidebar Navigation"
      >
        <nav className="p-2 mt-[45px] md:mt-[70px]" role="navigation">
          <div className="flex justify-between items-center mb-3 p-2">
            <p className="uppercase text-base-content/70 text-sm">Main</p>
          </div>
          <ul className="space-y-2">
            <li
              className="flex items-center gap-5 transition-colors hover:bg-panel-dark-bg p-2 rounded-md cursor-pointer"
              aria-label="Home"
            >
              <Link
                to="/dashboard/earn"
                className="flex items-center gap-5 w-full"
              >
                <div className="icon bg-panel-dark-bg p-2 rounded-md">
                  <FaHome className="text-2xl text-base-content" />
                </div>
                <p className="text-lg text-base-content">Home</p>
              </Link>
            </li>
            <li>
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="flex items-center gap-5 transition-colors hover:bg-panel-dark-bg p-2 rounded-md cursor-pointer w-full text-left"
                aria-expanded={showMenu}
                aria-controls="offers-menu"
              >
                <div className="icon bg-panel-dark-bg p-2 rounded-md">
                  <TbCoins className="text-2xl text-base-content" />
                </div>
                <p className="text-base-content">Offers</p>
                <MdArrowRight
                  className={`ml-8 md:ml-10 text-2xl transition-transform text-base-content ${
                    showMenu ? "rotate-90" : ""
                  }`}
                />
              </button>
              <ul
                id="offers-menu"
                className={`${
                  showMenu ? "flex" : "hidden"
                } flex-col py-2 px-6 gap-2`}
                role="menu"
              >
                <li
                  onClick={() => navigate("/dashboard/orders/all")}
                  role="menuitem"
                  className="cursor-pointer hover:bg-panel-dark-bg px-5 py-2 rounded-md text-base-content"
                >
                  All Offers ({handleNumberOfOrderCategories("all")})
                </li>
                <li
                  onClick={() => navigate("/dashboard/orders/games")}
                  role="menuitem"
                  className="cursor-pointer hover:bg-panel-dark-bg px-5 py-2 rounded-md text-base-content"
                >
                  (Games {handleNumberOfOrderCategories("games")})
                </li>
                <li
                  onClick={() => navigate("/dashboard/orders/install")}
                  role="menuitem"
                  className="cursor-pointer hover:bg-panel-dark-bg px-5 py-2 rounded-md text-base-content"
                >
                  (Install {handleNumberOfOrderCategories("install")})
                </li>
                <li
                  onClick={() => navigate("/dashboard/orders/sweepstake")}
                  role="menuitem"
                  className="cursor-pointer hover:bg-panel-dark-bg px-5 py-2 rounded-md text-base-content"
                >
                  (Sweepstake {handleNumberOfOrderCategories("sweepstake")})
                </li>
                <li
                  onClick={() => navigate("/dashboard/orders/free")}
                  role="menuitem"
                  className="cursor-pointer hover:bg-panel-dark-bg px-5 py-2 rounded-md text-base-content"
                >
                  (Free {handleNumberOfOrderCategories("free")})
                </li>
              </ul>
            </li>
            <li
              className="flex items-center gap-5 transition-colors hover:bg-panel-dark-bg p-2 rounded-md cursor-pointer"
              aria-label="Cashout"
            >
              <Link
                to="/dashboard/cashout"
                className="flex items-center gap-5 w-full"
              >
                <div className="icon bg-panel-dark-bg p-2 rounded-md">
                  <IoCashOutline className="text-2xl text-base-content" />
                </div>
                <p className="text-lg text-base-content">Cashout</p>
              </Link>
            </li>
            <li
              className="flex items-center gap-5 transition-colors hover:bg-panel-dark-bg p-2 rounded-md cursor-pointer"
              aria-label="Ranking"
            >
              <Link
                to="/dashboard/ranking"
                className="flex items-center gap-5 w-full"
              >
                <div className="icon bg-panel-dark-bg p-2 rounded-md">
                  <PiRanking className="text-2xl text-base-content" />
                </div>
                <p className="text-lg text-base-content">Ranking</p>
              </Link>
            </li>
            <li
              className="flex items-center gap-5 transition-colors hover:bg-panel-dark-bg p-2 rounded-md cursor-pointer group"
              aria-label="Rewards"
            >
              <button
                onClick={handleRewardsClick}
                className="flex items-center gap-5 w-full"
              >
                <div className="icon bg-panel-dark-bg p-2 rounded-md">
                  <RiMedalLine className="text-2xl text-base-content" />
                </div>
                <p className="text-lg text-base-content">Rewards</p>
              </button>
            </li>
            <li
              className="flex items-center gap-5 transition-colors hover:bg-panel-dark-bg p-2 rounded-md cursor-pointer"
              aria-label="Coupon Codes"
            >
              <Link
                to="/dashboard/coupons"
                className="flex items-center gap-5 w-full"
              >
                <div className="icon bg-panel-dark-bg p-2 rounded-md">
                  <MdLocalOffer className="text-2xl text-base-content" />
                </div>
                <p className="text-lg text-base-content">Coupon Code</p>
              </Link>
            </li>
          </ul>
          <div className="mt-6 p-2">
            <span className="flex items-center gap-2 text-base-content/70">
              Country:{" "}
              {loading ? (
                "Loading..."
              ) : (
                <>
                  <ReactCountryFlag countryCode={country} svg /> {country}
                </>
              )}
            </span>
          </div>
        </nav>
      </aside>
      <div
        className="dock dock-lg flex md:hidden z-30 bg-base-200"
        role="navigation"
        aria-label="Mobile Dock"
      >
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          aria-label={showSidebar ? "Close Sidebar" : "Open Sidebar"}
          className="text-base-content"
        >
          <FaBars className={showSidebar ? "hidden" : "block size-[1.6rem]"} />
          <ImCancelCircle
            className={showSidebar ? "block size-[1.6rem]" : "hidden"}
          />
        </button>

        <Link
          to="/dashboard/cashout"
          className={`text-base-content`}
          aria-label="Cashout"
        >
          <IoCashOutline className="size-[1.2rem]" />
          <span className="dock-label">Cashout</span>
        </Link>

        <Link
          to="/dashboard/earn"
          className={`text-base-content bg-secondary-color`}
          aria-label="Earn"
        >
          <TbCoins className="size-[1.2rem]" />
          <span className="dock-label">Earn</span>
        </Link>

        <button
          onClick={() => handleRewardsClick()}
          className={`text-base-content`}
          aria-label="Rewards"
        >
          <RiMedalLine className="size-[1.2rem]" />
          <span className="dock-label">Rewards</span>
        </button>

        <button
          // onClick={() => dispatch(toggleChat())}
          className={`text-base-content`}
          aria-label="Chat"
        >
          <IoChatboxEllipsesOutline className="size-[1.2rem]" />
          <span className="dock-label">Chat</span>
        </button>
      </div>

      {/* Daily Tasks Sidebar */}
      {/* <DailyTasksSidebar /> */}
    </>
  );
};

export default Sidebar;
