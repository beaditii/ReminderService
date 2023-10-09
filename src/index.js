const express=require('express');

const bodyParser=require('body-parser');

const {PORT}=require('./config/serverConfig');

// const {sendBasicEmail}=require('./services/email-service');
const jobs=require('./utils/job');

// const cron=require('node-cron');
const TicketController = require('./controllers/ticket-controller');

const setUpAndStartServer=()=>{
    const app=express();
    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({ extended: true }));

     app.post('/api/v1/tickets',TicketController.create);
    app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
    jobs();

   

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