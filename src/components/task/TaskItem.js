import {useEffect, useState, useRef} from 'react';
import PlayPauseButton from "./PlayPauseButton";

function TaskItem(props) {
    const {task} = props;
    const {done, billable, provider, title, url, id} = task;

    const [active, setActive] = useState(false);

    const onInitFunction = () => {
        setActive(true);
        console.log('Init counter');
    };
    const onFinishFunction = () => {
        setActive(false);
        console.log('Finisg counter');
    };
    const onTickTimer = (date) => {
        console.log(`tick ${date}`);
    };

    const sidebarContent = done ? (
       <div>
           <small className="text-time">09h 15m</small>
           <small className="text-time">09h 45m</small>
       </div>
    ) : (
        <PlayPauseButton
            _onFinishTimer={onFinishFunction}
            _onInitTimer={onInitFunction}
            _onTickTimer={onTickTimer}
        />
    );

    const classes = ['task-item', billable ? 'billable' : null, done ? 'done' : null, active ? 'active' : null]
        .filter(Boolean)
        .join(' ');


    return (
        <div className={classes}>
            <div className={`icon ${provider}`}>
                <i className={`fab fa-${provider}`}></i>
            </div>
            <div className="task-item--body">
                {title}
                <div className="task-item--body--footer text-xs">
                    <i className="fas fa-wallet mr-2"></i>
                    <a href={url} className="link" target="_blank">
                        <i className="fas fa-external-link-alt mr-2"></i>
                        <span>{id}</span>
                    </a>
                    <span className="timer">
                        <i className="fas fa-hourglass-end mr-2"></i>
                        <span>30m</span>
                    </span>
                </div>
            </div>
            <div className="task-item--body-side">
                {sidebarContent}
            </div>
        </div>
    );
}

export default TaskItem;