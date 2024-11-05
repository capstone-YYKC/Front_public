
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import React, { useState } from "react";
import axios from 'axios'


const Login = () => {
  const navigate = useNavigate();

  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
  const URL = `${PROXY}/signin`;

  const [formData, setFormData] = useState({
    email: '',
    password: '',

  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,  
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post(URL, formData); //서버에 데이터 전송
      console.log('Sending data to server', formData); //데이터 확인
      console.log(response);

      if(response.data.code == 200){
        console.log('Login successful');
        localStorage.setItem("userToken", response.data.result.token);
        const userToken = localStorage.getItem("userToken");
        console.log(userToken);
        navigate('/main'); //메인 페이지로 이동
        
      } else {
        console.log('Login failed');
      }

    } catch (error){
      console.error('Error submitting form: ', error);
    }
  }

  return (
    <div className={styles.login}>
      <img className={styles.gomgom2Icon} alt="" src="/gomgom2.png" />
      <img className={styles.gomgomIcon} alt="" src="/gomgom.gif" />
      <div className={styles.loginChild} />
      <div className={styles.loginItem} />
      <div className={styles.loginInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.div}>일기 친구,</div>
      <form onSubmit={handleSubmit}>
        <input 
          name = "email"
          className={styles.IDblank}
          type="text"
          value={formData.email}
          onChange={handleChange}
        />
        <input 
          name="password"
          className={styles.PWblank}
          type="password"
          value={formData.password}
          onChange={handleChange}
          //{...register('password')}
        />
        <button type = "submit" className={styles.SubmitButton}>
          <img
            className={styles.vectorIcon}
            alt=""
            src="/vector.svg"
          />
        </button>
      </form>
      <div className={styles.id}>ID</div>
      <div className={styles.pw}>PW</div>
    </div>
  );
};

export default Login;
