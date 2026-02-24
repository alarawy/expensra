import { useNavigate } from "react-router-dom";
import {Loading} from "../components/common";
import { useGetCurrentUser } from "../hooks/auth/auth.hooks"

const ProtectApp = ({children}) => {
  const navigate = useNavigate();
  const {data: currentUser, isPending} = useGetCurrentUser();
  if(isPending) return <Loading />
  // if(!currentUser) return navigate("/login", {replace: true})
  return children
}

export default ProtectApp