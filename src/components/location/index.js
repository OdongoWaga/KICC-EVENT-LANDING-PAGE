import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.238769006966!2d36.8232516!3d-1.2883556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5846aa44b544448a!2sKenyatta+International+Conference+Centre!5e0!3m2!1sen!2ske!4v1548246972435" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;