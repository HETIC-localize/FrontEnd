import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {    
    const loggedIn = localStorage.getItem("tokenID");
    
    if (!loggedIn) return <Navigate to="/login" />
    return children 
}

export default ProtectedRoute
