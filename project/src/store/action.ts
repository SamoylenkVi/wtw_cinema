import {createAction} from '@reduxjs/toolkit';
import {Film} from '../types/film';

export const addFilms = createAction<Film[], 'films/addFilms'>('films/addFilms');
