import React from 'react';

const Icon = ({size = 28, color = 'currentColor', icon, withoutOutline = false}) => {
    return (
        <svg
            viewBox="0 0 24 24"
            width={size}
            height={size}
            stroke="currentColor"
            fill={withoutOutline ? color : 'none'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={withoutOutline ? '0' : '2'}
            dangerouslySetInnerHTML={{__html: icon}}
        />
    );
};
export default Icon

