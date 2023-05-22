import PropTypes from 'prop-types';
import { FriendList } from './FriendList.styled';
import FriendListItem from '../FriendItem/FriendsItem';

const FriendsList = ({ items }) => {
  return (
    <FriendList>
      {items.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          name={name}
          avatar={avatar}
        />
      ))}
    </FriendList>
  );
};

FriendListItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendsList;
