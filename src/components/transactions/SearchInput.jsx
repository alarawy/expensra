import { Input } from "../common";
import { FaSearch } from "../../assets/icons/icons";
import { useSearchParams } from "react-router-dom";

const SearchInput = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  const handleChange = (e) => {
    const value = e.target.value;

    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    setSearchParams(params);
  };

  return (
    <Input
      type="search"
      value={search}
      onChange={handleChange}
      placeholderKey="transactions.searchPlaceholder"
    >
      <FaSearch className="text-sm" />
    </Input>
  );
};

export default SearchInput;