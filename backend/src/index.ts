// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
//eslint-disable-next-line
import pino from 'pino';
import cors from 'cors'


const logger = pino({
    transport : {
        target: "pino-pretty"
    }
})


// @ts-expect-error pocketbase
import PocketBase from 'pocketbase/cjs';
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


app.get("/api/Lottery", (req: Request, res: Response) => {
  res.header("Access-Control-Allow-Origin", "*");
  logger.info("[nginx]: Backend | Lottery | requested ");
  // eslint-disable-next-line
  pb.collection('Lottery').getFirstListItem('')
    // eslint-disable-next-line
    .then((record: any) => {
      if (isDateStringOlderThanSevenDays(record.created)) {
        logger.info("[nginx]: Backend | Lottery | expired ");
        getRandom(7, 0, 49).then(async (data: any) => {
          const send = {
            "numbers": data
          };
          pb.collection('Lottery').create(send)
          res.send(send)
        })
        console.log(`${record.cDate} is older than 7 days ago.`);
      } else {
        logger.info("[nginx]: Backend | Lottery | from cache ");
        res.send({"numbers": record.numbers});
      }
    }).catch((error: any) => {
    logger.error(error);
    logger.info("[nginx]: Backend | Lottery | first time ");
    getRandom(7, 0, 49).then(async (data: any) => {
      const send = {
        "numbers": data
      };
      pb.collection('Lottery').create(send)
      res.send(send);
    })
    });
});

app.get("/api/Keno", (req: Request, res: Response) => {
  res.header("Access-Control-Allow-Origin", "*");
  logger.info("[nginx]: Backend | Keno | requested ");
  // eslint-disable-next-line
  pb.collection('Keno').getFirstListItem('')
    // eslint-disable-next-line
    .then((record: any) => {
      if (isDateStringOlderThanSevenDays(record.created)) {
        logger.info("[nginx]: Backend | Keno | expired ");
        getRandom(4, 1, 80).then(async (data: any) => {
          const send = {
            "numbers": data
          };
          pb.collection('Keno').create(send)
          res.send(send)
        })
        console.log(`${record.cDate} is older than 7 days ago.`);
      } else {
        logger.info("[nginx]: Backend | Keno | from cache ");
        res.send({"numbers": record.numbers});
      }
    }).catch((error: any) => {
    logger.info("[nginx]: Backend | Keno | first time ");
    getRandom(4, 1, 80).then(async (data: any) => {
      const send = {
        "numbers": data
      };
      pb.collection('Keno').create(send)
      res.send(send);
    })
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

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.listen(port, () => {
  logger.info(`[server]: Server is running at http://localhost:${port}`);
});
