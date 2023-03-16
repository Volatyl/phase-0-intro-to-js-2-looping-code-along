function writeCards(arr) {
  const array = [];
  for (let i = 0; i < arr.length; i++) {
    let msg = `Thank you, ${arr[i]}, for the wonderful surprise gift!`;
    array.push(msg);
  }
  return array;
}

function countDown(num) {
  let i = 0;
  while (i <= num) {
    console.log(i);
    i++;
  }
  return i;
}
