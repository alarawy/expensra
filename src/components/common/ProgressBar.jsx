const ProgressBar = ({ percentage }) => {
  const getColor = () => {
    if (percentage >= 100) return "bg-red-500";
    if (percentage >= 80) return "bg-orange-400";
    if (percentage >= 50) return "bg-yellow-400";
    return "bg-green-500";
  };

  return (
    <div className="bg-secondary mt-2 h-2 overflow-hidden rounded-full flex-1">
      <span
        className={`flex h-3 rounded-full transition-all duration-500 ${getColor()}`}
        style={{ width: `${Math.min(percentage, 100)}%` }}
      />
    </div>
  );
};

export default ProgressBar;