import { Middleware } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { rootReducer } from '../root-reducer';
import browserHistory from '../../utils/browserHistory';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
 (_store) =>
   (next) =>
     (action: PayloadAction<string>) => {
       if (action.type === 'redirectToRoute'){
         browserHistory.back();
       }
       return next(action);
     };
