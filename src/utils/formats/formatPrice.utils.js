import { CURRENCIES } from "../constants/currencies.constants";

export const formatPrice = (number, lang) => {
    const savedCurrency = localStorage.getItem("currency") || "EGP";

    const currencyData = CURRENCIES.find(
        (currency) => currency.id === savedCurrency
    );

    const symbol = currencyData?.symbol?.[lang] || savedCurrency;

    return `${new Intl.NumberFormat(currencyData?.locale || "ar-EG", {
        maximumFractionDigits: 0,
    }).format(number)} ${symbol}`;
};

