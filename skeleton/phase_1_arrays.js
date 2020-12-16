
Array.prototype.uniq = function(){
    ans = []
    for(let i = 0; i < this.length; i++){
        if (!ans.includes(this[i])){
            ans.push(this[i])
        }
    }
    return ans
};

Array.prototype.twosum = function(){
    ans = []
    for(let i = 0; i < this.length; i++){
        for(let j = i+1; j < this.length; j++){
            x = this[i];
            y = this[j];
            if (x+y === 0){
                ans.push([i,j]);
            }
        }
    }
    return ans;
};

Array.prototype.transpose = function (){
    const newArray = [[],[]]

    for(let i = 0; i < this.length; i++){
        for(let j = 0; j < this.length; j++){
            newArray[j][i] = this[i][j];
        }
    }
    return newArray;
};