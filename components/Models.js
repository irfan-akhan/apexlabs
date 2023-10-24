import { Container, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaMoneyBillTransfer, FaMoneyBills } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";

const Models = () => {
	return (
		<Container maxW="container.xl" p={12}>
			<Heading as="h2">Partnership Models</Heading>
			<Text as="p" fontSize="xl" my="5">
				Apexlabs offers custom web and mobile app development services
				to wide range of industries and businesses. Know more about our
				partnership models.
			</Text>
			<Flex gap="5" wrap="wrap" justify="space-between">
				<Card
					shadow={true}
					icon={
						<Icon as={FaMoneyBills} color="orange" w={10} h={10} />
					}
					title="Fixed Price Model"
					text="In this model, the project scope of work with its associated cost and timeline is defined before development starts. This is a preferred model for longer periods of engagement. Client always has peace of mind of knowing the project will remain on the same budget as agreed. This model suits best to clients who have a perfect vision of their requirement."
					// iconBg="green"
					width="32%"
				/>
				<Card
					shadow={true}
					icon={
						<Icon
							as={FaMoneyBillTransfer}
							color="red"
							w={10}
							h={10}
						/>
					}
					title="Hire Dedicated Model"
					text="This is very classic and simple way of engagement wherein clients pay for the number of hours the app developer works on project. Clients easily start the project as they don't have to walk in with detailed specifications. This model also allows client to update new features any time and clients know exactly what they’re paying for. This drives a lot more trust and communication."
					// iconBg="blue"
					width="32%"
				/>
				<Card
					shadow={true}
					icon={
						<Icon as={FaMoneyCheckAlt} color="teal" w={10} h={10} />
					}
					title="On Site Development Model"
					text=" This model is preferred when clients want additional temporary resources for on-site development. This contract type ensures the engagement is cost-effective and a face-to-face interactions with developers. This model helps in achieving the deadline on time as there is continuous communication during the whole process."
					// iconBg="red"
					width="32%"
				/>
			</Flex>
		</Container>
	);
};

export default Models;
