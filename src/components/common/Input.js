import React, { Component } from 'react';
import styled from 'styled-components';

class Input extends Component {
    render() {
        return <InputText placeholder="Input" type="text"/>
    }
}

const InputText = styled.input`
    padding: 0.5rem;
    margin: 0.5rem;
    display: block;
`;

export default Input;