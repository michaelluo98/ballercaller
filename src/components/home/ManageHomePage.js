import React from 'react';
import SearchForm from './searchform/SearchForm';
import GameBox from './gamebox/GameBox';

function ManageHomePage (props) {
  return (
    <div>
      <GameBox />
      <SearchForm />
    </div>
  )
}

export default ManageHomePage;
