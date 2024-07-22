export const FriendsListItem = ({ avatar, name, isOnline }) => (
  <div className="friend">
    <img src={avatar} alt={name} className="friend-avatar" />
    <div className="friend-info">
      <p className="friend-name">{name}</p>
      <p className={`friend-status ${isOnline ? 'online' : 'offline'}`}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  </div>
);
