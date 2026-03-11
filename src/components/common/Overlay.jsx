const Overlay = ({ onClick, children }) => {
  return (
    <div
      onClick={onClick}
      className={`fixed inset-0 ${children ? "z-30" : "z-10"} backdrop-blur-[2px]`}
    >
      {children}
    </div>
  );
};

export default Overlay;
