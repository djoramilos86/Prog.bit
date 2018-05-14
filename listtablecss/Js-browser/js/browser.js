"use strict";

(function(){
    console.log("Hi");
}());


(function(){
    
    console.log(navigator.platform + "\n" + navigator.appVersion + "\n" + navigator.vendor);
    
}());

(function IsOnline() {
    if (navigator.onLine){
        console.log("Online") ;
    }
    else{
        console.log("Offline");
    }
})();


(function IsOnline() {
    console.log(screen.availwidth + "\n" + screen.availheight);
})();


(function abouth() {
    console.log(location.href + "\n" + location.host + "\n" + location.protocol + "\n" + location.pathname);
})();

/*(function reload() {
    return location.reload();
})();

(function redirect() {
    return location.assign("https://classroom.google.com/o/MTI1NjcxNjk0MzFa");
})();*/

function storeData(key, value) {
    localStorage.setItem(key, value);
};
storeData("listOfStudents", 13);


function getStoredData (input) {
    var example = localStorage.getItem(input);
    console.log(example);
    return example;
};


function removeItem(key){
    var deletedItem = localStorage.removeItem(key);
    return deletedItem;
}
removeItem("listOfStudents");






