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

This will start nodemon server to watch the `test-files/senior-cats.js` file. This script tests functionality using the `test-files/all-cats.json` local file and does not make any fetch calls to ShelterLuv.

It does not save any files but only console logs the results.

### Test Getting 3 Random Senior Cats

From root of project, run `npm run test:get-three-random`. This will run the `scripts/get-three-random.js` file, which uses the real prod data in `data/senior-cats-[DATE].json` in order to pull 3 random cats from the JSON. With the `scripts/get-three-random.js` file open, save (without without making changes) to see 3 new cats in the console.

There is a chunk in the bottom of the main function in that file. You can uncomment the first part and just console.log the three cats. To see the JSON get render into the browwer, use the instructions below.

### Test 3 Random Seniors in HTML

From root of project, run `npm run dev`. That will start the http-server in order to see the functionality in the browser. It will serve the `index.html` file at the root of the senior-cats directory, which already calls the CSS and JS files needed for it to work in the browser.

## Implementation Time

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

## Step 2: Update HTML Blocks in Wordpress

1. Go to the Four Paws homepage.
2. In the first HTML block, inside the script tags, replace the array that is there with the newly generated array of senior cats that was just generated.
3. You do not have to change the other HTML blocks.
