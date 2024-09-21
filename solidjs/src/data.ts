export type FileSystemNode = {
	name: string;
	nodes: readonly FileSystemNode[];
};

export let systemDataData: readonly FileSystemNode[] = Object.freeze([
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
