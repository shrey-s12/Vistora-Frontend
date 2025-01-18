import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProfilePage = () => {
    const username = useSelector(state => state.auth.currentUser);
    console.log(username);
    return (
        <>
            <h1>User Profile</h1>
            <h2>Hii {username}</h2>

            <div>
                <Link to="/logout">Logout</Link>
            </div>
        </>
    )
}

export default ProfilePage