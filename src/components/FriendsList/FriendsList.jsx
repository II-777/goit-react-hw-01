import './FriendsList.css';
import { FriendsListItem } from './FriendsListItem';

export const FriendsList = ({ friends }) => (
  <div className="friend-wrapper">
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendsListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
    ))}
  </div>
);