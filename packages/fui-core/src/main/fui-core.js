"use strict";

module.exports = (({assign, entries}, M) => (
	M = f => assign(f, {
		attrs: o => M(x => (x = f(x), entries(o).forEach(([k, v]) => x.setAttribute(k, v)), x)),

		props: o => M(x => (x = f(x), entries(o).forEach(([k, v]) => x[k] = v), x)),

		add: g => M(x => f(x).appendChild(g(x)).parentNode),

		lift: g => M(x => f(x).appendChild(g(x)(x)).parentNode)
	}),

	new Proxy(M, {
		get: (_, prop) => M(() => document.createElement(prop))
	})
))(Object)
