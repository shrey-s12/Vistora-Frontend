import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profile_view } from "../data";
import { removeCurrentUser, setCurrentUser } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProfilePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const username = useSelector((state) => state.auth.currentUser);
    console.log("username", username);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:5000/user/userInfo', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response.data)
                dispatch(setCurrentUser({ email: response.data.user.username }));
            })
            .catch(err => console.error(err));
    }, [username]);


    const handleLogOut = () => {
        dispatch(removeCurrentUser());
        const refresh_token = localStorage.getItem('refresh_token');
        localStorage.removeItem('token');
        localStorage.removeItem('refresh_token');
        axios.post('http://localhost:5001/auth/logout', { token: refresh_token })
            .then(response => {
                navigate('/login');
            })
            .catch(err => console.error(err))
    };

    return (
        <div className="flex flex-col items-center min-h-screen">
            {/* Main Container */}
            <div className="w-[66%] mt-2">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl text-gray-800 mb-3">Your Account : {username}</h1>
                    <button
                        className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md text-2xl p-1 bg-white mb-3"
                        onClick={handleLogOut}
                    >
                        Logout
                    </button>
                </div>

                {/* Grid of Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {profile_view.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-start border border-gray-200 gap-2 rounded-lg shadow-sm hover:shadow-md p-4 bg-white"
                        >
                            {/* Icon/Image */}
                            <div className="w-[30%] flex items-center justify-center">
                                <img
                                    src={item.img}
                                    alt={item.title}

                                />
                            </div>
                            <div className="w-[70%]">
                                {/* Title */}
                                <h1 className="text-lg font-semibold text-gray-700 mb-0">
                                    {item.title}
                                </h1>
                                {/* Description */}
                                <span className="text-sm text-gray-600">
                                    {item.description}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
