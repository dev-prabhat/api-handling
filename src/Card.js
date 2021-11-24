/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const CardContainer = ({ details }) => {
    const { title, first, last, large, city, country, name, postcode, email, cell } = details
    return (
        <Card>
            <CardBody className="text-center">
                <img height="150" width="150"
                    className="rounded-circle img-thumbnail border-danger"
                    src={large} />
                <CardTitle className="text-primary">
                    <h3>
                        <span className="p-2">{title}</span>
                        <span>{first}</span>
                        <span>{last}</span>
                    </h3>
                </CardTitle>
                <CardText>
                    <span className="p-2"><FaMapMarkerAlt /></span>
                    {name},
                    {city},
                    {country},
                    {postcode}
                </CardText>
                <CardText>
                    <span className="p-2"><FaEnvelope /></span>
                    {email}
                </CardText>
                <CardText>
                    <span className="p-2"><FaPhone /></span>
                    {cell}
                </CardText>
            </CardBody>
        </Card>
    )
}

export default CardContainer;