import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shadcn/components/ui/card"
import Character from "@app/api/QueryReturnTypes/Character"

import React from 'react'

interface CardProps extends Character{}
const CardComponent = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
    const {
        created, 
        episdode, 
        gender, 
        id, 
        image, 
        location, 
        name, 
        origin, 
        species, 
        status, 
        type, 
        url
    } = props
  return (
    <>
        <Card ref={ref}>
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{status}</CardDescription>
            </CardHeader>
            <CardContent>
                <div>
                    <div>Species: {species}</div>
                    <div>Gender {gender}</div>
                    <div>Origin Name: {origin.name}</div>
                    
                </div>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    </>
  )
})

export default CardComponent
