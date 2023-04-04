import React from 'react'
import Nav from './Nav'

const Student = () => {
  return (
    <>
       <Nav/>
       <div className='box1'>
           <h1 className='heading'>Students Details</h1>
           <button className='btn1'>Add New Student</button>
       </div>
      <table border='1' className='table'>
        <thead>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Change</th>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>32</td>
            <td>MERN</td>
            <td>October</td>
            <td><a href="#">Edit</a></td>
          </tr>
          <tr>
            <td>Deo</td>
            <td>32</td>
            <td>MERN</td>
            <td>November</td>
            <td><a href="#">Edit</a></td>
          </tr>
          <tr>
            <td>Sachin</td>
            <td>34</td>
            <td>MERN</td>
            <td>December</td>
            <td><a href="#">Edit</a></td>
          </tr>
          <tr>
            <td>Tanay</td>
            <td>30</td>
            <td>MERN</td>
            <td>January</td>
            <td><a href="#">Edit</a></td>
          </tr>
          <tr>
            <td>Arun</td>
            <td>20</td>
            <td>MERN</td>
            <td>February</td>
            <td><a href="#">Edit</a></td>
          </tr>
          <tr>
            <td>Anjali</td>
            <td>28</td>
            <td>MERN</td>
            <td>March</td>
            <td><a href="#">Edit</a></td>
          </tr>
          <tr>
            <td>Rashmi</td>
            <td>25</td>
            <td>MERN</td>
            <td>April</td>
            <td><a href="#">Edit</a></td>
          </tr>
          
        </tbody>
      </table>
    </>
  )
}

export default Student