import IncomeActions from "../../income/IncomeActions";
import { ProgressBar } from "../index";

const TransactionsTableRow = ({ data, tableHeader, variant }) => {
  return (
    <>
      {data.map((item, index) => {
        const percentage = Math.min(100, (item.spent / item.limit) * 100);

        return (
          <div
            key={index}
            className="border-bottom flex items-center px-3 py-5"
          >
            {tableHeader.map((header, idx) => {
              if (header === "actions" || header === "status") return null;

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

            {variant === "budget" && <ProgressBar percentage={percentage} />}
            {variant === "income" && <IncomeActions />}
          </div>
        );
      })}
    </>
  );
};

export default TransactionsTableRow;
