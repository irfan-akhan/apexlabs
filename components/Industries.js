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

export default function Industries() {
	return (
		<Container maxW="container.xl" p={12}>
			<Flex
				flexDir="column"
				spacing={10}
				mb="6"
				align="center"
				justifyContent="center"
			>
				<Heading my="3">Industries We Serve</Heading>
				<Text fontSize="lg" color={"gray.700"}>
					Here, we make almost every genre of applications. You name
					it and we build it.
				</Text>
			</Flex>
			<Flex gap="5" wrap="wrap" justify="center">
				<Card
					shadow={true}
					align="center"
					icon={<Icon as={BsBarChartFill} w={10} h={10} />}
					title="Retail, Ecommerce"
					iconBg="green"
				/>
				<Card
					shadow={true}
					align="center"
					icon={<Icon as={BsPersonHearts} w={10} h={10} />}
					title="Education & e-learning"
					iconBg="blue"
				/>

				<Card
					shadow={true}
					align="center"
					icon={<Icon as={BiTimer} w={10} h={10} />}
					title="Healthcare & Fitness"
					iconBg="orange"
				/>

				<Card
					shadow={true}
					align="center"
					icon={<Icon as={MdSupportAgent} w={10} h={10} />}
					title="Social Networking"
					iconBg="red"
				/>
				<Card
					shadow={true}
					align="center"
					icon={<Icon as={MdSupportAgent} w={10} h={10} />}
					title="On-Demand Solutions"
					iconBg="purple"
				/>
				<Card
					shadow={true}
					align="center"
					icon={<Icon as={BiCodeBlock} w={10} h={10} />}
					title="Real Estate"
					iconBg="teal"
				/>
				<Card
					shadow={true}
					align="center"
					icon={<Icon as={TbBrandDeliveroo} w={10} h={10} />}
					title="Travel & Hospitality"
					iconBg="green.400"
				/>
				<Card
					shadow={true}
					align="center"
					icon={<Icon as={TbBrandDeliveroo} w={10} h={10} />}
					title="Food & Restaurant"
					iconBg="green.400"
				/>
			</Flex>
		</Container>
	);
}
