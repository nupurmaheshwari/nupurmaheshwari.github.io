import React from 'react';
//import ReactDOM from 'react-dom';
//import Button from '@material-ui/core/Button';
import './index.css';
import IconButton from '@material-ui/core/IconButton';
import FunctionsIcon from '@material-ui/icons/Functions';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import DraggableDialog from './dialog.js'


class CalcButton extends React.Component {

	render() {
		return (
            <>
                <DraggableDialog></DraggableDialog>
            </>
        )
	}
};

export default CalcButton;