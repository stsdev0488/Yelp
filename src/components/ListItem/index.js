import React, { Component } from 'react';
import {
  Image,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import { Rating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

class ListItem extends Component {
  render() {
    const { data, navigation, onClose } = this.props;

    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Detail', { data })}>
        <View style={styles.container}>
          <Image source={{ uri: data.image_url }} style={styles.image} />
          <View style={styles.content}>
            <Text style={styles.name}>{data.name}</Text>
            <Rating startingValue={data.rating} imageSize={25} readonly />
            <Text style={styles.review}>{data.review_count}</Text>
          </View>
          <TouchableOpacity
            style={styles.closeIcon}
            onPress={() => onClose(data.id)}>
            <Icon name="close" color="black" size={25} />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default ListItem;
