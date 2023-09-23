# CalTrack

- **Contributors:** Isaac Asher
- [**Backend**]()
- [**Deployed Site**]()
- **Languages, Database, and Frameworks Used:** React, Python, Django, Node, postgreSQL, HTML, SASS
- [**Jira Board**](https://id.atlassian.com/invite/p/jira-software?id=gCZCOldCQ92yWtjJuLRvxA)

## Description

CalTrack takes the guesswork out of tracking your daily caloric intake!  Through a form, users can add every meal that they have throughout their day. By setting themselves a goal, users can also utilize CalTrack to reach that nutritional goal with ease.

Whether you're interested in losing weight, taking a shot at a new diet routine, or simply want to keep your healthy lifestyle HEALTHY, CalTrack is your go-to app for keeping your nutritional health in check.

Join the CalTrack community today and make every day a nutritionally healthy one, Happy Tracking!

## Main Features 🍲
Add Your meals throughout each day to keep track of your daily intake

- Daily Tracking: An intuitive tracking system that allows you to track you calories day by day, as opposed to making a post for each day seperately. 

- User Profiles: Users Will have access to their profile page, allowing them to update their weight, age, Goals, etc.

## Mock UP of UI
***Auth Page***

![Signup/Login](https://i.imgur.com/qCPr1yS.png)

***Dashboard Page***

![Index/Show](https://i.imgur.com/TxHmwbp.png)

***Single Food Page***

![Show page](https://i.imgur.com/CjfI8ox.png)

***User Profile Page***

![Show page](https://i.imgur.com/QKQ8KgK.png)

***User Profile Edit/Update Page***

![Show page](https://i.imgur.com/uUTPfss.png)

## Endpoints
![All Endpoints](https://i.imgur.com/Q9MSRJw.png)


## Schemas
![Schema Models](https://i.imgur.com/4yYD6Cs.png)

## ERD (ENTITY RELATIONSHIP DIAGRAM)
``` mermaid
erDiagram
    
    USER ||--o{ FOOD : "LOGS IN"
    USER ||--o{ USER_PROFILE : "First Time Login"
    USER_PROFILE ||--o{ FOOD : "Redirected to Dashboard"
    FOOD ||--o{ USER : "LOGS OUT"
    
    USER_PROFILE {
        int id
        string username
        string password
        string name
        int weight
        string userImg
    }
    
    USER {
        int id
        string username
        string password
    }
    
    FOOD {
        int id
        string name
        int calories
        int fat
        int protein
        int carbs
        int sugar
    }
```