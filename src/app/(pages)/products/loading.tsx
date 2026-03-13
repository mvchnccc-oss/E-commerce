import React from "react";

export default function Loading() {
    return (
        <div className="min-h-screen mx-auto flex items-center justify-center bg-white">
            <div className="flex flex-col items-center">

                {/* Spinner */}
                <div className="relative flex items-center justify-center">
                    <div className="w-24 h-24 border-4 border-emerald-200 rounded-full"></div>

                    <div className="absolute w-24 h-24 border-4 border-transparent border-t-emerald-500 border-r-emerald-500 rounded-full animate-spin"></div>

                    {/* Logo Text */}
                    <span className="absolute text-lg font-bold text-emerald-600">
                        ShopMart
                    </span>
                </div>

                <p className="mt-6 text-gray-500 text-sm tracking-wide">
                    Loading...
                </p>

            </div>
        </div>
    );
}