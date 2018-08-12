const DebtModel = require("../models/debt");
const CreditModel = require("../models/credit");

module.exports.getData = async filters => {
  //{ month: 6, year: 2018}
  try {
    let initialDate = new Date(filters.year, filters.month, 1)
      .toISOString()
      .split("T")[0];

    let finalDate = new Date(
      filters.year,
      filters.month,
      daysOfMonth(filters.month, filters.year)
    )
      .toISOString()
      .split("T")[0];

    let query = {
      date: { $gte: initialDate, $lte: finalDate }
    };

    const debts = await DebtModel.find(query);
    const credits = await CreditModel.find(query);

    const totalDebts =
      debts.length > 0
        ? debts
            .map(item => item.value)
            .reduce((total, currentValue) => total + currentValue)
        : 0;

    const totalCredits =
      credits.length > 0
        ? credits
            .map(item => item.value)
            .reduce((total, currentValue) => total + currentValue)
        : 0;

    return { totalDebts, totalCredits };
  } catch (error) {
    throw error;
  }
};

function daysOfMonth(month, year) {
  let date = new Date(year, month, 0);
  return date.getDate();
}
