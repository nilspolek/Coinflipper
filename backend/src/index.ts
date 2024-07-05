// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
//eslint-disable-next-line
import pino from 'pino';

const logger = pino({
    transport : {
        target: "pino-pretty"
    }
})


// @ts-expect-error pocketbase
import PocketBase from 'pocketbase/cjs';
import {filter} from "rxjs";
import {stringify} from "node:querystring";
const pb = new PocketBase('http://127.0.0.1:8090');

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/api", (req: Request, res: Response) => {
    res.send("API is working");
});


app.get("/api/Lottery", async (req: Request, res: Response) => {
  const data = {
    "name": "[1, 2, 34, 5]"
  }
  await pb.collection('Lottery').create(data)
  res.header("Access-Control-Allow-Origin", "*");
  logger.info("[server]: Backend | Lottery | requested ");
  // eslint-disable-next-line
  pb.collection('Lottery').getFirstListItem('')
    // eslint-disable-next-line
    .then((record: any) => {
      console.log(record.created)
      if (!isDateStringOlderThanSevenDays(record.created)) {
        getRandom(7, 0, 49).then((data: any) => {
          pb.collection('Lottery').create(data).then(res.send(data))
        })
        console.log(`${record.cDate} is older than 7 days ago.`);
      } else {
        res.send(record.numbers);
      }
    });
});

function isDateStringOlderThanSevenDays(date: any) {
  let currentDate = new Date();
  let sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(currentDate.getDate() - 7);
  return date < sevenDaysAgo;
}

export async function getRandom(n: number, min: number, max: number) {
  const data = {
    jsonrpc: '2.0',
    method: 'generateIntegers',
    params: {
      apiKey: '69108fbd-3368-4cdb-b181-aedff90ee76b',
      n: n,
      min: min,
      max: max,
    },
    id: 1,
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(
      'https://api.random.org/json-rpc/4/invoke',
      options,
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const responseData = await response.json();
    return responseData.result.random.data;
  } catch (error) {
    console.error('Error:', error);
    return 3;
  }
}

app.listen(port, () => {
  logger.info(`[server]: Server is running at http://localhost:${port}`);
});
