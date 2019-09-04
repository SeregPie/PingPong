export default function(h) {
	return h(
		'div',
		{
			style: {
				overflow: 'hidden',
				position: 'relative',
			},
		},
		[h(
			'canvas',
			{
				style: {
					bottom: 0,
					left: 0,
					margin: 'auto',
					position: 'absolute',
					right: 0,
					top: 0,
				},
				ref: 'canvas',
			},
		)],
	);
}
