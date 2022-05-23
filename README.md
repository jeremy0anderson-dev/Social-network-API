# Social Media API

## Description
A REST API for a social network. Built with Express, Mongoose, and MongoDB.

## User Story
**As a** social media startup, 
**I want** an API for my social network that uses a NoSQL database 
**so that** my website can handle large amounts of data.

## Usage
1. Install MongoDB if you haven't yet on your machine (follow the instructions on the [MongoDB Website](https://docs.mongodb.com/manual/installation/))
2. Clone the repo
3. Install dependencies with `npm -i`
4. Run `npm start` to run the server and make the API live

## Models/Schemas
- User
- Thought
- Reaction (Schema: used as a subdocument in Thought)

## Endpoints
**Users**
- Get all users:        `GET /api/users`
- Create a user:        `POST /api/users`
- Get user by ID:       `GET /api/users/:userId`
- Update a user by ID:        `PUT /api/users/:userId`
- Delete a user by ID:        `DELETE /api/users/:userId`
- Add a friend by userId and friendId:         `PUT /api/users/:userId/friends/:friendId`
- Delete a friend by userId and friendId:      `DELETE /api/users/:userId/friends/:friendId`

**Thoughts**
- Get all thoughts:     `GET /api/thoughts`
- Create a thought:     `POST /api/thoughts`
- Get thought by ID:    `GET /api/thoughts/:id`
- Update a thought:     `PUT /api/thoughts/:id`
- Delete a thought:     `DELETE /api/thoughts/:id`

**Reactions**
- Add a reaction:       `PUT /api/thoughts/:id/reactions`
- Delete a reaction:    `DELETE /api/thoughts/:id/reactions`

## Packages
- express
- mongoose

## Questions
If you have questions, email me at [projects@jeremyanderson.dev](mailto:projects@jeremyanderson.dev) or reach out on [GitHub](https://www.github.com/jeremy0anderson).

## Video Walkthrough / Demo
[Watch Here](https://drive.google.com/file/d/14QRGIlP37n8v5GMyhs6roavbmUiFg9Xb/view?usp=sharing)
