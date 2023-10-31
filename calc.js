function displaydata(data){
    result.value=result.value+data // result.value+=data
}
function allclear(){
    result.value=""
}
function evaluateexp(){
    exp=result.value
    result.value=eval(exp)
} 
function backspace(){
    data=result.value
    result.value=data.slice(0,-1)

}
