const dateUtils = require("../tools/date_utils");
const DebtModel = require("../models/debt");
const CreditModel = require("../models/credit");

module.exports.getData = async filters => {
  try {
    let initialDate = dateUtils.initialDateOfMonth(filters.month, filters.year);
    let finalDate = dateUtils.finalDateOfMonth(filters.month, filters.year);

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
