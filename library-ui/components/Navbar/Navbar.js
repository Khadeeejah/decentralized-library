import React from 'react'
import ConnectWalletButton from '../ConnectWalletButton'
import { Flex, Box, Spacer, ButtonGroup } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
const Navbar = () => {
  return (
    <>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        bg="linear-gradient(98.41deg, #02081F 0%, #1A0830 96.87%);"
        borderBottom={'1px solid #2A1B38;'}
        backdropFilter="blur(12.5px);"
        p={10}
      >
        <Box px={3} maxW="full" m={[2, 3]}></Box>
        <Image src="logo.svg" />
        <Box>
          <Image src="delibra.svg" />
        </Box>

        <Spacer />
        <ButtonGroup gap="10">
          <ConnectWalletButton />
        </ButtonGroup>
      </Flex>
    </>
  )
}

export default Navbar
