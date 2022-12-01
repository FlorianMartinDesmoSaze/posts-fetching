import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ShopArticles = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const getData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products')
                setData(response.data);
                setError(null)
                console.log(`data in fetch ${response.data}`)
            } catch (err) {
                setError(err.message)
                setData(null)
            } finally {
                setLoading(false)
            }
        }
        getData()
    }, [])

    return (
        <div className="job-list div-component">
            <h2>Available items</h2>
            {error && <p>there was an error : {error}</p>}
            {loading && <p>loading...</p>}
            <ul>
            { data &&
            data.map(({ id, name }) =>
                <li key={id}>
                    <p>{name}</p>
                </li>)}
            </ul>
        </div>
    );
}


export default ShopArticles;