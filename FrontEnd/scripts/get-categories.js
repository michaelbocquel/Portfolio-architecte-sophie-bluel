export const getCategories = () =>
	fetch("http://localhost:5678/api/categories").then((response) =>
		response.json()
	);
