# **1 Introduction**

## **1.1 Purpose**
The purpose of this document is to provide a detailed description of the requirements for the development of the **Skill&Tell** website. This website will serve as a platform for members of the student club as well as other vistors showcase their skills and talents, and to connect with other members who share similar interests.
The website will also describe the main objectives and activities done by the club.

## **1.2 Scope**
The **Skill&Tell** website is designed to be a platform for students to showcase their skills, connect with other students, and find opportunities for collaboration and personal growth. The website will feature various sections such as member profiles, project listings, event calendars, and discussion forums. The website will be accessible to all the members of the club as well as other visitors.

## **1.3 Definitions, acronyms, and abbreviations**
1. SRS: Software Requirement Specification
1. UI: User Interface
3. CMS: Content Management System


## **1.4 References**
**Skill&Tell** development heads
# **2 General Description**
## **2.1 Product perspective**
The "Skill&Tell" website will be a standalone web application, accessible through any web browser. The website will be built using a modern front-end framework with **React** and will communicate with a back-end API for data storage and retrieval. The website will be integrated with a CMS (Content Management System) that will allow authorized administrators to manage the content and functionality of the website.
## **2.2 Product functions**
The website will provide the following functions:

User registration and login
Member profile creation and management
Project creation and management
Event creation and management
Discussion forum
Search and filter functionality
## **2.3 User characteristics**
The website is designed for university students  who are interested in showcasing their soft and technical skills, connecting with other students, and finding opportunities for collaboration and personal growth. Users should have basic computer skills and be able to use a web browser.

## **2.4 Constraints**

The website must comply with university policies and guidelines for student clubs.
The website must be accessible to all registered students of the university.
# **3 Specific Requirements**
## **3.1 External Interface Requirements**
### **3.1.1 User interfaces**
 #### The website will have a responsive and user-friendly UI (User Interface) that adapts to different screen sizes and devices. The website will have a consistent - visual design and navigation system across all pages. The website will have the following UI components:
- <span style="color:cyan"> **Home Page:** </span>
  - an overview of the website's features and functions.
  - Story line of the Club where can be expanded to the **EVENT** pages
- <span style="color:cyan">**Member's Profile**
</span> *Contains the following:*
    - User's details.
    - User's Activity & Recent Activities.
- <span style="color:cyan">**Event Calendar Page**
</span> *Contains the following:*
    -  All the events done by the Club providing the following details for **each** event:
       -  The event's *Title*
       -  The event's *Description*
       -  The event's *Date*
       -  The event's *Poster*
- <span style="color:cyan">**Discussion forum page(ChatApp Page)**
</span> 
    - Topic threads and reply functionality.
- <span style="color:cyan">**Administration page**
</span> with CMS functionality for authorized administrators.

### **3.1.2 Software interfaces**

The website will communicate with a back-end API for data storage and retrieval. The API will use standard protocols (e.g. HTTP, JSON) and will be developed using a modern back-end framework with **PHP and Mysql**.

## **3.2 Functional Requirements**
### **The website will provide the following functional requirements:**

- User registration and login
- Users must be able to register and create an account with their professional email providing any other information such as name , birthdate ...
- Users must be able to log in and log out of their account.
- Member profile creation and management
Users must be able to create and manage their profile information. 

- The website will contain a **chat page** for the registred members to enable good quality communication. 

- The chat services will also provide a section where the user can have a chat with a ChatBot (**Conversational AI**)
- <span style="color:gold;"> ***STAR*** </span> the Event Feature (Just similar the <span style="color:blue"> ***Like*** </span> feature in Facebook) in the event pages.
- Add an Event feature, only for **adminisrator** users.
- Search in the Events.
