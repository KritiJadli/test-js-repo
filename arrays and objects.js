let obj={
    name:"KRITI",
    age:20,
    course:"BTECH",
    greet: function(){
        console.log("hello duniya");
    }
};
arr=[10,20,30,40,50];
for(let key in arr){
    console.log(key);

}
//console.log(obj);

//let arr=[1,2,3,4,5];
//console.log(arr);
let brr = new Array(1,'kriti',20,30,40,50,60);
/*brr.push(60);
brr.pop();
brr.shift();
brr.unshift("jadli");*/

brr.splice(1,0,'kabu');
console.log(brr);
