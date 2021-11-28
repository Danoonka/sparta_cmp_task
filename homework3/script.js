let table = document.getElementById('table');
let elId;

function makeTdEditable(td) {
    elId = {
        elem: td,
        data: td.innerHTML
    };

    td.classList.add('edit-td');

    let textArea = document.createElement('textarea');
    textArea.className = 'edit-area';

    textArea.value = td.innerHTML;
    td.innerHTML = '';
    td.appendChild(textArea);
    textArea.focus();

    td.insertAdjacentHTML("beforeEnd",
        '<div class="edit-controls"><button class="save">SAVE</button><button class="cancel">CANCEL</button></div>'
    );
}

table.onclick = function(event) {
    let target = event.target.closest('.save, .cancel, td');
    if (table.contains(target) !== true) {
        return table.contains(target);
    }

    if (target.className == 'save') {
        finishTdEdit(elId.elem, true);
    } else if (target.className == 'cancel') {
        finishTdEdit(elId.elem, false);
    } else if (target.nodeName == 'TD') {
        if (elId == true) {
            return elId;
        }
        makeTdEditable(target);
    }
};



function finishTdEdit(td, isOk) {
    if (isOk) {
        td.innerHTML = td.firstChild.value;
    } else {
        td.innerHTML = elId.data;
    }
    td.classList.remove('edit-td');
    elId = null;
}



