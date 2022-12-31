function clearscreen() {
    document.getElementById("display_q").value="";
    document.getElementById("display_a").value="";
}

function display(value) {
    document.getElementById('display_q').value += value;
    console.log(document.getElementById('display_q').value);
}

function calculate() {
    const problem = document.getElementById("display_q").value;
    const result = eval(problem);
    
    if (problem != "")
        document.getElementById("display_a").value = result;
    
    else 
        document.getElementById("display_a").value = "";
}
