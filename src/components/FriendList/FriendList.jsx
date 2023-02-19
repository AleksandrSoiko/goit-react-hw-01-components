import { FriendItem } from './FriendItem';
import { Section, List, Item } from './FriendList.styled';

export const FriendList = ({ items }) => {
  return (
    <Section>
      <List>
        {items.map(item => {
          return (
            <Item key={item.id}>
              <FriendItem item={item} />
            </Item>
          );
        })}
      </List>
    </Section>
  );
};
