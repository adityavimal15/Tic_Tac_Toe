import React from "react";

const BackgroundVideo = ({videoSrc}) => {
  return (
    <div className="background-container">
      {/* Video Background */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Background Image Overlay */}
      <div className="overlay"></div>

      {/* Foreground Content */}

      {/* CSS Styling */}
      <style>{`
        .background-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -1;
        }

        .background-video {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('background.jpg') no-repeat center center/cover;
          opacity: 0.5; /* Adjust for transparency */
        }

        .content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: white;
          font-size: 2rem;
          margin-top: 20%;
        }
      `}</style>
    </div>
  );
};

export default BackgroundVideo;