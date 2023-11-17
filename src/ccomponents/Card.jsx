/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MyProgressBar from "./ProgressBar";
/* 
// A Card Component Created with React-Bootstrap which has name,
	nationality,
	jerseyNumber,
	club,
	rating,
	clubColor,
	countryLogo,
	playerImage,
	position,
	age,
as props propery */
function MyCard({
	name,
	nationality,
	jerseyNumber,
	club,
	rating,
	clubColor,
	countryLogo,
	playerImage,
	position,
	age,
}) {
	return (
		<Card style={{ width: "28rem" }}>
			<div
				className="p-4 bg-gradient position-relative"
				style={{ background: "#1C061A" }}
			>
				<div className="bg-light bg-gradient rounded-3">
					<Card.Img variant="top" src={playerImage} />
				</div>
				<div
					className="position-absolute top-0  start-0 shadow-lg text-light bg-gradient p-2"
					style={{ backgroundColor: "#3E2A3E" }}
				>
					<h6 className="px-3"> {position}</h6>
				</div>
				<div className="position-absolute top-0 end-0 mx-5 mt-5 pt-5  rounded-3">
					<div className="d-flex justify-content-center align-items-center flex-column">
						<h6 className="bs-primary-bg-subtle fs-5">
							{nationality}
						</h6>
						<img
							src={countryLogo}
							alt={name}
							height={50}
							width={80}
						/>
					</div>
				</div>
			</div>
			<div
				className="bg-gradient"
				style={{ backgroundColor: "#1C061A", color: "white" }}
			>
				<Card.Body>
					<Card.Title className="text-end mx-5 px-4 ">
						<h1
							className="position-absolute end-0 mx-5 shadow bg-dark bg-transparent bg-gradient"
							style={{
								fontSize: 90,
								fontWeight: "bolder",
								marginTop: "-100px",
								zIndex: 3,
								color: "#755472",
								fontFamily: "cursive",
							}}
						>
							{jerseyNumber}
						</h1>
					</Card.Title>
					<Card.Title
						className="d-flex gap-2 flex-column align-items-start align-items-md-center flex-md-row w-100"
						style={{ paddingTop: 20 }}
					>
						<div>
							<h3 className="flex-grow-1" style={{ flex: 1 }}>
								{name}
							</h3>
							<div className="d-flex justify-align-content-start px-3">
								<div className="h6 pe-3">Age</div>
								<div className="h6">{age}</div>
							</div>
							<div className="d-flex justify-align-content-start px-3">
								<div className="h6 pe-3">Club</div>
								<div className="h6">{club}</div>
							</div>
						</div>

						<div
							className="flex-grow-1 m-2 w-100"
							style={{ flex: 2 }}
						>
							<p>Strength</p>
							<MyProgressBar value={50 + rating * 5} />
							<p>Agility</p>
							<MyProgressBar value={50 + rating * 5} />
							<p>Stamina</p>
							<MyProgressBar value={50 + rating * 5} />
						</div>
					</Card.Title>
					<div className="d-grid">
						<Button
							variant="primary"
							size="lg"
							style={{
								backgroundColor: "#1C061A",
								borderColor: "black",
							}}
							className="shadow-lg bg-gradient"
						>
							View Full Profile
						</Button>
					</div>
				</Card.Body>
			</div>
		</Card>
	);
}

MyCard.defaultProps = {
	name: "Lionel Messi",
	nationality: "Universe",
	jerseyNumber: 10,
	club: "club",
	rating: 0,
	clubColor: "Red",
	countryLogo: "No COuntry Logo",
	playerImage: "No Image",
	position: "Forward",
	age: 0,
};

export default MyCard;
