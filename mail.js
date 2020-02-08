const mailer = require("nodemailer");

const { Hello } = require("./hello_template");

const { Thanks } = require("./thanks_template");



const getEmailData = (email, name, template) => {

    let data = null;



    switch (template) {

        case "hello":

            data = {

                from: "Narda <narda@henribarrett.com>",

                to:`${email}, narda@henribarrett.com `,
                

                cc:"judithcristinaqi@gmail.com",

                subject: `Diamanteperu.com`,

                html:Hello()
            
            }

            break;



        case "thanks":

            data = {

                from: "Narda <narda@henribarrett.com>",

                to:`${email}, narda@henribarrett.com `,

                subject: `He ${name}`,

                html: Thanks()

            }

            break;

        default:

            data;

    }

    return data;

}





const sendEmail = (email, name, type) => {



    const smtpTransport = mailer.createTransport({

        service: "Gmail",

        auth: {

            user: "narda@henribarrett.com",

            pass: "Narda123"

        }

    })



    const mail = getEmailData(email, name,type)



    smtpTransport.sendMail(mail, function(error, response) {

        if(error) {

            console.log(error)

        } else {

            console.log( " email sent successfully")

        }

        smtpTransport.close();

    })





}



module.exports = { sendEmail }