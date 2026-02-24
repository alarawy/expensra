import { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { arSA } from "react-day-picker/locale";
import { useTranslation } from "react-i18next";
import { Input } from "./index";
import { useOutsideClick } from "../../hooks";

const DatePickerInput = ({ value, onChange, dateRange = false, error }) => {
  const { i18n } = useTranslation();
  const locale = i18n.language === "ar" ? arSA : undefined;

  const [open, setOpen] = useState(false);
  const ref = useOutsideClick(()=> setOpen(false));

  const mode = dateRange ? "range" : "single";

  const formattedValue = () => {
    if (!value) return "";

    if (!dateRange) {
      return format(value, "dd/MM/yyy", { locale });
    }

    if (value?.from && value?.to) {
      return `${format(value.from, "dd/MM/yyy", { locale })} - ${format(
        value.to,
        "dd/MM/yyy",
        { locale },
      )}`;
    }

    if (value?.from) {
      return format(value.from, "dd/MM/yyy", { locale });
    }

    return "";
  };
  return (
    <div className="relative w-full my-3" ref={ref}>
      {/* Input */}
      <Input
        id="date"
        readOnly
        i18nKey={mode === "range" ? 'dates.dateRange' : 'dates.date'}
        placeholderKey={mode === "range" ? 'dates.fromTo'  : 'dates.dateFormat'}
        value={formattedValue()}
        onClick={() => setOpen(perv => !perv)}
        error={error}
      />

      {/* Calendar */}
      {open && (
        <div className="absolute z-5 mt-2">
          <DayPicker
            mode={mode}
            selected={value}
            onSelect={(date) => {
              onChange(date);
              if (!dateRange || date?.to) {
                if(mode === 'range') return
                setOpen(perv => !perv);
              }
            }}
            locale={locale}
            className="bg-muted text-secondary flex-between w-fit flex-col gap-3 rounded-2xl px-5 py-3 text-sm text-inherit"
            classNames={{
              selected: `${!dateRange && "bg-accent rounded-full"}`,
              today: `${!value && "text-white bg-accent rounded-full"}`,
              day: "p-2",
              day_button: "text-sm  w-5 h-5 font-normal  cursor-pointer",
              range_start: "bg-accent text-white rounded-full",
              range_middle: "bg-primary text-accent",
              range_end: "bg-accent text-white rounded-full",
              chevron: `${i18n.language === "ar" ? "rotate-180" : ""} fill-(--accent)`,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default DatePickerInput;