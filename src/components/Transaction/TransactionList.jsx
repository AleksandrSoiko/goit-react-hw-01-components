import { TransactionItem } from './TransactionItem';
import { Table, Head, Row, TitleHead, Body } from './Transaction.styled';

export const TransactionList = ({ items }) => {
  return (
    <Table>
      <Head>
        <Row>
          <TitleHead>Type</TitleHead>
          <TitleHead>Amount</TitleHead>
          <TitleHead>Currency</TitleHead>
        </Row>
      </Head>
      <Body>
        {items.map(item => {
          return (
            <Row key={item.id}>
              <TransactionItem item={item} />
            </Row>
          );
        })}
      </Body>
    </Table>
  );
};
