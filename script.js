Array.prototype.shariqForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i], i)
    }
}

Array.prototype.shariqMap = function (cb) {
    let newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(cb(this[i], i))
    }
    return newArray
}
Array.prototype.shariqFilter = function (cb) {
    let newArray = []
    for (let i = 0; i < this.length; i++) {
        cb(this[i], i) && newArray.push(this[i])
    }
    return newArray
}
Array.prototype.shariqFind = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i)) return this[i]
    }
}

Array.prototype.shariqFindIndex = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i)) return i
    }
}

Array.prototype.shariqReduce = function (cb, acc = 0) {
    for (let i = 0; i < this.length; i++) {
        acc = cb(acc, this[i])
    }
    return acc
}
Array.prototype.shariqEvery = function (cb) {
    let toReturn = true
    for (let i = 0; i < this.length; i++) {
        if (!cb(this[i], i)) return false
    }
    return toReturn;
}
Array.prototype.shariqSome = function (cb) {
    let toReturn = false
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i)) return true
    }
    return toReturn;
}

Array.prototype.shariqFill = function (toFillWith, from, to) {
    if (from && to) {
        for (let i = from; i < to; i++) {
            this[i] = toFillWith
        }
    } else if (from) {
        for (let i = from; i < this.length; i++) {
            this[i] = toFillWith
        }
    } else if (to) {
        for (let i = 0; i < to; i++) {
            this[i] = toFillWith
        }
    } else if (toFillWith) {
        for (let i = 0; i < this.length; i++) {
            this[i] = toFillWith
        }
    } else {
        for (let i = 0; i < this.length; i++) {
            this[i] = undefined
        }
    }
    return this;
}
Array.prototype.shariqSplice = function (from, to, ...insert) {
    let deletedItems = []
    if ((from || from === 0) && to && insert.length > 0) {
        for (let i = from; i < to + from; i++) {
            deletedItems.push(this[i])
            delete this[i]
        }
        if (deletedItems.length === insert.length) {
            for (let j = 0; j < insert.length; j++) {
                for (let k = 0; k < this.length; k++) {
                    if (!this[k]) {
                        this[k] = insert[j]
                        break;
                    }
                }
            }
        } else if (deletedItems.length > insert.length) {
            for (let j = 0; j < insert.length; j++) {
                for (let k = 0; k < this.length; k++) {
                    if (!this[k]) {
                        this[k] = insert[j]
                        break;
                    }
                }
            }
            let newArray = []
            for (let i = 0; i < this.length; i++) {
                if (this[i]) newArray.push(this[i])
            }
            this.length = 0
            for (let i = 0; i < newArray.length; i++) {
                this.push(newArray[i])
            }
        } else if (deletedItems.length < insert.length) {
            let initialData = []
            let lastData = []
            let emptyLastIndex
            for (let i = 0; i < this.length; i++) {
                if (!this[i]) break;
                initialData.push(this[i])
            }
            for (let i = 0; i < this.length; i++) {
                if (!this[i]) {
                    emptyLastIndex = i
                };
            }
            for (let i = emptyLastIndex + 1; i < this.length; i++) {
                lastData.push(this[i])
            }
            this.length = 0
            for (let i = 0; i < initialData.length; i++) {
                this.push(initialData[i])
            }
            for (let i = 0; i < insert.length; i++) {
                this.push(insert[i])
            }
            for (let i = 0; i < lastData.length; i++) {
                this.push(lastData[i])
            }

        }
        let newDeletedItems = []
        for (let i = 0; i < deletedItems.length; i++) {
            if (deletedItems[i]) newDeletedItems.push(deletedItems[i])
        };
        return newDeletedItems;
    } else if ((from || from === 0) && !to && insert.length > 0) {
        let initialData = []
        let lastData = []
        for (let i = 0; i < from; i++) {
            initialData.push(this[i])
        }
        for (let i = from; i < this.length; i++) {
            lastData.push(this[i])
        }
        this.length = 0
        for (let i = 0; i < initialData.length; i++) {
            this.push(initialData[i])
        }
        for (let i = 0; i < insert.length; i++) {
            this.push(insert[i])
        }
        for (let i = 0; i < lastData.length; i++) {
            this.push(lastData[i])
        }
        return [];
    } else if (!from && (to || !to) && insert.length > 0) {
        let newArray = [...this]
        this.length = 0;
        for (let i = 0; i < insert.length; i++) {
            this.push(insert[i])
        }
        for (let i = 0; i < newArray.length; i++) {
            this.push(newArray[i])
        }
        return [];
    }
    else if ((from || from === 0) && (to || to === 0) && insert.length < 1) {
        if (to === 0) return [];
        for (let i = from; i < to + from; i++) {
            deletedItems.push(this[i])
            delete this[i]
        }
        let newArray = []
        for (let i = 0; i < this.length; i++) {
            if (this[i]) newArray.push(this[i])
        }
        this.length = 0
        for (let i = 0; i < newArray.length; i++) {
            this.push(newArray[i])
        }
        let newDeletedItems = []
        for (let i = 0; i < deletedItems.length; i++) {
            if (deletedItems[i]) newDeletedItems.push(deletedItems[i])
        };
        return newDeletedItems;
    } else {
        return []
    }
}

let array = ['Jan', 'March', 'April', 'June'];
let deletedItems = array.shariqSplice(1, 1)
console.log(array)
console.log(deletedItems)


