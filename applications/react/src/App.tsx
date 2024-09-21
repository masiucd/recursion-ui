import {ChevronRight, File, Folder, FolderOpen} from "lucide-react";
import "./App.css";
import {useCallback, useState} from "react";
import {cn} from "./utils/cn";

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
					{
						name: "2000",
						nodes: [
							{
								name: "Pop",
								nodes: [
									{name: "Britney Spears", nodes: []},
									{name: "Backstreet Boys", nodes: []},
								],
							},
							{
								name: "Rock",
								nodes: [
									{name: "Linkin Park", nodes: []},
									{name: "Nickelback", nodes: []},
								],
							},
						],
					},
					{
						name: "2010",
						nodes: [{name: "Pop", nodes: [{name: "Justin Bieber", nodes: []}]}],
					},
					{
						name: "2020",
						nodes: [{name: "Pop", nodes: [{name: "Dua Lipa", nodes: []}]}],
					},
				],
			},
			{
				name: "Pictures",
				nodes: [
					{
						name: "Selfies",
						nodes: [
							{name: "me.jpg", nodes: []},
							{name: "me2.jpg", nodes: []},
						],
					},
					{
						name: "Vacation",
						nodes: [
							{name: "beach.jpg", nodes: []},
							{name: "mountain.jpg", nodes: []},
						],
					},
				],
			},
		],
	},
]);

function App() {
	let [selectedFile, setSelectedFile] = useState<Node | null>(null);
	const selectFile = useCallback((file: Node): void => {
		setSelectedFile(file);
	}, []);

	return (
		<main>
			<div className="flex max-w-[900px] justify-between">
				<div>
					{nodesData.map((n) => (
						<Node key={n.name} node={n} selectFile={selectFile} />
					))}
				</div>
				<div>
					{selectedFile ? (
						<div>
							<h2>
								<span className="font-semibold">{selectedFile.name}</span> has
								been selected
							</h2>
						</div>
					) : (
						<p>Select a file</p>
					)}
				</div>
			</div>
		</main>
	);
}

function Node({
	node,
	selectFile,
}: {node: Node; selectFile: (file: Node) => void}) {
	let [open, setOpen] = useState(false);
	let hasChildNodes = node.nodes.length > 0;
	return (
		<>
			<button
				className={cn(
					"flex items-center gap-1",
					hasChildNodes ? "mb-3" : "ml-1",
				)}
				type="button"
				onClick={() => {
					if (hasChildNodes) {
						setOpen((p) => !p);
					} else {
						selectFile(node);
					}
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
						<Node key={n.name} node={n} selectFile={selectFile} />
					))}
				</div>
			)}
		</>
	);
}

export default App;
