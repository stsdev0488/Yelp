import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  autoCompleteContainer: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 1,
  },
  listContainer: {
    flex: 1,
    paddingTop: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 1,
    width: '100%',
    paddingTop: 10,
  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
