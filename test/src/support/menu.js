import testData from '../testData/testData';
class Menu {
	menu_span = '#nav > ul > li > a > span';
	finishedAnimation_body = 'body.menu-done';

	/**
	 * Opening website menu.
	 */
	openMenu() {
		//pause for fixing stability issue
		browser.pause(500);
		$(this.menu_span).click();
		$(this.finishedAnimation_body).waitForDisplayed();
	}

	/**
	 * Selecting menu element.
	 * @param {string} subpage - Name of menu element. It has to be one value of testData.websiteHeader object.
	 */
	selectFromMenu(subpage) {
		const menuLink = `//a[.="${subpage}"]`;
		$(menuLink).click();
		$(`//h2[.="${testData.websiteHeader[subpage]}"]`).waitForDisplayed();
	}
}

module.exports = new Menu();