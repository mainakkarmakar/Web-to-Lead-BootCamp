console.log("JS file for web to load");
function formSubmitHandler(){
    let outPutdate = document.querySelector(".outPutdate");
    let inPutDate = document.getElementById("00N5g00000hktmC");
    console.log(typeof inPutDate.value);
    //Now change String - date (en_IN)
    outPutdate.value=new Date(inPutDate.value).toLocaleDateString("en-IN");  
}
function handelChange(){
    console.log('inside handelChange');
    let inPutDate = document.getElementById("00N5g00000hktmC");
    let inPutDateQS = document.querySelector(".inputDate");
    console.log(inPutDate.value);
    console.log(inPutDateQS.value);
    console.log(typeof inPutDateQS.value);// String - date (en_IN)
    let formatedDate = new Date(inPutDateQS.value).toLocaleDateString("en-IN");
    console.log(formatedDate);
    console.log(typeof formatedDate);
}