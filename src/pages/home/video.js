import React from "react";

function Video() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ marginTop:"100px" }}>
            <iframe
                width="1020"
                height="630"
                src="https://www.youtube.com/embed/Rsv2VkoIpk0?autoplay=1&mute=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default Video;