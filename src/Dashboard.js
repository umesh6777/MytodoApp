import React, { useState } from 'react';
import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap';
import './LogForm.css';
import { RiLogoutCircleRLine } from 'react-icons/ri';

const Dashboard = ({ username }) => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTaskList([...taskList, { task: task, checked: false }]);
      setTask('');
    }
  };

  const handleToggleCheck = (index) => {
    const updatedTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTaskList);
  };

  const Logout = () => {
    window.location.reload();
  };

  return (
    <Container fluid className='bg'>
      <Row className=' mb-3'>
        <Col className="text-center offset-4">
          <h1 className=' heading'>MY TODOLIST</h1>
        </Col>
        <Col className="text-end mt-2">
          <Button className='btn btn-danger' onClick={Logout}>
            <RiLogoutCircleRLine />
          </Button>
        </Col>
      </Row>
      <Row className='mb-4'>
        <Col className='offset-4'>
          <Form.Control
            type="text"
            placeholder="Add a task"
            value={task}
            onChange={handleTaskChange}
          />
        </Col>
        <Col>
          <Button className='btn btn-success' onClick={handleAddTask}>Add</Button>
        </Col>
      </Row>
      {taskList.length > 0 ? (
        <Table striped bordered>
          <thead>
            <tr className='text-white text-center'>
              <th>Task</th>
              <th>Check</th>
            </tr>
          </thead>
          <tbody>
            {taskList.map((task, index) => (
              <tr className='bg-dark' key={index}>
                <td className='h5 text-bold text-center text-white'>{task.task}</td>
                <td className='text-end'>
                  <Form.Check
                    type="checkbox"
                    checked={task.checked}
                    onChange={() => handleToggleCheck(index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p className='text-center text-white mt-5'>NO TASK IS THERE YOU CAN ADD FROM TOP</p>
      )}
    </Container>
  );
};

export default Dashboard;
