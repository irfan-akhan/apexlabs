"use client";

import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";

export default function QuoteBanner() {
	return (
		<Container width="container.xl" centerContent pos="relative">
			<Box
				textAlign="center"
				py={10}
				px={6}
				bg="#000"
				width="70vw"
				rounded="2xl"
				position="absolute"
				color="#fff"
				top={"5vh"}
			>
				<Heading as="h2" size="xl">
					{`Let’s Create Big Stories Together`}
				</Heading>
				<Text my="18">
					{`Mobile is in our nerves. We don’t just build apps, we create
                    brand. Choosing us will be your best decision.`}
				</Text>
				<Button
					display={{ base: "none", md: "inline-flex" }}
					size="lg"
					fontWeight={400}
					color={"white"}
					bg={"green.400"}
					as={"a"}
					href={"/contact"}
					_hover={{
						bg: "green.300",
					}}
					textTransform="capitalize"
				>
					Get a free quote
				</Button>{" "}
			</Box>
		</Container>
	);
}
