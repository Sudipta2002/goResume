import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 

import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './redux/reducers/rootReducer';

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import thunk from 'redux-thunk';
import { reduxFirestore,getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider,getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
const firebaseConfig = {
  apiKey: "AIzaSyB6UmIai7jPs0lcm_GhAWrHRdgUitATfRM",
  authDomain: "resumego-2914f.firebaseapp.com",
  projectId: "resumego-2914f",
  storageBucket: "resumego-2914f.appspot.com",
  messagingSenderId: "801141464607",
  appId: "1:801141464607:web:2885d93f8b8b3e65be3f2a"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();
const reduxStore= createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),reduxFirestore(firebase)));

ReactDOM.render(

    <BrowserRouter>
    <Provider store={reduxStore}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={firebaseConfig}
      dispatch={reduxStore.dispatch}
      createFirestoreInstance={createFirestoreInstance}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>
  
    </BrowserRouter>
,
  document.getElementById('root')
);