import { Chip } from '@mui/material';
import React, { useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Wrapper = styled.div`
    position: absolute;
    top: 0.5em;
    left: 0.5em;
`;

export default function FavoriteButton({ song }) {
    const [isFavorite, setIsFavorite] = useState(false)

    // UseEffect, check if song is in favorites
    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (favorites.includes(song.id)) {
            setIsFavorite(true)
        }
    }, [song.id])

    const handleClick = () => {
        setIsFavorite(!isFavorite)
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (favorites.includes(song.id)) {
            favorites.splice(favorites.indexOf(song.id), 1);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
        else {
            favorites.push(song.id);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
    }



    return (
        <Wrapper>
            <Chip label={isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />} color="error" onClick={handleClick} />
        </Wrapper>
    );
}
