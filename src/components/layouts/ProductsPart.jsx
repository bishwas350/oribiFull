import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Product from '../Product'

const ProductsPart = () => {
  return (
   <div className="py-6">
        <Container>
            <Flex className={"justify-between flex-wrap gap-y-3"}>
                <Product/>
            </Flex>
        </Container>
   </div>
  )
}

export default ProductsPart