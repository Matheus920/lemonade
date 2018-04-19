import {MDCRipple} from '@material/ripple';
import {MDCToolbar} from '@material/toolbar';
import {MDCCheckbox} from '@material/checkbox';
import {MDCSelect} from '@material/select';

var buttons1 = [];

for(var j = 0; j < document.querySelectorAll('.mdc-button').length; j++){
    buttons1[j] = new MDCRipple(document.querySelectorAll('.mdc-button')[j]);
}

var toolbar = MDCToolbar.attachTo(document.querySelector('.mdc-toolbar'));
toolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');

var checkboxs = [];

for(var i = 0; i < document.querySelectorAll('.mdc-checkbox').length; i++){
    checkboxs[i] = new MDCCheckbox(document.querySelectorAll('.mdc-checkbox')[i]);
}

const select = new MDCSelect(document.querySelector('.mdc-select'));
console.log(select);