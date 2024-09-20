import {ChevronRight, File, Folder, FolderOpen} from "lucide-react";
import "./App.css";
import {useState} from "react";

type Node = {name: string; nodes: Node[]};
const nodesData: Node[] = [
	{
		name: "Home",
		nodes: [
			{
				name: "Movies",
				nodes: [
					{
						name: "Action",
						nodes: [
							{name: "Die hard", nodes: []},
							{name: "Rambo", nodes: []},
							{name: "Terminator", nodes: []},
						],
					},
					{name: "Drama", nodes: [{name: "Titanic", nodes: []}]},
					{name: "Comedy", nodes: [{name: "Click", nodes: []}]},
				],
			},
			{
				name: "Music",
				nodes: [
					{name: "2000", nodes: []},
					{name: "2010", nodes: []},
					{name: "2020", nodes: []},
				],
			},
			{name: "Pictures", nodes: []},
		],
	},
];

function App() {
	return (
		<main>
			<div className="flex flex-col">
				{nodesData.map((n) => (
					<Node key={n.name} node={n} />
				))}
			</div>
		</main>
	);
}

export default App;

function Node({node}: {node: Node}) {
	let [open, setOpen] = useState(false);
	return (
		<>
			<div className="flex items-center gap-1 mb-3" key={node.name}>
				{node.nodes.length > 0 && (
					<ChevronRight size={20} className={open ? "rotate-90" : ""} />
				)}
				{node.nodes.length > 0 ? (
					<button
						type="button"
						onClick={() => {
							setOpen((p) => !p);
						}}
					>
						{open ? <FolderOpen size={20} /> : <Folder size={20} />}
					</button>
				) : (
					<File size={20} />
				)}
				<span>{node.name}</span>
			</div>
			{open && (
				<div className="ml-5 mb-3">
					{node.nodes.map((n) => (
						<Node key={n.name} node={n} />
					))}
				</div>
			)}
		</>
	);
}
