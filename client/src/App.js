import "./App.css";
import CardHolder from "./CardHolder";
import { useEffect, useState } from "react"
import Footer from "./Footer";
import VideoPlayer from "./VideoPlayer";
import { useRef } from 'react';



function App() {
  const [allMyVideos, setAllMyVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const cardHolderRef = useRef(null);
  const [rating, setRating] = useState(0)

  useEffect(() => {
    fetch("https://video-recomendations-014d.onrender.com/videos")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setAllMyVideos(data)
        setLoading(false)
      })
  }, [rating])
  return (
    <div className="App">
      <div className="background"></div>
      <div className="App-header">
        <VideoPlayer cardHolderRef={cardHolderRef} />
      </div>
      <div style={{ width: "98%" }}>
        <CardHolder rating={rating} setRating={setRating} cardHolderRef={cardHolderRef} allMyVideos={allMyVideos} loading={loading} setLoading={setLoading} setAllMyVideos={setAllMyVideos} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
