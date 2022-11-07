import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import React from 'react'

const Posts = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        // posts result number limited to 8 with the query stirng "?_limit=8"
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=8')
        // fetch('https://jsonplaceholder.typicode.com/posts')
            // .then((response) => console.log(`${response}`))
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error : status is ${response.status}`)
                }
                return response.json();
            })
            .then((actualData) => {
                console.log(`${actualData}`)
                setData(actualData)
                setError(null)
            })
            .catch((err) =>{
                console.log(`${err.message}`)
                setError(err.message)
                setData(null)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className="post-container">
            <h2>Latest posts</h2>
            {loading && <div>Loading resources...</div>}
            {error && (<div>{`There is a problem fecthing data - ${error}`}</div>)}
            <ul className="post-list">
                {data &&
                data.map(({ id, title, body }) =>
                <li key={id} className="post-card">
                    <Link to={`/posts/${id}`}>
                        <h2>{title}</h2>
                        <p>{body}</p>
                        {/* <button className="btn-detail">Detail</button> */}
                        <button className="btn-tag">tag</button>
                    </Link>
                </li>)
                }
            </ul>
        </div>
    )
}

export default Posts;