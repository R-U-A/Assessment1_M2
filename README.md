3818ICT Milestone 2
Git Layout (1)
The git repository is set to public so anyone can inspect the code, the name is ‘3813ICT-Assessment1’. This repository contains the my-app, node_modules and server directories. Additionally, a readMe will be provided. The default branch main is being utilised for all push/ commits.
Version Control Approach
Throughout the development, phase to ensure I maintained access to milestone goals (or in some instances, solidly working code) frequent commits were made. None of which were required to be accessed however having the peace of mind that working milestones were available was extremely encouraging. 
Data Structures (1)
The main data structures used for milestone 2 were users, groups, channels, and forms. 
Users and groups were passed throughout the program as main data structures containing user and group information.
Routes is an array that contained components and allowed one to update a single array in order to manage components. 
Classes:
“Classes were used to implement users and groups. These classes contained attributes that stored the data required for users to access the website and limited functionality. “ This was modified from milestone one and is reflected in the following:
export interface User {
  id: string;
  profilepic: string;
  username: string;
  password: string;
  email: string;
  role: string;
}
export interface Group {
  name: string,
  users: string[],
  channels: string[],

}

const interface channel({
  name: String,
  users: [],
  messages: []
});
REST API (2)
const routes: Routes = [
  {path: 'chatbox', component: ChatboxComponent, canActivate: [AuthGuard]},
  {path: 'account', component: AccountComponent, canActivate: [AuthGuard]},
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'adduser', component: AddUserComponent, canActivate:[AuthGuard]}
];

Server communicates with front end using express, data transfer is assisted with cors, socket.io.
Routes provided from server: ‘/users’, ‘/login’, ‘/chat/’ all prefaced with http://localhost:3000. 
The user route: returns user information, get, post, use requests all interacting with the mongodb.
Login returns user validation confirmation.
Chat returns chat message information, and is used for the chat components.

Angular Architecture Components (1)
Login 
The default route when the application is served is a simple login form that takes email and password and searches the user’s list to find if the login is valid. If the credentials are valid (that is the check_credentials returns true) the user is authenticated and able to navigate through to the main home page. If credentials do not match a valid user within the user.json file they will be prompted again and the form will be reset.  
Chat
The home is a relatively blank component, however, serves as the introduction of the chat that needed further implementation. Depending on the user’s privileges, navigation options will vary. For instance, Admin users can navigate to the users page via router-link ‘user’, however that option is not available to standard users who only have access to the home, chat and logout. 
Users
 Is a component that displays the current valid users using the mongoDB information, only accessible by admins and allows them to add or remove users. Additionally allows users to be deleted and created.
Add-user 
The component contained within users which displays a form for a new user, which modifies the mongo db and updates the user list.
Interfaces
This component provides the skeletons/ declarations for the class users and groups and their functionality, exporting them respectively.
Model
Contains the classification of the sign-in data taken from the login form, and also contains methods used in the authentication service. 
Header
The header contains the code and styling for the navigation bar, it is used to navigate the single page. This component allows users to switch to different components within the page.

Socket
This component contains the code from workshop 6 that was partially implemented within the program to work with socket connections. Unfortunately, time management did allow for full implementation. Intentionally it allows multiple connections to a component ‘chat’.

Auth
Is a partially implemented authentication component used to communicate between database and angular to authenticate user login details. Only partially implemented due to time constraints. 

SERVICES
User.service.ts
This service contains most of the functionality that the user class needs to operate, functions such as add user, edit user, delete user and get user are all contained within this service (which is injected where necessary).
Socket.service.ts
This service contains the functionality of the partially implemented socket component, used to handle connections.
Authentication.service.ts
Service contains the partially implemented login from authentication process, injected within the login component.
