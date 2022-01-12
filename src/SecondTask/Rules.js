import { KeyValueArrayForm } from "./KeyValueArrayForm";
import { ValueArrayForm } from "./ValueArrayForm";

export const Rules = [
  { name: "include", fn: include, form: KeyValueArrayForm },
  { name: "exclude", fn: exclude, form: KeyValueArrayForm },
  { name: "sort_by", fn: sort_by, form: ValueArrayForm },
];
function include(items, options) {
  return items.filter((item) =>
    options.every((option) => {
      const [[key, value]] = Object.entries(option);
      return item[key] === value;
    })
  );
}
function exclude(items, options) {
  return items.filter(
    (item) =>
      !options.some((option) => {
        const [[key, value]] = Object.entries(option);
        return item[key] === value;
      })
  );
}
function sort_by(items, options) {
  return options.reduce(
    (sortedItems, option) => {
      return sortedItems.sort((a, b) => {
        if (a[option] > b[option]) return 1;
        if (a[option] < b[option]) return -1;

        return 0;
      });
    },
    [...items]
  );
}
