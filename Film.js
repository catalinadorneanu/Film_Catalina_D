// JavaScript source code

function enable(username) {
    //Reference the Button.
    var subscribe = document.getElementById('subscribe');

    //Verify the TextBox value.
    if (username.value.trim() != "") {
        //Enable the TextBox when TextBox has value.
        subscribe.disabled = false;
    } else {
        //Disable the TextBox when TextBox is empty.
        subscribe.disabled = true;
    }
}

function save() {
    var username = document.getElementById('username').value;
    localStorage.setItem('username', username);
    check();
}


function check() {
    var username = localStorage.getItem('username');
    if (username !== null) {
        change();
    }
}
//se la funzione check restituisce true, allora cambia il form. 
function change() {
    let field = document.getElementById('newsform');
    field.style.display = 'none';
    //recupero tasto login e lo faccio sparire
    let subscribe = document.getElementById('subscribe');
    subscribe.style.display = 'none';
    let unsubscribe = document.getElementById('unsubscribe');
    unsubscribe.style.display = '';

}


function unsub() {

    var subscribe = document.getElementById('subscribe');
    var unsubscribe = document.getElementById('unsubscribe');
    if (localStorage.getItem('username') !== null) {

        let field = document.getElementById('newsform');
        field.style.display = '';
        unsubscribe.style.display = 'none';
        subscribe.style.display = '';
    }
   
    localStorage.clear();
}