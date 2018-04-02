import delay from './delay';

let chatProgress = [
  {
    "users": ["user", "agent0"],
    "sender": "user",
    "message": "Hello there!",
    "timestamp": "11:00:02 AM"
  },
  {
    "users": ["user", "agent0"],
    "sender": "agent0",
    "message": "Hi, how are you? How can I help you!",
    "timestamp": "11:00:02 AM"
  }
];

class ChatProgressApi {
  static getAllChatProgress() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], chatProgress));
      }, delay);
    });
  }

  static saveMessage(currUsername, friendUsername, message) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        chatProgress.push(message);
        resolve(message);
      }, delay);
    });
  }
}

export default ChatProgressApi;
