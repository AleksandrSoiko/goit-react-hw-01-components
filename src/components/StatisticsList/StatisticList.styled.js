import styled from 'styled-components';

export const Section = styled.section`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
  background-color: lightgrey;
`;

export const StatList = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;
export const ItemContainer = styled.div`
  width: 100%;
`;
export const Title = styled.h2`
  display: block;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`;

export const Item = styled.li`
  text-align: center;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: white;
  display: block;
`;
export const Value = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: white;
`;
