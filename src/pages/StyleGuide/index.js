import React, {forwardRef, useRef} from 'react';
import Button from '../../components/common/Button/';
import Task from '../../components/Task/';
import '../../assets/css/style.css';
function StyleGuide() {

  const taskRefsList = useRef([]);

  const _onTimerStart = (id) => {
    const foundRef = taskRefsList.current.find(item => item.id === id);
    if(!foundRef) return;
    taskRefsList.current //list of refs
      .filter((item) => item.id !== id) //get the items not active
      .forEach(item => item.ref.stopTimer()); //perform stop
  }
  const handleClickPromiseResolve = () => {
    console.log('waiting');
    return new Promise( (resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 5000000);
    }).then(console.log);
  }

  const handleClickPromiseReject = () => {
    console.log('waiting');
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        reject('rejected');
      }, 5000000);
    }).catch(console.log);
  }

  const setTaskRef = (ref, id) => {
    const foundRef = taskRefsList.current.find(item => item.id === id);
    if (foundRef) return;
    taskRefsList.current.push({id, ref});
  };

  const taskList = [
    {id: 'YOH-420', title: 'test title jira', done: false, provider: 'jira', url: '#', elapsed: 123123},
    {id: 'YQYjc1gC', title: 'test title trello', done: false, provider: 'trello', url: '#'}
  ];

  return (
    <div className="flex justify-center flex-wrap">
      <section className="w-full lg:w-1/2 px-2">
        <div className="py-4 text-xl border-b border-gray-500">Typography</div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        <small className="text-time">09h 30m</small>
        <small className="text-time success">09h 30m</small>
      </section>
      <section className="w-full lg:w-1/2 mt-2 lg:mt-0 px-2">
        <div className="py-4 text-xl border-b border-gray-500">Components</div>
        <ul className="task-list">
          {taskList.map(task => (
            <li key={task.id}>
              <Task
                task={task}
                _onTimerStart={_onTimerStart}
                ref={(ref) => {setTaskRef(ref, task.id)}}
              />
            </li>
          ))}
        </ul>


        <div className="panel">
          <div className="panel--title">Can coffee make you a better developer?</div>
          <div className="panel--body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
          <div className="mt-4 flex space-x-4">
            <Button className="" type="primary"   disabled={false}>Click me</Button>
            <Button className="" type="primary"   busy={true}>Click me</Button>
            <Button className="" type="primary"   disabled={true}>Click me</Button>
          </div>
          <div className="mt-4 flex space-x-4">
            <Button className="" type="secondary" _onClick={handleClickPromiseResolve}>Click me</Button>
            <Button className="" type="secondary" busy={true}>Click me</Button>
            <Button className="" type="secondary" disabled={true}>Click me</Button>
          </div>
          <div className="mt-4 flex space-x-4">
            <Button className="" _onClick={handleClickPromiseReject}>Click me</Button>
            <Button className="" busy={true}>
              <i className="fas fa-external-link-alt mr-2" /> Click me
            </Button>
            <Button disabled={true}>
              <i className="fas fa-external-link-alt mr-2" /> Click me
            </Button>
          </div>
          <div className="mt-4">
            <a href={"www.google.com"} className="link">link</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default forwardRef(StyleGuide);
