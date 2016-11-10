import fetchJsonp from 'fetch-jsonp';

const ACCOUNT_ID = '883610';
const URL = `https://api.bigstockphoto.com/2/${ACCOUNT_ID}/search/?q=`;

const getImages = (searchTerm) => {
	return fetchJsonp(URL + searchTerm)
		.then((response) => {
			return response.json();
		})
		.then((response) => {
			return formatResponse(response.data.images);
		})
		.catch((ex) => {
			console.error(ex);
		});
};

function formatResponse(data) {
	return data.map((image) => {
		return image.small_thumb.url;
	});
};

export { getImages };
