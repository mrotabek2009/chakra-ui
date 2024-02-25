import { Button, useColorMode } from '@chakra-ui/react'
import { Moon, Sun } from 'lucide-react'

export default function ModeToggle() {
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<header>
			<Button onClick={toggleColorMode} size={'md'}>
				{colorMode === 'light' ? <Moon /> : <Sun />}
			</Button>
		</header>
	)
}
