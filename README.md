# MagMutual Microservice - [link](https://hilarious-calf-skirt.cyclic.app/)

![magmutual-microservice](https://user-images.githubusercontent.com/99847030/202971402-f33f9588-9f56-46cb-9316-4d7d385cffb5.png)

Based on a CSV of user information; I built the following endpoints and displayed them in a simple UI:

- Return a specific user (and all associated information): ` GET /user/:id`

```
{
        "_id": "637add6bc435b74d221e4750",
        "id": 100,
        "firstname": "Andree",
        "lastname": "Flita",
        "email": "Andree.Flita@gmail.com",
        "profession": "worker",
        "dateCreated": "2020-08-31T00:00:00.000Z",
        "country": "Wallis and Futuna",
        "city": "Nanjing"
    }
```

- Return a list of users created between a date range:
  `GET /user/dates/2020-06-01/2020-06-03`

```

[
  {
    "_id": "637add6bc435b74d221e481f",
    "id": 307,
    "firstname": "Annabela",
    "lastname": "Xerxes",
    "email": "Annabela.Xerxes@gmail.com",
    "profession": "worker",
    "dateCreated": "2020-06-02T00:00:00.000Z",
    "country": "Tunisia",
    "city": "Yaoundé"
  },
  {
    "_id": "637add6bc435b74d221e499b",
    "id": 687,
    "firstname": "Lilith",
    "lastname": "Darrell",
    "email": "Lilith.Darrell@gmail.com",
    "profession": "worker",
    "dateCreated": "2020-06-02T00:00:00.000Z",
    "country": "Åland Islands",
    "city": "Sukhumi"
  },
...
]

```

- Return a list of users based on a specific profession:
  `GET /user/profession/doctor `

```
{
      "_id": "637add6bc435b74d221e4753",
      "id": 103,
      "firstname": "Marline",
      "lastname": "Clie",
      "email": "Marline.Clie@gmail.com",
      "profession": "doctor",
      "dateCreated": "2020-03-30T00:00:00.000Z",
      "country": "Hong Kong",
      "city": "Dongguan"
  },
```

- Return a list of users based on specific country:
  `GET /user/country/Greenland `

```
{
      "_id": "637add6bc435b74d221e4754",
      "id": 104,
      "firstname": "Lanae",
      "lastname": "Salvidor",
      "email": "Lanae.Salvidor@gmail.com",
      "profession": "doctor",
      "dateCreated": "2022-07-18T00:00:00.000Z",
      "country": "Greenland",
      "city": "Banjul"
  },
```

## Tech Stack

- HTML, TailwindCSS, EJS, Node.js, Express, MongoDB, Mongoose, dotenv

### Thoughts on the project

- I thought the project was super fun once I got the MVC architecture set up with the correct routes, models and controllers. Then I used Postman to test my endpoints as I queried them in the controller. Seeing the right data populate is always a "YESSSS" moment for me!
- I love UI so I wanted to make sure the home page look nice - Tailwind is my favorite CSS framework to work in due to the customizability and being mobile first, utility designed.

### Things I didn't like about the project:

- I did wish the directions were a bit more clear but loved being able to design that 4th endpoint on my own!

### How would I change the project or approach?

- If I had more time, I would definitely go back and make the front end React to have reusable card components for each user. It would have been neat to not only have it as an API but a fullstack project that would display the data nicely and have an option for the client to filter through with a UI.
- I would also research REST API documentation and try to follow closer to those examples.

### Anything else I'd like to share

- Honestly, I was a bit drained when I first began due to a 4 day hackathon but once I got to the point where I was querying the data and then testing endpoints in postman, it was just so fun to see that data come back. I have so much to learn in terms of best practices but it makes me excited to hopefully be a part of the team where I'll be working on microservices for the company!
