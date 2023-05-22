import styled from '@emotion/styled';

export const FriendList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 0 auto;
  padding: 0;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  background-color: #fff;
  &:not(:last-child) {
    border-bottom: 1px solid #e4e4e4;
  }
`;

export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  margin: 0 10px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10%;
  margin-right: 10px;
  background-color: #fff;
  border: 1px solid #e4e4e4;
  padding: 5px;
`;

export const Name = styled.p`
  margin: 0;
  font-size: 18px;
  color: #212121;
`;
