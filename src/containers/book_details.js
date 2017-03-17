import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetails extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book</div>
    }
    return(
      <div>{this.props.book.title}</div>
    );
  }
}

function mapStateToprops(state) {
  return {
    book: state.book
  };
}

export default connect(mapStateToprops)(BookDetails);
