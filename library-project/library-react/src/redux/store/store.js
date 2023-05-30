import {createStore, applyMiddleware, combineReducers} from 'redux';
import { userRouter } from '../user/userRouter';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { bookRouter } from '../book/bookRouter';
import { adminRouter } from '../admin/adminReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user','admin'],
}
 
const rootRouter = combineReducers({
    user: userRouter,
    book: bookRouter,
    admin: adminRouter
})
const persistedReducer = persistReducer(persistConfig, rootRouter);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
