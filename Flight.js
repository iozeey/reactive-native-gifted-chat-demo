import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Flight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }
  renderFlight() {

    if(this.props.flight){
      const flight  = this.props.flight;

      return(
        <View style={styles.container}>
          <View style={styles.top} >
            <Text style={{width: '100%'}}>{flight.message}</Text>
          </View>
          <View style={styles.bottom} >
            <View style={styles.bottomLeft} >
              <Text style={{width: '100%', color: 'white'}}>{flight.date}</Text>
              <Text style={{width: '100%', color: 'white'}}>{flight.dest}</Text>
              <Text style={{width: '100%', color: 'white'}}>{flight.stop}</Text>
            </View>
            <View style={styles.bottomRight} >
              <Text style={{width: '100%', color: 'white'}}>{flight.total}</Text>
              <Text style={{width: '100%', color: 'white'}}>{flight.subTotal}</Text>
            </View>
          </View>
        </View>
      );
    }

    return null;
  }

  render() {
    return (this.renderFlight());
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 15,
    height: 20
  },
  top: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  bottom:{
    width: '100%',
    backgroundColor: 'green',
    flexDirection: 'row'
  },
  bottomLeft:{
    width: '70%',
    backgroundColor: 'black',
    padding:5
  },
  bottomRight:{
    width: '30%',
    backgroundColor: 'green',
    padding:5
  }
});

Flight.defaultProps = {
  flight: {},
};

Flight.propTypes = {
  flight: PropTypes.object,
};
