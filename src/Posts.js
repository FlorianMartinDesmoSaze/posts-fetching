import { useEffect, useState } from "react";

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
        <div>
            {loading && <div>Loading resources...</div>}
            {error && (<div>{`There is a problem fecthing data - ${error}`}</div>)}
            <ul>
                {data &&
                    data.map(({id, title}) => (
                        <li key={id}>
                            <h3>{title}</h3>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Posts;