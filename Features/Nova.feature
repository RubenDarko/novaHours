@Nova
Feature: Nova Weekly Hours

Scenario: User navigates to Nova page to log hours in current week
    Given Navigation to Nova page starts
    When User logs in Nova
    Then Fill out hours in form
        | Day | Project | Categories | Hours | Ticket   | Comments |
        | Mon | Etaluma | Testing    | 1     | TSS-1234 | Jira     |
        | Tue | Etaluma | Testing    | 2     | TSS-1235 | Jira     |
        | Wed | Etaluma | Testing    | 3     | TSS-1236 | Jira     |
        | Thu | Etaluma | Testing    | 4     | TSS-1237 | Jira     |
        | Fri | Etaluma | Testing    | 5     | TSS-1238 | Jira     |