function invert_1(bitInput){
  // -----------------------------
  // naive way
  let bitOutput;
  if (bitInput === 1){
    bitOutput = 0;
  } else {
    bitOutput = 1;
  }
  return bitInput
}

function invert_2(bitInput) {
  // -----------------------------
  // Is the bitInput = 1 ? if yes return 1 if no return 0
  return bitInput === 1 ? 0 : 1;
}

function invert_3(bitInput) {
  // -----------------------------
  // boolean method
  return bitInput? 0 : 1;
}

function invert_4(bitInput) {
  // -----------------------------
  // math method
  return -bitInput + 1;
}

function invert_5(bitInput) {
  // -----------------------------
  // xor bitwise opperator
  return bitwise ^= 1;

}

function invert_6(bitInput) {
  // -----------------------------
  return +!bitInput;
}
