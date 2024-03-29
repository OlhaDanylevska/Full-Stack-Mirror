

import Counter from './Counter'
import ReactPlayer from 'react-player'



const VideoCard = ({ allMyVideos, setAllMyVideos, setRating }) => {

    const handleDelete = (id) => {
        fetch(`https://video-recomendations-014d.onrender.com/videos/${id}`, {
            method: "DELETE"
        })
            .then((res) => {
                if (!res.ok) {
                    console.error(`Failed to delete video (Status: ${res.status})`);
                    throw new Error(`Failed to delete video (Status: ${res.status})`);
                }
                return res.json();
            })
            .then((data) => {
                setAllMyVideos(data);
            })
            .catch((error) => {
                console.error("Error deleting video:", error);
            });
    };


    return (
        allMyVideos.map(video => (
            <div key={video.id} className="card">
                <h4>{video.title}</h4>
                <div className="video-holder">
                    <ReactPlayer className="react-player"
                        url={video.url}
                        width="100%"
                        height="100%"
                        controls={true} />
                </div>
                <div className='card-buttons'>
                    <button className='delete-button' onClick={() => { handleDelete(video.id) }}>Delete</button>
                    <div className="text-holder">
                        <Counter setRating={setRating} videoRating={video.rating} videoId={video.id} allMyVideos={allMyVideos} />
                    </div>
                </div>

            </div >
        ))
    )
}

export default VideoCard