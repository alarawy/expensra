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

  // حالة JSX داخل الترجمة
  if (components && i18nKey) {
    return (
      <Tag {...props}>
        <Trans i18nKey={i18nKey} values={values} components={components} />
      </Tag>
    );
  }

  // ترجمة عادية
  if (i18nKey) {
    return <Tag {...props}>{t(i18nKey, values)}</Tag>;
  }

  // fallback عادي
  return <Tag {...props}>{children}</Tag>;
};

export default Text;
