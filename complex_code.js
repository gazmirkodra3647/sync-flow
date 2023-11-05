/*
filename: complex_code.js

This code is a complex implementation of a social media platform with features like user registration, login, posting, liking, and commenting on posts, as well as user profile management.

Note: This code is a simplified and abbreviated version for demonstration purposes.
*/

// Simulating a database of users and posts
const users = [];
const posts = [];

// User class
class User {
  constructor(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
  }

  createPost(content) {
    const post = new Post(this.username, content);
    posts.push(post);
  }

  likePost(postId) {
    const post = posts.find((post) => post.id === postId);
    if (post) {
      post.like(this.username);
    } else {
      console.log("Post not found!");
    }
  }

  commentOnPost(postId, comment) {
    const post = posts.find((post) => post.id === postId);
    if (post) {
      post.addComment(this.username, comment);
    } else {
      console.log("Post not found!");
    }
  }

  changePassword(newPassword) {
    this.password = newPassword;
  }
}

// Post class
class Post {
  constructor(author, content) {
    this.id = Math.random().toString(36).substr(2, 9);
    this.author = author;
    this.content = content;
    this.likes = [];
    this.comments = [];
  }

  like(username) {
    if (!this.likes.includes(username)) {
      this.likes.push(username);
    }
  }

  addComment(username, comment) {
    this.comments.push({
      username: username,
      comment: comment,
    });
  }
}

// User registration
function registerUser(username, password, email) {
  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    console.log("Username already exists!");
    return;
  }

  const user = new User(username, password, email);
  users.push(user);
  console.log("User registered successfully!");
}

// User login
function loginUser(username, password) {
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    console.log("Login successful!");
  } else {
    console.log("Invalid username or password!");
  }
}

// Example usage
registerUser("johnDoe", "pass123", "john@example.com");
loginUser("johnDoe", "pass123");

const currentUser = users.find((user) => user.username === "johnDoe");
if (currentUser) {
  currentUser.createPost("This is my first post!");
  currentUser.likePost(posts[0].id);
  currentUser.commentOnPost(posts[0].id, "Great post!");
  currentUser.changePassword("newPass");
}

console.log(users);
console.log(posts);