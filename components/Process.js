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

export default function Process() {
	return (
		<Container maxW="container.xl" p={12}>
			<Flex
				flexDir="column"
				spacing={10}
				mb="6"
				align="center"
				justifyContent="center"
			>
				<Heading my="3">Process We Follow</Heading>
			</Flex>
			<Flex gap="5" wrap="wrap" justify="center">
				<Card
					align="center"
					icon={<Icon as={BsBarChartFill} w={10} h={10} />}
					title="1. Requirement Gathering"
					text="We follow the first and foremost priority of gathering requirements, resources, and information to begin our project."
					iconBg="green"
				/>
				<Card
					align="center"
					icon={<Icon as={BsPersonHearts} w={10} h={10} />}
					title="2.UI/UX Design"
					text="We create catchy and charming designs with the latest tools of designing to make it a best user-friendly experience."
					iconBg="blue"
				/>
				<Card
					align="center"
					icon={<Icon as={FaPeopleArrows} w={10} h={10} />}
					title="3.Prototype"
					text="After designing, you will get your prototype, which will be sent ahead for the development process for the product."
					iconBg="red"
				/>
				<Card
					align="center"
					icon={<Icon as={BiTimer} w={10} h={10} />}
					title="4.Timely Deliver"
					text="We understand the importance of time-to-market. Our agile development methodology ensures that we meet deadlines and deliver results efficiently."
					iconBg="orange"
				/>
				<Card
					align="center"
					icon={<Icon as={FaRegCommentAlt} w={10} h={10} />}
					title="5.Development"
					text="Development of mobile application/web/blockchain started using latest tools and technologies with transparency."
					iconBg="gold"
				/>
				<Card
					align="center"
					icon={<Icon as={MdSupportAgent} w={10} h={10} />}
					title="6.Quality Assurance"
					text="Hyperlink values quality and provides 100% bug free application with no compromisation in it"
					iconBg="purple"
				/>
				<Card
					align="center"
					icon={<Icon as={BiCodeBlock} w={10} h={10} />}
					title="7.Deployment"
					text="After trial and following all processes, your app is ready to launch on the App store or Play Store."
					iconBg="teal"
				/>
				<Card
					align="center"
					icon={<Icon as={TbBrandDeliveroo} w={10} h={10} />}
					title="8.Support & Maintenance"
					text="Our company offers you all support and the team is always ready to answer every query after deployment."
					iconBg="green.400"
				/>
			</Flex>
		</Container>
	);
}