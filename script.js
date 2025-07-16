document.getElementById('step2').style.display = 'none';

document.getElementById('step1next').addEventListener('click', function () {
    username = document.getElementById('username').value;
    spanname = document.getElementById('spanname');
    
    spanname.innerHTML = username;

    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
});

document.getElementById('calculatecost').addEventListener('click', function () {
    revdate = document.getElementById('revdate').value;
    numpax = document.getElementById('paxno').value;
    // binput = document.getElementById('binput').value; 

    date = new Date(revdate);

    result = document.getElementById('result');
    output = 0;

    if (numpax < 1)
        output = 0;
    else if (numpax > 8)
        output = 200;
    else
        output = numpax * 20;

    if (isWeekend(revdate))
        output *= 1.5;

    result.innerHTML = "$" + output;
});

function isWeekend(date){
    const day = new Date(date).getDay();
    return (day === 0 || day === 6); // 0 - Sunday, 6 - Saturday
}
