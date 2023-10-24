import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	Textarea,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BiMap, BiMoney, BiSolidMobile } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const ContactForm = () => {
	const nameRef = useRef(null);
	const emailRef = useRef(null);
	const budgetRef = useRef(null);
	const phoneRef = useRef(null);
	const messageRef = useRef(null);
	const addressRef = useRef(null);
	function submitHandler(e) {
		e.preventDefault();
		const data = {
			email: emailRef.current.value,
			name: nameRef.current.value,
			phone: phoneRef.current.value,
			address: addressRef.current.value,
			budget: budgetRef.current.value,
			message: messageRef.current.value,
		};
		console.log("dara", data);
	}
	return (
		<Flex
			flexWrap="wrap"
			width={{ base: "full", md: "70%" }}
			justify="center"
			align="center"
			bg="#f9f9f9"
			p="5"
			rounded="xl"
		>
			<form
				onSubmit={submitHandler}
				style={{
					margin: 0,
					p: 0,
					width: "100%",
				}}
			>
				<FormControl isRequired mb="5">
					<FormLabel>Name</FormLabel>
					<InputGroup>
						<InputLeftElement>
							<BsPerson />
						</InputLeftElement>
						<Input
							ref={nameRef}
							type="text"
							name="name"
							placeholder="Your Name"
						/>
					</InputGroup>
				</FormControl>
				<FormControl isRequired mb="5">
					<FormLabel>Email</FormLabel>
					<InputGroup>
						<InputLeftElement>
							<MdOutlineEmail />
						</InputLeftElement>
						<Input
							ref={emailRef}
							type="email"
							name="email"
							placeholder="Your Email"
						/>
					</InputGroup>
				</FormControl>
				<FormControl isRequired mb="5">
					<FormLabel>Phone</FormLabel>
					<InputGroup>
						<InputLeftElement>
							<BiSolidMobile />
						</InputLeftElement>
						<Input
							ref={phoneRef}
							type="text"
							name="mobile"
							placeholder="Your phone/cell number"
						/>
					</InputGroup>
				</FormControl>
				<FormControl isRequired mb="5">
					<FormLabel>Address</FormLabel>
					<InputGroup>
						<InputLeftElement>
							<BiMap />
						</InputLeftElement>
						<Input
							ref={addressRef}
							type="text"
							name="address"
							placeholder="Your address"
						/>
					</InputGroup>
				</FormControl>
				<FormControl isRequired mb="5">
					<FormLabel>Your Budget</FormLabel>
					<InputGroup>
						<InputLeftElement>
							<BiMoney />
						</InputLeftElement>
						<Input
							ref={budgetRef}
							type="text"
							name="budget"
							placeholder="Your project budget"
						/>
					</InputGroup>
				</FormControl>
				<FormControl isRequired mb="5">
					<FormLabel>Message</FormLabel>
					<InputGroup>
						<Textarea
							ref={messageRef}
							name="message"
							placeholder="Your Message"
							rows={6}
						/>
					</InputGroup>
				</FormControl>
				<Button
					colorScheme="blue"
					bg="blue.400"
					color="white"
					_hover={{
						bg: "blue.500",
					}}
					type="submit"
					width="full"
				>
					Send Message
				</Button>
			</form>
		</Flex>
	);
};

export default ContactForm;
