// import { useState, useEffect } from 'react'

// const Movies = () => {

//     const [data, setData] = useState(null)
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState(false)
    
//     useEffect(() =>{})

//     const allMovies = fetch('https://imdb-api.com/en/API/top250Movies/k_qknsxr30', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify()
//     })
//         .then(res => {
//             // if (res.ok) {
//             //     console.log(`res successful`)
//             //     // console.log(`this is res ${res.json()}`)
//             //     // return res.json()
//             // } else {
//             //     console.log(`res not successful`)
//             // }
//             return res.json()
//         })
//         .then(data => console.log(`${data}`))
//         .catch(err => console.error(err));

//         let movies = []

//         for (const movie in allMovies) {
//             movies.push(<li key={movie.id}>{movie.title}</li>)
//         }
//         console.log(`hey ${movies}`)

//         console.log(`this is all movies ${allMovies}`)
//         return (
//             <ul>

//             </ul>
//         )
// }

// export default Movies;
