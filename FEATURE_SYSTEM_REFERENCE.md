# MS Excel Stimulator — Feature System Reference

**Release:** v5.1.0  
**Release name:** Free-Tools Productivity Expansion  
**Date:** 2026-05-29

## 1. Purpose
This document gives a clear, feature-by-feature explanation of the platform so a user, tester, publisher, trainer, or stakeholder can understand what exists in the system and what each feature is meant to do.

## 2. Free-tools-only implementation note
This product is intentionally built with:
- HTML
- CSS
- vanilla JavaScript
- browser localStorage
- a bundled free SheetJS/XLSX library
- static-hosting-compatible assets and docs

It does **not** depend on:
- any AI API
- any paid inference service
- any mandatory backend
- any paid database for routine usage

This decision keeps the platform cost effective and deployment friendly.

## 3. Feature groups

### A. Workbook and sheet management
| Feature | Explanation |
|---|---|
| Multi-sheet workbook | Supports several worksheets inside one workbook so data entry, reports, dashboards, pivots, and supporting governance pages can coexist. |
| Add / rename / duplicate / move / hide / unhide / delete sheet | Gives spreadsheet-style control over workbook structure without external office software. |
| Workbook statistics | Summarizes workbook-wide metrics such as used cells, formulas, comments, and chart counts. |
| Workbook backup / restore | Exports and restores the workbook as JSON snapshots so users can preserve work without a paid cloud database. |
| Workbook Index | Generates a governance-oriented inventory of workbook sheets with summary metrics and visibility/protection status. |
| Data Dictionary | Documents columns, headers, inferred types, and sample values from the active source sheet. |
| Workbook Health Dashboard | New enhancement. Builds a health sheet summarizing workbook counts, storage footprint, hidden/protected sheets, and structural diagnostics. |
| Data Profile Sheet | New enhancement. Profiles the active sheet column by column with filled/blank counts, numeric vs text counts, formulas, uniqueness sample, and example values. |

### B. Grid, navigation, and editing
| Feature | Explanation |
|---|---|
| Excel-style grid | Replicates spreadsheet interaction through cells, headers, active selection, and familiar workbook layout. |
| Formula bar | Lets the user inspect and edit raw formulas or values outside the cell body. |
| In-cell editing | Supports direct cell editing through double-click or keyboard-driven entry. |
| Keyboard navigation | Allows spreadsheet navigation through arrows, Tab, Enter, shortcuts, and edit-oriented commands. |
| Smart render window | Renders only the needed visible region around the active area so the logical grid can remain large while staying more usable in the browser. |
| Large logical worksheet | Supports a logical 2000 × 1200 workbook area without drawing all cells simultaneously. |
| Touch support | Makes the workbook usable on tablets and mobile-oriented devices. |
| Floating mini toolbar | Adds quick formatting controls during cell interaction. |
| Find and replace | Supports text search and replacement inside sheet content. |
| Workbook search | Searches across workbook sheets and jumps directly to the selected result. |

### C. Formulas and calculation support
| Feature | Explanation |
|---|---|
| Formula engine | Evaluates Excel-style formulas directly in the browser. |
| Arithmetic, logic, text, date, lookup, and statistics functions | Supports a broad family of Excel-like operations such as SUM, AVERAGE, IF, VLOOKUP, TODAY, IFERROR, and more. |
| Named ranges | Improves formula readability and model clarity. |
| Formula autocomplete and hints | Helps users discover function names and reduce typing errors. |
| Custom number formats | Applies spreadsheet-like formatting styles to values without external dependencies. |
| Circular-reference detection | Protects the workbook from silent recursive formula problems. |

### D. Formatting and presentation
| Feature | Explanation |
|---|---|
| Font family and size | Controls typographic appearance of cells. |
| Bold / italic / underline / strike | Adds emphasis and report-style styling. |
| Text colour and fill colour | Helps distinguish categories, alerts, and report zones. |
| Alignment and wrap | Controls reading flow and layout. |
| Borders | Structures forms, tables, and reports visually. |
| Merge / unmerge | Supports titles, banners, and grouped report blocks. |
| Cell styles gallery | Applies preconfigured style patterns quickly. |
| Table formatting | Gives more structured workbook presentation. |
| Dark mode | Offers a presentation-friendly and low-glare theme. |
| Presentation Mode | Reduces chrome for recruiter, client, classroom, or showcase walkthroughs. |

