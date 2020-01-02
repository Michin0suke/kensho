import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import media from '#/tools/mediaQuery'
import {initNumberOfVisitors, nextNumberOfVisitors} from '#/tools/fetch_count_of_visitors'

const config = {
  initRange: {
    min: 6,
    max: 10
  },
  variationRange: {
    min: 3,
    max: 15
  },
  percentage: {
    '-2': 2,
    '-1': 15,
    '+1': 15,
    '+2': 2
  }
};

const CountOfVisitors = () => {
  const [counter, setCounter] = useState(initNumberOfVisitors(config))
  useEffect(() => {
    const countNum = parseInt(counter.toString()) ? parseInt(counter.toString()) : 0;
    setInterval(() => setCounter(nextNumberOfVisitors(countNum, config)), 5000);
  }, [])
  console.log(counter)
  return (
    <Text>
      現在<Num>{counter}</Num>人がこのページを見ています。
    </Text>
  )
}

const Text = styled.p`
  display: inline-block;
  font-size: 1rem;
  line-height: 1.4rem;
  margin: 0;
  margin-left: 20px;
  ${media.greaterThan('large')`
    margin-left: 10%;
  `}
  padding: 20px 0 0 5px;
  color: #333;
  background: linear-gradient(transparent 80%, #FFC3C3 80%);
`
const Num = styled.span`
  font-size: 1.65rem;
  padding: 0.1rem;
`

export default CountOfVisitors
