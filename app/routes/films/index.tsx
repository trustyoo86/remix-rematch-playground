import { useLoaderData } from 'remix';
import { getFilms } from '~/loaders/films';
import type { IFlimList } from '~/loaders/films';

export const loader = () => {
  return getFilms();
};

export default function Films() {
  const films = useLoaderData<IFlimList>();
  console.log('films ===>', films);

  return (
    <div>
      {
        films.results.map((item, idx) => <li key={idx}>{item.title}</li>)
      }
      Films
    </div>
  );
}