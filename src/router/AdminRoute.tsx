import Loading from "@/components/PublicComponents/Loading";
import { useAuth } from "@/components/customHooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
    const { userRoles, loading } = useAuth();
    if (loading) {
        return <div className="w-full h-screen flex justify-center items-center">
            <div className="w-32 h-32">
                <Loading></Loading>
            </div>
        </div>;
    }

    if (userRoles === null) {
        return <Navigate to="/login" replace />;
    }

    if (userRoles != "heartory.inc@gmail.com") {
        return <Navigate to="/403" replace />;
    }
    return <Outlet />;
};

export default AdminRoute;
