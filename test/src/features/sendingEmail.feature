Feature: Sending email
	As a visitor
	I want to be able to send email via email form

	Background: 
		Given I am on the website

	Scenario: Sending email
		When I visited "Elements" subpage
		And I filled out email form
		And I sent form
		Then email form should be empty