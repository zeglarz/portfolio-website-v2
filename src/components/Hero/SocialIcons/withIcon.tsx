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
            dangerouslySetInnerHTML={{
                __html: `
            <defs>
                <linearGradient id='light'>
                    <stop stop-color='#7700ff'/>
                    <stop offset='1' stop-color='#40f'/>
                </linearGradient>
                <linearGradient id='dark'>
                    <stop stop-color='#ff8a00'/>
                    <stop offset='1' stop-color='#e52e71'/>
                </linearGradient>
            </defs>
            ${icon}
            `
            }}
        />
    );
};
export default Icon

