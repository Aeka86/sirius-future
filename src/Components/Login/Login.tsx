import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/authSlice';
import './Login.css'
import icons from '../../calendarIcons'


const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    
    dispatch(login(email));
  };

  return (
    <div className="login">
<img src={icons.images} alt="Logo" className="logo"/>
      <h2>Вход в Sirius Future</h2>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
       <div className="remember-me">
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          id='rememberMe'
        />
        <label>Запомнить меня</label>
        </div>
      <button onClick={handleLogin}>Войти</button>
      <div className="login-links">
        <a href="#" className="forgot-password">Я забыл пароль</a>
        <a href="#" className="coach-login">Войти как тренер</a>
      </div>
      <div className="register-section">
        <span>Нет аккаунта?</span>
        <a href="#">Зарегистрироваться</a>
      </div>
      <div className="language-selector">
        <span className="selected-lang">RU</span>
       
        <span>en</span>
      </div>
    </div>
  
  );
};

export default Login;
