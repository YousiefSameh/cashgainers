import { useRef, useState, useCallback } from "react";

const useFeaturedOffers = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);

	const handleMouseDown = useCallback((e: React.MouseEvent) => {
		if (!scrollContainerRef.current) return;
		setIsDragging(true);
		setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
		setScrollLeft(scrollContainerRef.current.scrollLeft);
	}, []);

	const handleMouseMove = useCallback(
		(e: React.MouseEvent) => {
			if (!isDragging || !scrollContainerRef.current) return;
			e.preventDefault();
			const x = e.pageX - scrollContainerRef.current.offsetLeft;
			const walk = (x - startX) * 2;
			scrollContainerRef.current.scrollLeft = scrollLeft - walk;
		},
		[isDragging, startX, scrollLeft]
	);

	const handleMouseUp = useCallback(() => {
		setIsDragging(false);
	}, []);
  return {handleMouseDown, handleMouseMove, handleMouseUp, scrollContainerRef}
}

export default useFeaturedOffers