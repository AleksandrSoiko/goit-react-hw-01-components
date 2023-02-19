import PropTypes from 'prop-types';
import { Status, Avatar, Name } from './FriendList.styled';

export const FriendItem = ({ item }) => {
  return (
    <>
      <Status
        style={{
          backgroundColor: item.isOnline ? 'green' : 'red',
        }}
      />
      <Avatar alt={item.name} src={item.avatar} />
      <Name>{item.name}</Name>
    </>
  );
};

FriendItem.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
