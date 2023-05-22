import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 0 auto 50px;
  padding: 0;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  margin: 30px;
  font-size: 20px;
  color: #212121;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  background-color: rgb(244, 246, 249);
`;

export const Label = styled.span`
  margin-bottom: 10px;
  font-size: 12px;
  color: rgb(244, 246, 249);
`;

export const Percentage = styled.span`
  font-size: 18px;
  color: rgb(244, 246, 249);
`;
