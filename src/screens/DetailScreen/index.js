import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { Rating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import styles from './styles';

class DetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('data', null).name,
    };
  };

  render() {
    const { navigation } = this.props;
    const data = navigation.getParam('data', null);

    return (
      <SafeAreaView style={styles.container}>
        <Image source={{ uri: data.image_url }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.name}>{data.name}</Text>
          <View style={styles.ratingView}>
            <Rating startingValue={data.rating} imageSize={35} readonly />
            <Text style={styles.review}>{`${data.review_count} reviews`}</Text>
          </View>
          <View style={styles.ratingView}>
            <Text style={styles.price}>{`${data.price} . `}</Text>
            {data.categories.map((item, index) => (
              <Text key={index} style={styles.category}>
                {index < data.categories.length - 1
                  ? `${item.title}, `
                  : item.title}
              </Text>
            ))}
          </View>
          <View style={styles.contactInfoContainer}>
            <View style={styles.contactInfoItem}>
              <Icon
                name="location-pin"
                size={25}
                color="black"
                style={styles.icon}
              />
              <View>
                {data.location.display_address.map((item, index) => (
                  <Text key={index} style={styles.contactInfoLabel}>
                    {item}
                  </Text>
                ))}
              </View>
            </View>
            <View style={styles.contactInfoItem}>
              <Icon name="phone" size={25} color="black" style={styles.icon} />
              <Text style={styles.contactInfoLabel}>{data.display_phone}</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default DetailScreen;
