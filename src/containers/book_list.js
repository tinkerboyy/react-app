import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return(
        <li onClick={() => this.props.selectBook(book)}
        className="list-group-item"
        key={book.title}>{book.title}</li>
      );
    });
  }
  render() {
    return(
      <ul className="list-group">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToprops(state) {
  return {
    books: state.books
  };
}

function mapDispatcherToProps(dispatch) {

  return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToprops, mapDispatcherToProps)(BookList);
