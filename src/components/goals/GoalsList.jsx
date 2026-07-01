const GoalsList = ({ goals = [], handleSelect }) => {
  return (
    <ul className="category-list">
      {goals.map((goal, index) => (
        <li
          key={index}
          onClick={() => handleSelect(goal)}
          className="text-secondary flex cursor-pointer p-2 hover:bg-(--bg-secondary)"
        >
          {goal.goal_name}
        </li>
      ))}
    </ul>
  );
};

export default GoalsList;
