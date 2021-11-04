Array.prototype.shariqForEach = function (cb){
    for (let i = 0; i < this.length;i++){
        cb(this[i],i)
    }
}

Array.prototype.shariqMap = function (cb){
    let newArray = []
    for (let i = 0; i < this.length;i++){
        newArray.push(cb(this[i],i))
    }
    return newArray
}
Array.prototype.shariqFilter = function (cb){
    let newArray = []
    for (let i = 0; i < this.length;i++){
        cb(this[i],i) && newArray.push(this[i])
    }
    return newArray
}
Array.prototype.shariqFind = function (cb){
    for (let i = 0; i < this.length;i++){
        if(cb(this[i],i)) return this[i]
    }
}

Array.prototype.shariqFindIndex = function (cb){
    for (let i = 0; i < this.length;i++){
        if(cb(this[i],i)) return i
    }
}

Array.prototype.shariqReduce = function (cb,acc){ 
    for (let i = 0; i < this.length;i++){
         acc = cb(acc,this[i])
    }
    return acc
}

const array = [1,2,3,4,5]

let transformedArray = array.shariqReduce((sum,num)=>{
return sum + num
},0)
console.log(transformedArray)