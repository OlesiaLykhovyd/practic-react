import PropTypes from 'prop-types';
import { FilmListItem } from 'components/FilmListItem/FilmListItem';
import css from './FilmList.module.css';

export const FilmList = ({ films, toggleWatchedFilm, openModal }) => {
  return (
    <ul className={css.list}>
      {films.map(({ img, id, title, watched }) => (
        <li className={css.item} key={id}>
          <FilmListItem
            img={img}
            title={title}
            id={id}
            watched={watched}
            toggleWatchedFilm={toggleWatchedFilm}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
};

FilmList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      watched: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteFilm: PropTypes.func.isRequired,
  toggleWatchedFilm: PropTypes.func.isRequired,
};
