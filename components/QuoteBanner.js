"use client";

import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";

export default function QuoteBanner() {
	return (
		<Container
			width={{ base: "sm", md: "container.xl" }}
			centerContent
			pos="relative"
		>
			<Flex
				direction="column"
				textAlign="center"
				justify="center"
				align="center"
				py={{ md: 10 }}
				px={6}
				// bg="#000"
				shadow="2xl"
				width={{ base: "90%", md: "70vw" }}
				rounded="2xl"
				position="absolute"
				color="#000"
				top={"5vh"}
			>
				<Heading as="h2" size="xl">
					{`Let’s Create Big Stories Together`}
				</Heading>
				<Text my="18" mx="auto" width={{ base: "90%", md: "70%" }}>
					{`Mobile is in our nerves. We don’t just build apps, we create
                    brand. Choosing us will be your best decision.`}
				</Text>
				<Button
					size={{ base: "md" }}
					w="50%"
					fontWeight={400}
					color={"white"}
					bg={"green.400"}
					as={"a"}
					mb="4"
					href={"/contact"}
					_hover={{
						bg: "green.300",
					}}
					textTransform="capitalize"
				>
					Get a free quote
				</Button>{" "}
			</Flex>
		</Container>
	);
}
