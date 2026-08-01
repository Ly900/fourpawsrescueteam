# Adoption Fairs: How the Schedule Works

This guide is for whoever keeps the 4Paws website up to date. It explains where
the adoption fair schedule lives, what parts of the site it feeds, and how to
make the usual changes. No coding knowledge is assumed.

The short version: **there is one list of fair dates, and everything on the site
reads from it.** Add a date once and it appears on the homepage, on the Adoption
Fairs and Events page, and on the store attendees pages, all on its own.

---

## 1. Where the schedule lives

The schedule lives in a single WordPress **snippet** named **"FourPaws Global
Data Object."** A snippet is a small block of settings that WordPress loads on
every page of the site. It is not part of any one page, so you will not find it
by editing the homepage or the fairs page in Elementor.

**To find it:** log in to WordPress and open the snippets area (the plugin used
for site-wide code, e.g. WPCode / Code Snippets), then open the snippet named
**FourPaws Global Data Object**. It is set to load on the whole site, in the
footer.

That snippet is the only place any of this information is stored. It is not
repeated on the homepage, on the fairs page, or on any store page, so there is
never a second copy to keep in step.

### What is in the snippet

| Section             | What it holds                                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `shelterId`         | 4Paws' ID number in Shelterluv. Almost never changes.                                                               |
| `availableCatsPage` | The link used as a fallback when a fair has no cats posted yet.                                                     |
| `stores`            | One entry per store: name, address, phone number, store website, attendees page, Shelterluv query, and usual hours. |
| `adoptionEvents`    | The list of fair dates. This is the part that gets edited most often.                                               |

### What one fair date looks like

```
{ date: '2026-08-08', store: 'fairfax', status: 'scheduled' },
```

- **date** — always written year-month-day, e.g. `2026-08-08` for August 8, 2026.
- **store** — `fairfax` or `sterling`. It must match one of the store entries
  above it, spelled exactly the same way.
- **status** — `scheduled` or `canceled`.

Notice the quotation marks around each value, the commas between them, and the
comma at the end of the line. Those are required. Copy an existing line and
change the pieces inside the quotes rather than typing a line from scratch.

---

## 2. What the schedule feeds

Three separate parts of the site read from that one snippet:

| Where on the site                | What it shows                                                           |
| -------------------------------- | ----------------------------------------------------------------------- |
| Homepage adoption fair cards     | The next two upcoming fairs                                             |
| Adoption Fairs and Events page   | The table of all upcoming fairs, plus the aluminum can drop-off table   |
| Each store's fair attendees page | The cats attending that fair, plus that store's next fair date and time |

None of those pages have any dates or store details typed into them. They only
display what the snippet gives them, which is why one edit updates all three.

### The homepage cards

The two cards always show the **next two dates on the list**, whichever stores
they belong to. For each one the card fills in the date, the store name and
address, the store's website link, the hours, and a link to that store's
attendees page.

- A fair happening **today** shows "– Today!" in green.
- A fair marked **canceled** shows "– Canceled" in red.
- If there are no upcoming dates at all, the cards hide themselves rather than
  showing something wrong.

### The Adoption Fairs and Events page

That page has two tables and both are built from the same list:

- **The adoption fairs table** — every upcoming fair at every store, earliest
  first, with the date and time, store location, and store phone number.
  Canceled fairs stay in the table with a **Canceled** note so anyone who was
  planning to come sees it.
- **The aluminum cans table** — the same dates, but only the Fairfax ones,
  because cans are collected at Petco Fairfax only. Cans are always taken until
  3 pm no matter how long that day's fair runs, so the table says "before 3 pm"
  rather than the fair's hours. A canceled fair still appears here as a normal
  row, since cans can still be dropped off.

**Past dates disappear on their own.** Once a date has passed, it stops showing
everywhere on the site automatically. You never have to delete old rows.

### The store attendees pages

Each store has its own page (for example, the Petco Fairfax adoption fair page).
That page does two things:

1. **Lists the cats going to that fair.** The cats come from Shelterluv, not
   from the snippet. The snippet only holds the **saved query number** that
   tells the page which Shelterluv list to pull. Adding or removing a cat is
   done in Shelterluv, and the page picks up the change on its own.
2. **Fills in the next fair date and time** for that store, using the schedule.
   If the store has no upcoming date on the schedule, the page's "TBD" text is
   left as it is.

