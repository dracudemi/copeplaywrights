import { test, expect } from "@playwright/test";
//import {log} from "./helper/logger.js";
import HomePage from "../Page-objects/noncom-homepage.js";


test("E2E demo", async ({page},testInfo)=>{

  const envUrl="https://admin-demo.nopcommerce.com/login?returnUrl=%2Fadmin%2F";
  //console.log(`Check envUrl:${JSON.stringify(envUrl.nopCommerceURL)}`);
  const homePage=new HomePage(page);
  await homePage.loginTonopCommerceWeb(envUrl,"admin@yourstore.com","admin");   
  await expect(page).toHaveTitle("Dashboard / nopCommerce administration");


});