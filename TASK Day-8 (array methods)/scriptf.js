let p = new Promise((resolve,reject)=>{
    let request = new XMLHttpRequest()
    request.open("GET","https://restcountries.com/v2/all",true)
    request.send()
    request.onload = function(){
        let data = JSON.parse(this.response)
        resolve(data)
    }
})
p.then((data)=>{

let check= data.filter((element)=>{
    if(element.region === "Asia");
        console.log(data);
    
});    

})