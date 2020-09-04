import React from 'react';

const Icon = ({size = 28, color = 'currentColor', icon}) => {
    return (
        <svg
            viewBox="0 0 24 24"
            width={size}
            height={size}
            stroke="currentColor"
            fill='none'
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            dangerouslySetInnerHTML={{__html: icon}}
        />
    );
};
export default Icon

