import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

 const useAxiosSecure = () => {
  const { user } = useContext(AuthContext);

  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_server
  });

  axiosInstance.interceptors.request.use(config => {
  if (user?.accessToken) {
    config.headers.authorization = `Bearer ${user.accessToken}`;
  }
  return config;
});

  return axiosInstance;
};
export default useAxiosSecure;
