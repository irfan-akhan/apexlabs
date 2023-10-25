"use client";

import {
	Box,
	chakra,
	Container,
	Stack,
	Text,
	Flex,
	useColorModeValue,
	VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";
import Image from "next/image";

const SocialButton = ({ children, label, href }) => {
	return (
		<chakra.button
			bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
			rounded={"full"}
			w={8}
			h={8}
			cursor={"pointer"}
			as={"a"}
			href={href}
			display={"inline-flex"}
			alignItems={"center"}
			justifyContent={"center"}
			transition={"background 0.3s ease"}
			_hover={{
				bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
			}}
		>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</chakra.button>
	);
};

export default function Footer() {
	return (
		<Box
			mt="10rem"
			pt="15rem"
			color={useColorModeValue("gray.700", "gray.200")}
		>
			<Container
				as={Stack}
				maxW={"6xl"}
				py={4}
				spacing={4}
				justify={"center"}
				align={"center"}
			>
				<Image
					src="/logo.png"
					alt="apexlabs logo"
					width="200"
					height="150"
				/>

				<Stack direction={"row"} spacing={6}>
					<Box as="a" href={"/"}>
						Home
					</Box>
					<Box as="a" href={"#about"}>
						About
					</Box>
					<Box as="a" href={"/contact"}>
						Contact
					</Box>
				</Stack>
			</Container>

			<Box
				borderTopWidth={1}
				borderStyle={"solid"}
				borderColor={useColorModeValue("gray.200", "gray.700")}
			>
				<Container
					as={Stack}
					maxW={"6xl"}
					py={4}
					direction={{ base: "column", md: "row" }}
					spacing={4}
					justify={{ base: "center", md: "center" }}
					align={{ base: "center", md: "center" }}
				>
					{/* <Text>© 2022 Chakra Templates. All rights reserved</Text> */}
					<Flex justify="center" gap="3">
						<SocialButton label={"Twitter"} href={"#"}>
							<FaTwitter />
						</SocialButton>
						<SocialButton label={"YouTube"} href={"#"}>
							<FaYoutube />
						</SocialButton>
						<SocialButton label={"Instagram"} href={"#"}>
							<FaInstagram />
						</SocialButton>
					</Flex>
				</Container>
			</Box>
		</Box>
	);
}
