const fileExampleMapping = {
	NormalUsage: {
		title: 'Normal Usage',
		sortOrder: 1
	},
	WithIcons: {
		title: 'Custom Icons',
		sortOrder: 2
	},
	WithLabelTag: {
		title: 'Adjacent Label',
		sortOrder: 3
	},
	ControlledUsage: {
		title: 'Controlled Component',
		sortOrder: 4
	},
	CustomStyling: {
		title: 'Custom Styling',
		sortOrder: 5
	}
};

// /** @type {import('./$types').LayoutServerLoad} */
export async function load() {
	const allFiles = import.meta.glob('../../code/*.html', { as: 'raw' });
	const files = Object.keys(allFiles).map(async (name) => {
		const fileName = name.split('/').pop();
		const fileKey = fileName.split('.')[0];
		return {
			fileName,
			html: await allFiles[name](),
			...fileExampleMapping[fileKey],
			key: fileKey
		};
	});

	const all = await (await Promise.all(files)).sort((a, b) => a.sortOrder - b.sortOrder);
	return {
		body: all,
		headers: {
			'Content-type': 'application/json'
		}
	};
}
