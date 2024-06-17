// "use client"

// import React, { useEffect, useState } from 'react'
// import { gapi } from 'gapi-script'
// import Event from '@/components/CalendarEvent.js'

// function page() {
//     const [events, setEvents] = useState([])

//     const calendarID = process.env.NEXT_PUBLIC_REACT_APP_CALENDAR_ID
//     const apiKey = process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_API_KEY
//     const accessToken = process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_ACCESS_TOKEN

//     const getEvents = (calendarID, apiKey) => {
//         function initiate() {
//             gapi.client
//                 .init({
//                     apiKey: apiKey,
//                 })
//                 .then(function () {
//                     return gapi.client.request({
//                         path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
//                     })
//                 })
//                 .then(
//                     (response) => {
//                         let events = response.result.items
//                         setEvents(events)
//                     },
//                     function (err) {
//                         return [false, err]
//                     }
//                 )
//         }
//         gapi.load('client', initiate)
//     }

//     useEffect(() => {
//         const events = getEvents(calendarID, apiKey)
//         setEvents(events)
//     }, [])

//     console.log(events, "eventssss")

//     return (
//         <div className="App flex flex-col justify-center py-8">
//             <h1 className="mb-4 text-2xl font-bold">
//                 React App with Google Calendar API!
//                 <ul>
//                     {events?.map((event) => (
//                         <li key={event.id} className="flex justify-center">
//                             <Event description={event.summary} />
//                         </li>
//                     ))}
//                 </ul>
//             </h1>
//         </div>
//     )
// }

// export default page


// // "use client"

// // import React, { useEffect, useState } from 'react'
// // import { gapi } from 'gapi-script'
// // import Event from '@/components/CalendarEvent.js'

// // function Page() {
// //     const [events, setEvents] = useState([])

// //     const calendarID = process.env.NEXT_PUBLIC_REACT_APP_CALENDAR_ID
// //     const apiKey = process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_API_KEY
// //     const accessToken = process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_ACCESS_TOKEN
// //     const clientId = process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_CLIENT_ID

// //     const getEvents = (calendarID, clientId, apiKey, accessToken) => {
// //         return new Promise((resolve, reject) => {
// //             gapi.client
// //                 .init({
// //                     apiKey: apiKey,
// //                     clientId: clientId,
// //                     discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
// //                     scope: "https://www.googleapis.com/auth/calendar.readonly",
// //                 })
// //                 .then(function () {
// //                     gapi.client.setToken({ access_token: accessToken });

// //                     gapi.client.calendar.events
// //                         .list({
// //                             calendarId: calendarID,
// //                             timeMin: new Date().toISOString(), // Fetch events starting from now
// //                             showDeleted: false,
// //                             singleEvents: true,
// //                             orderBy: "startTime",
// //                         })
// //                         .then((response) => {
// //                             const events = response.result.items;
// //                             resolve(events);
// //                         })
// //                         .catch((err) => {
// //                             console.error("Error fetching events:", err);
// //                             reject(err);
// //                         });
// //                 })
// //                 .catch((err) => {
// //                     console.error("Error initializing Google API client:", err);
// //                     reject(err);
// //                 });
// //         });
// //     };

// //     useEffect(() => {
// //         const fetchEvents = async () => {
// //             try {
// //                 const events = await getEvents(calendarID, clientId, apiKey, accessToken);
// //                 setEvents(events);
// //             } catch (error) {
// //                 console.error("Error fetching events:", error);
// //             }
// //         };

// //         fetchEvents();
// //     }, [calendarID, clientId, apiKey, accessToken]);

// //     console.log(events, "events");

// //     return (
// //         <div className="App flex flex-col justify-center py-8">
// //             <h1 className="mb-4 text-2xl font-bold">
// //                 React App with Google Calendar API!
// //             </h1>
// //             <ul>
// //                 {events?.map((event) => {
// //                     const start = new Date(event.start.dateTime || event.start.date).toLocaleString();
// //                     const end = new Date(event.end.dateTime || event.end.date).toLocaleString();
// //                     return (
// //                         <li key={event.id} className="flex justify-center">
// //                             <Event description={`${event.summary} (Start: ${start}, End: ${end})`} />
// //                         </li>
// //                     );
// //                 })}
// //             </ul>
// //         </div>
// //     );
// // }

// // export default Page;
