Module.register("welcome", {
	defaults: {
		isRecording: false
	},
	getDom: function () {
		var wrapper = document.createElement("div");
		wrapper.setAttribute("class", "flex-container");
		var logo = document.createElement("div");
		logo.setAttribute("class", "wday-logo");
		wrapper.appendChild(logo);
		return wrapper;
	}
});
