
  ## Object-Oriented Programming Challenge: Team Profile Generator

   

  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Contact](#contact)
  
   

  ## [Description](#table-of-contents)
    Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.
    Video: https://drive.google.com/file/d/1q1QVspu8e1Lz5QC64j93wRf7D7laBcoF/view?usp=sharing 

  ## [User Story](#table-of-contents)
        AS A manager
        I WANT to generate a webpage that displays my team's basic info
        SO THAT I have quick access to their emails and GitHub profiles
  ## [Acceptance Criteria](#table-of-contents)
        GIVEN a command-line application that accepts user input
        WHEN I am prompted for my team members and their information
        THEN an HTML file is generated that displays a nicely formatted team roster based on user input
        WHEN I click on an email address in the HTML
        THEN my default email program opens and populates the TO field of the email with the address
        WHEN I click on the GitHub username
        THEN that GitHub profile opens in a new tab
        WHEN I start the application
        THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
        WHEN I enter the team manager’s name, employee ID, email address, and office number
        THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
        WHEN I select the engineer option
        THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
        WHEN I select the intern option
        THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
        WHEN I decide to finish building my team
        THEN I exit the application, and the HTML is generated
        
  ## [Installation](#table-of-contents)
    * Clone the github repo
    * Run a terminal in the folder docs
    * Run npm install

  ## [Usage](#table-of-contents)
    * Run a terminal in the folder docs
    * Run node index.js to run the command line application
    * Extra: to run the unit test run npm tests

  ## [Contributing](#table-of-contents)
    * No

  ## [Tests](#table-of-contents)
    * Command line starts asking questions to the user.
    * After ending adding users the html file will be generated or updated 
  
  ## [Contact](#table-of-contents)
    - [GitHub: jorgebesnierb](https://github.com/jorgebesnierb)
    - [Email: jorgebesnierb@outlook.com](mailto:jorgebesnierb@outlook.com)
