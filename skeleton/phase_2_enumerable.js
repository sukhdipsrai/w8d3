Array.prototype.myEach = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i])
    }
};

Array.prototype.myMap = function(callback){
    const ans = []

    this.myEach(ele => ans.push(callback(ele)));
    return ans;
};

Array.prototype.myReduce = function(callback, acc){
    if (typeof initialValue === undefined){
        initialValue = arr[0];
        arr = arr.slice(1);
    }

    this.myEach(ele => acc = callback(acc,ele));
    return acc;
};