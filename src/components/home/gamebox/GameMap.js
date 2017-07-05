import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Map from './GoogleMap';

const mapStyle = {
    height: 490,
    width: 550,
    marginLeft: 40,
 	  marginTop: '10',
    textAlign: 'center',
    display: 'absolute',

};


//function gameRow(game, index) {
//return <div key={index}>{game.name}</div>;
//}

class GameMap extends Component {

  render() {
    return (
      <div>
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBXkW7lS0WW1hllJ_lbRgD2kcuDqeReTXU"
          loadingElement={
            <div style={{ height: `100%` }}>
            </div>
          }
          containerElement={<Paper style={mapStyle} zDepth={2} circle={true} />}
          mapElement={<div style={{ height: `100%`, borderRadius: '50%' }}></div>}
        />
      </div>
    )
  }
}

// <Paper style={mapStyle} zDepth={2} circle={true} />
//   <div>
//     <h1>Games</h1>
//     {console.log(this.props.games)}
//     {this.props.games && this.props.games.map(gameRow)}
//   </div>
//
//
// </Paper>


export default GameMap;
