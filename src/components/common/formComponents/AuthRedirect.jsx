import { Link } from "react-router-dom";
import { Text } from "../index";

const AuthRedirect = ({ i18nKey, to }) => {
  return (
    <Text
      tagElement="p"
      className="text-secondary text-center mt-4 text-sm"
      i18nKey={i18nKey}
      components={[ <Link to={to} className="text-accent" /> ]}
    />
  );
};

export default AuthRedirect;
