import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Platform, ImageBackground, ActivityIndicator } from 'react-native';
import SearchInput from './src/components/SearchInput';
import getImage from './src/utils/ImagesForWeather';
import { fetchCoordinates, fetchWeather } from './src/utils/api';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,  
      location: '',
      temperature: 0,
      weather: '',
    }
  }

  componentDidMount() {
    this.handleUpdateLocation('San Francisco');
  }

  handleUpdateLocation = city => {
    if (!city) return;
    
    this.setState({ loading: true}, async () => {
      try {
        const coordinates = await fetchCoordinates(city);

        const { weather, temperature } = await fetchWeather(coordinates.lat, coordinates.lon);

        this.setState({
          loading: false,
          error: false,
          location: coordinates.name,
          weather,
          temperature,
        });
      } catch(e) {
        this.setState({ loading: false, error: true });
      }
    });
  };

  render() {
    const { loading, error, location, weather, temperature } = this.state;
console.log(weather);
    return (
      <View style={styles.container}>
        <ImageBackground
          source={getImage(weather)}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
          <View style={styles.detailContainer}>
            <ActivityIndicator animating={loading} color='white' size='large' />

            {!loading && (
              <View>
                {error && (
                  <Text style={[styles.smallText, styles.textStyle]}>
                    Could not load weather, please try a different city.
                  </Text>
                )}

                {!error && (
                  <View>
                    <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
                    <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
                    <Text style={[styles.largeText, styles.textStyle]}>{`${Math.round(temperature)}°`}</Text>
                  </View>
                )}

                <SearchInput 
                  placeholder="Search any city" 
                  onSubmit={this.handleUpdateLocation}
                />
              </View>
            )}
          </View>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: { 
    flex: 1,
    paddingTop: 200,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
  },
  textStyle: {
    textAlign: "center",
    fontFamily: Platform.OS === 'is' ? 'AvenirNext-Regular' : 'Roboto'
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
});
