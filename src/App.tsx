import {ChevronRight, File, Folder, FolderOpen} from "lucide-react";
import "./App.css";

type Node = {name: string; nodes: Node[]};
const nodesData: Node[] = [
	{
		name: "Home",
		nodes: [
			{
				name: "Movies",
				nodes: [
					{name: "Action", nodes: []},
					{name: "Drama", nodes: []},
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
					<Node key={n.name} node={n} className="ml-5" />
				))}
			</div>
		</main>
	);
}

export default App;

function Node({node, className}: {node: Node; className?: string}) {
	return (
		<>
			<div className="flex items-center gap-1 mb-3" key={node.name}>
				<ChevronRight size={20} />
				<Folder size={20} />
				<span>{node.name}</span>
			</div>
			<div className="ml-5 mb-3">
				{node.nodes.map((n) => (
					<Node key={n.name} node={n} />
				))}
			</div>
		</>
	);
}
