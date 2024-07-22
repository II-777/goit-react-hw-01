import user from '../../src/data/user.json';
import friends from '../../src/data/friends.json';
import transactions from '../../src/data/transactions.json';
import { Profile } from './Profile/Profile';
import { FriendsList } from './FriendsList/FriendsList';
import { TransactionsList } from './TransactionsList/TransactionsList';
import './Profile/Profile.css';
import './FriendsList/FriendsList.css';
import './TransactionsList/TransactionsList.css';

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendsList friends={friends} />
      <TransactionsList transactions={transactions} />
    </>
  )
}

export default App
