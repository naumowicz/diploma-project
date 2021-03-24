class Elements {
	form = {
		formName_input: '#demo-name',
		formEmail_input: '#demo-email',
		formCategory_select: '#demo-category',
		formMessage_textarea: '#demo-message',
		sendMessage_input: '//input[@type="submit"]',
		resetForm_input: '//input[@type="reset"]',
		formMessagePriorityLow_label: '//label[@for="demo-priority-low"]',
		formMessagePriorityNormal_label: '//label[@for="demo-priority-normal"]',
		formMessagePriorityHigh_label: '//label[@for="demo-priority-high"]',
		formMessageEmailACopy_input: '//label[@for="demo-copy"]',
		formMessageNotARobot_input: '//label[@for="demo-human"]'
	}
	

	/**
	 * Filling name input.
	 * @param {string} name - Name that should be typed into name input.
	 */
	fillName(name) {
		$(this.form.formName_input).setValue(name);
	}

	/**
	 * Filling email input.
	 * @param {string} email - Email that should be typed into email input.
	 */
	fillEmail(email) {
		$(this.form.formEmail_input).setValue(email);
	}

	/**
	 * Selecting category of message.
	 * @param {string} name - Category of message.
	 */
	selectCategory(category) {
		$(this.form.formCategory_select).selectByVisibleText(category);
	}

	/**
	 * Filling message input.
	 * @param {string} name - Message that should be typed into message input.
	 */
	fillMessage(message) {
		$(this.form.formMessage_textarea).setValue(message);
	}

	/**
	 * Sending prepared message.
	 */
	sendMessage() {
		$(this.form.sendMessage_input).click();
	}

	/**
	 * Validating if form has default values.
	 */
	validateMessageFormEmptiness() {
		expect($(this.form.formName_input).getValue()).toBe('');
		expect($(this.form.formEmail_input).getValue()).toBe('');
		// expect($(this.form.formCategory_select)).toHaveValue('- Category -');
		expect($(`//select/option[.="- Category -"]`)).toBeDisplayed();
		// $(this.form.formMessage_textarea).setValue("aaa")
		expect($(this.form.formMessage_textarea).getValue()).toBe('');
	}

	/**
	 * Validating visibility of all form inputs.
	 */
	validateMessageForm() {
		for (const formElement in this.form) {
			expect($(this.form[formElement])).toBeDisplayed();
		}
	}
}

module.exports = new Elements();