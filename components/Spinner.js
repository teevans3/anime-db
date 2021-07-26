import React from 'react';
import { CircularProgress } from '@material-ui/core';
import {styled} from '@material-ui/styles';

const Spinner = () => {
    return (
        <div style={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircleSpinner size={124} thickness={5}/>
        </div>
    )
}

export default Spinner;

const CircleSpinner = styled(CircularProgress)({
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    top: 'calc(50% - 62px)',
    left: 'calc(50% - 62px)'
})