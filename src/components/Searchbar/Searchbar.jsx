import { Component } from 'react';
import Style from '../Style/Style.module.css';
export class SearchImg extends Component {
  state = {
    inputSearch: '',
  };
  handlInputChange = evt => {
    this.setState({ inputSearch: evt.currentTarget.value });
  };
  handlFormSubmit = evt => {
    evt.preventDefault();
    this.props.onSubMit(this.state.inputSearch);
  };
  render() {
    return (
      <header className={Style.Searchbar}>
        <form className={Style.SearchForm} onSubmit={this.handlFormSubmit}>
          <button type="submit" className={Style.SearchForm_button}>
            <span className={Style.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={Style.SearchForm_input}
            type="text"
            placeholder=""
            onChange={this.handlInputChange}
            value={this.state.inputSearch}
          />
        </form>
      </header>
    );
  }
}
