import { useTranslation, Trans } from "react-i18next";

const Text = ({
  tagElement = "span",
  i18nKey,
  values,
  components,
  children,
  ...props
}) => {
  const { t } = useTranslation();
  const Tag = tagElement;

  if (components && i18nKey) {
    return (
      <Tag {...props}>
        <Trans i18nKey={i18nKey} values={values} components={components} />
      </Tag>
    );
  }

  if (i18nKey) {
    return <Tag {...props}>{t(i18nKey, values)} {children}</Tag>;
  }

  return <Tag {...props}>{children}</Tag>;
};

export default Text;
