import {
	List,
	ListIcon,
	ListItem,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from '@chakra-ui/react'
import {
	BarChart2,
	CheckCircleIcon,
	Mail,
	MessageCircleWarningIcon,
	StarIcon,
} from 'lucide-react'

export default function Profile() {
	return (
		<Tabs mt={'40px'} p={'20px'} colorScheme='purple' variant={'enclosed'}>
			<TabList>
				<Tab _selected={{ color: 'white', bg: 'blue.900' }}>Account Info</Tab>
				<Tab _selected={{ color: 'white', bg: 'blue.900' }}>Task History</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>
					<List spacing={4}>
						<ListItem display={'flex'} alignItems={'center'}>
							<Mail />
							Email: mario@gmail.com
						</ListItem>
						<ListItem display={'flex'} alignItems={'center'}>
							<BarChart2 />
							Lorem ipsum dolor sit amet, consectetur adipisicing.
						</ListItem>
						<ListItem display={'flex'} alignItems={'center'}>
							<StarIcon />
							Lorem ipsum dolor sit amet.
						</ListItem>
					</List>
				</TabPanel>
				<TabPanel>
					<List spacing={4}>
						<ListItem>
							<ListIcon as={CheckCircleIcon} color='teal.400' />
							Lorem ipsum dolor sit amet consectetur.
						</ListItem>
						<ListItem>
							<ListIcon as={CheckCircleIcon} color='teal.400' />
							Lorem ipsum dolor sit amet consectetur.
						</ListItem>
						<ListItem>
							<ListIcon as={MessageCircleWarningIcon} color='red.400' />
							Lorem ipsum dolor sit amet consectetur.
						</ListItem>
						<ListItem>
							<ListIcon as={CheckCircleIcon} color='teal.400' />
							Lorem ipsum dolor sit amet consectetur.
						</ListItem>
						<ListItem>
							<ListIcon as={MessageCircleWarningIcon} color='red.400' />
							Lorem ipsum dolor sit amet consectetur.
						</ListItem>
						<ListItem>
							<ListIcon as={CheckCircleIcon} color='teal.400' />
							Lorem ipsum dolor sit amet consectetur.
						</ListItem>
					</List>
				</TabPanel>
			</TabPanels>
		</Tabs>
	)
}
