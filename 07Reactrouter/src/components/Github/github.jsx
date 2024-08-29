import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/chandraprakash-pandey')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setData(data)
        })
    })
    return (
        <div className='p-4 text-3xl text-white bg-gray-500'>
        <h1>Followers: {data.followers}</h1>
        <img src={data.avatar_url} alt="Github Profile" className='w-96'/>
        </div>
    )
}

export default Github
