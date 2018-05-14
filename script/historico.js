var tableHeader = $('thead');
var tableBody = $('tbody');

if (window.screen.width >= 450) {
    tableHeader.addClass('mdc-typography--headline6');
    tableBody.addClass('mdc-typography--body1');
    
}

window.onresize = function () {
    if (window.screen.width >= 450) {
        tableHeader.addClass('mdc-typography--headline6');
        tableBody.addClass('mdc-typography--body1');

    } else {
        if(tableHeader.hasClass('mdc-typography--headline6')){
            tableHeader.removeClass('mdc-typography--headline6');
        }
        
        if(tableBody.hasClass('mdc-typography--body1')){
            tableBody.removeClass('mdc-typography--body1');
        }
    }
}
