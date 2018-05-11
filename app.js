import { MDCRipple } from '@material/ripple';
import { MDCToolbar } from '@material/toolbar';
import { MDCCheckbox } from '@material/checkbox';
import { MDCSelect } from '@material/select';
import { mui } from 'muicss/dist/js/mui';
import { MDCTextField } from '@material/textfield';
import { MDCDialog, MDCDialogFoundation, util } from '@material/dialog';
import { MDCRadio } from '@material/radio';


var radios = [];

for (var z = 0; z < document.querySelectorAll('.mdc-radio').length; z++) {
    radios[z] = new MDCRadio(document.querySelectorAll('.mdc-radio')[z]);
}


var buttons1 = [];

for (var j = 0; j < document.querySelectorAll('.mdc-button').length; j++) {
    buttons1[j] = new MDCRipple(document.querySelectorAll('.mdc-button')[j]);
}

var toolbar = MDCToolbar.attachTo(document.querySelector('.mdc-toolbar'));
toolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');

var checkboxs = [];

for (var i = 0; i < document.querySelectorAll('.mdc-checkbox').length; i++) {
    checkboxs[i] = new MDCCheckbox(document.querySelectorAll('.mdc-checkbox')[i]);
    console.log(checkboxs[i]);
}




var textfields = [];

for (var k = 0; k < document.querySelectorAll('.mdc-text-field').length; k++) {
    textfields[i] = new MDCTextField(document.querySelectorAll('.mdc-text-field')[k]);
}

if(document.querySelector('#evaluation-dialog') !== null){
    var dialog = new MDCDialog(document.querySelector('#evaluation-dialog'));
    var dialog2 = new MDCDialog(document.querySelector('#special-evaluation-dialog'));
    var dialog3 = new MDCDialog(document.querySelector('#feedback-dialog'));

    dialog.listen('MDCDialog:accept', function () {
        console.log('accepted');
    });
    
    dialog.listen('MDCDialog:cancel', function () {
        console.log('canceled');
    });
    
    dialog2.listen('MDCDialog:accept', function () {
        console.log('accepted');
    });
    
    dialog2.listen('MDCDialog:cancel', function () {
        console.log('canceled');
    });
    
    dialog3.listen('MDCDialog:accept', function () {
        console.log('accepted');
    });
    
    dialog3.listen('MDCDialog:cancel', function () {
        console.log('canceled');
    });

    for (var le = 0; le < document.querySelectorAll('.button-confirm').length; le++) {
        document.querySelectorAll('.button-confirm')[le].onclick = function (evt) {
            if (this.innerHTML === 'Feedback') {
                dialog3.lastFocusedTarget = evt.target;
                dialog3.show();
            } else {
                if (this.parentElement.parentElement.children[4].innerHTML === 'Avulsa') {
                    dialog.lastFocusedTarget = evt.target;
                    dialog.show();
                } else {
                    dialog2.lastFocusedTarget = evt.target;
                    dialog2.show();
                }
            }
        }
    }


document.querySelector('#problema_id').onclick = function () {
    if (checkboxs[0].checked) {
        console.log('teste');
        document.querySelector('#description-problem').innerHTML = '<span class="mdc-typography--subtitle">Tipo de problema</span><section><label id="ocorrencia-radio-label-id"><div class="mdc-radio"><input class="mdc-radio__native-control" type="radio" id="ocorrencia-radio-id" name="reserve-type" checked><div class="mdc-radio__background"><div class="mdc-radio__outer-circle"></div><div class="mdc-radio__inner-circle"></div></div></div>Ocorrência</label><label id="anormalidade-radio-label-id"><div class="mdc-radio"><input class="mdc-radio__native-control" type="radio" id="anormalidade-radio-id" name="reserve-type"><div class="mdc-radio__background"><div class="mdc-radio__outer-circle"></div><div class="mdc-radio__inner-circle"></div></div></div>Anormalidade</label></section><div class="row"><form class="col s12"><div class="row"><div class="input-field col s12"><textarea id="feedback-textarea-id" class="materialize-textarea"></textarea><label for="feedback-textarea-id">Dê mais informações sobre o problema</label></div></div></form></div>';
    } else {
        console.log('teste1');
        document.querySelector('#description-problem').textContent = 'Caso não haja nenhum problema, clique em confirmar.';
    }
}
}

if(document.querySelector('#fixed-dialog') !== null){
    var dialog4 = new MDCDialog(document.querySelector('#fixed-dialog'));

    dialog4.listen('MDCDialog:accept', function () {
        console.log('accepted');
    });
    
    dialog4.listen('MDCDialog:cancel', function () {
        console.log('canceled');
    });

    for (var ca = 0; ca < document.querySelectorAll('.button-fixed-confirm').length; ca++) {
        document.querySelectorAll('.button-fixed-confirm')[ca].onclick = function (evt) {
            dialog4.lastFocusedTarget = evt.target;
            dialog4.show();
        }
    }
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