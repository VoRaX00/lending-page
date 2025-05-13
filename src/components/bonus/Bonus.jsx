import React from "react";
import "../bonuses/Bonuses.css";


const Bonus = ({title, description, className, image}) => {
    return (
        <div className={`bonus-item ${className}`}>
            <div className="bonus-content">
                <img
                    src={image}
                    alt={`Иконка ${title}`}
                    className="bonus-image"
                    onError={(e) => {
                        e.target.style.display = "none";
                    }}
                />
                <div className="bonus-text">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default Bonus;