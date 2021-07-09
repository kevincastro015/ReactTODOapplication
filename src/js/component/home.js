import React, { useState } from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	// const [render, setRender] = useState(true);
	const [todo, setTodo] = useState("");
	const [list, setList] = useState(["Mary", "Jane"]);

	return (
		<div
			className="mt-5 bg-light mx-auto p-4 text-secondary"
			style={{ width: 400 }}>
			<h1 className="text-center">todos</h1>
			<div className="border text-center ">
				<input
					className="input"
					placeholder="What needs to be done"
					onChange={e => setTodo(e.target.value)}
					value={todo}
				/>
				<button
					className="btn btn-success text-center "
					onClick={() => {
						setList([...list, todo]);
						setTodo("");
					}}>
					Add
				</button>
				{list.map((element, index) => {
					return (
						<div
							className="border-top border-bottom text-secondary text-center"
							key={index}>
							{element}
							<button
								onClick={() =>
									setList(
										list.filter(item => element !== item)
									)
								}>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
					);
				})}
				<div className="counter text-secondary text-left">
					Item(s) Left {list.length}
				</div>
			</div>
			<div
				className="border mx-auto"
				style={{ width: "98%", height: 3 }}></div>
			<div
				className="border mx-auto"
				style={{ width: "96%", height: 3 }}></div>
		</div>
	);
}
