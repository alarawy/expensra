const getCurrentTime = (date = new Date(), locale = "en") => {
  return new Intl.DateTimeFormat(locale, {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true
    // hour12: locale.startsWith("en") // الإنجليزي 12 ساعة
  })
    .format(date)
    .replace(/[،,]/, " -");
}


export default getCurrentTime