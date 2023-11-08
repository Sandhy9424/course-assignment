
let database={
  studentList:[
    {id: 1,
        name: 'Alice Johnson',
        email: 'alice@example.com',
        password:"1234",
    courseList:[]},
        {id: 2,
       name: 'Bob Smith',
          email: 'bob@example.com',
          password:"1234",
          courseList:[]
        }
  ],
  courseList:[
    {
        id: 1, // Unique identifier for the course
        name: 'Introduction to React Native',
        instructor: 'John Doe', // Name of the course instructor
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'open',
        thumbnail: 'your.image.here', //Link to the course thumbnail
        duration: '8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
         location: 'Online',
         prerequisites: ['Basic JavaScript knowledge', 'Familiarity withReact'],
        syllabus: [
{
week: 1,
topic: 'Introduction to React Native',
content: 'Overview of React Native, setting up your development environment.'
},
{
week: 2,
topic: 'Building Your First App',
content: 'Creating a simple mobile app using React Nativecomponents.'
},
// Additional weeks and topics...
],
students: [

// Additional enrolled students...
],
},
{
    id: 2, // Unique identifier for the course
    name: 'Introduction to J2EE',
    instructor: 'Ayush', // Name of the course instructor
    description: 'Learn the basics of J2EE development and build your first mobile app.',
    enrollmentStatus: 'open',
    thumbnail: 'your.image.here', //Link to the course thumbnail
    duration: '8 weeks', // Duration of the course
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
     location: 'Online',
     prerequisites: ['Basic JavaS knowledge', 'Familiarity with Core Java'],
    syllabus: [
{
week: 1,
topic: 'Introduction to React Native',
content: 'Overview of J2EE, setting up your development environment.'
},
{
week: 2,
topic: 'Building Your First App',
content: 'Creating a simple mobile app using J2EE.'
},
// Additional weeks and topics...
],
students: [

// Additional enrolled students...
],
},
{
    id: 3, // Unique identifier for the course
    name: 'Introduction to React js',
    instructor: 'Amit jhaa', // Name of the course instructor
    description: 'Learn the basics of React js development and build your first mobile app.',
    enrollmentStatus: 'open',
    thumbnail: 'your.image.here', //Link to the course thumbnail
    duration: '8 weeks', // Duration of the course
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
     location: 'Online',
     prerequisites: ['Basic JavaScript knowledge', 'Familiarity withReact'],
    syllabus: [
{
week: 1,
topic: 'Introduction to React js',
content: 'Overview of React js, setting up your development environment.'
},
{
week: 2,
topic: 'Building Your First App',
content: 'Creating a simple web app using React js components.'
},
// Additional weeks and topics...
],
students: [

// Additional enrolled students...
],
},{
    id: 4, // Unique identifier for the course
    name: 'Introduction to Spring Boot',
    instructor: 'John Doe', // Name of the course instructor
    description: 'Learn the basics of Spring Boot development and build your first mobile app.',
    enrollmentStatus: 'open',
    thumbnail: 'your.image.here', //Link to the course thumbnail
    duration: '8 weeks', // Duration of the course
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
     location: 'Online',
     prerequisites: ['Basic java knowledge', 'Familiarity java libriaries'],
    syllabus: [
{
week: 1,
topic: 'Introduction to Spring Boot',
content: 'Overview of Spring Boot, setting up your development environment.'
},
{
week: 2,
topic: 'Building Your First App',
content: 'Creating a simple web app using Spring Boot.'
},
// Additional weeks and topics...
],
students: [

// Additional enrolled students...
],
},
{
  id: 4, // Unique identifier for the course
  name: 'Introduction to Spring',
  instructor: 'John Doe', // Name of the course instructor
  description: 'Learn the basics of Spring development and build your first mobile app.',
  enrollmentStatus: 'open',
  thumbnail: 'your.image.here', //Link to the course thumbnail
  duration: '8 weeks', // Duration of the course
  schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
   location: 'Online',
   prerequisites: ['Basic java knowledge', 'Familiarity java libriaries'],
  syllabus: [
{
week: 1,
topic: 'Introduction to Spring',
content: 'Overview of Spring, setting up your development environment.'
},
{
week: 2,
topic: 'Building Your First App',
content: 'Creating a simple web app using Spring.'
},
// Additional weeks and topics...
],
students: [

// Additional enrolled students...
],
}
  ]
}

module.exports=database;


