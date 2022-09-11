// const array = [1, 2, 3, 5, 9];
// console.log("original array is", array);
// console.log("Method : array.toString()");
// let out = (array.toString());
// console.log("Change in array : none");
// console.log("Return :" , out);


// const array = ["apple", "orange" ,"banana"];
// console.log("original array is", array);
// console.log("Method : array.forEach()");
// function  myfunction(fruits){
//     console.log(fruits);
// }
// console.log("Change in array : none");
// array.forEach(myfunction);



// const array = ["car , bus , bike "];
// console.log("original array is", array);
// console.log("original length of array : 3");
// console.log("Method : array.unshift()");
// console.log("Input : function");
// let out = (array.unshift("1 , morning"));
// console.log("Change in array :", array);
// console.log("Return :" , array);
// console.log("Return length of array : 5");



// const array = ["This" , "car" , "is" , "very" , "beautiful" , "in" , "this" , "world"];
// console.log("original array is", array);
// console.log("Method : array.includes()");
// console.log("Change in array : none");
// console.log("Input ; search value");
// let out = (array.includes("very"));
// console.log("Return :" , out);


// const array = ["read" , "think" , "write"];
// console.log("original array is", array);
// console.log("Method : array.pop()");
// console.log("Input ; no value");
// let out = (array.pop());
// console.log("Change in array :", array);
// console.log("Return :" , array);


// const array = ["read" , "think" , "write"];
// console.log("original array is", array);
// console.log("Method : array.reverse()");
// console.log("Input ; no value");
// let out = (array.reverse());
// console.log("Change in array :", out);
// console.log("Return :" , out);


// const array = ["read" , "think" , "write"];
// console.log("original array is", array);
// console.log("Method : array.reverse()");
// console.log("Input ; add value , index-startvalue , index-stopvalue");
// let out = (array.fill("and",1,2));
// console.log("Change in array :", array);
// console.log("Return :" , array);


const array = ["blue" , "red" , "yellow" , "lavender" , "green"];
console.log("original array is", array);
console.log("Method : array.reverse()");
console.log("Input ; index-startvalue , delete-count , replacing-value");
let out = (array.splice(0,2, "think"));
console.log("Change in array :", array);
console.log("Return :" , array);


// const array = ["blue" , "red" , "yellow" , "lavender"];
// console.log("original array is", array);
// console.log("Method : array.push()");
// console.log("Input ; add-value");
// let out = (array.push("wow!"));
// console.log("Change in array :", array);
// console.log("Return :" , array);


// const array = ["blue" , "red" , "yellow" , "lavender"];
// console.log("original array is", array);
// console.log("Method : array.join()");
// console.log("Input ; add-value");
// let out = (array.join(" wow! "));
// console.log("Change in array :", array);
// console.log("Return :" , out);


// const array = ["tirunelveli" , "madurai" , "coimbatore" , "tirchy"]
// const num = 67800;
// console.log("original array is", array);
// console.log("Method : Array.isArray()");
// console.log("Input ; variable name");
// let out = Array.isArray(array);
// let output = Array.isArray(num);
// console.log("Change in array :", array);
// console.log("Return :" , out);
// console.log("return 2:" , output);


// const array = ["blue" , "red" , "yellow" , "lavender","blue" , "red" , "yellow" , "lavender"];
// console.log("original array is", array);
// console.log("Method : array.indexOf()");
// console.log("Input ; search-value , startvalue");
// let out = (array.indexOf("lavender" ,4));
// console.log("Change in array :", array);
// console.log("Return :" , out);


// const array = ["blue" , "red" , "yellow" , "lavender","blue" , "red" , "yellow" , "lavender"];
// console.log("original array is", array);
// console.log("Method : array.indexOf()");
// console.log("Input ; search-value");
// let out = (array.indexOf("lavender"));
// console.log("Change in array :", array);
// console.log("Return :" , out);


// const array = ["jeen","kurthi" , "saree" , "chudi" , "scut"];
// console.log("original array is", array);
// console.log("Method : array.copyWithin()");
// console.log("Input ; startvalue , re-pl-startvalue , re-pl-stopvlue");
// let out = (array.copyWithin(1,2,5));
// console.log("Change in array :", array);
// console.log("Return :" , out);


// const array = ["ice-cream" , "kitkat" , "milkybar" , "Dairy-Milk" , "5-star"];
// console.log("original array is", array);
// console.log("Method : array.shift()");
// console.log("Input ; novalue");
// let out = (array.shift());
// console.log("Change in array :", array);
// console.log("Return :" , out);


// const array = ["kitkat" , "milkybar" , "Dairy-Milk" , "5-star"];
// const place = ["tirunelveli" , "madurai" , "coimbatore" , "tirchy"]
// console.log("original array is", array);
// console.log("Method : array.concat()");
// console.log("Input ; addarray");
// let out = array.concat(place);
// console.log("Change in array :", out);
// console.log("Return :" , out);


// const array = ["tirunelveli Halwa"]
// console.log("original array is", array);
// console.log("Method : array.concat()");
// console.log("Input ; novalue");
// let out = (array.valueOf());
// console.log("Change in array :", array);
// console.log("Return :" , out);


// const array = ["tirunelveli" , "madurai" , "coimbatore" , "tirchy"]
// console.log("original array is", array);
// console.log("Method : array.slice()");
// console.log("Input ; indexvalue");
// let out = (array.slice(2,3));
// let output = (array.slice(-3,-1));////(decending order only like 1,3)
// console.log("Change in array :", array);
// console.log("Return :" , out);
// console.log("Return2" , output);