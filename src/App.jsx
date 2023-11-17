/* eslint-disable react/jsx-key */
import Card from "./ccomponents/Card";
import data from "./playerData.json";
// We imported data.js from playerData.json
// and map over the data
function App() {
	return (
		<section className="d-flex justify-content-center gap-3 flex-wrap my-4">
			{data.map((player) => (
				<Card {...player} />
			))}
		</section>
	);
}

export default App;
