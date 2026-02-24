import { SearchInput, SelectType} from "./index"

const TransactionsFilters = ({value, onChange}) => {
  return (
    <div className="flex-between m-0 mt-10 h-12 gap-4">
        <SearchInput />
        <SelectType value={value} onChange={onChange}/>
    </div>
  )
}

export default TransactionsFilters