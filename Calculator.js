const display = document.getElementById("display");
function appendToDsiplay(input){
    display.value+=input;
}
function clearDisplay(){
    display.value="";
}
function calculate(){
    try{
        const result = eval(display.value);
        display.value = result;
        setTimeout(clearDisplay,2000);
    }
    catch(error){
        display.value = "Error";
    }
}