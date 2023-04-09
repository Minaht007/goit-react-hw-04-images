import React, { Component } from 'react';
import { ImmageGallery } from './ImageGallery/ImageGallery';
import { fetchData } from 'components/Fetch/Fetch.jsx';
import { SearchImg } from './Searchbar/Searchbar';
import Buttom from './Button/Button';

export class App extends Component {
  state = {
    images: [],
    searchName: '',
    page: 1,
    loading: false,
    totalHits: null,
  };

  componentDidUpdate(preState) {
    const { searchName, page } = this.state;
    if (preState.searchName !== searchName || preState.page !== page) {
      fetchData(searchName, page).then(data => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          totalHits: data.totalHits,
          loading: false,
        }));
      });
    }
  }
  handlSubmit = qwery => {
    this.setState({
      searchName: qwery,
      images: [],
      page: 1,
      loading: true,
      totalHits: null,
    });
  };
  hadlButtomClick = () => {
    this.setState(prev => ({
      page: prev.page + 1,
      loading: true,
    }));
  };
  render() {
    const { images, totalHits, loading } = this.state;
    return (
      <>
        <SearchImg onSubMit={this.handlSubmit} />
        {loading && <div>loading...</div>}
        <ImmageGallery photos={this.state.images} />
        {images.length > 0 && totalHits > images.length && (
          <Buttom click={this.hadlButtomClick} />
        )}
      </>
    );
  }
}
