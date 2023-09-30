import styled from 'styled-components';
import React from 'react';
import {Grid} from 'bear-react-grid';

interface IProps {
   className?: string
}

const FeatureCard = ({
    className,
}: IProps) => {
    return <FeatureCardRoot>
        <Logo src="https://designcode.io/images/logos/shape-logo.svg"/>

        <Text>
            50% off Shape.so
        </Text>
    </FeatureCardRoot>;
};

export default FeatureCard;



const Logo = styled.img`
    width: 44px;
    height: 44px;
    position: absolute;
    top: -22px;
    z-index: 1;
    left: 0;
    right: 0;
    margin: 0 auto;
`;


const Text = styled.div`
    font-size: 13px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.7);
`;


const FeatureCardRoot = styled.div`
    width: 120px;
    height: 120px;
    background: linear-gradient(rgba(24, 32, 79, 0.72) 0%, rgba(24, 32, 79, 0.45) 100%);
    box-shadow: rgba(255, 255, 255, 0.2) 0 0 0 0.5px inset;
    border-radius: 99em;
    padding-left: 12px;
    padding-right: 12px;
    text-align: center;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

`;

