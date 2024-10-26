import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from "./AuthContect"; 

const PrivateRoutes = () => {
    const { currentUser } = useAuth(); // Use currentUser instead of user
    const navigate = useNavigate();

    useEffect(() => {
        console.log(currentUser); // Log the current user
        if (!currentUser) {
            navigate("/login");
        }
    }, [currentUser, navigate]); // Add navigate to dependencies

    return currentUser ? <Outlet /> : null; // Only render Outlet if currentUser is defined
}

export default PrivateRoutes;