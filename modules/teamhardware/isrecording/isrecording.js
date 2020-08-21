// import svg from "./assets/recording.svg";
Module.register("isrecording", {
	defaults: {
		isRecording: false
	},
	getStyles: function () {
		return ["isrecording.css"];
	},
	// getDom: function () {
	// 	var wrapper = document.createElement("div");
	// 	wrapper.setAttribute("class", "flex-container");
	// 	var circle = document.createElement("div");
	// 	circle.setAttribute("class", "recording-active");
	// 	var text = document.createElement("div");
	// 	text.setAttribute("class", "recording-text-active");
	// 	wrapper.appendChild(circle);
	// 	wrapper.appendChild(text);
	// 	return wrapper;
	// }
	getDom: function () {
		var wrapper = document.createElement("div");
		wrapper.setAttribute("class", "flex-container");
		var circle = document.createElement("div");
		circle.setAttribute("class", "recording-not");
		var text = document.createElement("div");
		text.setAttribute("class", "recording-text-not");
		wrapper.appendChild(circle);
		wrapper.appendChild(text);
		return wrapper;
	}
});
