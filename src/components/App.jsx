import { Profile } from './Profile/Profile';
import { Layout } from './Layout/Layout';
import { FriendList } from './FriendList/FriendList';
import { TransactionList } from './Transaction/TransactionList';
import { StatBlock } from './StatisticsList/StatisticList';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transaction from '../data/transactions.json';

export const App = () => {
  return (
    <Layout>
      <Profile user={user} />
      <StatBlock items={data} title="Statistic" />
      <FriendList items={friends} />
      <TransactionList items={transaction} />
    </Layout>
  );
};
