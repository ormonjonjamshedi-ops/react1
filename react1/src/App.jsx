 import React from 'react'
import "./App.css";

import Card from './conpanent/card'
 
 export default function () {
  
  const groups = [
  {
    id: 1,
    title: ".Net August 2026",
    start: "Aug 5, 2026",
    end: "Dec 5, 2026",
    tag: "Profsouz",
    students: 7,
    capacity: 7,
    qualifiers: 0,
    days: ["Mn", "Tu", "Wd", "Th", "Fr", "Sa"],
    duration: "4 months",
    time: "16:00 - 18:00",
  },
   {
    id: 2,
    title: "Computer Basic August",
    start: "Aug 5, 2026",
    end: "Dec 5, 2026",
    tag: "Profsouz",
    students: 2,
    capacity: 7,
    qualifiers: 0,
    days: ["Mn",  "Wd", ,  "Sa"],
    duration: "2 months",
    time: "16:00 - 18:00",
  },
   {
    id: 3,
    title: "Junior JS August 2026",
    start: "Aug 5, 2026",
    end: "Dec 5, 2026",
    tag: "Profsouz",
    students: 4,
    capacity: 7,
    qualifiers: 0,
    days: ["Mn", "Tu", "Wd", "Th", "Fr", "Sa"],
    duration: "4 months",
    time: "16:00 - 18:00",
  },
   {
    id: 4,
    title: "Robotic September",
    start: "Sep 5, 2026",
    end: "Dec 5, 2026",
    tag: "Profsouz",
    students: 7,
    capacity: 7,
    qualifiers: 0,
    days: ["Mn", "Tu",   "Sa"],
    duration: "4 months",
    time: "16:00 - 18:00",
  }, {
    id: 5,
    title: "Html Juli kids",
    start: "Aug 5, 2026",
    end: "Dec 5, 2026",
    tag: "Profsouz",
    students: 7,
    capacity: 7,
    qualifiers: 0,
    days: ["Mn", "Tu", "Wd", "Th", "Fr", "Sa"],
    duration: "4 months",
    time: "16:00 - 18:00",
  },
 
  {
    id: 6,
    title: "Next JS",
    start: "Aug 5, 2026",
    end: "Dec 5, 2026",
    tag: "Profsouz",
    students: 7,
    capacity: 7,
    qualifiers: 0,
    days: ["Mn", "Tu", "Wd", "Th", "Fr", "Sa"],
    duration: "4 months",
    time: "16:00 - 18:00",
  },
   {
    id: 7,
    title: "Figma September 2026",
    start: "sep 5, 2026",
    end: "Dec 5, 2026",
    tag: "Profsouz",
    students: 7,
    capacity: 7,
    qualifiers: 0,
    days: ["Mn", "Tu", "Wd", "Th", "Fr", "Sa"],
    duration: "4 months",
    time: "16:00 - 18:00",
  },
   {
    id: 8,
    title: "Js Junior September 2026",
    start: "Aug 5, 2026",
    end: "Dec 5, 2026",
    tag: "Profsouz",
    students: 7,
    capacity: 7,
    qualifiers: 0,
    days: ["Mn", "Tu", "Wd", "Th", "Fr", "Sa"],
    duration: "4 months",
    time: "16:00 - 18:00",
  },
  
];
return (
   <div className="grid">
      {groups.map((g) => (
        <Card key={g.id} group={g} />
      ))}
    </div>
)
  }

 