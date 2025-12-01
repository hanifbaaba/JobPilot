## JobPilot

- JobPilot is a job application platform that allows candidates to apply for jobs, companies to Post jobs available.

## Table of Content

- Features
- Installation
- Usage
- Stack
- Endpoints
- System Design
- Contributions
- License
- Author

## Features

- Job application for job seekers.
- Job posting for employers.
- Search with filters based on categories(title, keyword,location,salary etc)
- User Authentication
- Pagination
- Email Notification

## Installation

1. Clone the repository

- git clone https://github.com/hanifbaaba/JobPilot
- Enter the directory:
- cd backend
- Install required dependencies:
- pip install -r requirements.txt
- Run the project:
- python manage.py runserver

## Usage

- Create an account.
- Login to the account.
- Job seeker: {

  - Go to the jobs application page.
  - Search for suitable jobs that match your requirement.
  - Apply for job.
  - Wait for recruiter to contact you.
    }

- Employer :{ - Go to the jobs creation page. - Create a new job.
  }

## API Endpoints

- Creating a new job.
  GET/create-job this displays list of available jobs.
  [
  {
  "id": 1,
  "job_title": "Frontend developer",
  "description": "We are looking for a highly talented frontend developer experienced in React and typescript. Must be familiar with git and aws deployment.",
  "salary": "96000.00",
  "company_name": "daea",
  "location": "Remote",
  "category": "Frontend development"
  },
  {
  "id": 2,
  "job_title": "Backend developer",
  "description": "We are looking for a highly talented Backend developer experienced in Django and PostgreSQL. Must be familiar with git and aws deployment.",
  "salary": "95000.00",
  "company_name": "daea",
  "location": "Remote",
  "category": "Backend development"
  },
  {
  "id": 3,
  "job_title": "Data Scientist",
  "description": "We are hiring a data scientist to join our team . Qualifications must be able to use numpy, matplotlib and 10 years of experience.",
  "salary": "960000.00",
  "company_name": "daea",
  "location": "Remote",
  "category": "Data Science"
  }
  ]
  GET /create-job/<id>/ gets a single job
  {
  "id": 2,
  "job_title": "Backend developer",
  "description": "We are looking for a highly talented Backend developer experienced in Django and PostgreSQL. Must be familiar with git and aws deployment.",
  "salary": "95000.00",
  "company_name": "daea",
  "location": "Remote",
  "category": "Backend development"
  },
  POST/create-job this creates a new job application.
  PUT/create-job<id>/ this updates a job application.
  DELETE/create-job<id>/ this deletes a job application.

- Applying for a job
  GET /apply-job/<id> Returns all job applications.
  POST /apply-job/<id> Submit a new application.
  {
  "job": 2,
  "name": "John Doe",
  "reason_for_applying": "I have strong experience…",
  "country_of_residence": "USA",
  "portfolio_link": "https://portfolio.dev"
  }
  PUT /apply-job/<id> Updates job application
  DELETE /apply-job/<id> Deletes job application

- Searching for jobs based on filter
  this endpoint search for jobs based on keywords in the url
  Example

  - /create-job/?search=developer
  - /create-job/?search=data
  - /create-job/?search=manager
  - /create-job/?search=engineer

- Salary range based filtering

  - /create-job/?min_salary=200000 User will be able to search the minimum salary posted
  - /create-job/?max_salary=600000 User will be able to search the maximum salary posted
  - /create-job/?min_salary=200000&max_salary=600000 User will be able to search for both minimum amount and maximum amount

- Pagination
  Example
  GET /apply-job/?page = 4. This will route to page 4 of jobs application page.

Response:

HTTP 200 OK
{
"count": 80,
"next": "/apply-job/?page=5",
"previous": "/apply-job/?page=3",
"results": [
Job applications results
]
}

## Email Notification

When a user applies for a job, they will get instant email feedback from the recruiter. It utilizes django's send_mail() concept.

## Tech Stack

- Language : Python
- Framework : Django, Django Rest Framework
- Database : PostgreSQL/MongoDB
- Deployment : Render/Railway

## Contributing

- Fork the repo
- Create a new branch ("git checkout -b feature-branch)
- Commit new changes ("git commit -m "Added a new feature")
- Push to your branch ("git push origin feature-branch")
- Open a pull request

## License

- This project is under the MIT license.

## Author

- Hanif Baaba
- Github : (https://github.com/hanifbaaba)
