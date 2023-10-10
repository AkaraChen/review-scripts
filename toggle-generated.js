const keywords = [
	'generated',
	'do not edit',
]

const reviewFileElements = document.querySelectorAll('[data-details-container-group="file"]');

for (const reviewFileElement of reviewFileElements) {
	// use lower case to avoid case sensitivity for keywords
	const html = reviewFileElement.innerHTML.toLowerCase();
	let isGenerated = keywords.some(keyword => html.includes(keyword));
	if (!isGenerated) return;
	/**
	 * @type {HTMLInputElement|null}
	 */
	const checkbox = reviewFileElement.querySelector('input[type="checkbox"]').checked;
	if (checkbox && !checkbox.checked) {
		checkbox.click();
	}
}
