module.exports.daysOfMonth = (month, year) => {
  let date = new Date(year, month, 0);
  return date.getDate();
};

module.exports.initialDateOfMonth = (month, year) => {
  return new Date(year, month, 1).toISOString().split("T")[0];
};

module.exports.finalDateOfMonth = (month, year) => {
  return new Date(year, month, this.daysOfMonth(month, year))
    .toISOString()
    .split("T")[0];
};
