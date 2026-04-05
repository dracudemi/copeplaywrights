import fs from 'fs';
import path from 'path';
import {parse} from 'csv-parse/sync';

function readCSVData(filePath:string):any[]{
    const csvData=fs.readFileSync(filePath, 'utf-8');
    const csvArrData=parse(csvData, {
    columns:true,
skip_empty_lines:true,
trim:true
});
return csvArrData;
}

export default{readCSVData}