"use client";

import { Container, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { FaUserGraduate } from "react-icons/fa";
import { BsMegaphone } from "react-icons/bs";
import { RiShoppingBagFill } from "react-icons/ri";
import { TbWorldWww } from "react-icons/tb";
import {
	MdOutlineRealEstateAgent,
	MdOutlineRestaurantMenu,
} from "react-icons/md";
import { BiMapPin } from "react-icons/bi";
import { CgGym } from "react-icons/cg";
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
					icon={<Icon as={RiShoppingBagFill} w={10} h={10} />}
					title="Retail & Ecommerce"
					iconBg="green"
				/>
				<Card
					shadow={true}
					align="center"
					icon={<Icon as={FaUserGraduate} w={10} h={10} />}
					title="Education & e-learning"
					iconBg="blue"
				/>

				<Card
					shadow={true}
					align="center"
					icon={<Icon as={CgGym} w={10} h={10} />}
					title="Healthcare & Fitness"
					iconBg="orange"
				/>

				<Card
					shadow={true}
					align="center"
					icon={<Icon as={TbWorldWww} w={10} h={10} />}
					title="Social Networking"
					iconBg="red"
				/>
				<Card
					shadow={true}
					align="center"
					icon={<Icon as={BsMegaphone} w={10} h={10} />}
					title="On-Demand Solutions"
					iconBg="purple"
				/>
				<Card
					shadow={true}
					align="center"
					icon={<Icon as={MdOutlineRealEstateAgent} w={10} h={10} />}
					title="Real Estate"
					iconBg="teal"
				/>
				<Card
					shadow={true}
					align="center"
					icon={<Icon as={MdOutlineRestaurantMenu} w={10} h={10} />}
					title="Food & Restaurant"
					iconBg="red"
				/>
				<Card
					shadow={true}
					align="center"
					icon={<Icon as={BiMapPin} w={10} h={10} />}
					title="Travel & Hospitality"
					iconBg="green.400"
				/>
			</Flex>
		</Container>
	);
}
