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
import { BiMobileAlt, BiCodeBlock } from "react-icons/bi";
import { FaInfinity } from "react-icons/fa";

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

export default function Bio() {
	return (
		<Container maxW={{ base: "100vw", md: "6xl" }} p={12}>
			<SimpleGrid
				columns={{ base: 1, md: 2 }}
				spacing={10}
				justifyContent="space-between"
			>
				<Stack spacing={4}>
					<Text
						textTransform={"uppercase"}
						color={"blue.400"}
						fontWeight={600}
						fontSize={"sm"}
						bg={useColorModeValue("blue.50", "blue.900")}
						p={2}
						alignSelf={"flex-start"}
						rounded={"md"}
					>
						Apex labs
					</Text>
					<Heading>
						Transforming Ideas into Software Solutions
					</Heading>
					<Text color={"gray.500"} fontSize={"lg"}>
						At Apex labs, we're not just a software development
						company; we're your partner in turning your vision into
						reality. With a passion for innovation, a commitment to
						quality, and a team of experienced developers, we
						specialize in crafting cutting-edge software solutions
						tailored to your unique needs.
					</Text>
					<Stack
						spacing={4}
						divider={
							<StackDivider
								borderColor={useColorModeValue(
									"gray.100",
									"gray.700"
								)}
							/>
						}
					>
						<BioDesc
							icon={
								<Icon
									as={IoLogoWebComponent}
									color={"yellow.500"}
									w={5}
									h={5}
								/>
							}
							iconBg={useColorModeValue(
								"yellow.100",
								"yellow.900"
							)}
							text={"Web solutions"}
						/>
						<BioDesc
							icon={
								<Icon
									as={IoPhonePortraitSharp}
									color={"green.500"}
									w={5}
									h={5}
								/>
							}
							iconBg={useColorModeValue("green.100", "green.900")}
							text={"Mobile Planning"}
						/>
						<BioDesc
							icon={
								<Icon
									as={IoCartSharp}
									color={"purple.500"}
									w={5}
									h={5}
								/>
							}
							iconBg={useColorModeValue(
								"purple.100",
								"purple.900"
							)}
							text={"Ecommerce solutions"}
						/>
					</Stack>
				</Stack>
				<Flex gap="5" justify="space-between" wrap="wrap">
					<BioCard
						icon={<Icon as={BiMobileAlt} w={10} h={10} />}
						title={"Mobile Apps"}
						text="Mobile Apps development"
						iconBg="green"
					/>
					<BioCard
						icon={<Icon as={BiCodeBlock} w={10} h={10} />}
						title={"Web development"}
						text="Websites development"
						iconBg="orange"
					/>
					<BioCard
						icon={<Icon as={IoCartSharp} w={10} h={10} />}
						title={"Ecommerce"}
						text="Ecommerce development"
						iconBg="blue"
					/>
					<BioCard
						icon={<Icon as={FaInfinity} w={10} h={10} />}
						title={"DevOps"}
						text="DevOps solutions"
						iconBg="red"
					/>
				</Flex>
			</SimpleGrid>
		</Container>
	);
}
