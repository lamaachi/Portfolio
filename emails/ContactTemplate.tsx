import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const ContactTemplate: React.FC<Readonly<ContactTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <Html>
    <Head />
    <Body
      style={{
        backgroundColor: "#fff",
        color: "#000",
      }}
    >
      <Container
        style={{
          padding: "50px",
          border: "1px solid #eee",
          borderRadius: "5px",
        }}
      >
        <Heading>New message from {name}</Heading>
        <Text>Email: {email}</Text>
        <Text>Message: {message}</Text>
      </Container>
    </Body>
  </Html>
);
