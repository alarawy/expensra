import { useState } from "react";
import { useTranslation } from "react-i18next";

const DateRangeToggle = ({ value, onChange }) => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(value || "30d");

  const handleSelect = (range) => {
    setSelected(range);
    if (onChange) onChange(range);
  };

  const options = ["30d", "90d"];

  return (
    <ul
      role="tablist"
      className="flex bg-primary rounded-lg"
    >
      {options.map((range) => (
        <li
          key={range}
          role="tab"
          aria-selected={selected === range}
          tabIndex={0}
          className={`cursor-pointer px-3 py-2 rounded-lg transition-colors duration-200 ease-in-out ${
            selected === range
              ? "bg-accent text-primary"
              : "text-secondary"
          }`}
          onClick={() => handleSelect(range)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleSelect(range);
          }}
        >
          {range === "30d" ? `${t('ranges.30Days')}` : `${t('ranges.90Days')}`}
        </li>
      ))}
    </ul>
  );
};

export default DateRangeToggle;
