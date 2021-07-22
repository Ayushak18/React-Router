import React from 'react';
import { Link } from 'react-router-dom';

class Article extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Link to="/articles">
          <h3>Back to articles</h3>
        </Link>
        <p>Slug of the article is = {this.props.match.params.slug}</p>
      </div>
    );
  }
}

export default Article;
