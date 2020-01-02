# Assignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17. `ng new Assignment`

## Tech Stack
 These are the tech stack we used to implement the task.
 1.`Angular(8)`
 2.`NodeJs as 'npm'`
 3.`Bootstrap(4)`

## Run the application
1. Clone the repo from `here`
2. Install the dependent packages with `npm install`
3. Run `ng serve` or `npm start ` for a dev server. Navigate to `http://localhost:4200/`. 
4. The app will automatically reload if you change any of the source files.

#### Procedure we followed in this project
To perform the tasks we created two components with Angular Cli `ng generate component 'component Name'` & service `ng generate service 'service name'`
1. To get the list of all users from Git Hub we are using one of the GitHub Api `https://api.github.com/users`
2. Once we got the data from the api we are checking the data ana assigning to one of the class variable and iterate the variable in the HTML to print the required field in the page.
3. To display the users more efficient way we are using Bootstrap(4) `card` folowwed by the grid system.
4. By using one of the response parameter in the each person `avatar_url`, getting the appropriate repo image in the 'card'
5. By licking the profile so we are navigating to `Profile` page where we can get the list of repo's available for the user with the help of `https://api.github.com/users/USERNAME/repos`.
6. Once we got the repo information we are displying them in a tabular manner for better user understanding.
7. By clicking on the any of the repo links can navigate us to the github repo page.