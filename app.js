import { MDCRipple } from '@material/ripple';
import { MDCToolbar } from '@material/toolbar';
import { MDCCheckbox } from '@material/checkbox';
import { MDCSelect } from '@material/select';
import { mui } from 'muicss/dist/js/mui';
import {MDCTextField} from '@material/textfield';

var buttons1 = [];


for (var j = 0; j < document.querySelectorAll('.mdc-button').length; j++) {
    buttons1[j] = new MDCRipple(document.querySelectorAll('.mdc-button')[j]);
}

var toolbar = MDCToolbar.attachTo(document.querySelector('.mdc-toolbar'));
toolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');

var checkboxs = [];

for (var i = 0; i < document.querySelectorAll('.mdc-checkbox').length; i++) {
    checkboxs[i] = new MDCCheckbox(document.querySelectorAll('.mdc-checkbox')[i]);
}

var textfields = [];

for(var k = 0; k < document.querySelectorAll('.mdc-text-field').length; k++){
    textfields[i] = new MDCTextField(document.querySelectorAll('.mdc-text-field')[k]);
}

const select = new MDCSelect(document.querySelector('.mdc-select'));
console.log(select);

b.click(function () {
    if (!b.is('glayson')) {
        console.log('glayson existe')
        b.attr('glayson', 'rola')
        setTimeout(() => $('div.mui-select__menu'), 300)
    } else {
        b.prop('glayson', null)
        console.log('glayson foi removido')
    }
});