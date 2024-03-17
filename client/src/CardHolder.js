import { useState } from "react"
import VideoCard from "./VideoCard"
import loadingIMG from "./load.gif"
import AddVideoButton from "./AddVideoButton"

const CardHolder = ({ allMyVideos, setAllMyVideos, loading, cardHolderRef }) => {
    const [sorting, setSorting] = useState("asc")

    const handleSortingButton = () => {
        if (sorting === "asc") {
            let sortingAscVideos = allMyVideos.sort(function (a, b) {
                return a.rating - b.rating
            })
            setAllMyVideos(sortingAscVideos)
            setSorting("dsc")
        } else if (sorting === "dsc") {
            let sortingDscVideos = allMyVideos.sort(function (a, b) {
                return b.rating - a.rating
            })
            setAllMyVideos(sortingDscVideos)
            setSorting("asc")
        }
    }

    return (
        <div ref={cardHolderRef}>
            <h4 style={{ fontWeight: "200", color: "gray", marginBottom: "2rem", fontSize: "2rem" }}>Add your favorite video</h4>
            <AddVideoButton setAllMyVideos={setAllMyVideos} />
            <div className="sorting-holder">
                Sort
                <button className="sorting-ratings-button" onClick={handleSortingButton}>
                    <img alt="arrowImage" src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/sort-arrows-icon.png" style={{ width: "0.6rem" }}>
                    </img>
                </button>
            </div>
            <div className="cards-holder">
                {loading ?
                    <div>
                        <img src={loadingIMG} style={{ width: "3rem", }} alt="loading animation"></img>
                        <br />
                        <br />
                        <p style={{ fontSize: "1.3rem", color: "rgb(211, 211, 211)" }}>It might take a little bit of time to load our service for you. <br />Thanks for your patience.</p>
                    </div>
                    :
                    <VideoCard allMyVideos={allMyVideos} setAllMyVideos={setAllMyVideos} />}

            </div>
        </div>

    )
}

export default CardHolder