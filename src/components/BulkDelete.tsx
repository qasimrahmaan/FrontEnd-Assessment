import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import { Task, deleteBulkProps } from "../interfaces/TaskInterface";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const BulkDelete: React.FC<deleteBulkProps> = ({
  tasks,
  addCheckedTask,
  removeCheckedTask,
  deleteCheckedTasks
}) => {

  const handleClick = (isChecked:boolean, task: Task) => {
    isChecked ? (addCheckedTask(task.id)) : (removeCheckedTask(task.id))
  };
  return (
    <Card border="danger" style={{ width: '50rem'}}>
      <Card.Body>
        {!!tasks?.length && <Alert key='danger' variant='danger'>
          Select Tasks you want to delete
        </Alert> }

        <ListGroup>
          {tasks?.length ? (
          tasks?.map((task: Task) => {
          return (
          <Card border="danger" style={{ width: '47rem'}}>
            <Card.Body>
            <InputGroup className="mb-3">
              <InputGroup.Checkbox aria-label="Checkbox for following text input" onChange={(e : any) => handleClick(e.target.checked, task)}/>
              <ListGroup.Item style={{ width: '50%'}}>{task.name}</ListGroup.Item>
            </InputGroup>
            </Card.Body>
           </Card>
          );
        })
      ) : (
            <Card>
      <Card.Body>No Remaining Tasks</Card.Body>
    </Card>

      )}
      
    </ListGroup>
    
    {!!tasks?.length && <Button variant="danger" onClick={()=>deleteCheckedTasks()}>Delete Selected</Button>}
</Card.Body>
    </Card>
  );
};

export default BulkDelete;