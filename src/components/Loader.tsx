
export default function Loader() {
    return (
        <div className="flex items-center justify-center space-x-4 animate-pulse">
            <div className="w-12 h-12 relative">
                <div className="absolute inset-0 flex items-center justify-center rotate-15">
                    <div className="h-1 w-1 bg-gray-300 rounded-full scale-150 translate-x-3" />
                    <div className="h-1 w-1 bg-gray-300 rounded-full scale-150 translate-x-3" />
                    <div className="h-1 w-1 bg-gray-300 rounded-full scale-150 translate-x-3" />
                    <div className="h-1 w-1 bg-gray-300 rounded-full scale-150 translate-x-3" />
                    <div className="h-1 w-1 bg-gray-300 rounded-full scale-150 translate-x-3" />
                    <div className="h-1 w-1 bg-gray-300 rounded-full scale-150 translate-x-3" />
                </div>
            </div>
            <div className="text-gray-500">Loading...</div>
        </div>
    )
}

