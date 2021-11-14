import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';
const App = ()=>{
  return (
    <div className="container ui comments">
      <ApprovalCard>
        <CommentDetails author="Silvio" timeAgo="Todat at 8:00pm" content="Hola" avatar={faker.image.avatar()}/>
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetails author="Enrique" timeAgo="Todat at 10:00pm" content="Nice blog post!" avatar={faker.image.avatar()} />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails author="Marina" timeAgo="Yesterday at 6:00pm" content="Hola" avatar={faker.image.avatar()}/>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails author="Jose" timeAgo="Todat at 9:00pm" content="Hola" avatar={faker.image.avatar()}/>
      </ApprovalCard>
    </div>
  );
}

ReactDOM.render( 
  <App />,
  document.getElementById('root')
);

