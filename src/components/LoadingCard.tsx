const LoadingCard = () => {
    return (
        <div className="animate-pulse bg-blue-900 rounded-lg overflow-hidden shadow-lg m-6 h- min-h-[224px]">
            <div className="p-6">
                <div className="h-6 bg-blue-700 rounded mb-2"></div>
                <div className="h-4 bg-blue-700 rounded mb-4"></div>
                <div className="flex justify-between items-center mt-4">
                    <div className="h-4 bg-blue-700 rounded w-1/4"></div>
                    <div className="h-4 bg-blue-700 rounded w-1/4"></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingCard;
