'use client'
import store from '@/store/store';
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const persistStoreInstance  = persistStore(store)
const ClientProvider = ({children}:{children:ReactNode}) => {
  return (
    <div>
     <Provider store={store}>
     <PersistGate loading={null}persistor={persistStoreInstance }>
           {children}
    </PersistGate>
     </Provider>
    </div>
  )
}

export default ClientProvider
