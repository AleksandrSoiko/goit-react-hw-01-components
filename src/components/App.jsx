import { Profile } from './Profile/Profile';
import { Layout } from './Layout/Layout';
import { StatBlock } from './Statistic/StatisticList';
import { FriendList } from './FriendList/FriendList';
import { TransactionList } from './Transaction/TransactionList';
import user from '../data/user.json';
import items from '../data/data.json';
import friends from '../data/friends.json';
import transaction from '../data/transactions.json';

export const App = () => {
  return (
    <Layout>
      <Profile user={user} />
      {/* <StatBlock items={items} title={'Statistic'} /> */}
      <FriendList items={friends} />
      <TransactionList items={transaction} />
    </Layout>
  );
};
