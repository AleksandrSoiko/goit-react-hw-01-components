import styled from 'styled-components';

export const Section = styled.section`
  margin-left: auto;
  margin-right: auto;
`;

export const List = styled.ul`
  list-style: none;
  gap: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Item = styled.li`
  display: flex;
  width: 300px;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 5px;
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 20px;
  margin-left: 20px;
`;

export const Avatar = styled.img`
  width: 48px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-right: auto;
  margin-left: auto;
`;
