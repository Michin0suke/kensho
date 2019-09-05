import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const TotalNumber = () => {
  const [totalNumber, setTotalNumber] = useState('')

  useEffect(() => {
    fetch('https://api.prizz.jp/total_number')
      .then(responce => responce.json())
      .then(json => JSON.parse(JSON.stringify(json)))
      .then(c => setTotalNumber(c['total_number']))
  }, [])

  return (
    <Text>
      現在開催されている懸賞の数は<Num>{totalNumber}</Num>個です。
    </Text>
  )
}

const Text = styled.p`
  display: inline-block;
  font-size: 1rem;
  line-height: 1.4rem;
  margin: 0 20px;
  padding: 0 0 0 5px;
  color: #333;
  background: linear-gradient(transparent 60%, #ffde00 60%);
`
const Num = styled.span`
  font-size: 1.65rem;
  padding: 0.1rem;
`

export default TotalNumber
