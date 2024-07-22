import user from '../../src/data/user.json';
import friends from '../../src/data/friends.json';
import transactions from '../../src/data/transactions.json';
import Profile from './Profile/Profile';
import FriendsList from './FriendsList/FriendsList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import './Profile/Profile.css';
import './FriendsList/FriendsList.css';
import './TransactionHistory/TransactionHistory.css';

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
      <TransactionHistory transactions={transactions} />
    </>
  )
}

export default App
