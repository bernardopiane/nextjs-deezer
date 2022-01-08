import { Container } from '@mui/material'
import Head from 'next/head'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import SongGrid from '../components/SongGrid'

const Wrapper = styled.div`
background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23cccccc' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");

`

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <SearchBar />
        <SongGrid />
      </Container>
    </>
  )
}
