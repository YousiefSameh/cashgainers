import { Outlet } from "react-router-dom";
import SomeInformation from "@components/main/Profile/SomeInformation";
import Navbar from "@components/main/Profile/Navbar";

const ProfileTemplate = () => {
  return (
    <>
      <SomeInformation />
      <Navbar />
      <div className="wrapper">
        <Outlet />
      </div>
    </>
  );
};

export default ProfileTemplate;
