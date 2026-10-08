import React from 'react'
import People from './people';

export default function Card({ group }) {
  return (
    <div className="card">
      <h3>{group.title}</h3>
   <People  value={group.students} total={group.capacity}/>
      <p>{group.start} - {group.end}</p>
      <span className="tag">{group.tag}</span>

      <p>{group.days.join(", ")}</p>
      <p>{group.duration} ({group.time})</p>

      <button>Journal</button>
    </div>
  );
}

