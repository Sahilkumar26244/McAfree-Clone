import { Box, Button } from '@chakra-ui/react'
import React from 'react'

function ActivateButton() {
  return (
    <div>
        <Box display={"flex"} justifyContent={"center"} p={"20px"}>
            <Button textTransform={"uppercase"} color={"white"} bg={"#810101"} _hover={{bg:"black"}}>Activate Product Key</Button>
        </Box>
    </div>
  )
}

export default ActivateButton