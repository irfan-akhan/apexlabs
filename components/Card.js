import React from "react";

import { Flex, Text, Stack } from "@chakra-ui/react";
export default function Card({
	title,
	width,
	text,
	icon,
	iconBg,
	align,
	shadow,
	icons = [],
}) {
	return (
		<Flex
			bg="white"
			color={"black"}
			rounded={"10"}
			p="3"
			shadow={shadow ? "2xl" : "none"}
			flexDir="column"
			align={align ? align : "start"}
			width={{ base: "300px", md: width ? width : "23%" }}
		>
			{icon && (
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
			)}
			<Text my="3" fontWeight={600}>
				{title}
			</Text>
			{text && (
				<Text color={"gray.600"} textAlign={align ? align : "inherit"}>
					{text}
				</Text>
			)}
			{icons && (
				<Flex mt="4" gap="3" direction="column">
					{icons.map((item) => (
						<Flex>
							{item?.icon}
							<Text ml="4">{item.text}</Text>
						</Flex>
					))}
				</Flex>
			)}
		</Flex>
	);
}
