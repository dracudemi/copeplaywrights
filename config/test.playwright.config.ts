import { defineConfig,devices } from "@playwright/test";
import  {baseConfig} from "../playwright.config.ts";
import { EnvConfig } from "../test/helper/config-fixtures.ts";
import path from 'path';


export default defineConfig<EnvConfig>({
    ...baseConfig,
    testDir:path.resolve(process.cwd(),"./test"),
    use: {
    ...baseConfig.use,
    envName: "test",
    apiURL: "https://reqres.in/api",
    appURL: "https://katalon-demo-cura.herokuapp.com/",
    nopCommerceURL:"https://admin-demo.nopcommerce.com/login?returnUrl=%2Fadmin%2F",
    dbConfig: {
        host: "localhost",
        port: 5432,
        username: "test_user",
        password: "test_password",
        database: "test_db"
    },
    },
});