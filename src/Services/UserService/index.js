import {AsyncStorage} from 'react-native';
import {client} from '../../App';
import gql from 'graphql-tag';

let changeListeners = [];
let user = null;

const storageUserKey = '@shoubotenken:user';

const getUser = () => user;

const setUser = (user1) => {
  user = user1;
  changeListeners.forEach((l) => l(user));
};

const addListener = (object) => {
  if (changeListeners.every((item) => item !== object)) {
    changeListeners.push(object);
  }
};

const removeListener = (object) => {
  changeListeners = changeListeners.filter((item) => item !== object);
};

const fetchInfo = async () => {
  const result = await client.query({
    query: gql`
      {
        me {
          id
          email
        }
      }
    `
  })

  if (result.data.me) {
    userInfo.setUser({...{}, ...userInfo.getUser(), ...result.data.me});
  }
}

const saveInfo = async () => {
  AsyncStorage.setItem(storageUserKey, JSON.stringify(userInfo.getUser()));
};

const loadInfo = async () => {
  const dataString = await AsyncStorage.getItem(storageUserKey);
  if (dataString !== null) {
    userInfo.setUser({...{}, ...userInfo.getUser(), ...JSON.parse(dataString)});
  } else {
    userInfo.setUser({...{}, ...userInfo.getUser()})
  }
};

const logout = async () => {
  await AsyncStorage.removeItem(storageUserKey);
  userInfo.setUser({
    device_token: user.device_token,
  });
};

const userInfo = {
  getUser,
  setUser,
  addListener,
  removeListener,
  saveInfo,
  loadInfo,
  logout,
  fetchInfo,
};
export default userInfo;