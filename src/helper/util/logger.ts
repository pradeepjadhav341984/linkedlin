 import winston from "winston";

const logger = winston.createLogger({

    level: "info",

    format: winston.format.combine(

        winston.format.timestamp(),

        winston.format.printf(({timestamp, level, message}) => {

            return `${timestamp} [${level.toUpperCase()}] : ${message}`;

        })

    ),



    transports: [


        // Console log

        new winston.transports.Console(),



        // File log

        new winston.transports.File({

            filename: "logs/test-execution.log"

        })


    ]

});



export default logger;