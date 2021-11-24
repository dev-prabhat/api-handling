import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"
import './App.css';
import CardContainer from './Card';

const App = () => {
  const [details, setDetails] = useState({})

  const fetchDetails = async () => {
    try {
      const { data } = await axios.get('https://randomuser.me/api/')
      const { title, first, last } = data.results[0].name
      const { large } = data.results[0].picture
      const { city, country, postcode } = data.results[0].location
      const { name } = data.results[0].location.street
      const { email, cell } = data.results[0]
      setDetails({ title, first, last, large, city, country, name, postcode, email, cell })
      // console.log({ title, first, last, large, city, country, name, postcode, email, cell })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <Container className="p-4 bg-primary App">
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <CardContainer details={details} />
        </Col>
      </Row>
    </Container>
  )
}

export default App;
