import IncomeActions from "../../income/IncomeActions";

const TransactionsTableRow = ({ data, tableHeader, variant }) => {
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="border-bottom flex px-3 py-5">
          {tableHeader.map((header, idx) => {
            if (header === "actions") return null;
            return (
              <p
                key={idx}
                className={`text-primary flex-1 ${
                  header === "type" || header === "source"
                    ? "text-accent"
                    : "text-start"
                }`}
              >
                {item[header]}
              </p>
            );
          })}
          {variant === "income" && <IncomeActions />}
        </div>
      ))}
    </>
  );
};

export default TransactionsTableRow;