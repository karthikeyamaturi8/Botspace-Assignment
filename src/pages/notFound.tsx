import Notfound from "../assets/notFound.jpg"
import { Image, Flex } from "@chakra-ui/react"
const NotFound = () => {

    return (
        <Flex w={"100%"} h={"100%"} justifyContent={"center"} alignItems={"center"} >
            <Image src={Notfound} width={"50%"} height={"50%"} />
        </Flex>
    )
}

export default NotFound