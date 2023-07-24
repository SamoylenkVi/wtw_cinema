import { Middleware } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { reducer } from '../reducer';
import browserHistory from '../../utils/browserHistory';

type Reducer = ReturnType<typeof reducer>;

export const redirectM: Middleware<unknown, Reducer> =
 (_store) =>
   (next) =>
     (action: PayloadAction<string>) => {
       if (action.type === 'login/redirectToRoute'){
         browserHistory.back();
       }
       return next(action);
     };