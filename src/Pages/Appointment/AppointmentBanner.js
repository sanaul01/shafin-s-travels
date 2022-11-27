import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid red;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: green;
    color: green;
  }
  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    color: green;
  }
`;

const AppointmentBanner = ({date, setDate}) => {
    
    return (
        <>
        <style>{css}</style>
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row">
                <img src="https://saibabatravels.com/wp-content/themes/saibaba/images/image8.png" class="max-w-30px lg:max-w-xs rounded-lg shadow-2xl" alt=""/>
                <div className="min-h-screen lg:pt-36">
                    <DayPicker 
                    modifiersStyles={{
                        disabled: { fontSize: '75%' }
                      }}
                      modifiersClassNames={{
                        selected: 'my-selected',
                        today: 'my-today'
                      }}
                    mode="single"
                    selected={date}
                    onSelect={setDate}/>
                </div>
                
            </div>
        </div>
        </>
    );
};

export default AppointmentBanner;