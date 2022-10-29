import { useState, useEffect } from 'react'

const AsyncPosts = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {

        const getData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=8')
                if (!response.ok) {
                    throw new Error(`HTTP error with status : ${response.status}`)
                }
                let actualData = await response.json()
                setData(actualData)
                setError(null)
            } catch (err) {
                setError(err.message)
                setData(null)
            } finally {
                setLoading(false)
            }
        }
        getData()
    })

    return (
        <ul>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {data &&
                data.map(({id, title}) =><li><a href={"/posts/"+id}>{title}</a></li>)
            }
        </ul>
    )
}

export default AsyncPosts;