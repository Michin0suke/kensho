import {nextNumberOfVisitors, Config} from '../src/tools/fetch_count_of_visitors'

const config = {
  initRange: {
    min: 4,
    max: 7
  },
  variationRange: {
    min: 3,
    max: 12
  },
  percentage: {
    '-2': 2,
    '-1': 15,
    '+1': 15,
    '+2': 2
  }
};

const test = (times: number, config: Config) => {
  let minus2 = 0,
      minus1 = 0,
        zero = 0,
       plus1 = 0,
       plus2 = 0;
  
  for(var i=0; i<times; i++) {
    switch(nextNumberOfVisitors(2, config)){
      case 0: minus2++;
        break;
      case 1: minus1++;
        break;
      case 2: zero++;
        break;
      case 3: plus1++;
        break;
      case 4: plus2++;
        break;
      default: console.log('error');
    };
  };

  console.log(`
  minus2: ${Math.round((minus2/times)*100)}%
  minus1: ${Math.round((minus1/times)*100)}%
    zero: ${Math.round((zero/times)*100)}%
   plus1: ${Math.round((plus1/times)*100)}%
   plus2: ${Math.round((plus2/times)*100)}%
  `);
};

test(10000, config);