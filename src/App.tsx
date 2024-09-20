import {ChevronRight, File, Folder, FolderOpen} from "lucide-react";
import "./App.css";
import {type ClassValue, clsx} from "clsx";
import {useState} from "react";
import {twMerge} from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

type Node = {name: string; nodes: Node[]};
let nodesData: readonly Node[] = Object.freeze([
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
]);

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
	let hasChildNodes = node.nodes.length > 0;
	return (
		<>
			<button
				// TODO
				className={cn("mb-3 flex items-center gap-1", !hasChildNodes && "ml-1")}
				type="button"
				onClick={() => {
					setOpen((p) => !p);
				}}
				key={node.name}
			>
				<>
					{hasChildNodes && (
						<ChevronRight size={20} className={open ? "rotate-90" : ""} />
					)}
					{hasChildNodes ? (
						open ? (
							<FolderOpen size={20} />
						) : (
							<Folder size={20} />
						)
					) : (
						<File size={20} />
					)}
					<span>{node.name}</span>
				</>
			</button>
			{open && (
				<div className="mb-3 ml-5">
					{node.nodes.map((n) => (
						<Node key={n.name} node={n} />
					))}
				</div>
			)}
		</>
	);
}
