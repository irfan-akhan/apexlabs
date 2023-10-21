"use client";

import {
	Container,
	SimpleGrid,
	Flex,
	Heading,
	Text,
	Stack,
	StackDivider,
	Icon,
	useColorModeValue,
} from "@chakra-ui/react";
import {
	IoLogoWebComponent,
	IoCartSharp,
	IoPhonePortraitSharp,
} from "react-icons/io5";
import { BiMobileAlt, BiCodeBlock, BiTimer } from "react-icons/bi";
import {
	FaInfinity,
	FaPersonChalkboard,
	FaArrowsDownToPeople,
	FaPeopleArrows,
	FaRegCommentAlt,
} from "react-icons/fa";
import { BsPersonHearts, BsBarChartFill } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import { TbBrandDeliveroo } from "react-icons/tb";
import Card from "./Card";

export default function Features() {
	return (
		<Container maxW="container.xl" p={12} bg="gray.300">
			<Flex
				flexDir="column"
				// columns={{ base: 1, md: 2 }}
				spacing={10}
				mb="6"
				align="center"
				justifyContent="center"
			>
				{/* <Stack spacing={4}> */}
				<Heading my="3">Our Key Features</Heading>
				<Text color={"gray.700"} fontSize={"lg"}>
					Services That We Deliver Makes Us Dignified As One of The
					Top App Development Companies.
				</Text>
				{/* </Stack> */}
			</Flex>
			<Flex gap="5" wrap="wrap" justify="center">
				<Card
					icon={<Icon as={BsBarChartFill} w={10} h={10} />}
					title="Quality and Innovation"
					text="We are committed to delivering high-quality software that leverages the latest technologies and industry best practices. Innovation is in our DNA, and we continually explore new solutions to meet your evolving needs."
					iconBg="green"
				/>
				<Card
					icon={<Icon as={BsPersonHearts} w={10} h={10} />}
					title="Client-Centric Approach"
					text="Your success is our success. We work closely with you to understand your goals, challenges, and vision, ensuring that the software we build aligns perfectly with your objectives"
					iconBg="blue"
				/>
				<Card
					icon={<Icon as={FaPeopleArrows} w={10} h={10} />}
					title="Experienced Team"
					text=" Our team comprises seasoned professionals with a proven track record in software development. We bring a wealth of expertise to every project."
					iconBg="red"
				/>
				<Card
					icon={<Icon as={BiTimer} w={10} h={10} />}
					title="Timely Deliver"
					text="We understand the importance of time-to-market. Our agile development methodology ensures that we meet deadlines and deliver results efficiently."
					iconBg="orange"
				/>
				<Card
					icon={<Icon as={FaRegCommentAlt} w={10} h={10} />}
					title="Transparent Communication"
					text=" We maintain open and transparent communication throughout the project, keeping you informed every step of the way."
					iconBg="gold"
				/>
				<Card
					icon={<Icon as={MdSupportAgent} w={10} h={10} />}
					title="Excellent Support"
					text="We are always there to their to assist our clients in every possible way to meet client's expectation and end needs "
					iconBg="purple"
				/>
				<Card
					icon={<Icon as={BiCodeBlock} w={10} h={10} />}
					title="Agile Development"
					text="We follow the Agile Development process that helps us to deliver the project with utmost quality and solid product for reliable and scalable business."
					iconBg="teal"
				/>
				<Card
					icon={<Icon as={TbBrandDeliveroo} w={10} h={10} />}
					title="Quality Devilery"
					text="We believe in delivering quality products to our clients by assuring all their project specifications at the best industry competitive price."
					iconBg="green.400"
				/>
			</Flex>
		</Container>
	);
}
