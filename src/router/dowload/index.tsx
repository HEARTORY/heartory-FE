import React, { useEffect } from "react";

const Download: React.FC = () => {
    useEffect(() => {
        // Redirect to the Google Drive download link
        window.location.href =
            "https://drive.google.com/uc?export=download&id=1vpf99GfJ95bo6M5uEr362nyqLbrjcjUi";
    }, []);

    return (
        <div className="text-sm w-full h-full flex items-center justify-center text-[#38419d] md:text-3xl sm:text-2xl">
            <p>Redirecting to your download...</p>
        </div>
    );
};

export default Download;
