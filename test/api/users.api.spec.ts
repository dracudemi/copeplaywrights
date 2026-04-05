import {test,expect,request} from "@playwright/test";
import{log} from "../helper/logger.js";
import constants from "../../dataNew/constants.json" 
import testData from "../../dataNew/test-data.js";


test.describe("Rest Api testing -- API tests",()=>{
let envConfig =undefined

test.beforeEach(`Get users`, async({request},testInfo)=>{
envConfig = testInfo.project.use as any;
    console.log(`Check envConfig:${JSON.stringify(envConfig.apiURL)}`);

});
test("Get users list",async({request})=>{
    
   // const baseURL="https://reqres.in/api";
  
 
  await log("info", `Sending GET request to: ${envConfig.apiURL}`);
    const response=await request.get(`${envConfig.apiURL}${constants.REQ_ENDPOINTS.GET_USERS}`,{
        headers:{
            'x-api-key': process.env.RES_API_KEY || 'reqres_95b1e378c1974780a9a54876e7c4e950',
        }
    });

    expect(response.status()).toBe(200);
    await log("info", `Received response with status: ${response.status()}`);

    //Get List of users from response
    const responseBody=await response.json();
    await log("info", `Response body: ${JSON.stringify(responseBody)}`);
})
  //post request to create user
 test("Create  users list",async({request})=>{
  const baseURL="https://reqres.in/api";
  //const payload={"name":"Sanju","job":"Kid","id":"789","createdAt":"2026-04-04T11:04:31.653Z"}
  await log("info", `Sending POST request to: ${baseURL}`);
   const payload=testData.postUserTestData()[0];  
  const response=await request.post(`${baseURL}${constants.REQ_ENDPOINTS.POST_USERS}`,{
        headers:{
            'x-api-key': 'reqres_95b1e378c1974780a9a54876e7c4e950',
            'Content-Type': 'application/json',

        },
        
        data:payload
    });

    expect(response.status()).toBe(201);
    await log("info", `Received response with status: ${response.status()}`);

    //Get List of users from response
    const responseBody=await response.json();
    await log("info", `Response body  from POST request: ${JSON.stringify(responseBody)}`);
})  


/*
//PUT PATCH DELETE ---UPDATE USER 
 test("Update  users list",async({request})=>{
  const baseURL="https://reqres.in/api";
  const payload={"name":"Kiran","job":"Data","id":"900","createdAt":"2026-04-04T11:04:31.653Z"}
 
  await log("info", `Sending DELETE request to: ${baseURL}`);
    const response=await request.delete(`${baseURL}/users`,{
        headers:{
            'x-api-key': 'reqres_95b1e378c1974780a9a54876e7c4e950',
            'Content-Type': 'application/json',

        },
        data:payload
    });

    expect(response.status()).toBe(201);
    await log("info", `Received response with status: ${response.status()}`);

    //Get List of users from response
    const responseBody=await response.json();
    await log("info", `Response body  from POST request: ${JSON.stringify(responseBody)}`);
})  
 */

});
