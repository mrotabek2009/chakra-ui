import {
	Avatar,
	AvatarBadge,
	Button,
	Flex,
	HStack,
	Heading,
	Spacer,
	Text,
	useToast,
} from '@chakra-ui/react'
import { Unlock } from 'lucide-react'
import ModeToggle from '../components/ModeToggle'

const Navbar = () => {
	const toast = useToast()

	const showToast = () => {
		toast({
			title: 'Logged out successfully!',
			duration: 1000,
			position: 'top',
			isClosable: true,
			status: 'success',
			icon: <Unlock />,
		})
	}
	return (
		<Flex as={'nav'} alignItems={'center'}>
			<Heading as={'h1'} fontFamily={'monospace'}>
				Dojo Tasks
			</Heading>
			<Spacer />
			<HStack spacing={4}>
				<Avatar src='/img/mario.png'>
					<AvatarBadge w={'1.3em'} h={'1.3em'} bg={'teal.500'}>
						3
					</AvatarBadge>
				</Avatar>
				<Text>mario@gmail.com</Text>
				<Button colorScheme='red' onClick={showToast}>
					Logout
				</Button>
				<ModeToggle />
			</HStack>
		</Flex>
	)
}

export default Navbar
