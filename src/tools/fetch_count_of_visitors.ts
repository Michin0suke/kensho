export interface Config {
  initRange: {
    min: number,
    max: number
  },
  variationRange: {
    min: number,
    max: number
  },
  percentage: {
    [key: string]: number,
    '-2': number,
    '-1': number,
    '+1': number,
    '+2': number
  }
};

// Convert object to value array.
const objectValueToArray = (object: {[key: string]: number}): number[] => {
  const arr = [];
  for(let i in object){
    arr.push(object[i]);
  };
  return arr;
};

const arrayIncludes = (arr: string[], word: string): string => {
  for(let e in arr) {
    if(arr[e].indexOf(word) >= 0) return arr[e];
  }
  console.log('is not contain.');
  return 'error';
}

// Number of visitors in first.
export const initNumberOfVisitors = (config: Config) => {
  let cookie = document.cookie;
  
  if(cookie.includes('count_of_visitors')){
    const countOfVisitors = arrayIncludes(cookie.split(';'), 'count_of_visitors');
    if(countOfVisitors.split('=')[1] !== 'error') {
      return countOfVisitors.split('=')[1];
    }else{
      document.cookie = '';
    }
  };

  const max = config.initRange.max,
        min = config.initRange.min;
  return Math.floor(Math.random()*(max+1-min))+min;
};

// Calculate the next number to display next.
export const nextNumberOfVisitors = (prevCount: number, config: Config) => {
  const percentage = config.percentage;
  const rangeMin = config.variationRange.min;
  const rangeMax = config.variationRange.max;
  const between0and100 = Math.floor(Math.random()*101);

  // Check if the sum of percentages is less than 100.
  const sumOfPercentage = objectValueToArray(percentage).reduce((a, b) => a+b);
  if(sumOfPercentage > 100){
    console.log('percentage is not valid.');
    return between0and100;
  };

  let calcStr = '';
  let nextCount = -1;
  let num = 0;
  for(let k in percentage){
    num += percentage[k];
    if(num > between0and100) {
      calcStr = k;
      nextCount = eval(prevCount.toString() + calcStr);
      break;
    };
  };
  if(nextCount === -1) nextCount = prevCount;
  if(nextCount < rangeMin) nextCount = rangeMin;
  if(nextCount > rangeMax) nextCount = rangeMax;
  document.cookie = 'count_of_visitors=' + nextCount;
  return nextCount;
};
