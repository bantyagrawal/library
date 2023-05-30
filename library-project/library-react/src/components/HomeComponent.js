import React from 'react';
import { useSelector } from 'react-redux';

const HomeComponent = () => {
    const state = useSelector(state => state);
    function handleClearLocalStorage() {
        localStorage.clear();
      }
    return (
        <>
        <h1>Home Component</h1>
        <h1>{state.user.token}</h1>
        <button type='button' onClick={handleClearLocalStorage}>clear storage</button>
        </>
    )
}

export default HomeComponent;