function setTheme (themeName) {
	localStorage.setItem('theme', themeName);
	document.documentElement.className = themeName;
}

function toggle() {
	if (localStorage.getItem('theme') === 'darkTheme') {
		setTheme('lightTheme');
	} else {
		setTheme('darkTheme');
	}
}

(function () {
	if (localStorage.getItem('theme') === 'darkTheme') {
		setTheme('darkTheme');
	} else {
		setTheme('lightTheme');
	}
})();

var themeSwitch = document.getElementById('themeSwitch');
if (themeSwitch) {
	initTheme();
	themeSwitch.addEventListener('change', function(event) {
		resetTheme();
	});
	function initTheme() {
		var darkThemeSelected = (localStorage.getItem('themeSwitch') !== null && localStorage.getItem('themeSwitch') === 'dark');
	}
	themeSwitch.checked = darkThemeSelected;
	darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
	function resetTheme() {
		if (themeSwitch.checked) {
			document.body.setAttribute('data-theme', 'dark');
			localStorage.setItem('themeSwitch', 'dark');
		} else {
			document.body.removeAttribute('data-theme');
			localStorage.removeItem('themeSwitch');
		}
	};
}