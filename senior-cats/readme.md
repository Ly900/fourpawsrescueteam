# Senior Cats Section Process

Use this readme for instructions on how to...

- Make an API fetch call to the ShelterLuv API every once in a while,
- Use that data to get all senior cats,
- Create a new senior cats data object,
- And use that object to create a UI on the homepage.

This partially manual process avoids constantly calling the API from the homepage and having to do any backend in Wordpress or on the ShelterLuv side.

## Step 1: ShelterLuv API Fetch

Since only 3 senior cats are highlighted on the homepage at a time, and senior cats don't get adopted that quickly, it's not urgent that the information is immediately up to date. Follow the steps below once a week to get the updated data from ShelterLuv.

From the root of this project, run `npm run get-updated-seniors`.

This will run a package.json script that will:

- Make the fetch API to ShelterLuv
- Filter to only senior cats
- Create a new JSON file with the senior cats but only returning the properties wanted.
  - Some of the properties get sanitized or modified to fit the needs of the UI it will be used in.
  - The file will have a date appended to the end to know which is the most updated file.
  - This senior-cats-[date].json file will be needed in the next step.

## Step 2:
