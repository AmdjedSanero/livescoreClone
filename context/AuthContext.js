import axios from 'axios';
import { createContext, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import async-storage
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/services/authSlice';

const AuthContext = createContext();

const TOKEN_KEY = 'TOKEN_KEY';
export const API_URL = 'http://192.168.1.69:3001';

export function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth);

  useEffect(() => {
    const loadToken = async () => {
      const token = await AsyncStorage.getItem(TOKEN_KEY); // Use AsyncStorage

      console.log('🚀 ~ loadToken ~ token:', token);

      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        dispatch(login({ token }));
      }
    };
    loadToken();
  }, []);

  const onLogin = async (username, type, password) => {
    try {
      console.log(username, type, password);
      const token = await AsyncStorage.getItem('fcmtoken');
      const result = await axios.post(`${API_URL}/auth/login`, {
        username,
        type,
        password,
        registrationToken: token
          ? token
          : 'dFnu-M08TWSlOSp8-VIHo1:APA91bEwjhTckBdifvL-5cthatRVh8U5jKYnmF1OK5uyR1SLoNxzBqXjCivzEO3h1SYJ7Nx_Gol_lHLRJWALtr8Ko45YQYxzKL94tHfTQWZMJTYDbYbmJaqASnhYdAEH9IBajiBxq79F',
      });
      console.log(result.data.token);
      dispatch(login({ token: result.data.token }));

      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${result.data.token}`;

      await AsyncStorage.setItem(TOKEN_KEY, result.data.token); // Use AsyncStorage
      return result;
    } catch (e) {
      console.error(e);
    }
  };

  const onRegister = async values => {
    try {
      console.log(values);
      const result = await axios.post(`${API_URL}/register`, {
        username: values.username,
        password: values.password,
        email: values.email,
        type: values.type,
        firstName: values.firstName,
        lastName: values.lastName,
        phone: values.phone,
        address: values.address,
      });
      console.log(result.data.token);
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${result.data.token}`;
      await AsyncStorage.setItem(TOKEN_KEY, result.data.token); // Use AsyncStorage
      return result;
    } catch (e) {
      console.error(e);
    }
  };

  const onLogout = async () => {
    await AsyncStorage.removeItem(TOKEN_KEY); // Use AsyncStorage
    axios.defaults.headers.common['Authorization'] = '';
    const token = await AsyncStorage.getItem(TOKEN_KEY); // Use AsyncStorage

    console.log('🚀 ~ loadToken ~ token:', token);

    dispatch(logout());
  };

  const value = {
    authState,
    onRegister,
    onLogin,
    onLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
