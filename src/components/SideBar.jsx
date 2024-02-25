import { List, ListItem } from '@chakra-ui/react'
import { AtSignIcon, Edit, LayoutDashboard } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
	return (
		<List color={'white'} fontSize={'1.2em'} spacing={10}>
			<ListItem
				display={'flex'}
				alignItems={'center'}
				p={3}
				borderRadius={5}
				_hover={{ bg: '#60419e' }}
				cursor={'pointer'}
				transition={'all'}
				transitionDuration={'300ms'}
			>
				<LayoutDashboard />
				<NavLink to={'/'}>Dashboard</NavLink>
			</ListItem>
			<ListItem
				display={'flex'}
				alignItems={'center'}
				p={3}
				borderRadius={5}
				_hover={{ bg: '#60419e' }}
				cursor={'pointer'}
				transition={'all'}
				transitionDuration={'300ms'}
			>
				<Edit />
				<NavLink to={'/create'}>New Task</NavLink>
			</ListItem>
			<ListItem
				display={'flex'}
				alignItems={'center'}
				p={3}
				borderRadius={5}
				_hover={{ bg: '#60419e' }}
				cursor={'pointer'}
				transition={'all'}
				transitionDuration={'300ms'}
			>
				<AtSignIcon />
				<NavLink to={'/profile'}>Profile</NavLink>
			</ListItem>
		</List>
	)
}

export default SideBar
