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
import {
	BiMobileAlt,
	BiCodeBlock,
	BiTimer,
	BiInfinite,
	BiLogoReact,
	BiLogoPython,
	BiLogoWordpress,
	BiLogoMagento,
	BiLogoNodejs,
	BiLogoShopify,
} from "react-icons/bi";
import {
	FaInfinity,
	FaPersonChalkboard,
	FaArrowsDownToPeople,
	FaPeopleArrows,
	FaRegCommentAlt,
	FaMobileAlt,
	FaSalesforce,
	FaApple,
	FaReact,
	FaEthereum,
} from "react-icons/fa";
import { BsPersonHearts, BsBarChartFill, BsPhoneFill } from "react-icons/bs";
import { MdSupportAgent, MdAppShortcut } from "react-icons/md";
import { TbBrandDeliveroo } from "react-icons/tb";
import {
	SiHiveBlockchain,
	SiBlockchaindotcom,
	SiBigcommerce,
	SiJavascript,
	SiHyperledger,
	SiSalesforce,
} from "react-icons/si";
import { RiLuggageCartLine, RiNftLine, RiFlutterFill } from "react-icons/ri";
import { AiFillControl, AiFillContainer } from "react-icons/ai";
import { FcAndroidOs } from "react-icons/fc";
import { TbBrandKotlin } from "react-icons/tb";
import { LiaSalesforce } from "react-icons/lia";
import Card from "./Card";

export default function Services() {
	return (
		<Container maxW="container.xl" p={12}>
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
					cardBg="#f9F9F9"
					width="31%"
					icon={<Icon as={MdAppShortcut} w={10} h={10} />}
					title="App Development"
					iconBg="green"
					icons={[
						{
							icon: (
								<Icon
									as={FcAndroidOs}
									w={7}
									h={7}
									color="blue"
								/>
							),
							text: "Android App",
						},
						{
							icon: <Icon as={FaApple} w={7} h={7} />,
							text: "iOS App",
						},
						{
							icon: <Icon as={RiFlutterFill} w={7} h={7} />,
							text: "Flutter",
						},
						{
							icon: <Icon as={FaMobileAlt} w={7} h={7} />,
							text: "React Native",
						},
						{
							icon: <Icon as={TbBrandKotlin} w={7} h={7} />,
							text: "Kotlin",
						},
					]}
				/>
				<Card
					cardBg="#f9F9F9"
					width="31%"
					icon={<Icon as={BiCodeBlock} w={10} h={10} />}
					title="Web Development"
					iconBg="blue"
					icons={[
						{
							icon: (
								<Icon
									as={SiJavascript}
									w={7}
									h={7}
									color="blue"
								/>
							),
							text: "Javascript",
						},
						{
							icon: <Icon as={BiLogoWordpress} w={7} h={7} />,
							text: "WordPress",
						},
						{
							icon: <Icon as={BiLogoNodejs} w={7} h={7} />,
							text: "Nodejs",
						},
						{
							icon: <Icon as={FaReact} w={7} h={7} />,
							text: "React",
						},
						{
							icon: <Icon as={BiLogoPython} w={7} h={7} />,
							text: "Python",
						},
					]}
				/>
				<Card
					cardBg="#f9F9F9"
					width="31%"
					icon={<Icon as={RiLuggageCartLine} w={10} h={10} />}
					title="Ecommerce Development"
					iconBg="red"
					icons={[
						{
							icon: (
								<Icon
									as={AiFillControl}
									w={7}
									h={7}
									color="blue"
								/>
							),
							text: "Custom Solutions",
						},
						{
							icon: <Icon as={BiLogoMagento} w={7} h={7} />,
							text: "Magento",
						},
						{
							icon: <Icon as={SiBigcommerce} w={7} h={7} />,
							text: "Bigcommerce",
						},
						{
							icon: <Icon as={BiLogoShopify} w={7} h={7} />,
							text: "Shopify",
						},
					]}
				/>
				<Card
					width="31%"
					icon={<Icon as={SiHiveBlockchain} w={10} h={10} />}
					title="Blockchain Development"
					cardBg="#f9F9F9"
					iconBg="blue"
					icons={[
						{
							icon: (
								<Icon
									as={FaEthereum}
									w={7}
									h={7}
									color="blue"
								/>
							),
							text: "Ethereum",
						},
						{
							icon: <Icon as={SiHyperledger} w={7} h={7} />,
							text: "Hyperledger",
						},
						{
							icon: <Icon as={AiFillContainer} w={7} h={7} />,
							text: "Smart Contracts",
						},
						{
							icon: <Icon as={SiBlockchaindotcom} w={7} h={7} />,
							text: "Private Blockchains",
						},
						{
							icon: <Icon as={RiNftLine} w={7} h={7} />,
							text: "NFT Marketplace",
						},
					]}
				/>

				<Card
					width="31%"
					icon={<Icon as={FaSalesforce} w={10} h={10} />}
					title="Salesforce Solutions"
					cardBg="#f9F9F9"
					iconBg="purple"
					icons={[
						{
							icon: (
								<Icon
									as={LiaSalesforce}
									w={7}
									h={7}
									color="blue"
								/>
							),
							text: "Salesforce Development",
						},
						{
							icon: <Icon as={SiSalesforce} w={7} h={7} />,
							text: "Salesforce Consulting",
						},
						{
							icon: <Icon as={FaSalesforce} w={7} h={7} />,
							text: "Salesforce Implementation",
						},
					]}
				/>
				<Card
					width="31%"
					icon={<Icon as={BiInfinite} w={10} h={10} />}
					title="Devops"
					cardBg="#f9F9F9"
					iconBg="gold"
					text="We Adapt DevOps to Track
					Development Process For
					Superior Digital Solution."
				/>
			</Flex>
		</Container>
	);
}
