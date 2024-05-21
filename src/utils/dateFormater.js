const numDateFormater = (date) => {
  return date ? new Date(date * 1000).toLocaleDateString() : "";
};

// Long date formater
const stringDateFormater = (date) => {
  return date
    ? new Date(date * 1000).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";
};

export { numDateFormater, stringDateFormater };
