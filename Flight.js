import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class Flight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }
  renderFlight() {
    if(this.props.currentMessage.flight){

      const flight  = this.props.currentMessage.flight;

      return(
        <TouchableOpacity >
        <View style={styles.container}>
          <View style={styles.top} >
            <Text style={styles.topText}>{flight.message}</Text>
          </View>
          <View style={styles.bottom} >
            <View style={styles.bottomLeft} >
              <Text style={styles.date}>{flight.date}</Text>
              <Text style={styles.dest}>{flight.dest}</Text>
              <Text style={styles.stop}>{flight.stop}</Text>
            </View>
            <View style={styles.bottomRight} >
              <Text style={styles.subTotal}>{flight.subTotal}</Text>
              <Text style={styles.total}>{flight.total}</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
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
    flexDirection: 'column', borderRadius: 15, borderRadius:4
  },
  top: {
    width: '100%', backgroundColor: 'white', padding:5, flexDirection: 'row'
  },
  topText:{
    width: '100%',textAlign: 'left', fontSize: 14
  },
  bottom:{
    width: '100%', flexDirection: 'row'
  },
  bottomLeft:{
    width: '70%', backgroundColor: 'black', padding:5, color: 'white', textAlign: 'left'
  },
  bottomRight:{
    width: '30%', backgroundColor: '#00E597', padding:5, color: 'black',justifyContent: 'center',textAlign: 'center'
  },
  date:{
    width: '100%', fontSize: 12, color: 'white'
  },
  dest:{
    width: '100%', fontSize: 14, color: 'white'
  },
  stop:{
    width: '100%', fontSize: 12, color: '#ffffff50'
  },
  subTotal:{
    paddingBottom:5, textAlign: 'center'
  },
  total:{
    paddingTop:5, fontSize: 15, fontWeight: 'bold', textAlign: 'center'
  }
});

Flight.defaultProps = {
  currentMessage: {},
};

Flight.propTypes = {
  currentMessage: PropTypes.object,
};
