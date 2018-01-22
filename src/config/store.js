import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'
import { AsyncStorage } from 'react-native'
import reducers from '../reducers'

/*const store = createStore(
    reducers,
    {},
    compose(
        applyMiddleware(thunk),
        autoRehydrate()
    )
)*/
const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)

//persistStore(store, { storage: AsyncStorage, whitelist: [] })

export default store