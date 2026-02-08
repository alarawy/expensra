
const Overlay = ({onClick}) => {
  return (
    <div onClick={onClick} className="fixed inset-0 z-10 backdrop-blur-[2px]"></div>
  )
}

export default Overlay