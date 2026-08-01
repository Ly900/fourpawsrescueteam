# Deprecated Adoption Fair Files

These three files were replaced by `../adoption-fair-tables.html`, which builds
both tables from the shared data in `../adoption-fairs-data.html`.

They are kept only as a record of what the tables looked like when they were
maintained by hand. Nothing on the site loads them. Editing them changes
nothing.

| File                        | What it used to do                                                               |
| --------------------------- | -------------------------------------------------------------------------------- |
| `adoption-fairs-table.html` | The adoption fairs table, with every row typed out by hand.                      |
| `aluminum-cans-table.html`  | The can collection table, also typed out by hand.                                |
| `adoption-fair-js.html`     | Deleted rows whose `data-date` had already passed, so old dates stopped showing. |

## Why they were replaced

Every new fair had to be added in three places: the data snippet, the fairs
table, and the cans table. The two tables could drift out of step with the
snippet, and a canceled fair had to be marked in each one separately.

The new block reads the schedule straight from the snippet, so adding or
canceling a fair is a single edit in `../adoption-fairs-data.html`. Dropping
past dates is now part of that same block, which is why the old row-removal
script is no longer needed.

## If something looks wrong on the live page

Check `../adoption-fair-tables.html`, not these files.
