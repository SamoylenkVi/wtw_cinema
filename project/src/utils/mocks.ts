import { faker } from '@faker-js/faker';
import { Film } from '../types/film';
import { Comment } from '../types/comment';


export const makeFakeFilm = (): Film => ({
  id: faker.number.int(),
  name: faker.music.songName(),
  posterImage: faker.image.url(),
  previewImage: faker.image.url(),
  backgroundImage: faker.image.url(),
  backgroundColor: faker.color.hsl({ format: 'css' }),
  videoLink: faker.image.url(),
  previewVideoLink: faker.image.url(),
  description: faker.lorem.text(),
  rating: faker.number.int(),
  scoresCount: faker.number.int(),
  director: faker.person.fullName(),
  starring: new Array(4).fill(null).map(() => faker.person.fullName()),
  runTime: faker.number.int(),
  genre: faker.music.genre(),
  released: Number(faker.date.birthdate({ mode: 'year' })),
  isFavorite: faker.datatype.boolean(),
} as unknown as Film);


export const makeFakeFilms = ():Film[] => new Array(7).fill(null).map(() => makeFakeFilm());

export const makeFakeComment = (): Comment => ({
  id: faker.number.int(),
  user: {
    id: faker.number.int(),
    name: faker.person.fullName(),
  },
  rating: faker.number.int(),
  comment: faker.lorem.text(),
  date: faker.date.anytime(),
});

export const makeFakeComments = ():Comment[] => new Array(3).fill(null).map(() => makeFakeComment());
