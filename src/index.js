const express=require('express');

const bodyParser=require('body-parser');

const {PORT}=require('./config/serverConfig');

const {sendBasicEmail}=require('./services/email-service');

const cron=require('node-cron');
const setUpAndStartServer=()=>{
    const app=express();
    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT,()=>{
console.log(`server started at port ${PORT}`);

//    sendBasicEmail(
//     'support@admin.com',
//     'aditisingh27022002@gmail.com',
//     'This is a testing email',
//     'Congratulations you are selected'
//    );

// cron.schedule('* * * * *', () => {
//     console.log('running a task every minute');
//   });
  
    });
}

setUpAndStartServer();