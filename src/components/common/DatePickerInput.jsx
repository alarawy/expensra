import { useState, memo } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { arSA } from "react-day-picker/locale";
import { useTranslation } from "react-i18next";
import { Input } from "./index";
import { useOutsideClick } from "../../hooks";

const DatePickerInput = ({i18nKey="dates.date", disableNavigation = true, value, onChange, error }) => {
  const { i18n } = useTranslation();
  const locale = i18n.language === "ar" ? arSA : undefined;

  const [open, setOpen] = useState(false);
  const ref = useOutsideClick(() => setOpen(false));

  const formattedValue = value ? format(value, "dd/MM/yyyy") : "";
  return (
    <div className="relative my-3 w-full" ref={ref}>
      <Input
        id="transaction_date"
        readOnly
        i18nKey={i18nKey}
        placeholderKey={"dates.dateFormat"}
        value={formattedValue}
        onClick={() => setOpen((prev) => !prev)}
        error={error}
      />

      {/* Calendar */}
      {open && (
        <div className="absolute z-50 top-1">
          <DayPicker
            mode="single"
            selected={value}
            disableNavigation={disableNavigation}
            onSelect={(selected) => {
              onChange(selected);
              setOpen(false);
            }}
            locale={locale}
            startMonth={new Date()}
            className="bg-muted text-secondary flex-between w-fit flex-col gap-3 rounded-2xl px-5 py-3 text-sm"
            classNames={{
              selected: "bg-accent rounded-full",
              today: `${!value && "text-white bg-accent rounded-full"}`,
              day: "p-2",
              day_button: "text-sm w-5 h-5 font-normal cursor-pointer",
              range_start: "bg-accent text-white rounded-full",
              range_middle: "bg-primary text-accent",
              range_end: "bg-accent text-white rounded-full",
              chevron: `${
                i18n.language === "ar" ? "rotate-180" : ""
              } fill-(--accent)`,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default memo(DatePickerInput);
