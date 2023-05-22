import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  TransactionHistoryTableBody,
  TransactionHistoryTableHead,
  TransactionHistoryTableHeadRow,
  TransactionHistoryTableHeadCellType,
  TransactionHistoryTableHeadCellAmount,
  TransactionHistoryTableHeadCellCurrency,
  TransactionHistoryTableBodyCellType,
  TransactionHistoryTableBodyCellAmount,
  TransactionHistoryTableBodyCellCurrency,
  TransactionHistoryTableBodyRow,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => (
  <TransactionHistoryTable>
    <TransactionHistoryTableHead>
      <TransactionHistoryTableHeadRow>
        <TransactionHistoryTableHeadCellType>
          Type
        </TransactionHistoryTableHeadCellType>
        <TransactionHistoryTableHeadCellAmount>
          Amount
        </TransactionHistoryTableHeadCellAmount>
        <TransactionHistoryTableHeadCellCurrency>
          Currency
        </TransactionHistoryTableHeadCellCurrency>
      </TransactionHistoryTableHeadRow>
    </TransactionHistoryTableHead>

    <TransactionHistoryTableBody>
      {items.map(({ id, type, amount, currency }) => (
        <TransactionHistoryTableBodyRow key={id}>
          <TransactionHistoryTableBodyCellType>
            {type}
          </TransactionHistoryTableBodyCellType>
          <TransactionHistoryTableBodyCellAmount>
            {amount}
          </TransactionHistoryTableBodyCellAmount>
          <TransactionHistoryTableBodyCellCurrency>
            {currency}
          </TransactionHistoryTableBodyCellCurrency>
        </TransactionHistoryTableBodyRow>
      ))}
    </TransactionHistoryTableBody>
  </TransactionHistoryTable>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
