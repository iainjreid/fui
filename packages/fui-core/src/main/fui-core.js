"use strict";

module.exports = ((Object) => ((builder, element, methods) => (
	element = (args) =>
		Object.assign(builder(args), methods(args)),

	methods = ([tag, attrs, props]) => ({
		attrs: (attrs) => element([tag, attrs, props]),
		props: (props) => element([tag, attrs, props]),

		promote: (fn) => (scope) => fn(scope)
	}),

	new Proxy(Object, {
		get: (_, prop) => element([prop, {}, {}])
	})
))(([tag, attrs, props], element) => (element = document.createElement(tag), (content) => (
	Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value)),
	Object.entries(props).forEach(([key, value]) => element[key] = value),

	typeof content !== "object" && (content = document.createTextNode(content)),

	element.appendChild(content), element
))))(Object)
