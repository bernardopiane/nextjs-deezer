import React, { useEffect } from 'react'
import Loader from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
// import { fetchTopSongs, selectData } from '../api/LastFM';
import { fetchTopSongs, selectData, selectLoading } from '../api/Deezer';
import SongItem from './SongItem';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1.25em;
    justify-items: center;
    align-items: center;
`

export default function SongGrid() {
    const data = useSelector(selectData);
    const isLoading = useSelector(selectLoading);
    const dispatch = useDispatch();

    // When component first loads, fetch the top songs
    useEffect(() => {
        console.log(data);
        if (data.length === 0) {
            dispatch(fetchTopSongs());
        }
    }, [dispatch]);


    if (data === null || data === []) return null;

    return (
        <Wrapper>
            {isLoading ? <Loader
                type="Audio"
                color="#00BFFF"
                height={100}
                width={100}
            /> : data.map(song => {
                return <SongItem key={song.id} song={song} />
            })}
        </Wrapper>
    )
}
