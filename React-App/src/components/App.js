/*import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:8080/students/get')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Your React App</h1>
            <ul>
                {data.map(item => (
                    <li key={item.ID}>
                        <strong>ID:</strong> {item.ID}<br />
                        <strong>Name:</strong> {item.Name}<br />
                        <strong>Surname:</strong> {item.Surname}<br />
                        <strong>Username:</strong> {item.Username}<br />
                        <strong>Email:</strong> {item.Email}<br />
                        <strong>Password:</strong> {item.Password}<br />
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;*/

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CategoryButtons from './CategoryButtons';
import CategoryPage from './CategoryPage';
import ACategoryPage from './ACategoryPage';

function App() {
  const bodyStyle = {
    background: '#111',
    color: '#fff',
    margin: 0,
    padding: 0,
  };

  const appStyle = {
    textAlign: 'center',
    padding: '20px',
  };

  const titleStyle = {
    color: '#61dafb',
    margin: 0,
    padding: 0,
  };

  const categoryData = {
    a: {
      headline: 'A Category',
      description: 'A and A1 category (motorcycle and moped)',
      photo: process.env.PUBLIC_URL + '/images/motor.png',
      questions: [
        {
          question: 'What should you do when approaching a stop sign?',
          answers: ['Stop completely and then proceed', 'Slow down and proceed without stopping', 'Ignore it and keep going'],
        },
        {
          question: 'When should you use your motorcycle headlights?',
          answers: [
            'Only at night',
            'During the day to increase visibility',
            'Only in bad weather conditions',
          ],
        },
        {
          question: 'What is the recommended safe following distance behind a vehicle?',
          answers: ['1 second', '2 seconds', '3 seconds'],
        },
        {
          question: 'In heavy traffic, what should you do to increase your visibility?',
          answers: [
            'Stay close to the vehicle in front of you',
            'Ride in the center of the lane',
            'Frequently change lanes',
          ],
        },
        {
          question: 'When should you use your motorcycles horn?',
          answers: [
            'To alert others of your presence in a dangerous situation',
            'To express frustration with other road users',
            'Only in residential areas',
          ],
        },
        {
          question: 'What is the correct hand signal for a right turn?',
          answers: ['Extend your left arm and point right', 'Extend your right arm and point right', 'Extend your left arm downward'],
        },
        {
          question: 'When is it important to check your mirrors?',
          answers: ['Only when changing lanes', 'Before slowing down or stopping', 'Only in urban areas'],
        },
        {
          question: 'What does it mean when a traffic light is flashing yellow?',
          answers: ['Proceed with caution', 'Stop and wait for a green light', 'Slow down and prepare to stop'],
        },
        {
          question: 'How often should you check your motorcycles tire pressure?',
          answers: ['Once a month', 'Once a year', 'Only when you notice a problem'],
        },
        {
          question: 'What is the most common cause of motorcycle accidents at intersections?',
          answers: [
            'Failure to yield the right of way',
            'Excessive speed',
            'Lack of proper protective gear',
          ],
        },
      ],
    },
    b: {
      headline: 'B Category',
      description: 'B and B1 category (car and moped)',
      photo: process.env.PUBLIC_URL + '/images/taxi.png',
    },
    c: {
      headline: 'C Category',
      description: 'C and C1 category (truck and truck 7.5t)',
      photo: process.env.PUBLIC_URL + '/images/truck.png',
    },
    d: {
      headline: 'D Category',
      description: 'D category (bus)',
      photo: process.env.PUBLIC_URL + '/images/bus.png',
    },
    t: {
      headline: 'T Category',
      description: 'T category (tractor, working machines)',
      photo: process.env.PUBLIC_URL + '/images/tractor.png',
    },
    firstAid: {
      headline: 'First Aid',
      description: 'First aid - the most important test',
      photo: process.env.PUBLIC_URL + '/images/ambulance.png',
    },
  };

  return (
    <BrowserRouter>
      <div className="app" style={bodyStyle}>
        <div style={appStyle}>
          <h1 className="app-title" style={titleStyle}>
            eDrivingSchool
          </h1>
          <Routes>
            <Route path="/" element={<CategoryButtons categoryData={categoryData} />} />
            {Object.keys(categoryData).map((category) => (
              <Route
                key={category}
                path={`/${category.toLowerCase()}test`}
                element={
                  category === 'a' ? (
                    <ACategoryPage category={category} categoryData={categoryData} />
                  ) : (
                    <CategoryPage category={category} categoryData={categoryData} />
                  )
                }
              />
            ))}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;