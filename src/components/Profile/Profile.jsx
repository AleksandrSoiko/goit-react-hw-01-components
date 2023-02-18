import PropTypes from 'prop-types';
import {
  Container,
  Description,
  Image,
  Name,
  Tag,
  Location,
  List,
  Item,
  StatText,
  StatValue,
} from './Profile.styled';

export const Profile = ({
  user: {
    username,
    avatar,
    tag,
    location,
    stats: { followers, likes, views },
  },
}) => {
  return (
    <Container>
      <Description>
        <Image alt={username} src={avatar} />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <List>
        <Item>
          <StatText>Followers</StatText>
          <StatValue>{followers}</StatValue>
        </Item>
        <Item>
          <StatText>Views</StatText>
          <StatValue>{views}</StatValue>
        </Item>
        <Item>
          <StatText>Likes</StatText>
          <StatValue>{likes}</StatValue>
        </Item>
      </List>
    </Container>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
