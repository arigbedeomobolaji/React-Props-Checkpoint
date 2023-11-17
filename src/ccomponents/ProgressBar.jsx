/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
import ProgressBar from "react-bootstrap/ProgressBar";

// A progress Bar Component for the App
function MyProgressBar({ value }) {
	return (
		<ProgressBar
			now={value}
			variant="dark"
			label={`${value}%`}
			style={{ height: 13, backgroundColor: "#f9f9f9", color: "#1C061A" }}
		/>
	);
}

export default MyProgressBar;
