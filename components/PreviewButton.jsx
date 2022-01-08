import { Chip } from '@mui/material';
import React, { useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const Wrapper = styled.div`
    position: absolute;
    top: 0.5em;
    right: 0.5em;
`;

export default function PreviewButton({ song }) {
    const [audio, setAudio] = useState();
    const [isPlaying, setIsPlaying] = useState(false)

    const handleClick = () => {
        if (isPlaying) {
            audio.pause()
            setIsPlaying(false)
        } else {
            audio.play(audio)
            setIsPlaying(true)
        }
    }

    useEffect(() => {
        setAudio(new Audio(song.preview))
    }, [song.preview])

    return (
        <Wrapper>
            <Chip label={isPlaying ? <PauseIcon /> : <PlayArrowIcon />} color="primary" onClick={handleClick} />
        </Wrapper>
    );
}
