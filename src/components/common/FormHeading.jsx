import { Logo } from "./index";

const FormHeading = ({text}) => {
  return (
    <div className="relative text-center w-full mb-5">
      <Logo className='w-30 m-auto' />
      <h2 className="text-primary text-xl font-bold md:text-2xl/9 absolute bottom-0 w-full ">
        {text} to Expensra!
      </h2>
    </div>
  );
};

export default FormHeading;
