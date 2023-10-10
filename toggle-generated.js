/*
Use this script in GitHub PR review page to toggle files contains keywords in the file content.
This is useful when you have a generated file in your PR and you want to hide it from review.

这个脚本可以在 GitHub PR review 页面中，根据文件内容中是否包含关键字来切换文件的显示状态。
当你的 PR 中包含有生成的文件，而你不想在 review 中看到它时，这个脚本就很有用了。
*/

const keywords = [
	'generated',
	'do not edit',
]

const reviewFileElements = document.querySelectorAll('[data-details-container-group="file"]');

for (const reviewFileElement of reviewFileElements) {
	// use lower case to avoid case sensitivity for keywords
	const html = reviewFileElement.innerHTML.toLowerCase();
	let isGenerated = keywords.some(keyword => html.includes(keyword));
	if (!isGenerated) continue;
	/**
	 * @type {HTMLInputElement|null}
	 */
	const checkbox = reviewFileElement.querySelector('input[type="checkbox"]');
	if (checkbox && !checkbox.checked) {
		checkbox.click();
	}
}
