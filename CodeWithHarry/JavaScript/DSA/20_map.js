const map = new Map([['a', 1], ['b', 2]])
map.set('c',3)


for(let [key,value] of map){
    console.log(`${key}: ${value}`)
}

console.log(map.has('a'))//has('key') not ('value')

map.delete('a')
console.log(map.has('a'))

console.log("Size:",map.size)

map.clear()
console.log("Size:",map.size)