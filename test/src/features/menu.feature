Feature: Navigating through menu
	As a visitor
	I should be able to navigate to every page through menu

	Background:
		Given I am on the website

	Scenario Outline: Navigating through home page
		When I visited "<page>" subpage
		Then header "<header>" should be visible

		Examples:
			| page     | header       |
			| Home     | Spectral     |
			| Generic  | Generic Page |
			| Elements | Elements     |

	Scenario Outline: Navigation through generic page
		When I visited "Generic" subpage
		And I visited "<page>" subpage
		Then header "<header>" should be visible

		Examples:
			| page     | header       |
			| Home     | Spectral     |
			| Generic  | Generic Page |
			| Elements | Elements     |

	Scenario Outline: Navigation through elements page
		When I visited "Elements" subpage
		And I visited "<page>" subpage
		Then header "<header>" should be visible

		Examples:
			| page     | header       |
			| Home     | Spectral     |
			| Generic  | Generic Page |
			| Elements | Elements     |