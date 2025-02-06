import React from "react";
import "./homePage.css";

function HomePage({ sideNav }) {
  const options = [
    "All",
    "Twenty20 Cricket",
    "Music",
    "Live",
    "Mixes",
    "Gaming",
    "Debates",
    "Coke-Studio",
    "Democracy",
    "Politics",
    "News",
    "Latest Release",
    "Trailers",
    "Serials",
    "Debates",
    "Coke-Studio",
    "Democracy",
    "Politics",
    "News",
  ];

  return (
    <div className={sideNav ? "homePage" : "homepage-full"}>
      <div className="homePage-options">
        {options.map((item, index) => {
          return (
            <div className="homePage-optionList" key={index}>
              {item}
            </div>
          );
        })}
      </div>

      <div className="home-mainPage">
        <div className="youtube-video">
          <div className="youtube-thumbnailBox">
            <img
              src="https://english.cdn.zeenews.com/sites/default/files/2024/01/01/00000003_27.jpg"
              alt="thumbnail"
              className="youtube-thumbnailPic"
            />
            <div className="youtbe-timmingThumbnail">28:01</div>
          </div>

          <div className="youtube-titleBox">
            <div className="youtube-titleBox-profile">
              <img
                src="data:image/jpeg;base64,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"
                alt="profile"
                className="youtube-thumbnail-profile"
              />
            </div>

            <div className="youtube-titleBox-title">
                div.youtube-video
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HomePage;
