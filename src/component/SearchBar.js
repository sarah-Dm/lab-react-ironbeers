import React from 'react';

class SearchBar extends React.Component {
  state = { searchContent: '' };

  handleChange = (event) => {
    this.setState({ searchContent: event.target.value });
  };

  render() {
    this.props.searchBeer(this.state.searchContent);

    return (
      <div>
        <form>
          <input
            type="search"
            value={this.state.searchContent}
            name="search"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;
