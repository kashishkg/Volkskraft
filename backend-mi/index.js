import express from "express";
import { google } from "googleapis";
import request from "request";
import cors from "cors";
import urlParse from "url-parse";
import queryParse from "query-string";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 1234;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/getURLTing", (req, res) => {
    const oauth2Client = new google.auth.OAuth2(
        //client id
        "aurume",
        //client secret
        "dorame",
        // link to redirect to
        "http://localhost:1234/dashboard"
    );
    // const scopes = [
    //     "https://www.googleapis.com/auth/fitness.activity.read profile email openid"
    // ];

    const scopes = [
        "https://www.googleapis.com/auth/fitness.activity.read",
        "https://www.googleapis.com/auth/fitness.blood_glucose.read",
        "https://www.googleapis.com/auth/fitness.blood_pressure.read",
        "https://www.googleapis.com/auth/fitness.heart_rate.read",
        "https://www.googleapis.com/auth/fitness.body.read",
        "https://www.googleapis.com/auth/fitness.body.read",
        "https://www.googleapis.com/auth/fitness.sleep.read",
        "https://www.googleapis.com/auth/fitness.body.read",
        "https://www.googleapis.com/auth/fitness.reproductive_health.read",
        "https://www.googleapis.com/auth/userinfo.profile",
    ];

    const url = oauth2Client.generateAuthUrl({
        access_type: "offline",
        scope: scopes,
        state: JSON.stringify({
            callbackUrl: req.body.callbackUrl,
            userID: req.body.userid
        })
    });
    request(url, (err, response, body) => {
        console.log("error: ", err);
        console.log("statusCode:", response && response.statusCode);
        res.send({ url });
    });
});

let stepArray = [];

app.get("/dashboard", async (req, res) => {
    const queryURL = new urlParse(req.url);
    const code = queryParse.parse(queryURL.query).code;
    const oauth2Client = new google.auth.OAuth2(
        // Client ID
        "gurl",
        // Client secret
        "curl",
        // Redirect URI
        "http://localhost:1234/dashboard"
    );


    try {
        const { tokens } = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(tokens);

        // console.log("tokens:", tokens);
        res.send("<h1>Hello World</h1>");

        const oneDayInMillis = 24 * 60 * 60 * 1000; // 7 days in milliseconds
        const startTimeMillis = Date.now() - oneDayInMillis; // Start time is 7 days ago
        const endTimeMillis = Date.now(); // End time is the current time

        const result = await axios({
            method: "POST",
            url: "https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate",
            headers: {
                Authorization: `Bearer ${tokens.access_token}`,
                "Content-Type": "application/json"
            },
            data: {
                aggregateBy: [
                    {
                        dataTypeName: "com.google.step_count.delta",
                    },
                    {
                        dataTypeName: "com.google.blood_glucose",
                    },
                    {
                        dataTypeName: "com.google.blood_pressure",
                    },
                    {
                        dataTypeName: "com.google.heart_rate.bpm",
                    },
                    {
                        dataTypeName: "com.google.weight",
                    },
                    {
                        dataTypeName: "com.google.height",
                    },
                    {
                        dataTypeName: "com.google.sleep.segment",
                    },
                    {
                        dataTypeName: "com.google.body.fat.percentage",
                    }
                ],
                bucketByTime: { durationMillis: 86400000 }, // Aggregate data in daily buckets
                startTimeMillis,
                endTimeMillis,
            }
        });
        stepArray = result.data.bucket;

        
        // console.log("-----------------------")
        // console.log("stepArray:", stepArray);
        // console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@")
        // console.log("dataset:", stepArray[0].dataset);
        // console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@")
        // console.log("point:", stepArray[0].dataset[1].point);
        // console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@")
        // console.log("value:", stepArray[0].dataset[1].point[0].value);
        // console.log("-----------------------")

        if (!stepArray || stepArray.length === 0) {
            console.log("No data available");
            return;
        }

        for (const dataSet of stepArray) {
            for (const points of dataSet.dataset) {
                switch (points.dataSourceId) {
                    case "derived:com.google.step_count.delta:com.google.android.gms:aggregated":
                        console.log("Step count data:");
                        break;
                    case "derived:com.google.blood_glucose.summary:com.google.android.gms:aggregated":
                        console.log("Blood glucose data:");
                        break;
                    case "derived:com.google.blood_pressure.summary:com.google.android.gms:aggregated":
                        console.log("Blood pressure data:");
                        break;
                    case "derived:com.google.heart_rate.summary:com.google.android.gms:aggregated":
                        console.log("Heart rate data:");
                        break;
                    case "derived:com.google.height.summary:com.google.android.gms:aggregated":
                        console.log("Body hight data:");
                        break;
                    case "derived:com.google.sleep.segment:com.google.android.gms:merged":
                        console.log("Sleep data:");
                        break;
                    case "derived:com.google.body.fat.percentage.summary:com.google.android.gms:aggregated":
                        console.log("Body fat percentage data:");
                        break;
                }
                for (const steps of points.point) {
                    console.log(steps.value);
                }
            }
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("An error occurred");
    }
});




app.get("/ting", (req, res) => res.send("YEET!"));

app.listen(port, () => console.log(`Server is running on port ${port}`));