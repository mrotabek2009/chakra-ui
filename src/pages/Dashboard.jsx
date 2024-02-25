import {
	Avatar,
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Divider,
	Flex,
	HStack,
	Heading,
	SimpleGrid,
	Text,
} from '@chakra-ui/react'
import { EditIcon, Tv } from 'lucide-react'
import { useLoaderData } from 'react-router-dom'

export default function Dashboard() {
	const tasks = useLoaderData()

	return (
		<SimpleGrid
			mt={10}
			mx={10}
			columns={4}
			spacing={10}
			minChildWidth={'300px'}
		>
			{tasks &&
				tasks.map(task => (
					<Card
						key={task.id}
						borderTop={'8px'}
						_light={{ borderTop: 'purple.400' }}
						_dark={{ borderTop: 'blue.900' }}
					>
						<CardHeader>
							<Flex gap={10}>
								<Avatar width={50} height={50} src={task.img} />
								<Box>
									<Heading as={'h3'} size={'md'}>
										{task.title}
									</Heading>
									<Text>by {task.author}</Text>
								</Box>
							</Flex>
						</CardHeader>
						<CardBody>
							<Text>{task.description}</Text>
						</CardBody>

						<Divider w={'90%'} mx={'auto'} />

						<CardFooter>
							<HStack>
								<Button variant={'outline'} leftIcon={<Tv />}>
									Watch
								</Button>
								<Button leftIcon={<EditIcon />}>Comment</Button>
							</HStack>
						</CardFooter>
					</Card>
				))}
		</SimpleGrid>
	)
}

export const tasksLoader = async () => {
	const res = await fetch('http://localhost:3000/tasks')

	return res.json()
}
