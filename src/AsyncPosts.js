import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'

const AsyncPosts = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const abortCont = new AbortController();

        const getData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=8', { signal: abortCont.signal })
                if (!response.ok) {
                    throw new Error(`HTTP error with status : ${response.status}`)
                }
                let actualData = await response.json()
                setData(actualData)
                setError(null)
            } catch (err) {
                // if (err.name === 'AbortError') {
                //     console.log("fetch aborted")
                // }
                setError(err.message)
                setData(null)
            } finally {
                setLoading(false)
            }
        }
        getData()
        return () => abortCont.abort()
    })

    return (
        <ul>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {data &&
                // data.map(({id, title}) =><li><a href={"/posts/"+id}>{title}</a></li>)
                data.map(({ id, title }) =>
                    <li key={id}>
                        <Link to={`/posts/${id}`}>
                            <p>{title}</p>
                        </Link>
                    </li>)
            }
        </ul>
    )
}

export default AsyncPosts;