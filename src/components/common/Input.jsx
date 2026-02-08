const Input = ({
  inputName,
  labelName,
  type = "text",
  register,
  rule ={required:"This field is required"},
  error,
  children,
}) => {
  return (
    <div className="flex flex-col relative mt-5" >
      <label htmlFor={inputName} className="text-secondary pl-1 font-semibold">{labelName}</label>
      <div className="input">
        <span className="text-secondary">{children}</span>
        <input
          type={type}
          id={inputName}
          {...register(inputName, rule)}
          placeholder={labelName}
          className="border-0 outline-0 w-full"
        />
      </div>
      <p className="tex-xs text-red-500 absolute right-1 -bottom-6">{error?.message}</p>
    </div>
  );
};

export default Input;