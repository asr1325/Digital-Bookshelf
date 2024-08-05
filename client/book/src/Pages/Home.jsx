import React from 'react';
import { Rating, Avatar, Box, Pagination } from '@mui/material';

function Banner() {

  return (
    <>
    <div className='banner'>
        <div className='left'>
            <br />
        <p className='heading'>A Teaspoon of Earth and Sea <br />
            by Dina Nayeri
        </p>
        <br />
        <div className="rate">
        <p>by John Doe</p>
        <Rating name="half-rating-read" defaultValue={3.6} precision={0.5} readOnly size="large" /> 
        </div>
        <br />
        <p className='desc'>
        Growing up in a small rice-farming village in 1980s Iran,
    eleven-year-old Saba Hafezi and her twin sister, Mahtab, are 
    captivated by America. They keep lists of English words and collect illegal Life
    magazines, television shows, and rock music. So when her mother and sister disappear, leaving Saba and her father alone in Iran, 
    Saba is certain that they have moved to America without her. But her parents have taught her that “all fate is written in the blood,” and
    that twins will live the same life, even if separated by land and sea.</p> 
    <Box display="flex" justifyContent='center'>
        <Pagination count={3} color='primary'/>
    </Box>
        </div>
        <div className='right'>
            <img src="book.jpg" alt="" />
        </div>
    </div>

    <div className='brand'>
        <br />
        <p className='p'>Trusted by companies around the world</p>
        <br />
        <br />
        <div className="images">
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Goodreads_logo.svg" alt="goodread"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/LibraryThing_Logo_medium.png" alt="" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" />
        </div>

      <br /><br />

         <div className="headings">
          <br />
         <p>Best-selling Authors</p>
         </div>
            <div className="imgs">
              <div className="one">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/RLStine.jpg/330px-RLStine.jpg" alt="RL STINE" />
              <p>R.L Stine</p>
             </div>
            <div className="two">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/J._K._Rowling_2010.jpg/330px-J._K._Rowling_2010.jpg" alt="JK Rowling" />
              <p>JK Rowling</p>
            </div>
            <div className="three">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Agatha_Christie.png/330px-Agatha_Christie.png" alt="Agatha Christie" />
              <p>Agatha Christie</p>
            </div>
            <div className="four">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Dan_Brown_bookjacket_cropped.jpg/330px-Dan_Brown_bookjacket_cropped.jpg" alt="JK Rowling" />
              <p>Dan Brown</p>
            </div>
            <div className="five">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Paulo_Coelho%2C_June_2024.jpg/330px-Paulo_Coelho%2C_June_2024.jpg" alt="JK Rowling" />
              <p>Paulo Coelho</p>
            </div>
          </div>
          </div>
    </>
  )
}

export default Banner