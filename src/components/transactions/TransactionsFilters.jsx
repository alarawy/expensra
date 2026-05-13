import { SearchInput, SelectType} from "./index"

const TransactionsFilters = () => {
  return (
    <div className="flex-between m-0 h-12 gap-4">
        <SearchInput />
        <SelectType />
    </div>
  )
}

export default TransactionsFilters