import React, { Component } from 'react';
import styled from 'styled-components';

class Header extends Component {
    render() {
        return(
            <HeaderContainer>
                Header
            </HeaderContainer>
        )
    }
}

const HeaderContainer = styled.div`
    border-bottom: 1px solid black;
    padding: 1.5rem 0.75rem;   
    font-size: 1.5rem;
`;

export default Header;