const success = document.querySelector('.text-success');
const warning = document.querySelector('.text-warning');
const danger = document.querySelector('.text-danger');
let clicksuccess = 0;
let clickwarning = 0;
let clickdanger = 0;


success.addEventListener('click', fclicksuccess);

function fclicksuccess() {
    clicksuccess ++;
    document.querySelector(".msgsuccess").innerHTML = clicksuccess;
    ajaxesempio();
}

warning.addEventListener('click', fclickwarning);

function fclickwarning() {
    clickwarning ++;
    document.querySelector(".msgwaring").innerHTML = clickwarning;
    ajaxesempio();
}

danger.addEventListener('click', fclickdanger);

function fclickdanger() {
    clickdanger ++;
    document.querySelector(".msgdanger").innerHTML = clickdanger;
    ajaxesempio();
}


function ajaxesempio() {

    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", "elaboradati.php", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.onload = function() {//Call a function when the state changes.
        if(xhttp.status == 200) {
            document.querySelector(".msg").innerHTML = this.response;
            
        }
    }
    xhttp.send("clicksuccess="+ clicksuccess + "&clickwarning=" + clickwarning + "&clickdanger=" + clickdanger );

}

