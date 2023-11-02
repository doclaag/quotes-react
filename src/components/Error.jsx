import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const Error = ({ message }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(false);
        }, 3000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return isVisible ? (
        <div className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-lg'>
            <p>{message}</p>
        </div>
    ) : null;
};

Error.propTypes = {
    message: PropTypes.string.isRequired
};
