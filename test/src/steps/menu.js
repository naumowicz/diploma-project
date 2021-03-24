import {Given, When, Then} from 'cucumber';

Then(/header "(.*)" should be visible/, (header) => {
	expect($(`//h2[contains(., "${header}")]`)).toBeDisplayed();
})