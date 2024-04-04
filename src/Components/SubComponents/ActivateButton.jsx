import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function ActivateButton({onOpen}) {
  return (
    <div>
        <Box display={"flex"} justifyContent={"center"} p={"20px"}>
            <Link to='/activate'>
            <Button onClick={onOpen} textTransform={"uppercase"} color={"white"} bg={"#810101"} _hover={{bg:"black"}}>Setup Product Key</Button>
            </Link>
        </Box>
    </div>
  )
}

export default ActivateButton