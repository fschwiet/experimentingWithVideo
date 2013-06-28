
$(function() {
	document.querySelector("video").addEventListener(
		"timeupdate", function() {
			console.log("timeupdate: ", this.currentTime, arguments);

			if (this.currentTime > 2) {
				this.currentTime = 0.5;
			}
		});
});