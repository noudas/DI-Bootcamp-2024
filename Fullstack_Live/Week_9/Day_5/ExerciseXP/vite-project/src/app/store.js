import {configureStore, combineReducers} from `@reduxjs/toolkit`;
import bookReducer from '../BookInventory/state/slice';


const appReducer = combineReducers({
    bookReducer
});

const store = configureStore({
    reducer: appReducer
});

export default store;