import React, { useState } from "react";
import "./ProfileCard.css";
import { images } from "../Assets/images/images.js"; // Corrected import

const ProfileCard = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flipCard">
        <div className="flipcard-front">
          <img src={images.profile} alt="Profile" />
        </div>
        <div className="flipcard-back">
          <h3>Akshay Chavan</h3>
          <p>Mobile: 9112998857</p>
          <p>Company: XYZ Pvt Ltd</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
