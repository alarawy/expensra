
const CustomLegend = ({ payload }) => {
  const total = payload.reduce(
    (sum, item) => sum + item.payload.value,
    0,
  );

  return (
    <ul className="space-y-2">
      {payload.map((entry, index) => {
        const percentage = ((entry.payload.value / total) * 100).toFixed(1);
        return (
          <li key={index} className="flex-between gap-3 text-sm text-secondary">
            
            <div className="flex-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span>{entry.value}</span>
            </div>

            <span>{percentage}%</span>
          </li>
        );
      })}
    </ul>
  );
};

export default CustomLegend;
