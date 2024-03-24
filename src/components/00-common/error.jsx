import React from "react";
import { Alert, Container } from "react-bootstrap";

const ErrorMessage = ({ children }) => {
	return (
		<Container className="mt-5">
			<Alert variant="danger">{children || "Something went wrong"}</Alert>
		</Container>
	);
};

export default ErrorMessage;