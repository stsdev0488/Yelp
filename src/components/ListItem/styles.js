import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 10,
    borderColor: '#585858',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
  content: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  review: {
    color: '#585858',
    fontSize: 15,
    marginTop: 5,
  },
  closeIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
});
