import { Navigate } from "react-router-dom";
import { useGetCurrentUser } from "../hooks/auth/auth.hooks";
import { Loading } from "../components/common";

const ProtectApp = ({ children }) => {
  const { data: currentUser, isPending } = useGetCurrentUser();

  if (isPending) return <Loading />;

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectApp;
