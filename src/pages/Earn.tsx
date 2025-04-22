import FeaturedOffers from "@components/main/Earn/FeaturedOffers";
import OfferwallPartners from "@components/main/Earn/OfferwallPartners";
import SurveyPartners from "@components/main/Earn/SurveyPartners";

const Earn = () => {
  return (
    <div className="space-y-[10px] md:space-y-[40px]">
      <FeaturedOffers />
      <OfferwallPartners />
      <SurveyPartners />
    </div>
  );
};

export default Earn;
