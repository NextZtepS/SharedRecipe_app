// See a full list of supported triggers at https://firebase.google.com/docs/functions

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

import * as functions from "firebase-functions"

export const optimizeMenuImg = functions.storage.object().onFinalize(async (event) => {
  functions.logger.info("File has been uploaded to the Storage!");
  functions.logger.info(event);
});
