# Changelog

All notable changes to this project will be documented in this file.

### V 1.1.2

### Added:

1. Adding a win streak to the "Current Ratings" section
2. Adding a Changelog to the footer
3. Changing the avatar image display from circular to square
4. "Why this score" section lists every signal that lowered the "Fair Play Score" together with the points deducted, so the result is transparent.
5. Accuracy consistency - very low standard deviation of accuracy combined with a high average accuracy.
6. Share of games with 95%+ accuracy.
7. Sudden rating jumps (largest gain within a 30-day window, counted from 1000+ rating).
8. Performance against much stronger opponents (100+ rating points higher).
9. Minimum data thresholds for every signal. When there are too few games, the signal is skipped and an info note is shown instead of guessing.
10. Mode-specific accuracy thresholds for Rapid, Blitz and Bullet, plus an extra penalty for high accuracy in multiple modes at once.
11. Fair Play Score calculation rewritten. The old "100 minus penalties" model could never go below 50%, so the 0%-39% and 40%-49% ranges from the legend were unreachable. The score is now "100 - risk", where risk is the sum of weighted signals (max 100). Every range from the legend can now be reached, but low scores require several independent signals at once.
12. Win rate is only evaluated with at least 20 games in a mode, and has half the weight when accuracy is not suspicious.
13. Win streak is now part of the score (previously display only) and counts fully only together with elevated accuracy.
14. Account age is combined with rating (a new account with a high rating), instead of penalizing every new account.
15. Rapid/Blitz vs Bullet rating gap requires at least 30 games in both compared modes.
16. Game archives are now fetched via "/games/archives" in batches of 4 months ("Promise.all"), which makes scanning faster and skips months that do not exist.
17. Analysis range fixed to the real last 12 months, matching the note in the UI (previously the code scanned two calendar years).

<hr>

### V 1.0.2

### Added:

1. Added GitHub and Chess.com graphics to the footer and removed the old style

<hr>

### V 1.0.1

### Added:

1. Changing GUI colors

<hr>

### V 1.0.0

### Added:

1. Initial release
2. Analysis of a selected Chess.com user's data
3. Player profile and account information
4. Rapid, Blitz and Bullet rating analysis
5. Game count and win-rate analysis
6. Average accuracy analysis for Rapid, Blitz and Bullet
7. Rating history analysis
8. Win-rate visualization
9. Rating progression charts
10. Fair Play score based on multiple statistical indicators
11. Analysis progress and error handling

<hr>

#### Notes:

This is the first public release.
Detection results should not be treated as definitive proof of cheating.
