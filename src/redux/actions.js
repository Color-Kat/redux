import { INCREMENT, DECREMENT, CHANGE_THEME, DISABLE_BTNS, ENABLE_BTNS } from "./redux_types";

export function increment() {
    return {
        type: INCREMENT
    }
}
export function decrement() {
    return {
        type: DECREMENT
    }
}
export function async_increment() {
    return function (dispatch) {
        dispatch(disable_btns());
        setTimeout(() => {
            dispatch(increment());
            dispatch(enable_btns());
        }, 1000);
    }
}

export function change_theme() {
    return {
        type: CHANGE_THEME
    }
}

export function disable_btns() {
    return {
        type: DISABLE_BTNS
    }
}

export function enable_btns() {
    return {
        type: ENABLE_BTNS
    }
}