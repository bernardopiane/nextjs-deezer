import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Loader from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchTopSongs, search, selectLoading } from '../api/Deezer';

const BoxWrapper = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    // Media query for mobile
    @media (max-width: 700px) {
        gap: 1em;
        flex-direction: column;
    }
`;

const MyButton = styled(Button)`
    margin-left: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    // Media query for mobile
    @media (max-width: 700px) {
        margin: 0;
        width: 100%;
    }
`;


export default function SearchBar() {
    const [userQuery, setUserQuery] = useState("");
    const isLoading = useSelector(selectLoading);

    const dispatch = useDispatch();


    return (
        // Search bar with a button to search
        <form onSubmit={(e) => {
            e.preventDefault();
            if (userQuery !== "") {
                dispatch(search(userQuery));
            } else {
                // dispatch(fetchTopSongs());
                dispatch(fetchTopSongs());
            }
        }}>
            <BoxWrapper m={2}>
                <TextField
                    id="search-bar"
                    label="Search"
                    variant="outlined"
                    value={userQuery}
                    onChange={(e) => setUserQuery(e.target.value)}
                    style={{ width: '100%' }}
                />
                <MyButton
                    variant="contained"
                    color="primary"
                    type="submit"
                    size='large'
                >
                    {isLoading ? <Loader
                        type="Audio"
                        color="#00BFFF"
                        height={18}
                        width={18}
                    /> : "Search"}
                </MyButton>
            </BoxWrapper>
        </form>

    )
}
