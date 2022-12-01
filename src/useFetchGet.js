import axios from 'axios'
import React, { useState, useEffect } from 'react';

const useFetchGet = (ulr) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const getData = async ()=> {
        try {
            const response = await axios.get(url)
        }
    }
}