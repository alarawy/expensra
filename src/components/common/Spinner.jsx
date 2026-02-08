import { HashLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="h-full flex-center absolute w-full">
      <HashLoader color="#3990ab" />
    </div>
  );
};

export default Spinner;
