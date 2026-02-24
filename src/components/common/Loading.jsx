import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="h-full flex-center absolute w-full bg-secondary">
      <HashLoader color="#3990ab" />
    </div>
  );
};

export default Loading;
