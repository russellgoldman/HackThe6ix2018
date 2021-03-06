import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import { NavigationActions } from 'react-navigation';

import { VariableGroup } from '../components';
import { CurrentStatsStyles } from '../styles';
import {
  heartRate,
  shock,
  temp,
  water,
  humidity,
  gas,
} from '../../assets/images';

class CurrentStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '11:52AM',
      date: '12/03/18',
      values: {
        heartRate: '81 BPM',
        shock: 'None',
        temp: '32ºC',
        water: 'Dry',
        humidity: '81',
        gas: 'None',
      },
      variableNames: [
        'Heart Rate',
        'Shock',
        'Temperature',
        'Water Presence',
        'Humidity',
        'Gas Presence',
      ],
    };
  }

  render() {
    const {
      outerContainer,
      currentStatsTextStyle,
      updateInfoContainer,
      lastUpdatedStyle,
      seeMoreStyle,
      statsGroup,
      statsRow,
    } = CurrentStatsStyles;

    return (
      <View style={outerContainer}>
        <Text style={currentStatsTextStyle}>Current Stats</Text>
        <View style={updateInfoContainer}>
          <Text style={lastUpdatedStyle}>
            {`Last updated at ${this.state.time} on ${this.state.date}`}
          </Text>
          <TouchableOpacity onPress={() => {
            var navigate = NavigationActions.navigate({
              routeName: 'Current Stats',
            });
            this.props.navigation.navigate(navigate);
          }}>
            <Text style={seeMoreStyle}>SEE MORE</Text>
          </TouchableOpacity>
        </View>
        <View style={statsGroup}>
          <View style={statsRow}>
            <VariableGroup logo={heartRate} value={this.state.values.heartRate}
              variableName={this.state.variableNames[0]} />
            <VariableGroup logo={shock} value={this.state.values.shock}
              variableName={this.state.variableNames[1]} />
            <VariableGroup logo={temp} value={this.state.values.temp}
              variableName={this.state.variableNames[2]} />
          </View>
          <View style={statsRow}>
            <VariableGroup logo={water} value={this.state.values.water}
              variableName={this.state.variableNames[3]} />
            <VariableGroup logo={humidity} value={this.state.values.humidity}
              variableName={this.state.variableNames[4]} />
            <VariableGroup logo={gas} value={this.state.values.gas}
              variableName={this.state.variableNames[5]} />
          </View>
        </View>
      </View>
    );
  }
}

export default CurrentStats;
