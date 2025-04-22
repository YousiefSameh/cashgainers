import useWrapperSwipe from "@hooks/useWrapperSwipe";
import { BsJoystick } from "react-icons/bs";
import { offerwalls } from "./data/OfferwallData";
import SpecialHeading from "@components/shared/SpecialHeading";
import OfferwallPartnersCard from "./Cards/OfferwallPartnersCard";

const OfferwallPartners = () => {
	const {handleMouseDown, handleMouseMove, handleMouseUp, scrollContainerRef} = useWrapperSwipe();

	return (
		<section>
			<div className="head px-3 md:px-0">
				<SpecialHeading title="Offerwall Partners" icon={<BsJoystick />} />
			</div>
			<div
				ref={scrollContainerRef}
				className="content flex items-center overflow-x-auto gap-3 md:gap-3 px-3 py-5 cursor-grab"
				style={{ scrollbarWidth: "none" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
			>
				{offerwalls.map((item, index) => (
					<OfferwallPartnersCard key={index} index={index} item={item} />
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

export default OfferwallPartners;
