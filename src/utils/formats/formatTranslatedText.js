 const formatTranslatedText = (
  value,
  translationKey,
  t,
  i18n
) => {
  if (!value || typeof value !== "string") {
    return "-";
  }

  const key = `${translationKey}.${value.toLowerCase()}`;

  return i18n.exists(key)
    ? t(key)
    : value.charAt(0).toUpperCase() +
        value.slice(1);
};
export default formatTranslatedText