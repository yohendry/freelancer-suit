import {useEffect, useState, useRef} from 'react';

function PlayPauseButton(props) {

    const {_onClick, _onInitTimer, _onFinishTimer, _onTickTimer} = props;
    const intervalTime = 1000;
    const [busy, setBusy] = useState(false);

    const interval = useRef();
    
    useEffect(() => {
        return () => {clearIntervalIfExist()};
    }, [])
    
    const clearIntervalIfExist = () => {
        interval && interval.current && clearInterval(interval.current);
    };

    const checkFunctionExist = (fn) => {
        return fn && typeof fn === 'function';
    };
    
    const handleClickWrapper = () => {
        const newBusy = !busy;
        setBusy(newBusy);
        
        if (newBusy && checkFunctionExist(_onInitTimer)) {
           _onInitTimer(new Date());
           if(checkFunctionExist(_onTickTimer)) {
               interval.current = setInterval(() => {
                   _onTickTimer(new Date());
               }, intervalTime);
           }
        } else if(!newBusy && checkFunctionExist(_onFinishTimer)) {
            _onFinishTimer(new Date());
            clearIntervalIfExist();
        }
    };

    const stopIcon = <i className="far fa-stop-circle"></i>;
    const playIcon = <i className="far fa-play-circle"></i>;
    const className = `icon-play-stop rounded-full ${busy ? 'stop' : 'play'}`;
    const buttonTitle = busy ? 'Stop timer' : 'Start timer';
    return (
        <button
            aria-abel={buttonTitle}
            title={buttonTitle}
            className={className}
            onClick={handleClickWrapper}
        >
            {busy ? stopIcon : playIcon}
        </button>
    );
}

export default PlayPauseButton;