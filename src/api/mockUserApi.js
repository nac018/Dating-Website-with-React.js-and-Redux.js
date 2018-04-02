import delay from './delay';

const users = [
  {
    "username": "user",
    "password": "1234",
    "name": "UserTest",
    "age": "32",
    "phone": "190123",
    "city": "SD",
    "ethnicity": "Latino",
    "profession": "Chef",
    "about_me": "asff",
    "part_sex": "female",
    "part_age": "26~34",
    "part_ethnicity": "Asian",
    "userType": "user",
    "image_url": 'https://media.istockphoto.com/photos/feeling-great-about-my-corporate-choices-picture-id507296326'
  }
];

const agents = [
  {
    "username": "agent0",
    "password": "1234",
    "name": "ronny",
    "age": "31",
    "phone": "123456",
    "city": "San Diego",
    "ethnicity": "Asian",
    "profession": "Teacher",
    "description": "I am cool.",
    "experience": "None.",
    "userType": "agent",
    "image_url": 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3946332.jpg',
    "avg_rating": "★★★☆☆",
    "ratings": [
      {
        "comment": "Pretty good.",
        "rating": "★★★☆☆"
      },
      {
        "comment": "Not very good..",
        "rating": "★☆☆☆☆"
      }
    ]
  },
  {
    "username": "agent1",
    "password": "1234",
    "name": "bob smith",
    "age": "19",
    "phone": "123456",
    "city": "San Diego",
    "ethnicity": "Caucasian",
    "profession": "Bookworm",
    "description": "I am cool.",
    "experience": "None.",
    "userType": "agent",
    "image_url": 'http://www.recyclesourcellc.com/images/stockp.png',
    "avg_rating": "★★★★☆",
    "ratings": [
      {
        "comment": "Awesome!",
        "rating": "★★★★☆"
      },
      {
        "comment": "Really bad.",
        "rating": "★☆☆☆☆"
      }
    ]
  },
  {
    "username": "agent2",
    "password": "1234",
    "name": "Rob",
    "age": "1",
    "phone": "123456",
    "city": "San Francisco",
    "ethnicity": "African American",
    "profession": "Dentist",
    "description": "I am cool.",
    "experience": "None.",
    "image_url": 'http://www.recyclesourcellc.com/images/stockp.png',
    "userType": "agent",
    "avg_rating": "★★★☆☆",
    "ratings": [
      {
        "comment": "Awesome!",
        "rating": "★★★★☆"
      },
      {
        "comment": "Really amazing!",
        "rating": "★★★★★"
      },
      {
        "comment": "Really amazing!",
        "rating": "★★★★★"
      }
    ]
  },
  {
    "username": "agent3",
    "password": "1234",
    "name": "bob",
    "age": "1",
    "phone": "123456",
    "city": "San Diego",
    "ethnicity": "Asian",
    "profession": "Bookworm",
    "description": "I am cool.",
    "experience": "None.",
    "userType": "agent",
    "image_url": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHrAvPUbN63ARQ9l-Z5GaFkRTKv8ZK15n5Q-SNF77SFedahHon',
    "avg_rating": "★★★★★",
    "ratings": [
      {
        "comment": "10/10!",
        "rating": "★★★★★"
      },
      {
        "comment": "Really amazing!",
        "rating": "★★★★★"
      },
      {
        "comment": "Highly recommended!",
        "rating": "★★★★★"
      }
    ]
  }
];

class UserApi {
  static getAllAccounts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], users.concat(agents)));
      }, delay);
    });
  }

  static saveAccount(account) {
    account = Object.assign({}, account); // to avoid manipulating object passed in.

    return new Promise((resolve, reject) => {
      setTimeout(() => {

        if (account.userType === 'agent') {
          agents.push(account);
        } else {
          users.push(account);
        }

        resolve(account);
      }, delay);
    });
  }


}

export default UserApi;
