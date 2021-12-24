import { APIS } from '~/constants';

export interface IFlimList {
  count: number;
  next: any;
  previous: any;
  results: TFilms[];
}

export type TFilms = {
  title: string;
  ['episode_id']: number;
  ['opening_crawl']: string;
  director: string;
  producer: string;
  ['release_date']: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

export async function getFilms() {
  const films: IFlimList = await (await fetch(APIS.FILMS)).json();

  return films;
}
