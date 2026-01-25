# Senior Cats Section Process

Use this readme for instructions on how to...

- Make an API fetch call to the ShelterLuv API every once in a while,
- Use that data to get all senior cats,
- Create a new senior cats data object,
- And use that object to create a UI on the homepage.
- Test the Senior Cats UI using the JSON data.

This partially manual process avoids constantly calling the API from the homepage and having to do any backend in Wordpress or on the ShelterLuv side.

## Testing Functionality

### Test Creating New Senior Objects From Local File

From root of project, run `npm run test:create-senior-cats`.

This will start nodemon server to watch the `senior-cats-test.js` file. This script tests functionality using the test-files/all-cats.json local file and does not make any fetch calls to ShelterLuv.

It does not save any files but only console logs the results.

### Test Getting 3 Random Senior Cats

## Step 1: ShelterLuv API Fetch

Since only 3 senior cats are highlighted on the homepage at a time, and senior cats don't get adopted that quickly, it's not urgent that the information is immediately up to date. Follow the steps below once a week to get the updated data from ShelterLuv.

From the root of this project, run `npm run get-updated-seniors`.

This will run a package.json script located at `scripts/senior-cats-node.js` that will:

- Make the fetch API to ShelterLuv
- Filter to only senior cats
- Create a new JSON file with the senior cats but only returning the properties wanted.
  - Some of the properties get sanitized or modified to fit the needs of the UI it will be used in.
  - The file will have a date appended to the end to know which is the most updated file.
  - The file will get saved in data/senior-cats-[DATE].json
  - This senior-cats-[date].json file will be needed in the next step.

## Step 2: Test JSON With UI

From the root of this project, run `npm run dev`.

This will:

- Open senior-cats/index.html file.
- Start http-server (no live reloading so refresh browser for updates).

You can now modify and update the senior-cats/index.html file, UI, and styles, and test the senior-cats[date].json.
