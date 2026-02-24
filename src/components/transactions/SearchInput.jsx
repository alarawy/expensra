import { Input } from "../common"
import { FaSearch  } from "../../assets/icons/icons"

const SearchInput = () => {
  return (
    <Input type="search" placeholderKey="transactions.searchPlaceholder" className="flex-row-reverse bg-primary m-0 " >
        <FaSearch className="text-sm"/>
    </Input>
  )
}

export default SearchInput