import React, { Component } from 'react';
import styled from 'styled-components';

class Button extends Component {
    render() {
        return (
            <ButtonPrimary>Button</ButtonPrimary>
        );
    }
}

const ButtonPrimary = styled.button`
    padding: 0.5rem 0.75rem;
    margin: 0.5rem;
    display: block;
`;

export default Button;