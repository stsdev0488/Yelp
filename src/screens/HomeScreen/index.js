import React, { Component } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { connect } from 'react-redux';
import Autocomplete from 'react-native-autocomplete-input';
import ListItem from '../../components/ListItem';
import {
  fetchRestaurantData,
  removeRestaurantItem,
  setRestaurantDataLoading,
} from '../../actions/restaurant';
import styles from './styles';

class HomeScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  state = {
    query: '',
  };

  componentDidMount() {
    const { fetchRestaurantData, setRestaurantDataLoading } = this.props;
    setRestaurantDataLoading(true);
    fetchRestaurantData({
      location: 'newyork',
      categories: 'restaurants',
    });
  }

  handleItemClose = id => {
    const { removeRestaurantItem } = this.props;
    removeRestaurantItem(id);
  };

  findRestaurant = query => {
    if (query === '') {
      return [];
    }

    const { restaurantData } = this.props;
    const regex = new RegExp(`${query.trim()}`, 'i');
    return restaurantData.filter(item => item.name.search(regex) >= 0);
  };

  render() {
    const { restaurantData, restaurantDataLoading, navigation } = this.props;
    const { query } = this.state;
    const filterList = this.findRestaurant(query);

    return (
      <SafeAreaView style={styles.container}>
        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.autoCompleteContainer}
          defaultValue={query}
          onChangeText={text => this.setState({ query: text })}
          data={
            filterList.length === 1 && query === filterList[0].name
              ? []
              : filterList
          }
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => this.setState({ query: item.name })}>
              <Text style={{ color: 'black', fontSize: 20 }}>{item.name}</Text>
            </TouchableOpacity>
          )}
          inputContainerStyle={{
            borderColor: 'transparent',
            borderWidth: 0,
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: '#e85a4b',
          }}
          style={{
            backgroundColor: 'white',
            borderColor: 'transparent',
            borderRadius: 20,
            fontSize: 20,
            paddingVertical: 5,
            paddingHorizontal: 20,
          }}
        />
        <View style={styles.listContainer}>
          {restaurantDataLoading ? (
            <ActivityIndicator size="large" />
          ) : (
            <FlatList
              data={query === '' ? restaurantData : filterList}
              renderItem={({ item, index }) => (
                <ListItem
                  data={item}
                  navigation={navigation}
                  onClose={this.handleItemClose}
                />
              )}
              keyExtractor={item => item.id}
              style={styles.list}
            />
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  restaurantData: state.restaurant.restaurantData,
  restaurantDataLoading: state.restaurant.restaurantDataLoading,
});

const mapDispatchToProps = {
  fetchRestaurantData,
  removeRestaurantItem,
  setRestaurantDataLoading,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
