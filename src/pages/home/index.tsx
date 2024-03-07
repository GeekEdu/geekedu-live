import Navbar from "../navbar"
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

const Home: React.FC = () => {

  return (
    <>
      <Navbar />
      <CircularProgress isIndeterminate color='green.300' />
      <Button colorScheme='blue'>Button</Button>
    </>
  )
}

export default Home
