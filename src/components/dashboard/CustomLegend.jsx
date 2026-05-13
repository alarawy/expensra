const CustomLegend = ({ payload }) => {
  const total = payload.reduce((sum, item) => sum + item.payload.total, 0);

  const sortedPayload = [...payload].sort(
    (a, b) => b.payload.total - a.payload.total,
  );

  return (
    <ul className="space-y-2">
      {sortedPayload.map((entry, index) => {
        const percentage = ((entry.payload.total / total) * 100).toFixed(1);

        return (
          <li key={index} className="flex-between text-secondary gap-3 text-sm">
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
