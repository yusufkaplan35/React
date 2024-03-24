import React from 'react'
import { Container, Spinner } from 'react-bootstrap'

const Loading = () => {
  return (
    <Container className="mt-5 text-center">
        <Spinner variant="info" size="lg"/>
    </Container>
  )
}

export default Loading