# Arrays
## Array methods
### Array.prototype.at()
- myArray.at(one number) takes an integer and returns the item at that index
- similar to the square bracket notation; myArray.at(2) is equivalent to myArray[2]
- **something nice:** myArray.at(-1) is shorter than myArray[myArray.length - 1]
- 💡 An item is returned and the existing array remains unchanged

### Array.propotype.concat()
- array1.concat(one or more elements) takes any data type (except undefined) and returns a new array where the array on which the method was called and its arguments are concatenated
- not *actual* objects, but their *references* are copied into the new array. Both the original and new array refer to the same object; if a referenced object is modified, the changes are visible to both the new and original arrays. 
- 💡 A new Array instance is returned and the existing arrays remain unchanged
- 🔖 Even if no arguments are passed, a new Array instance (shallow copy of the existing array on which the method was called) is still returned

### Array.prototype.copyWithin()
- myArray.copyWithin(target, start, end) takes from one to three arguments; it shallow copies part of an array to another location in the same array and returns it *without modifying its length*
- myArray.copyWithin(target): the array starting from index 0 is copied to the *target* index
![image](https://user-images.githubusercontent.com/75531970/175376639-8e5b1cb0-ffbc-4666-9dc9-ef733e767c18.png)
- myArray.copyWithin(target, start): the array, starting from the *start* index, is copied to the *target* index
![image](https://user-images.githubusercontent.com/75531970/175378636-6909389b-ab1f-407c-bc77-baf57b36ecfa.png)
- myArray.copyWithin(target, start, end): the array, starting from the *start* index and ending at the *end* index, is copied to the *target* index
![image](https://user-images.githubusercontent.com/75531970/175379848-3cb7517c-8539-4c9c-934c-954c631bf234.png)
- 💡 The modified array is returned, but its length remains unchanged
