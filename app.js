import {MDCRipple} from '@material/ripple';
import {MDCToolbar} from '@material/toolbar';

var buttons1 = [];

for(var j = 0; j < document.querySelectorAll('.mdc-button').length; j++){
    buttons1[j] = new MDCRipple(document.querySelectorAll('.mdc-button')[j]);
}

var toolbar = MDCToolbar.attachTo(document.querySelector('.mdc-toolbar'));
toolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');
