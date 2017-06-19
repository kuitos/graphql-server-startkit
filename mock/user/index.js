/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2017-06-15
 */

export default router => {

	router.get('/users/:id', ({ params }, res) => {
		const { id } = params;
		res.send({
			id,
			userName: `kuitos ${id}`,
			age: Number(id),
			gender: 'miss'
		});
	});

	router.get('/users', ({ query }, res) => {

		const { pageSize, pageNum, ...params } = query;

		res.send({

			total: 50,
			pageSize,
			pageNum,
			data: [
				{
					id: params.id || 123,
					userName: 'kuitos',
					age: 18,
					gender: 'miss'
				},
				{
					id: params.id || 123,
					userName: 'kuitos',
					age: 18,
					gender: 'miss'
				}
			]

		});

	});

	router.get('/taobao/:userId/nick/', (req, res) => {

		res.send(`${req.params.userId} ${Math.abs(Math.random() * 100000)}`);

	});

}
