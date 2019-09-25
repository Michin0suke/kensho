import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import media from '#/tools/mediaQuery'
import resolveEndpoint from '#/tools/resolveEndpoint'

const TotalNumber = ({ content: { endpoint } }: { content: TotalNumber }) => {
  const [totalNumber, setTotalNumber] = useState('')

  useEffect(() => {
    fetch(resolveEndpoint(endpoint))
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
  margin: 0;
  margin-left: 20px;
  ${media.greaterThan('large')`
    margin-left: 10%;
  `}
  padding: 20px 0 0 5px;
  color: #333;
  background: linear-gradient(transparent 80%, #ffde00 80%);
`
const Num = styled.span`
  font-size: 1.65rem;
  padding: 0.1rem;
`

export default TotalNumber
