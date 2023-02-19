import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  padding-top: 15px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid grey;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  justify-content: center;
`;

export const Image = styled.img`
  display: block;
  max-width: 150px;
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: black;
`;

export const Tag = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  color: grey;
`;
export const Location = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 10px;
  color: grey;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0px;
  margin: 0;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.li`
  padding: 5px;
  text-align: center;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 15px;
  width: 100%;
  gap: 5px;
  background: lightgrey;

  border: 1px solid black;
`;

export const StatText = styled.span`
  font-size: 14px;
  color: grey;
`;
export const StatValue = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: black;
`;
/* 



    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
; */
