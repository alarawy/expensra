import { Logo, Text } from "../index";

const FormHeading = ({text}) => {
  return (
    <div className="text-center w-full pb-5 mb-5 border-bottom">
      <Logo className='w-25 md:w-30 m-auto' />
      <Text className="text-primary text-lg font-bold md:text-2xl/9" i18nKey={text} />
    </div>
  );
};

export default FormHeading;
