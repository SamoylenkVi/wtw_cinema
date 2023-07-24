import {createAction} from '@reduxjs/toolkit';
import { AuthorizationStatusType } from '../constants';


export const requireAuthorization = createAction<AuthorizationStatusType>('user/requireAuthorization');

export const redirectToRoute = createAction('redirectToRoute');

