import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Product from '../Product'

const ProductsPart = () => {
  return (
   <div className="py-6">
        <Container>
            <Flex className={"justify-center flex-wrap gap-20"}>
                <Product/>
            </Flex>
        </Container>
   </div>
  )
}

export default ProductsPart