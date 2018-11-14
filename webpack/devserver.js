module.exports = function () {
	return {
		devServer: {
			stats: 'errors-only',
			port: 9000,
			proxy: [{
				path: '/api/',
				target: 'http://localhost:3001'
			}]
		}
	}
};