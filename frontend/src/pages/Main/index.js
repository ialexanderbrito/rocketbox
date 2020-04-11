import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import logo from '../../assets/logo.svg';
import './styles.css';

function Main() {
  const [newBox, setNewBox] = useState('');
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('boxes', {
      title: newBox,
    });

    history.push(`/box/${response.data._id}`);
  }

  async function handleInputChange(e) {
    setNewBox(e.target.value);
  }

  return (
    <div id="main-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="" />
        <input
          placeholder="Criar um box"
          value={newBox}
          onChange={handleInputChange}
        />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
}

export default Main;
