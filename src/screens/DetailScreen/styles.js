import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH } from '../../constants/dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: SCREEN_WIDTH,
    height: 300,
    resizeMode: 'cover',
  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  content: {
    padding: 15,
  },
  name: {
    fontSize: 30,
    marginBottom: 10,
  },
  review: {
    fontSize: 20,
    color: '#585858',
    marginLeft: 10,
  },
  price: {
    fontSize: 20,
    color: '#585858',
  },
  category: {
    fontSize: 20,
    color: '#27a2df',
  },
  contactInfoContainer: {
    marginTop: 25,
  },
  contactInfoItem: {
    flexDirection: 'row',
    marginVertical: 3,
  },
  contactInfoLabel: {
    color: '#585858',
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
  },
});
