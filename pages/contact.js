import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import { Container, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
const contact = () => {
	return (
		<>
			<Head>
				<title>Apexlabs - contact us</title>
				<meta
					name="description"
					content="Apex labs we mobile application developement"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<main className={`${styles.main} ${inter.className}`}>
				<Container
					maxW="container.xl"
					width={{ base: "full", md: "80%" }}
					p={12}
					textAlign="center"
					centerContent
				>
					<Heading as="h1" mt="3">
						Contact us
					</Heading>
					<Text as="p" my="6">
						We would be happy to hear from you, please fill in the
						form below or mail us your requirements on
					</Text>
					<Text as="p" mb="4">
						info@apexlabs.com
					</Text>
					<ContactForm />
				</Container>
			</main>
			<Footer />
		</>
	);
};

export default contact;
