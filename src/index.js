import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetails';

const App = ()=>{
  return (
    <div className="ui container comments">
      <CommentDetails author="Silvio" timeAgo="Todat at 8:00pm" content="Hola" avatar={faker.image.avatar()}/>
      <CommentDetails author="Enrique" timeAgo="Todat at 10:00pm" content="Nice blog post!" avatar={faker.image.avatar()} />
      <CommentDetails author="Marina" timeAgo="Yesterday at 6:00pm" content="Hola" avatar={faker.image.avatar()}/>
      <CommentDetails author="Jose" timeAgo="Todat at 9:00pm" content="Hola" avatar={faker.image.avatar()}/>
    </div>
  );
}

ReactDOM.render( 
  <App />,
  document.getElementById('root')
);

