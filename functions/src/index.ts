// See a full list of supported triggers at 
// https://firebase.google.com/docs/functions

import { initializeApp } from "firebase-admin/app";
import { optimizeMenuImgUrlFunc } from "./optimizeMenuImgUrl";
import { updateAvgRatingFunc } from "./updateAvgRating";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

initializeApp();
export const optimizeMenuImgUrl = optimizeMenuImgUrlFunc;
export const updateAvgRating = updateAvgRatingFunc;