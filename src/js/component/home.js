import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [render, setRender] = useState(true);
	const [todo, setTodo] = useState("");
	const [list, setList] = useState(["Mary", "Jane"]);

	return (
		<div className="text-center mt-5">
			<input
				className="input"
				placeholder="What needs to be done"
				onChange={e => setTodo(e.target.value)}
			/>
			<button
				className="btn btn-success"
				onClick={() => {
					setList([...list, todo]);
					setTodo("");
				}}>
				Add
			</button>
			{list.map((element, index) => {
				return <div key={index}>{element}</div>;
			})}
		</div>
	);
}
