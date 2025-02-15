export type TypeComponent = "input" | "button" | "select";

export type GetClass = Record<TypeComponent, Record<string, boolean>>;

export const CLASS: GetClass = {
	input: {
		block: true,
		"py-2.5": true,
		"px-0": true,
		"w-full": true,
		"text-sm": true,
		"text-gray-900": true,
		"bg-transparent": true,
		"border-0": true,
		"border-b-2": true,
		"border-gray-300": true,
		"appearance-none": true,
		"dark:text-white": true,
		"dark:border-gray-600": true,
		"dark:focus:border-blue-500": true,
		"focus:outline-none": true,
		"focus:ring-0": true,
		"focus:border-blue-600": true,
		peer: true,
	},
	button: {},
	select: {},
};
