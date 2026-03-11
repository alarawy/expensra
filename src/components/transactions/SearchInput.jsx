import { Input } from "../common"
import { FaSearch  } from "../../assets/icons/icons"

const SearchInput = () => {
  return (
    <Input type="search" placeholderKey="transactions.searchPlaceholder" >
        <FaSearch className="text-sm"/>
    </Input>
  )
}

export default SearchInput