### E. Data operations and transformation
| Feature | Explanation |
|---|---|
| Sort and multi-sort | Organizes data by one or more keys. |
| Filter and regex filter | Restricts visible rows through rule-based or pattern-based filtering. |
| Data validation | Restricts input values to defined rules. |
| Paste Special | Supports values-only, formulas-only, formats-only, transpose, and arithmetic paste variants. |
| Text to Columns | Splits delimited text into separate columns. |
| Flash Fill | Repeats user-demonstrated patterns in adjacent data. |
| Remove duplicates | Simplifies cleanup of repeated values. |
| Cleanup tools | Includes trimming, spacing normalization, case formatting, and related hygiene actions. |
| CSV / JSON / XLSX import/export | Enables common data interchange using browser-native downloads and the bundled free XLSX engine. |
| Optimized used-range export | Exports only the meaningful used range instead of dumping all logical rows and columns. |

### F. Analysis and decision support
| Feature | Explanation |
|---|---|
| Charts | Creates visual summaries from selected data. |
| Pivot tables | Supports grouped summaries and cross-tab style analysis. |
| Quick Analysis | Exposes rapid analysis actions close to the selected data. |
| Goal Seek | Solves for an input that makes a target formula equal a chosen result. |
| Scenario Manager | Stores named what-if states for comparison. |
| Subtotals | Adds grouped summary values. |
| Consolidate | Combines multiple ranges into a summary output. |
| Heatmaps / data bars / icon sets / sparklines | Adds compact visual interpretation tools for trends and intensity. |
| Column statistics | Summarizes a column numerically for quick review. |

### G. Review, governance, and enterprise support
| Feature | Explanation |
|---|---|
| Comments | Adds note-style annotations to cells. |
| Hyperlinks | Links cells to web pages, email actions, or references. |
| Formula auditing | Helps inspect precedents and dependents. |
| Watch Window | Monitors important cells even while working elsewhere. |
| Sheet protection | Preserves report integrity and reduces accidental edits. |
| Audit Log Export | Downloads action traces as JSON for review or handoff. |
| Workbook Manifest Export | Produces a workbook inventory in JSON for governance or release packaging. |
| Enterprise Console | Centralizes governance-style actions like index, dictionary, audit export, search, and related workbook utilities. |

### H. Branding, onboarding, and publishing support
| Feature | Explanation |
|---|---|
| HMG Dashboard | Premium branded landing/home sheet for demonstrations and portfolio-style presentation. |
| About the Author | Protected branded profile worksheet with links, metrics, and narrative. |
| Welcome Experience | First-run branded welcome screen for guided entry into the system. |
| Startup Choice Screen | Lets users choose how to begin the session. |
| Premium Side Panel | Shows brand metrics, shortcuts, and identity support. |
| Printable Report | Opens a polished report-ready page for print workflows. |
| PDF-style export | Uses the browser print dialog to save report output as PDF without a paid PDF API. |
| Brand Pack Export | Bundles branding metadata, assets, and report HTML into a downloadable JSON package. |
| Feature Catalog | New enhancement. Searchable embedded explanation layer for understanding the system. |
| Deployment Playbook | New enhancement. Clear deployment guidance embedded in-app for GitHub Pages, Netlify, Cloudflare, and local server use. |
| Command Palette | New enhancement. Keyboard-first action launcher opened with Ctrl+/. |
| No-AI-API architecture | The system intentionally avoids paid AI inference and remains built from free browser-friendly components only. |

## 4. Recommended user flow
1. Open the workbook.
2. Start with HMG Dashboard or the Demo Workbook.
3. Use Help Center, Feature Catalog, and Manual to understand capabilities.
4. Use Data Dictionary, Data Profile, and Workbook Health when handling structured data.
5. Use Workbook Index and Audit exports when preparing handoff or governance output.
6. Use Print Report, PDF-style export, and Presentation Mode for showcase workflows.

## 5. Key shortcuts added in this release
- `Ctrl+/` → open Command Palette
- `Ctrl+Shift+M` → open Feature Catalog (enhancement shortcut)

## 6. Summary
MS Excel Stimulator remains a free-tools-only browser workbook platform. The new enhancement layer adds discoverability, diagnostics, profiling, deployment guidance, and faster action launching without removing existing functionality.
