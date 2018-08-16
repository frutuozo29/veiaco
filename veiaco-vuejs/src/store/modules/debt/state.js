export default {
  fields: [
    {
      key: 'name',
      sortable: true
    },
    {
      key: 'date',
      sortable: true
    },
    {
      key: 'value',
      sortable: true
    },
    {
      key: 'payed',
      sortable: true
    },
    {
      key: 'operations'
    }
  ],
  pagination: {
    page: 1,
    perPage: 5,
    totalRows: 0
  },
  debts: [],
  debtSelected: {}
}
