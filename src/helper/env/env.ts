import dotenv from "dotenv";
import path from "path";


const envName = process.env.ENV || "dev";

dotenv.config({
    path: path.resolve(process.cwd(), `.env.${envName}`)
});


export const ENV = {

    baseUrl: process.env.BASE_URL || "",

    browser: process.env.BROWSER || "chromium",

    headless: process.env.HEADLESS === "true"

};