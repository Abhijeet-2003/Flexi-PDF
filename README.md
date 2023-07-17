### This is a PDF processing website that deals with PDF compression and format conversion to DOCX, PPTX, XLSX and zip of JPGs. 

<br/>

The steps to run this locally are:
* Clone this repo.
* Open the cloned repo in a code editor such as Visual Studio Code.
* Install the dependencies using the command ```npm i``` in client and server folders.
* Create your Adobe PDF Services API credentials [here](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api).
* Make a .env file inside the server folder.
```
CLIENT_ID = { Your CLIENT_ID }
CLIENT_SECRET = { Your CLIENT_SECRET }
```
* Start the server using the command ```nodemon app``` and the client using ```npm start```.

Now you have your own PDF compressor/convertor 🚀.

Deployment Link of this project - [https://flexi-pdf.vercel.app/](https://flexi-pdf.vercel.app/)
