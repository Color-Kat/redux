import './style.css';
import { increment, decrement, async_increment, change_theme } from "./redux/actions";
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {rootReducer} from './redux/rootReducer';

const addBtn = document.querySelector('#add');
const subBtn = document.querySelector('#sub');
const asyncBtn = document.querySelector('#async');
const themeBtn = document.querySelector('#theme');
const counter = document.querySelector('#counter');

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

addBtn.addEventListener('click', () => {
    store.dispatch(increment());
});
subBtn.addEventListener('click', () => {
    store.dispatch(decrement());
});
asyncBtn.addEventListener('click', () => {
    store.dispatch(async_increment());
});

store.dispatch({type: '__INIT__'});

themeBtn.addEventListener('click', () => {
//    document.body.classList.toggle('dark');
    store.dispatch(change_theme());
});

store.subscribe(()=>{
    let state = store.getState();

    counter.textContent = state.counter;
    document.body.className = store.getState().theme.value;

    [addBtn, subBtn, asyncBtn, themeBtn].forEach(btn => {
        btn.disabled = state.theme.disabled;
    });
});