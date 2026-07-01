import { CURRENCIES } from "../constants/currencies.constants";

const formatPrice = (number) => {
    const savedCurrency = localStorage.getItem("currency") || "EGP";
    const lang = localStorage.getItem("i18nextLng") || "en";

    const currencyData = CURRENCIES.find(
        (currency) => currency.id === savedCurrency
    );

    const symbol = currencyData?.symbol?.[lang] || savedCurrency;

    return `${new Intl.NumberFormat(currencyData?.locale || "ar-EG", {
        maximumFractionDigits: 0,
    }).format(number)} ${symbol}`;
};

export default formatPrice;