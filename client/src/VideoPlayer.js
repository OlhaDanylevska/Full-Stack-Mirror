import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import ReactPlayer from "react-player";
import videoM from "./video1.mp4";
import { Grid, Box } from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const VideoPlayer = ({ cardHolderRef }) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [ref, inView] = useInView();

    const playerRef = useRef(null);

    const scrollToTarget = () => {
        cardHolderRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (inView && !isPlaying) {
            setIsPlaying(true);
        } else if (!inView && isPlaying) {
            setIsPlaying(false);
        }
    }, [inView, isPlaying]);

    const handleVideoEnd = () => {
        if (playerRef.current) {
            playerRef.current.seekTo(0);
        }
    };

    return (
        <div>
            <div style={{ zIndex: 1, position: "absolute", top: "20%", left: "10%", textShadow: "2px 2px 4px rgba(0,0,0,0.5)", color: "white", textAlign: "left" }} >
                <h1 style={{ fontSize: "5rem", color: "white" }}>Your Personalised</h1>
                <h2 style={{ fontSize: "3.5rem", marginTop: "-1rem" }}>Video Recommendation Platform</h2>
                <Box
                    component="button"
                    onClick={scrollToTarget}
                    sx={{
                        color: 'white', border: 'none', outline: 'none', backgroundColor: 'transparent',
                        '&:focus': {
                            outline: 'none',
                        },
                        '&:focus-visible': {
                            outline: 'none',
                        },
                    }}
                >
                    <Grid container direction="row" mt="2rem">
                        <Grid item><ArrowDownwardIcon color="white" /></Grid>
                        <Grid item>Press to start</Grid>
                    </Grid>
                </Box>
            </div>
            <div
                style={{
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "110vh",
                    zIndex: 0
                }}
            >
                <div ref={ref}>
                    <ReactPlayer
                        ref={playerRef}
                        url={videoM}
                        playing={isPlaying}
                        onEnded={handleVideoEnd}
                        width="100%"
                        height="70%"
                        muted={true}
                        loop={true}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
