function myAge(birthYear) {
  return 2024 - birthYear;
}

me = myAge(1922);

const mumsAge = (ageOfMe) => {
  console.log(ageOfMe * 2);
};

console.log(mumsAge(me));

const func = () => {
  try {
    console.log('starting the try block');
    hello;
    console.log('finishing the try block');
  } catch (err) {
    console.log('starting the catch block');
    console.log(`
        Error Name : ${err.name}, 
        Error Msg : ${err.message},
        Error Stack : ${err.stack}`);
  } finally {
    console.log('Function done');
  }
};
