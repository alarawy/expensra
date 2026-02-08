import ExpensraLogo from "../../assets/images/Expensra.png"

const Logo = ({className}) => {
  return (
    <div className={className}>
      <img src={ExpensraLogo} alt="Expensra logo" />
    </div>
  )
}

export default Logo