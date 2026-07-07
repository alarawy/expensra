import { memo } from "react";
import { Text } from "../index";
import { TransactionsTableHeader, TransactionsTableRow } from "./index";
import { getEmptyMessage, TABLE_HEADERS, TABLE_TITLES } from "../../../utils";
import { useSearchParams } from "react-router-dom";
import AddGoalsBtn from "../../goals/AddGoalsBtn";


const TransactionsTable = ({ data, variant }) => {
  const tableHeader = TABLE_HEADERS[variant] || TABLE_HEADERS.expense;
  const i18Key = TABLE_TITLES[variant];

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const type = searchParams.get("type");

  const hasData = data?.length > 0;
  const isSearching = search.trim().length > 0;

  const emptyKey = getEmptyMessage({
  hasData,
  isSearching,
  variant,
  type,
});

  return (
    <div className="overflow-x-auto">
      <div
        className={`${
          hasData ? "min-w-2xl" : ""
        } bg-primary mt-5 rounded-lg p-5 lg:p-10`}
      >
        <div className="flex-between">
          <Text
            tagElement="h4"
            i18nKey={i18Key}
            className="text-accent text-xl font-semibold"
          />

          {variant === "goals" && <AddGoalsBtn />}
        </div>

        {hasData ? (
          <>
            <TransactionsTableHeader tableHeader={tableHeader} />
            <TransactionsTableRow
              data={data}
              tableHeader={tableHeader}
              variant={variant}
            />
          </>
        ) : (
          <Text
            tagElement="h4"
            i18nKey={emptyKey}
            className="text-secondary text-md py-8 text-center md:text-3xl"
          />
        )}
      </div>
    </div>
  );
};

export default memo(TransactionsTable);
