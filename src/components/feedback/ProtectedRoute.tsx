import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "@store/hooks";

interface ProtectedRouteProps {
  children: React.ReactNode;
  restrictedForAuthenticated?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  restrictedForAuthenticated = false,
}) => {
  const { user } = useAppSelector((state) => state.auth);
  const location = useLocation();

  if (restrictedForAuthenticated && user) {
    return <Navigate to="/dashboard/earn" replace />;
  }

  if (!restrictedForAuthenticated && !user) {
    return (
      <Navigate to="/dashboard/login" state={{ from: location }} replace />
    );
  }

  return children;
};

export default ProtectedRoute;
