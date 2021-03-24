import {Given, When, Then} from 'cucumber';
import testData from '../testData/testData';
import menu from '../support/menu';
import elements from '../pageObject/elements';
import schreenshotsTags from '../support/listOfScreenshots';

Given(/I am on the website/, () => {
	browser.url(testData.url);
	$('body.done').waitForDisplayed();
	expect(browser.checkFullPageScreen(schreenshotsTags.visitedWebsite, {ignoreLess: true})).toEqual(0);
});

When(/I visited "(.*)" subpage/, (subpage) => {
	menu.openMenu();
	// expect(browser.checkFullPageScreen(schreenshotsTags.openedMenu)).toEqual(0);
	menu.selectFromMenu(subpage);
});

When(/I filled out email form/, () => {
	elements.fillName(testData.name);
	elements.fillEmail(testData.email);
	elements.selectCategory(testData.category);
	elements.fillMessage(testData.message);
});

When(/I sent form/, () => {
	elements.sendMessage();
	expect(browser.checkFullPageScreen(schreenshotsTags.elementsPage, {ignoreLess: true})).toEqual(0);
});

Then(/email form should be empty/, () => {
	elements.validateMessageFormEmptiness();
	$(schreenshotsTags.form.selector).scrollIntoView();
	expect(browser.checkElement($(schreenshotsTags.form.selector), schreenshotsTags.form.name, {ignoreAntialiasing: true, scaleImagesToSameSize: true})).toEqual(0);
});