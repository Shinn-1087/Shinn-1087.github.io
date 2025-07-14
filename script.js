document.getElementById('step2').style.display = 'none';

document.getElementById('step1next').addEventListener('click', function () {
    username = document.getElementById('username').value;
    spanname = document.getElementById('spanname');
    
    spanname.innerHTML = username;

    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
});

document.getElementById('calculatecost').addEventListener('click', function () {

    ainput = document.getElementById('paxno').value;
    // binput = document.getElementById('binput').value; 

    result = document.getElementById('result');


    result.innerHTML = parseInt(ainput) < 0 ? "Ghost 👻" : parseInt(ainput) > 50 ? "Go book a hall 🙄" : parseInt(ainput) <= 8 ? "🥰 $" + parseInt(ainput) * 20 : "😍 $" + 200;

    /*
let output = 0;

if(ainput > 8){
    output = 200;
} else {
    output = ainput * 20;
}

result.innerHTML = output;
*/

});
