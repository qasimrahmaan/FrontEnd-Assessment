import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import { Task, Props } from "../interfaces/TaskInterface";
import Alert from 'react-bootstrap/Alert';


const TaskList: React.FC<Props>= ({tasks}) => {
  return (
    <Card border="info" style={{ width: '50rem'}}>
      <Card.Body>
        {!!tasks?.length && <Alert key='info' variant='info'>
          List of all Tasks
        </Alert>}
        
    <ListGroup>
      {tasks?.length ? (
          tasks?.map((task: Task) => {
          return (
            <Card border="info" style={{ width: '47rem'}}>
            <Card.Body>
               <InputGroup className="mb-3" key={task.id}>
        <ListGroup.Item style={{ width: '50%'}}>{task.name}</ListGroup.Item>
      </InputGroup>
            </Card.Body>
           </Card>
          );
        })
      ) : (
            <Card>
      <Card.Body>No Tasks Added</Card.Body>
    </Card>

      )}
      
    </ListGroup>
    </Card.Body>
    </Card>
  );
};

export default TaskList;
