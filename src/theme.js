import { extendTheme } from '@chakra-ui/react'

// A.
// System sets initial value.
// App subscribes to system color mode changes.
const config = {
	initialColorMode: 'system',
	useSystemColorMode: true,
}

const theme = extendTheme({ config })

export default theme
