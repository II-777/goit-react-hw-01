import './Profile.css';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className="profile-wrapper">
      <div className="description">
        <img className="avatar" src={avatar} alt="User avatar" />
        <p className="username">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className="stats-item">
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className="stats-item">
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className="stats-item">
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};