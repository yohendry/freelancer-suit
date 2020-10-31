import logo from './logo.svg';
import './assets/css/style.css';
import Button from './components/common/Button';
import PlayPauseButton from './components/task/PlayPauseButton';
import TaskItem from "./components/task/TaskItem";

function App() {
  const onInitFunction = () => {
    console.log('Init counter');
  };
  const onFinishFunction = () => {
    console.log('Finisg counter');
  };
  const onTickTimer = (date) => {
    console.log(`tick ${date}`);
  };
  const handleClickPromiseResolve = () => {
    console.log('waiting');
    const promise = new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve('resolved');
      }, 1000);
    }).then(console.log);
    return promise;
  }

  const handleClickPromiseReject = () => {
    console.log('waiting');
    const promise = new Promise( (resolve, reject) => {
      setTimeout(() => {
        reject('rejected');
      }, 1000);
    }).catch(console.log);
    return promise;
  }

  return (
    <section className="flex justify-center m-4">
      <div className="w-1/2 mr-2">
        <div className="py-4 text-xl border-b border-gray-500">Typography</div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        <small className="text-time">09h 30m</small>
        <small className="text-time success">09h 30m</small>
      </div>
      <div className="w-1/2">
        <div className="py-4 text-xl border-b border-gray-500">Components</div>
        <ul className="task-list">
          <li className="">
            <div className="task-item done non-billeable">
              <div className="icon trello flex-none">
                <i className="fab fa-trello"></i>
              </div>
              <div className="task-item--body">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                <div className="task-item--body--footer text-xs">
                  <i className="fas fa-wallet mr-2"></i>
                  <a href={"#"} className="link">
                    <i className="fas fa-external-link-alt mr-2"></i>
                    <span>YQYjc1gC</span>
                  </a>
                  <span>
                    <i className="fas fa-hourglass-end mr-2"></i>
                    <span>30m</span>
                  </span>
                </div>
              </div>
              <div className="task-item--body-side flex-none">
                <small className="text-time">09h 15m</small>
                <small className="text-time">09h 45m</small>
              </div>
            </div>
          </li>
          <li>
            <div className="task-item done billeable">
              <div className="icon jira">
                <i className="fab fa-jira"></i>
              </div>
              <div className="task-item--body">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                <div className="task-item--body--footer text-xs">
                  <i className="fas fa-wallet mr-2"></i>
                  <a href={"#"} className="link">
                    <i className="fas fa-external-link-alt mr-2"></i>
                    <span>YOH-420</span>
                  </a>
                  <span className="">
                    <i className="fas fa-hourglass-end mr-2"></i>
                    <span>30m</span>
                  </span>
                </div>
              </div>
              <div className="task-item--body-side">
                <small className="text-time">09h 15m</small>
                <small className="text-time">09h 45m</small>
              </div>
            </div>
          </li>
          <li>
            <div className="task-item active">
              <div className="icon jira">
                <i className="fab fa-jira"></i>
              </div>
              <div className="task-item--body">
                Lorem ipsum dolor sit
                <div className="task-item--body--footer text-xs">
                  <i className="fas fa-wallet mr-2"></i>
                  <a href={"#"} className="link">
                    <i className="fas fa-external-link-alt mr-2"></i>
                    <span>YOH-420</span>
                  </a>
                  <span className="timer">
                    <i className="fas fa-hourglass-end mr-2"></i>
                    <span>30m</span>
                  </span>
                </div>
              </div>
              <div className="task-item--body-side">
                <PlayPauseButton
                    _onFinishTimer={onFinishFunction}
                    _onInitTimer={onInitFunction}
                    _onTickTimer={onTickTimer} />
              </div>
            </div>
          </li>
          <li>
            <div className="task-item billeable">
              <div className="icon trello">
                <i className="fab fa-trello"></i>
              </div>
              <div className="task-item--body">
                Lorem ipsum dolor sit
                <div className="task-item--body--footer text-xs">
                  <i className="fas fa-wallet mr-2"></i>
                  <a href={"#"} className="link" target="_blank">
                    <i className="fas fa-external-link-alt mr-2"></i>
                    <span>YQYjc1gC</span>
                  </a>
                </div>
              </div>
              <div className="task-item--body-side">
                <PlayPauseButton
                    _onFinishTimer={onFinishFunction}
                    _onInitTimer={onInitFunction}
                    _onTickTimer={onTickTimer} />
              </div>
            </div>
          </li>
          <li >
            <div className="task-item disabled">
              <div className="icon trello">
                <i className="fab fa-trello"></i>
              </div>
              <div className="task-item--body">
                Lorem ipsum dolor sit
                <div className="task-item--body--footer text-xs">
                  <i className="fas fa-wallet mr-2"></i>
                  <a href={"#"} className="link" target="_blank">
                    <i className="fas fa-external-link-alt mr-2"></i>
                    <span>YQYjc1gC</span>
                  </a>
                </div>
              </div>
              <div className="task-item--body-side">

              </div>
            </div>
          </li>
          <li>
            <TaskItem task={{id: 'YOH-420', title: 'test title jira', done: false, provider: 'jira', url: '#'}}/>
          </li>
          <li>
            <TaskItem task={{id: 'YQYjc1gC', title: 'test title trello', done: false, provider: 'trello', url: '#'}} />
          </li>
        </ul>


        <div className="panel">
          <div className="panel--title">Can coffee make you a better developer?</div>
          <div className="panel--body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
          <div className="mt-4">
            <Button className="mr-4" type="primary"   disabled={false}>Click me</Button>
            <Button className="mr-4" type="primary"   busy={true}>Click me</Button>
            <Button className="mr-4" type="primary"   disabled={true}>Click me</Button>
          </div>
          <div className="mt-4">
            <Button className="mr-4" type="secondary" _onClick={handleClickPromiseResolve}>Click me</Button>
            <Button className="mr-4" type="secondary" busy={true}>Click me</Button>
            <Button className="mr-4" type="secondary" disabled={true}>Click me</Button>
          </div>
          <div className="mt-4">
            <Button className="mr-4" _onClick={handleClickPromiseReject}>Click me</Button>
            <Button className="mr-4" busy={true}>
              <i className="fas fa-external-link-alt mr-2"></i> Click me
            </Button>
            <Button disabled={true}>
              <i className="fas fa-external-link-alt mr-2"></i> Click me
            </Button>
          </div>
          <div>
            <a href={"#"} className="link">link</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
