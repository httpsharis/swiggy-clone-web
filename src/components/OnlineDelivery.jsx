import React, { useEffect, useState } from 'react'
import Card from './Card';

function OnlineDelivery() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchTopResturent = async () => {
        try {
            setLoading(true)
            const response = await fetch('http://localhost:5000/top-restaurant-chains')
            const apiData = await response.json();
            console.log("Fetched data:", apiData); // Debug log
            setData(apiData);
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchTopResturent();
    }, [])

    return (
        <div className='max-w-[1050px] mx-auto px-4'>
            <div className='mb-8'>
                <h2 className='text-2xl font-bold'>Restaurant with online delivery</h2>
            </div>
            
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12'>
                    {data && data.map((d, i) => (
                        <div key={d.id || i} className="card-wrapper">
                            <div className="transform transition-transform duration-200 hover:scale-95">
                                <Card {...d} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default OnlineDelivery