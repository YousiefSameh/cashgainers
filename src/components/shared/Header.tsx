import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaBell, FaHistory, FaShare, FaUser } from "react-icons/fa";
import { FaCoins, FaRankingStar } from "react-icons/fa6";
import DesktopLogo from "@assets/desktop-logo.png";
import MobileLogo from "@assets/mobile-logo.png";
import Avatar from "@assets/Avatar.png";
import { logout } from "@store/auth/AuthSlice";
import { MdLogout } from "react-icons/md";

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="navbar fixed z-40 top-0 left-0 w-full bg-panel-bg px-4 py-2">
        <div className="navbar-start">
          <img
            src={isMobile ? MobileLogo : DesktopLogo}
            alt="Logo"
            className="w-[60px] md:w-[170px] h-[3.5rem]"
          />
        </div>
        <div className="navbar-end flex items-center gap-4 md:gap-6">
          {user ? (
            <>
              <button
                // onClick={() => dispatch(toggleChat())}
                className="btn bg-transparent hover:bg-panel-dark-bg border-none text-white !px-2 hidden md:block order-1"
                aria-label="Open Chat"
              >
                <IoChatboxEllipsesOutline className="sm:text-base md:text-[28px]" />
              </button>
              <button
                // onClick={() => dispatch(toggleNotifications())}
                className="btn bg-transparent shadow-none border-none btn-ghost btn-circle md:order-2 order-last"
                aria-label="Notifications"
              >
                <div className="indicator">
                  <FaBell className="text-[24px]" />
                  <span className="badge bg-secondary-color badge-xs indicator-item">
                    3
                  </span>
                </div>
              </button>
              <button className="btn btn-sm md:btn-md border-none bg-transparent text-white !px-2 flex items-center gap-2 order-3">
                <span className="text-sm md:text-lg text-yellow-400">
                  <FaCoins />
                </span>
                <span className="text-sm md:text-lg font-bold">1000.00</span>
              </button>
              <div className="dropdown dropdown-end order-4">
                <label tabIndex={0} className="cursor-pointer">
                  <div className="avatar">
                    <div className="ring-secondary-color ring-offset-base-100 w-[30px] md:w-[40px] rounded-full ring ring-offset-2">
                      <img src={Avatar} alt="User Avatar" />
                    </div>
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow-lg bg-panel-bg rounded-box w-52 mt-4"
                >
                  <li>
                    <button
                      className="flex items-center gap-4 p-3 hover:bg-panel-dark-bg rounded-lg transition-colors"
                      onClick={() => navigate("/dashboard/profile")}
                    >
                      <FaUser />
                      Profile
                    </button>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/rewards-history"
                      className="flex items-center gap-4 p-3 hover:bg-panel-dark-bg rounded-lg transition-colors"
                    >
                      <FaHistory />
                      History
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/referral"
                      className="flex items-center gap-4 p-3 hover:bg-panel-dark-bg rounded-lg transition-colors"
                    >
                      <FaShare />
                      Referral
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/ranking"
                      className="flex items-center gap-4 p-3 hover:bg-panel-dark-bg rounded-lg transition-colors"
                    >
                      <FaRankingStar />
                      Ranking
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => dispatch(logout())}
                      className="flex items-center gap-4 p-3 hover:bg-panel-dark-bg rounded-lg transition-colors text-error"
                    >
                      <MdLogout />
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/dashboard/register"
                className="btn btn-success md:w-[100px] text-white"
                aria-label="Register"
              >
                Register
              </Link>
              <Link
                to="/dashboard/login"
                className="btn btn-secondary md:w-[100px]"
                aria-label="Login"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </header>
      <section
        className="titles mt-[75px] md:mt-[90px] z-10 flex items-center gap-4 px-4 pb-3 relative overflow-auto w-full"
        aria-label="User Titles"
      >
        {Array.from({ length: 9 }, (_, index) => index).map((index) => {
          return (
            <article
              key={index}
              className="min-w-[135px] sm:min-w-[160px] bg-[#2a2e3f] border-2 border-blue-light p-[5px] rounded-lg flex items-center justify-between cursor-pointer"
              aria-label={`User ${index + 1}`}
            >
              <img
                src={MobileLogo}
                className="w-5 md:w-7.5"
                alt={`User ${index + 1} Avatar`}
              />
              <p className="text-[8px] sm:text-[9px] text-base-content/60">
                Robsn.
                <br />
                Admin. Gift.
              </p>
              <span
                className="badge bg-primary-color text-blue-middle border-none font-semibold text-[8px] sm:text-[9px] py-[3px] px-[7px]"
                aria-label="Balance"
              >
                $200.00
              </span>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Header;
