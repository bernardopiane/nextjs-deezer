import { Container, Typography } from '@mui/material';
import axios from 'axios';
import React, { Component } from 'react'
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import SongItem from './SongItem';

const ListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1.25em;
    justify-items: center;
    align-items: center;
`;
const MyTypography = styled(Typography)`
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    text-align: center;
`;

export default class FavList extends Component {

    // Init state
    state = {
        songs: [],
        isLoading: true
    }

    componentDidMount() {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.forEach(songId => {
            axios.get(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${songId}`)
                .then(res => {
                    this.setState({
                        songs: [...this.state.songs, res.data]
                    })
                    // If last one set isLoading to false
                    if (this.state.songs.length === favorites.length) {
                        this.setState({
                            isLoading: false
                        })
                    }
                })
        })
    }


    render() {
        return (
            <Container>
                <MyTypography variant="h4" gutterBottom>
                    Favorites
                </MyTypography>
                <ListWrapper>
                    {this.state.isLoading ? <Loader
                        type="Audio"
                        color="#00BFFF"
                        height={100}
                        width={100}
                    /> : this.state.songs.map(song => {
                        return <SongItem key={song.id} song={song} />
                    })}
                </ListWrapper>
            </Container>
        )
    }
}
