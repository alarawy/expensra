import { Text } from "../index";

const TransactionsTableHeader = ({ tableHeader }) => {
  return (
    <div className="bg-accent mt-8 flex rounded-lg p-3 text-white">
      {tableHeader.map((header, index) => {
        const alignment = header === "actions" ? "text-end" : "text-start";
        return (
          <Text
            key={index}
            tagElement="p"
            i18nKey={`transactions.${header}`}
            className={`text-md flex-1 font-semibold md:text-xl ${alignment}`}
          />
        );
      })}
    </div>
  );
};

export default TransactionsTableHeader;
