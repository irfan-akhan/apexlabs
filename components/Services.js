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
	FaMobileAlt,
} from "react-icons/fa";
import { BsPersonHearts, BsBarChartFill, BsPhoneFill } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import { TbBrandDeliveroo } from "react-icons/tb";
import Card from "./Card";

export default function Services() {
	return (
		<Container maxW="container.xl" p={12} bg="#483285">
			<Flex
				flexDir="column"
				// columns={{ base: 1, md: 2 }}
				spacing={10}
				mb="6"
				align="center"
				justifyContent="center"
			>
				{/* <Stack spacing={4}> */}
				<Heading my="3">Services We Offer</Heading>
				{/* <Text color={"gray.700"} fontSize={"lg"}>
					Services That We Deliver Makes Us Dignified As One of The
					Top App Development Companies.
				</Text> */}
				{/* </Stack> */}
			</Flex>
			<Flex gap="5" wrap="wrap" justify="center">
				<Card
					width="31%"
					icon={<Icon as={BsBarChartFill} w={10} h={10} />}
					title="App Development"
					iconBg="green"
					icons={[
						{
							icon: (
								<Icon
									as={FaMobileAlt}
									w={7}
									h={7}
									color="blue"
								/>
							),
							text: "Android App",
						},
						{
							icon: <Icon as={FaMobileAlt} w={7} h={7} />,
							text: "iOS App",
						},
						{
							icon: <Icon as={FaMobileAlt} w={7} h={7} />,
							text: "Flutter",
						},
						{
							icon: <Icon as={FaMobileAlt} w={7} h={7} />,
							text: "React Native",
						},
						{
							icon: <Icon as={FaMobileAlt} w={7} h={7} />,
							text: "Kotlin",
						},
					]}
				/>
				<Card
					width="31%"
					icon={<Icon as={BsPersonHearts} w={10} h={10} />}
					title="Web Development"
					iconBg="blue"
					icons={[
						{
							icon: (
								<Icon
									as={FaPeopleArrows}
									w={7}
									h={7}
									color="blue"
								/>
							),
							text: "Javascript",
						},
						{
							icon: <Icon as={FaPeopleArrows} w={7} h={7} />,
							text: "WordPress",
						},
						{
							icon: <Icon as={FaPeopleArrows} w={7} h={7} />,
							text: "Nodejs",
						},
						{
							icon: <Icon as={FaPeopleArrows} w={7} h={7} />,
							text: "React",
						},
						{
							icon: <Icon as={FaPeopleArrows} w={7} h={7} />,
							text: "Python",
						},
					]}
				/>
				<Card
					width="31%"
					icon={<Icon as={FaPeopleArrows} w={10} h={10} />}
					title="Ecommerce Development"
					iconBg="red"
					icons={[
						{
							icon: (
								<Icon
									as={FaPeopleArrows}
									w={7}
									h={7}
									color="blue"
								/>
							),
							text: "Custom Solutions",
						},
						{
							icon: <Icon as={FaPeopleArrows} w={7} h={7} />,
							text: "Magento",
						},
						{
							icon: <Icon as={FaPeopleArrows} w={7} h={7} />,
							text: "Bigcommerce",
						},
						{
							icon: <Icon as={FaPeopleArrows} w={7} h={7} />,
							text: "Ubercart",
						},
						{
							icon: <Icon as={FaPeopleArrows} w={7} h={7} />,
							text: "Shopify",
						},
					]}
				/>
				<Card
					width="31%"
					icon={<Icon as={BiTimer} w={10} h={10} />}
					title="Blockchain Development"
					iconBg="orange"
				/>

				<Card
					width="31%"
					icon={<Icon as={MdSupportAgent} w={10} h={10} />}
					title="Salesforce Solutions"
					iconBg="purple"
					icons={[
						{
							icon: (
								<Icon
									as={FaPeopleArrows}
									w={7}
									h={7}
									color="blue"
								/>
							),
							text: "Salesforce Development",
						},
						{
							icon: <Icon as={FaPeopleArrows} w={7} h={7} />,
							text: "Salesforce Consulting",
						},
						{
							icon: <Icon as={FaPeopleArrows} w={7} h={7} />,
							text: "Salesforce Implementation",
						},
					]}
				/>
				<Card
					width="31%"
					icon={<Icon as={FaRegCommentAlt} w={10} h={10} />}
					title="Devops"
					iconBg="gold"
					text="We Adapt DevOps to Track
					Development Process For
					Superior Digital Solution."
				/>
			</Flex>
		</Container>
	);
}
