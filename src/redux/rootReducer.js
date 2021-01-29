import { combineReducers } from "redux";
import { INCREMENT, DECREMENT, ASYNC_INCREMENT, CHANGE_THEME, DISABLE_BTNS, ENABLE_BTNS } from "./redux_types";


function counterReducer (state = 0, action) {
    if (action.type === INCREMENT) {
        return state + 1;
    }else if (action.type === DECREMENT) {
        return state - 1;
    }else if (action.type === ASYNC_INCREMENT) {
        return state + 1;
    }

    return state;
}

const initialThemeState = {
    value: 'light',
    disabled: false
}

function themeReducer (state = initialThemeState, action) {
    switch (action.type) {
        case CHANGE_THEME: 
            return {...state, value: (state.value == 'light' ? 'dark' : 'light')};
        case DISABLE_BTNS: 
            return {...state, disabled: true};
        case ENABLE_BTNS: 
            return {...state, disabled: false};
        default: return state;
    }
}

// function breakReducer (state = false, action) {
//     switch (action.type) {
//         case CHANGE_THEME: 
//             return state;
//         default: return state;
//     }
// }

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
    // break: breakReducer
})