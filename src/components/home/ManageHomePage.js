import React from 'react';
import SearchForm from './searchform/SearchForm';
import GameBox from './gamebox/GameBox';
import Calendar from './tabs/ManageCalendarPage';

function ManageHomePage (props) {
  return (
    <div>
      <GameBox />
      <SearchForm />
      <Calendar />
    </div>
  )
}

export default ManageHomePage;
