import React from 'react';
import { Link } from 'react-router-dom';

let data = [
  {
    title: 'How to handle state in React. The missing FAQ.',
    author: 'Osmel Mora',
    slug: 'handle-state-in-react',
  },
  {
    title: 'You might not need React Router',
    author: 'Konstantin Tarkus',
    slug: 'no-need-to-use-react-router',
  },
  {
    title: 'Mixins Considered Harmful',
    author: 'Dan Abramov',
    slug: 'mixins-considered-harmful',
  },
  {
    title: 'React Design Principles',
    author: 'Dan Abramov',
    slug: 'react-design-principles',
  },
  {
    title: "Don't use .bind() when passing props",
    author: 'Dave Ceddia',
    slug: 'don-use-bind-when-passing-props',
  },
];

class Articles extends React.Component {
  render() {
    return (
      <div>
        {data.map((article) => {
          return (
            <div>
              <Link to={`/articles/${article.slug}`}>
                <h1>{article.title}</h1>
              </Link>
              <p> {article.author}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Articles;
