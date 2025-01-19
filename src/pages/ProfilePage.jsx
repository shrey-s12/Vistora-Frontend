import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProfilePage = () => {
    const username = useSelector(state => state.auth.currentUser);
    console.log(username);
    return (
        <div className="flex flex-col items-center">
            <h1>User Profile</h1>
            <h2>Hii {username}</h2>

            <div className="flex justify-center">
                <Link to="/login">Logout</Link>
            </div>
        </div>
    )
}

export default ProfilePage