import React from 'react';
import Container from './App.styled';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

import user from '../../Profile.json';
import data from '../../Statistics.json';
import friends from '../../friends.json';
import transaction from '../../transactions.json';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics stats={data} />
      <FriendList items={friends} />
      <TransactionHistory items={transaction} />
    </Container>
  );
};
