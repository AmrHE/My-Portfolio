export default {
	name: 'brands',
	title: 'Brands',
	type: 'document',
	fields: [
		{
			name: 'imgUrl',
			title: 'ImgUrl',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'name',
			title: 'name',
			type: 'string',
		},
	],
};
