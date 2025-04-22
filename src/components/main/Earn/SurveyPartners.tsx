import useWrapperSwipe from "@hooks/useWrapperSwipe";
import SpecialHeading from "@components/shared/SpecialHeading";
import OfferwallPartnersCard from "./Cards/OfferwallPartnersCard";
import { survey } from "./data/OfferwallData";
import { BsJoystick } from "react-icons/bs";

const SurveyPartners = () => {
	const {
		handleMouseDown,
		handleMouseMove,
		handleMouseUp,
		scrollContainerRef,
	} = useWrapperSwipe();

	return (
		<section>
			<div className="head px-3 md:px-0">
				<SpecialHeading title="Survey Partners" icon={<BsJoystick />} />
			</div>
			<div
				ref={scrollContainerRef}
				className="content flex items-center overflow-x-auto gap-3 md:gap-5 px-3 py-5 cursor-grab"
				style={{ scrollbarWidth: "none" }}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseUp}
			>
				{survey.map((item, index) => (
					<OfferwallPartnersCard key={index} item={item} />
				))}
			</div>
			<dialog id="my_iframe" className="modal">
				<div className="modal-box p-6 w-11/12 max-w-6xl max-h-[90vh] h-full">
					<form method="dialog">
						{/* if there is a button in form, it will close the modal */}
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
							✕
						</button>
					</form>
					<iframe
						src="https://coinsmakers.vercel.app/"
						className="w-full h-full rounded-lg p-5"
					/>
				</div>
			</dialog>
		</section>
	);
};

export default SurveyPartners;
