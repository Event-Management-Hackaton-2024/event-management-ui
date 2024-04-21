import axios from "axios";
import { getToken } from "./AuthService";

const REST_API_BASE_URL = "http://localhost:8080/events";

export const getAllEvents = () => axios.get(REST_API_BASE_URL);

export const addUserIdToEvent = async (eventId, userId) => {
  const url = `http://localhost:8080/events/${eventId}/add/${userId}`;
};

export const getUsersForEvent = (eventId) => {
  axios.get(`http://localhost:8080/events/${eventId}/users`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken,
    },
  });
};

export const dummyEventData = [
  {
    date: "2024-04-18",
    title: "Event 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscuconsectetur dapibus, ligula libero fermentum velit, ac malesuada nisi felis nec lorem. Nam non turpis velit. Integer non turpis lorem. Nulla facilisi. Phasellus feugiat odio non lectus fermentum, sit amet ultrices ligula ullamcorper. Donec vulputate id lacus nec ultrices. Pellentesque habitant morbi tristique senectus et netus et mal",
    location: "Location 1",
    image: "https://th.bing.com/th/id/OIP.zolbtShtE5P9mm0gs_YzTQAAAA?rs=1&pid=ImgDetMain",
    visitorsArray: [
      "Visitor 1",
      "Visitor 2",
      "Visitor 3",
      "interests 2",
      "interests 3",
      "interests 1",
      "interests 2",
      "interests 3",
      "interests 1",
      "interests 2",
      "interests 3",
      "interests 1",
      "interests 2",
      "interests 3",
    ],
    interests: [
      "interests 1",
      "interests 2",
      "interests 3",
      "interests 1",
      "interests 2",
      "interests 3",
      "interests 1",
      "interests 2",
      "interests 3",
      "interests 1",
      "interests 2",
      "interests 3",
    ],
  },
  {
    date: "2024-04-21",
    title: "Event 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. us eu metus accumsan fermentum. Integer a libero vel felis laoreet fermentum. Maecenas eleifend, felis in consectetur dapibus, ligula libero fermentum velit, ac malesuada nisi felis nec lorem. Nam non turpis velit. Integer non turpis lorem. Nulla facilisi. Phasellus feugiat odio non lectus fermentum, sit amet ultrices ligula ullamcorper. Donec vulputate id lacus nec ultrices. Pellentesque habitant morbi tristique senectus et netus et mal",
    location: "Location 2",
    image: "https://th.bing.com/th/id/OIP.zolbtShtE5P9mm0gs_YzTQAAAA?rs=1&pid=ImgDetMain",
    visitorsArray: [
      "Visitor 1",
      "Visitor 2",
      "Visitor 3",
      "interests 2",
      "interests 3",
      "interests 2",
      "interests 3",
    ],
    interests: ["interests 1", "interests 2", "interests 3"],
  },
  {
    date: "2024-05-21",
    title: "Event 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget turpis vitae libero consectetur facilisis. Proin a eros et elit aliquet lobortis. Sed vel urna ac neque consectetur cursus. Nullam ut lacus eu metus accumsan fermentum. Integer a libero vel felis laoreet fermentum. Maecenas eleifend, felis in consectetur dapibus, ligula libero fermentum velit, ac malesuada nisi felis nec lorem. Nam non turpis velit. Integer non turpis lorem. Nulla facilisi. Phasellus feugiat odio non lectus fermentum, sit amet ultrices ligula ullamcorper. Donec vulputate id lacus nec ultrices. Pellentesque habitant morbi tristique senectus et netus et mal",
    location: "Location 3",
    image: "https://th.bing.com/th/id/OIP.zolbtShtE5P9mm0gs_YzTQAAAA?rs=1&pid=ImgDetMain",
    visitorsArray: ["Visitor 1", "Visitor 2", "Visitor 3"],
    interests: ["interests 1", "interests 2", "interests 3"],
  },
];
