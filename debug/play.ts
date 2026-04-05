import TestData from "../dataNew/test-data.ts"
import fs from 'fs';
import path from 'path';
import {parse} from 'csv-parse/sync';

const csvPath = path.resolve(`${process.cwd()}/dataNew/functional/make-appoint.csv`);
const csvData=fs.readFileSync(csvPath, 'utf-8');
//console.log(csvData)
//console.log(typeof csvData)
//console.log(`CSV Data from ${csvPath}:\n${csvData}`);
const csvArrData=parse(csvData, {
    columns:true,
skip_empty_lines:true,
trim:true
});
console.log(csvArrData);    

const testData = TestData.makeAppointTestData();
for (const testCase of testData) {
   // console.log(`Test Case: ${JSON.stringify(testCase)}`);
}

function readCSVData(filePath:string):any[]{
    const csvData=fs.readFileSync(filePath, 'utf-8');
    const csvArrData=parse(csvData, {
    columns:true,
skip_empty_lines:true,
trim:true
});
return csvArrData;
}

const filepath=path.resolve(`${process.cwd()}/dataNew/functional/make-appoint.csv`);
const csvTestData=readCSVData(filepath);
console.log(csvTestData);   