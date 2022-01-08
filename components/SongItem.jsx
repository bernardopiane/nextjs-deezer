import { Chip, Paper } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import FavoriteButton from './FavoriteButton'
import Playbar from './Playbar'
import PreviewButton from './PreviewButton'
import ShortcutIcon from '@mui/icons-material/Shortcut';

const MyPaper = styled(Paper)`
    padding: 1em;
    display: flex;
    flex-direction: column;
    aspect-ratio: 1;
    height: 300px;
`;

const AbsoluteWrapper = styled.div`
    position: relative;
`;

const Title = styled.div`
    width: 300px;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    direction: ltr;
`;

const Artist = styled.div`
    width: 300px;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    direction: ltr;
`;

const SongInfo = styled.div`
    padding-top: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const MyShortcutIcon = styled(ShortcutIcon)`
    margin-left: 0.25em;
    font-size: 1em;
`;


export default function SongItem({ song }) {
    return (
        <MyPaper elevation={3}>
            <AbsoluteWrapper>
                {song.preview ? <PreviewButton song={song} /> : null}
            </AbsoluteWrapper>
            <AbsoluteWrapper>
                <FavoriteButton song={song} />
            </AbsoluteWrapper>

            <img src={song.album.cover_medium !== "" ? song.album.cover_medium : "https://via.placeholder.com/150"} alt="Album Cover" />
            <SongInfo>
                {/* <Link href={{
                    pathname: `/track`,
                    query: {
                        track: song.name,
                        artist: song.artist.name
                    }
                }}><Title>Title: {song?.title}</Title></Link> */}
                <Title>Title: <a href={song.link} target={'_blank'}>{song?.title}<MyShortcutIcon /></a></Title>
                <Artist>Artist: {song.artist.name}</Artist>

            </SongInfo>
        </MyPaper>
    )
}
