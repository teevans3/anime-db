import React from 'react';
import {Grid} from '@material-ui/core';
import {styled} from '@material-ui/styles';

import Header from './Header';

const Layout = (props) => {
    return (
        <>
        <Header />
        <LayoutContainer>
            {props.children}
        </LayoutContainer>
        </>
    )
}

export default Layout;

const LayoutContainer = styled(Grid)({
    minHeight: 'calc(100vh - 6rem)',
    maxWidth: '1600px',
    margin: 'auto',
})