import { Link } from "react-router-dom"

const AuthRedirect = ({text, to, linkText}) => {
  return (
    <p className="text-secondary text-sm mt-4">{text} have an account? <span className="text-accent"><Link to={to}>{linkText}</Link></span> </p>
  )
}

export default AuthRedirect