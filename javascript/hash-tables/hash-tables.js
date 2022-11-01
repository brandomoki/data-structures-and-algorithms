'use strict';


class HashTable {
  constructor(size){

    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key){
    let characters = key.split('');
    let charSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);

    }, 0);

    let hash = charSum * 599;
    return hash % this.size;
  }

  set(key, value){
    let position = this.hash(key);
    let data = {[key]: value};

    if(this.buckets[position]){
      let bucket = this.buckets[position];
      bucket.append(data);

    } else {

      let bucket = new LinkedList();
      bucket.append(data);

      this.buckets[position] = bucket;
    }
  }

  getItem(key){
    let position = this.hash(key);

    if (this.buckets[position]){
      let bucket = this.buckets[position];
      let value = bucket.head.value[key];

      while (!value[key]) {
        if (value.next === null) return null;
        value = value.next;
      }
      return value[key];
    }else{return null;}
  }

  has(key){
    let index = this.hash(key);
    if (this.buckets[index]) {
      return true;

    } else {
      return false;
    }

  }

  keys(){

  }

}

module.exports = HashTable;
