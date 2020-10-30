import logo from './logo.svg';
import './assets/css/style.css';

function App() {
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
                <div className="icon stop">
                  <i className="far fa-stop-circle"></i>
                </div>
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
                <div className="icon play ">
                  <i className="far fa-play-circle hover:text-green-700"></i>
                </div>
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
        </ul>


        <div className="panel">
          <div className="panel--title">Can coffee make you a better developer?</div>
          <div className="panel--body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
          <div>
            <button className="btn btn-primary mr-4">Click me</button>
            <button className="btn btn-secondary mr-4">Click me</button>
            <button className="btn mr-4">Click me</button>
            <a href={"#"} className="link">link</a>
          </div>
          <div className="mt-4">
            <button className="btn btn-primary mr-4" disabled>Click me</button>
            <button className="btn btn-secondary mr-4" disabled>Click me</button>
            <button className="btn mr-4" disabled>Click me</button>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
