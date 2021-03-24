Feature: Verifying email form
	As a visitor
	I should have properly displayed email form

	Background: 
		Given I am on the website

	Scenario: Verifying email form
		When I visited "Elements" subpage
		Then email form should be empty