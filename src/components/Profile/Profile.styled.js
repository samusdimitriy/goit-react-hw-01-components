import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  display: block;
  align-items: center;
  margin: 50px;
  width: 250px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 50%;
  border-radius: 50%;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Name = styled.p`
  margin-bottom: 5px;
  font-weight: 700;
  font-size: 18px;
  color: #212121;
`;

export const Tag = styled.p`
  margin-bottom: 5px;
  font-size: 14px;
  color: #727272;
`;

export const Location = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
  color: #727272;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  padding: 0;
  margin: 0;
  list-style: none;
  border-top: 1px solid #e4e4e4;
  background-color: rgb(244, 246, 249);
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  border-right: 1px solid #e4e4e4;

  &:last-child {
    border-right: none;
  }
`;

export const Label = styled.span`
  margin-bottom: 5px;
  font-size: 12px;
  color: #727272;
`;

export const Quantity = styled.span`
  font-size: 14px;
  color: #212121;
`;
