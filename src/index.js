const express=require('express');

const bodyParser=require('body-parser');

const {PORT}=require('./config/serverConfig');

// const {sendBasicEmail}=require('./services/email-service');
const jobs=require('./utils/job');

const { subscribeMessage, createChannel }=require('./utils/messageQueue');
const { REMINDER_BINDING_KEY }=require('./config/serverConfig');
// const cron=require('node-cron');
const TicketController = require('./controllers/ticket-controller');
const EmailService = require('./services/email-service');
const setUpAndStartServer=async()=>{
    const app=express();
    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({ extended: true }));
   
    const channel=await createChannel(); 
    subscribeMessage(channel,EmailService.subscribeEvents,REMINDER_BINDING_KEY)

     app.post('/api/v1/tickets',TicketController.create);
    app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
    // jobs();

   

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