import axios from "axios"

function Page({ data }) {
    console.log(data)
    return (
        <div>
            <p>{data.artist.name}</p>
        </div>
    )
}

// This gets called on every request
export async function getServerSideProps({ query }) {
    // Fetch data from external API
    const res = await axios.get()
    const data = res.data.track;


    // Pass data to the page via props
    return { props: { data } }
}

export default Page