import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import Style from '../Style/Style.module.css';

export class ImmageGallery extends Component {
  render() {
    const { photos } = this.props;
    return (
      <ul className={Style.ImageGallery}>
        {photos.map(photo => (
          <ImageGalleryItem
            photo={photo}
            key={photo.id}
            largeImageURL={photo.largeImageURL}
          />
        ))}
      </ul>
    );
  }
}
