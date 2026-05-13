const RADIAN = Math.PI / 180;

const RenderCustomizedLabel = ({
    cx = 0,
    cy = 0,
    midAngle = 0,
    innerRadius = 0,
    outerRadius = 0,
    percent = 0,
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.7;

    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="#fff"
            textAnchor="middle"
            dominantBaseline="middle"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default RenderCustomizedLabel;