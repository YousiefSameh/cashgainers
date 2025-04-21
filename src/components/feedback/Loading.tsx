const Loading = () => {
	return (
		<div className="fixed inset-0 !z-[100000000000] flex items-center justify-center bg-black/60">
			<div className="animate-spin rounded-full h-24 w-24 border-t-4 border-secondary-color border-opacity-75"></div>
		</div>
	);
};

export default Loading;