import {ChevronRight, File, Folder, FolderOpen} from "lucide-react";
import "./App.css";

const nodesData = [
	{
		name: "Home",
		nodes: [
			{name: "Movies", nodes: []},
			{name: "Music", nodes: []},
			{name: "Pictures", nodes: []},
		],
	},
];

function App() {
	return (
		<main>
			<div className="flex flex-col gap-3">
				{nodesData.map((n) => (
					<>
						<div className="flex items-center gap-1" key={n.name}>
							<ChevronRight size={20} />
							<Folder size={20} />
							<span>{n.name}</span>
						</div>
						{n.nodes.map((n) => (
							<div className="flex items-center gap-1 ml-5" key={n.name}>
								<ChevronRight size={20} />
								<Folder size={20} />
								<span>{n.name}</span>
							</div>
						))}
					</>
				))}
			</div>
		</main>
	);
}

export default App;
