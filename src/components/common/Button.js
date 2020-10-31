import {useState} from 'react';

function Button(props) {
    const {type, disabled, className, _onClick} = props;

    const [busy, setBusy] = useState(false);

    let variantClass = null,
        spinClass = 'text-gray-600';

    switch (type) {
        case 'primary':
            variantClass = 'btn-primary';
            spinClass = 'text-white';
            break;
        case 'secondary':
            variantClass = 'btn-secondary';
            spinClass = 'text-blue-600';
            break;
    }

    const defaultFunction = () => {console.log('click')};
    const handleClickWrapper = () => {
        const result = (typeof _onClick === 'function') ? _onClick() : defaultFunction();

        if (!(result && 'then' in result && (typeof result.then === 'function'))) { //result is not a promise
            return;
        }

        setBusy(true);
        result
            .then(() => setBusy(false))
            .catch(() => setBusy(false));
    };

    const spin = (
        <div className="btn-busy">
            <svg className={`animate-spin mr-2 text-white w-5 h-5 ${spinClass} inline`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </div>
    );

    const classes = ['btn', variantClass, className, busy ? 'busy' : null]
        .filter(Boolean) //filter falsy values
        .join(' ');
    
    return (
        <button
            className={classes}
            disabled={disabled}
            onClick={handleClickWrapper}
        >
            {busy && spin} {props.children}
        </button>
    );
}

export default Button;