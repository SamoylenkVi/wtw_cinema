
import {makeFakeComments, makeFakeFilm, makeFakeFilms} from '../../utils/mocks';
import {
  filmData,
  initialState,
  fetchFilm,
  fetchSimilarFilms,
  fetchPromoFilm,
  fetchComments,
  fetchAddFilmToFavorite
} from './film-data';

const film = makeFakeFilm();
const similarFilms = makeFakeFilms();
const comments = makeFakeComments();

describe('Reducer: film-data', () => {
  it('without additional parameters should return initial state', () => {
    expect(filmData.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(initialState);
  });

  it('should update film by load film', () => {
    const state = initialState;

    expect(filmData.reducer(state, {type: fetchFilm.fulfilled.type, payload: film}))
      .toEqual(
        {
          ...initialState,
          filmDetail: film,
        }
      );
  });

  it('should update similar films by load films', () => {
    const state = initialState;

    expect(filmData.reducer(state, {type: fetchSimilarFilms.fulfilled.type, payload: similarFilms}))
      .toEqual(
        {
          ...initialState,
          similarFilmDetails: similarFilms,
        }
      );
  });

  it('should update promo film by load film', () => {
    const state = initialState;

    expect(filmData.reducer(state, {type: fetchPromoFilm.fulfilled.type, payload: film}))
      .toEqual(
        {
          ...initialState,
          promoFilm: film,
        }
      );
  });

  it('should update comments by load comments', () => {
    const state = initialState;

    expect(filmData.reducer(state, {type: fetchComments.fulfilled.type, payload: comments}))
      .toEqual(
        {
          ...initialState,
          filmComments: comments,
        }
      );
  });

  it('change status favorite in film', () => {
    const state = {
      ...initialState,
      filmDetail: film,
      promoFilm: film,
    };

    expect(filmData.reducer(state, {type: fetchAddFilmToFavorite.fulfilled.type, payload: film}))
      .toEqual(
        {
          ...initialState,
          filmDetail: film,
          promoFilm: film,
        }
      );
  });
});

