// Formateur de date en format numérique standard
const numDateFormatter = (date) => {
  return date ? new Date(date * 1000).toLocaleDateString() : "";
};

// Formateur de date en format long
const stringDateFormatter = (date) => {
  if (!date) return "";
  date = new Date(date * 1000);
  const options = { weekday: "long", day: "numeric", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

export { numDateFormatter, stringDateFormatter };
