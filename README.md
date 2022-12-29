# Hospital-API

Theme:
We’re going to design an API for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of COVID-19 patients

There can be 2 types of Users

Doctors

Patients

Doctors can log in

Each time a patient visits, the doctor will follow 2 steps

Register the patient in the app (using phone number, if the patient already exists, just return the patient info in the API)

After the checkup, create a Report

Patient Report will have the following fields

Created by doctor

Status (You can use enums if you want to):
Can be either of: [Negative, Quarantine, Positive]

Date

Instructions about SetUp:
First start with downloading the code and and write npm install on code editor, it will install all dependencies on your editor. You will need a code editor and mongoDB setup on your computer. We will use postman to check the api is working or not
