import PropTypes from 'prop-types';
import { Status, Avatar, Name, Item } from '../FriendList/FriendList.styled';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <Item>
    <Status isOnline={isOnline} />
    <Avatar src={avatar} alt={name}></Avatar>
    <Name>{name}</Name>
  </Item>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
