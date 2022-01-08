import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';

// Navbar

const Spacing = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between
`;

const MyTypo = styled(Typography)`
    cursor: pointer;
`;

export default function Navbar() {
    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <Spacing>
                        <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
                            <MyTypo variant="h6" color="inherit">
                                HOME
                            </MyTypo>
                        </Link>
                        <Link href="/favorites" style={{ color: 'white', textDecoration: 'none' }}>
                            <MyTypo variant="h6" color="inherit">
                                FAVORITES
                            </MyTypo>
                        </Link>
                    </Spacing>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
