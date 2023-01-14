import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from "react-router-dom";
import { CreateTaskProps } from "../interfaces/TaskInterface";
import { v4 } from "uuid";


const CreateTask: React.FC<CreateTaskProps> = ({setTasks}) => {
  const [name, setName] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isError && name?.length) {
      setIsError(false);
    }
  }, [isError, name]);

  const onCreateTask = () => {
    if (name?.length) {
      const id = v4();
      setTasks({ id, name });
      navigate("/list-tasks");
    } else {
      setIsError(true);
    }
  };
  return (
    <Card border="success" style={{ width: '30rem'}}>
      <Card.Body>
        <Alert key='success' variant='success'>
          Create new Tasks
        </Alert>
    <InputGroup size='sm'>
        <Form.Control
          placeholder="Add the name of the task"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button variant="success" onClick={()=>onCreateTask()}>Add Task</Button>
      </InputGroup>
      </Card.Body>
    </Card>
  );
};

export default CreateTask;