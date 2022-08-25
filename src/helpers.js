import axios from './api/axios'
import AuthContext from './context/AuthProvider'
import React, { useRef, useState, useEffect, useContext } from 'react'


export const LogOut = async () => {
  const { setAuth } = useContext(AuthContext);
  const LOGOUT_URL = '/users/sign_out';
  const token = localStorage.token;
  try {
    const response = await axios.delete(
      LOGOUT_URL,
      {
        headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer '+{token}, },
        withCredentials: false,
      }
    );
  } catch (err) {
    if (!err?.response) {
      console.log("no server response");
    } else {
      console.log("registration failed");
    }
  }
  setAuth({ email: '', password: '', token: '', Uid: '' });
  localStorage.token = null;
};

export const CurrentUser = async () => {
  const INFO_URL = `/member/data`;
  const token = localStorage.token;
  try {
    const response = await axios.get(
      INFO_URL,
      {
        headers: {
          'Authorization': 'Bearer '+{token}, 
          'Content-Type': 'application/json',}
      }
    );
  } catch (err) {
    if (!err?.response) {
      console.log("no server response");
    } else {
      console.log("registration failed");
    }
  }
};