The page figures out which store it belongs to from its own web address, so
every store page works the same way with nothing to edit on the page itself.

If a fair has no cats posted yet, the page shows a friendly "These paws haven't
checked in yet!" panel with a link to all adoptable cats, instead of an empty
space.

### When the attendees link appears

Attendee lists go live on the **Monday of the week leading up to each fair.**
Before that Monday:

- The homepage card shows "Attendees list coming soon." instead of the link.
- The fairs table shows the date with no "See Attendees" link, and the note
  under the table explains when it will appear.

A canceled fair never gets an attendees link, since there are no attendees.

---

## 3. How to make the usual changes

**Every one of these is done in the FourPaws Global Data Object snippet, not on
any page.** After saving the snippet, refresh the site to see the change. If
nothing looks different, do a hard refresh (Cmd+Shift+R on a Mac) to clear the
cached page.

### Add new fair dates

Add a new line to the `adoptionEvents` list, following the same pattern as the
lines around it:

```
{ date: '2027-01-09', store: 'fairfax', status: 'scheduled' },
```

The list does not have to be in date order. The site sorts the dates itself.

### Cancel a fair

Find that date's line and change `'scheduled'` to `'canceled'`. Keep the
quotation marks and the comma, and leave the rest of the line alone.

```
{ date: '2026-08-08', store: 'fairfax', status: 'canceled' },
```

**Please do not delete a canceled fair.** Marking it keeps the cancellation
notice visible to anyone who was planning to attend. It will drop off on its own
once the date has passed.

### Change the hours for one fair only

Add a start time, an end time, or both to that one line. They apply to that date
only:

```
{
    date: '2026-08-08',
    store: 'fairfax',
    status: 'scheduled',
    startTime: '11:00 AM',
    endTime: '3:00 PM',
},
```

Write the times exactly the way they appear in the `stores` section, for example
`'11:00 AM'` or `'3:00 PM'`. You can add just one of the two if only the start or
only the end moves; the other keeps the store's usual time.

**Most dates should not have times on them.** Leaving them off means the fair
follows the store's normal hours, so if a store permanently changes its hours we
only have to update it in one place.

### Change a store's usual hours, phone number, or address

Edit that store's entry in the `stores` section. The change flows to the
homepage cards, both tables, and that store's attendees page at once.

### Change which cats show on an attendees page

That is done in **Shelterluv**, not here. Update the saved query in Shelterluv
and the page will follow. Only change the `savedQuery` number in the snippet if
a brand-new saved query was created for that store.

### Add a new store

This one needs a developer. It involves adding a store entry to the snippet,
creating the new fair page in WordPress, and setting up a Shelterluv saved query
for it. Everything else, including the homepage cards and both tables, picks the
new store up automatically once those pieces are in place.

---

## 4. If something looks wrong

**Formatting mistakes are the most common cause.** A missing comma or quotation
mark can stop the whole schedule from loading. If you just edited the snippet
and the site looks wrong, undo your edit, save, and confirm the site recovers,
then try the edit again more carefully.

| What you see                                                                    | What it usually means                                                                                                 |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| "Our adoption fair schedule isn't loading right now… contact info@fourpaws.org" | The site cannot read the schedule at all. Usually the snippet was deactivated, or a recent edit broke the formatting. |
| "No adoption fairs are scheduled right now. Please check back soon."            | Not a bug. Every date on the list has already passed. Add the next round of dates.                                    |
| The homepage cards are missing entirely                                         | Same as above, or the snippet is not loading.                                                                         |
| One row is missing from a table                                                 | That date's `store` name does not match a store entry. Check the spelling.                                            |
| A store page says "These paws haven't checked in yet!"                          | No cats are in that store's Shelterluv saved query yet. Normal before the list is built.                              |
| A store page says "Sorry, we couldn't load the cats right now."                 | Shelterluv could not be reached. Usually temporary, so try again shortly.                                             |
| A store page shows "TBD" for the next fair date                                 | That store has no upcoming date on the schedule. Add its next date.                                                   |
| No "See Attendees" link on an upcoming fair                                     | Expected. Links appear on the Monday of the week leading up to the fair.                                              |

If anything here does not clear up on its own, pass along which page you were on
and what you saw. Each of these situations also records an explanation the
developer can look up, which usually pins down the cause right away.
