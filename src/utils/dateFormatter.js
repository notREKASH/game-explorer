// Date formatter functions in numeric format
const numDateFormatter = (date) => {
  return date ? new Date(date * 1000).toLocaleDateString() : "";
};

// Date formatter functions in string format
const stringDateFormatter = (date) => {
  if (!date) return "";
  date = new Date(date * 1000);
  const options = { weekday: "long", day: "numeric", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

export { numDateFormatter, stringDateFormatter };
