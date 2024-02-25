import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import theme from './theme'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
	<>
		<ColorModeScript initialColorMode={theme.config.initialColorMode} />
		<ChakraProvider>
			<App />
		</ChakraProvider>
	</>
)
