import { MdDownloading } from 'react-icons/md';
import css from './Loader.module.css';

function Loader() {
  return (
    <div className={css.wrapper}>
      <MdDownloading className={css.loader} />
    </div>
  );
}

export default Loader;
