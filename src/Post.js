import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import React from 'react'

const Post = () => {
    const { id } = useParams();
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/posts/${id}`
                )
                // const response = await fetch( `https://jsonplaceholder.typicode.com/posts/${id}`)
                // let actualData = await response.json()
                // setData(actualData)
                setData(response.data)
                setError(null)
                console.log(response.data)
            } catch (err) {
                setError(err.message)
                setData(null)
            } finally {
                setLoading(false)
            }
        }
        getData()
    }, [id])
    return (
        <div>
            <h2>This is a post #{id}</h2>
            {error && <p>there was an error : {error}</p>}
            {loading && <p>loading...</p>}
            {data &&
                <div>
                    <h2>{data.title}</h2>
                    <p>{data.body}</p>
                </div>
            }
        </div>
    );
}

export default Post;