import * as React from 'react';
import styled from 'styled-components';

const StyledSVG = styled.svg`
    overflow:hidden;
    box-shadow: none;
    text {
      fill: white;
    }
    #main-square {
      fill: black;
    }
`;

interface BrandProps {
    size: string
}

const BrandLogo: React.FC<BrandProps> = ({size, ...props}) => {
    return (
        <StyledSVG width={size} height={size} viewBox="0 0 430 430" {...props}>
            <title>{'myLogo'}</title>
            <defs>
                <linearGradient
                    x1="-9.515%"
                    y1="-30.83%"
                    x2="92.107%"
                    y2="123.934%"
                    id="prefix__a"
                >
                    <stop stopColor="red" offset="0%"/>
                    <stop stopColor="#A00951" offset="17.829%"/>
                    <stop stopColor="#9A0056" offset="35.993%"/>
                    <stop stopColor="#FF3D00" offset="57.979%"/>
                    <stop stopColor="#FFC900" offset="81.25%"/>
                    <stop stopColor="#2F0" offset="100%"/>
                </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
                <path id="main-square" fill="#000" fillRule="nonzero" d="M0 0h430v430H0z"/>
                <path
                    stroke="url(#prefix__a)"
                    strokeWidth={12}
                    d="M35 34h361v361H35z"
                />
                <text
                    transform="translate(105 96)"
                    fill="#FFF"
                    fillRule="nonzero"
                    fontFamily="TrebuchetMS, Trebuchet MS"
                    fontSize={220}
                >
                    <tspan x={0} y={207}>
                        {'Kr'}
                    </tspan>
                </text>
            </g>
        </StyledSVG>
    );
}

export default BrandLogo;
