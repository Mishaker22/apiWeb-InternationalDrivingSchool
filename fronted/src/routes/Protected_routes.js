import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loadUser } from "../actions/user_actions";

const ProtectedRoutes = ({ children, isAdmin }) => {
    const {
        isAuthenticated = false, loading = true, user
    } = useSelector((state) => state.auth)
    const dispatch = useDispatch();

    useEffect(() => {
        if (!user) {
            dispatch(loadUser())
        }
    }, [isAuthenticated, loading])
    if (loading) {
        return <div className='d-flex justify-content-center align-items-center m-5'>
            <h2 className='quantify text-white'> Loading...</h2>
        </div>
    }
    if (loading===false && isAuthenticated) {
        if (isAdmin===true & user.role!=="admin") {
            return<Navigate to={"/"}></Navigate>
        }
        return children
    }else{
        return <Navigate to={"/login"}></Navigate>
    }
}
 export default ProtectedRoutes;