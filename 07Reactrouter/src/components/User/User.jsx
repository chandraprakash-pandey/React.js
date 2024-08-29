import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {Userid} = useParams()
    return (
        <>
        User: {Userid}
        </>
    )
}

export default User
