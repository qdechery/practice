import 'babelify/polyfill'

function loadImage(url) {
	return new Promise((resolve, reject) => {
		var image = new Image()

		image.onload = function() {
			resolve(image)
		}

		image.onerror = function() {
			var message = 
				'could not load image at ' + url
			reject(new Error(msg))
		}

		image.src = url

	})
}
export default loadImage