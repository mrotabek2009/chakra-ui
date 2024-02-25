import { Grid, GridItem } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'

export default function RootLayout() {
	return (
		<Grid templateColumns={'repeat(6, 1fr)'} _light={{ bg: 'gray.50' }}>
			<GridItem
				as={'aside'}
				colSpan={{ base: 6, lg: 2, xl: 1 }}
				_light={{ bg: 'purple.400' }}
				_dark={{ bg: 'blue.900' }}
				minH={{ lg: '100vh' }}
				p={{ base: '20px', lg: '30px' }}
				borderTopRightRadius={'30px'}
				borderBottomRightRadius={'30px'}
			>
				<SideBar />
			</GridItem>
			<GridItem colSpan={{ base: 6, lg: 4, xl: 5 }} as={'main'} p={'40px'}>
				<Navbar />
				<Outlet />
			</GridItem>
		</Grid>
	)
}
