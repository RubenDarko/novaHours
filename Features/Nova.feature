@Nova
Feature: Nova Weekly Hours

Scenario: User navigates to Nova page to log hours in current week
    Given Navigation to Nova page starts
    When User logs in Nova
    Then Fill out hours in form
        | Day | Project                                         | Categories | Hours | Ticket   | Comments  |
        | Mon | Etaluma Inc - Etaluma - Nearshore Dev Resources | Testing    | 1     | TSS-1234 | Example 1 |
        | Tue | Etaluma Inc - Etaluma - Nearshore Dev Resources | Testing    | 2     | TSS-1235 | Example 2 |
        | Wed | Etaluma Inc - Etaluma - Nearshore Dev Resources | Testing    | 3     | TSS-1236 | Example 3 |
        | Thu | Etaluma Inc - Etaluma - Nearshore Dev Resources | Testing    | 4     | TSS-1237 | Example 4 |
        | Fri | Etaluma Inc - Etaluma - Nearshore Dev Resources | Testing    | 5     | TSS-1238 | Example 5 |