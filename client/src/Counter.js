import React, { useState } from "react";

const Counter = ({ setRating, videoId, videoRating }) => {
    const [newRating, setNewRating] = useState(videoRating);

    const handleCounterDown = () => {
        setNewRating(newRating - 1);
        setRating(newRating - 1);
        handleRatingChange(newRating - 1);
    };

    const handleCounterUp = () => {
        setNewRating(newRating + 1);
        setRating(newRating + 1);
        handleRatingChange(newRating + 1);
    };

    const handleRatingChange = async (newRating) => {
        try {
            await fetch(`https://video-recomendations-014d.onrender.com/videos/${videoId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ rating: newRating }),
            });
        } catch (error) {
            console.error("Error updating rating:", error);
        }
    };

    return (
        <div>
            <div className="rate">
                <img alt="heart" className="image-heart" src="https://www.svgrepo.com/show/439915/heart-fill.svg"></img>
                <span>{newRating}</span>
            </div>
            <button className="up" onClick={handleCounterUp}>
                <img alt="tumb-up_picture" className="tumb-up" src="https://icon-library.com/images/white-thumbs-up-icon/white-thumbs-up-icon-26.jpg"></img>
            </button>
            <button className="down" onClick={handleCounterDown}>
                <img alt="tumb-down_picture" className="tumb-down" src="https://icon-library.com/images/white-thumbs-up-icon/white-thumbs-up-icon-26.jpg"></img>
            </button>
        </div>
    );
};

export default Counter;
