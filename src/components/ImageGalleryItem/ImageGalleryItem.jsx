import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

function ImageGalleryItem({ description, smallImage, largeImage, openModal }) {
  return (
    <li className={css.item} onClick={openModal}>
      <div className={css.thumb}>
        <img
          className={css.galleryImg}
          src={smallImage}
          alt={description}
          data-large={largeImage}
        />
      </div>
    </li>
  );
}

ImageGalleryItem.prototype = {
  description: PropTypes.string,
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
