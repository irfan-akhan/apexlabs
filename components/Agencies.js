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

const BioDesc = ({ text, icon, iconBg }) => {
	return (
		<Stack direction={"row"} align={"center"}>
			<Flex
				w={8}
				h={8}
				align={"center"}
				justify={"center"}
				rounded={"full"}
				bg={iconBg}
			>
				{icon}
			</Flex>
			<Text fontWeight={600}>{text}</Text>
		</Stack>
	);
};
const BioCard = ({ title, text, icon, iconBg }) => {
	return (
		<Stack>
			<Flex
				w={16}
				h={16}
				align={"center"}
				justify={"center"}
				color={"white"}
				rounded={"full"}
				bg={iconBg}
				mb={1}
			>
				{icon}
			</Flex>
			<Text fontWeight={600}>{title}</Text>
			<Text color={"gray.600"}>{text}</Text>
		</Stack>
	);
};
export default function Agencies() {
	return (
		<Container p={12} maxW="container.xl" bg="gray.300" minH="70vh">
			<SimpleGrid
				columns={{ base: 1, md: 2 }}
				spacing={10}
				justifyContent="space-between"
			>
				<Stack
					spacing={4}
					textAlign={{ base: "center", md: "inherit" }}
				>
					<Heading fontSize={{ base: "1.4rem", md: "2.5rem" }}>
						Who We Work With
					</Heading>
					<Text color={"gray.500"} fontSize={"lg"}>
						As a leading mobile app development company in USA and
						India, we worked with 2000+ businesses either it is a
						start-up or enterprise and delivers the best solution in
						the industry. At Hyperlink InfoSystem, we offer a broad
						range of app development services based on business
						requirements.
					</Text>
				</Stack>
				<Flex
					gap="2"
					justify="center"
					wrap="wrap"
					width={{ base: "full", md: "40vw" }}
				>
					<Flex
						align={"center"}
						justify={"center"}
						p="5"
						width={{ base: "80%", md: "30%" }}
						rounded="lg"
						bg="white"
						flexDir="column"
					>
						<Icon
							as={IoLogoWebComponent}
							// color={"yellow.500"}
							w={"5rem"}
							h={"5rem"}
						/>
						<Text my="3" fontWeight={600}>
							Start ups
						</Text>
					</Flex>
					<Flex
						align={"center"}
						justify={"center"}
						p="5"
						width={{ base: "80%", md: "30%" }}
						rounded="lg"
						bg="white"
						flexDir="column"
					>
						<Icon
							as={IoLogoWebComponent}
							color={"yellow.500"}
							w={"5rem"}
							h={"5rem"}
						/>
						<Text my="3" fontWeight={600}>
							Agencies
						</Text>
					</Flex>
					<Flex
						align={"center"}
						justify={"center"}
						p="5"
						width={{ base: "80%", md: "30%" }}
						rounded="lg"
						bg="white"
						flexDir="column"
					>
						<Icon
							as={IoLogoWebComponent}
							color={"yellow.500"}
							w={"5rem"}
							h={"5rem"}
						/>
						<Text my="3" fontWeight={600} textAlign="center">
							Enterprise <br /> Business
						</Text>
					</Flex>
				</Flex>
			</SimpleGrid>
		</Container>
	);
}
