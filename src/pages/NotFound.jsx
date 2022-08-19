import React from 'react';
import '../style/NotFound.scss'

const NotFound = () => {
    return (
        <div className="notFound_container">
            <div className='not_found'>
                <div className="img">
                    <img src="https://cdn.icon-icons.com/icons2/330/PNG/256/Mike-icon_35236.png" alt="mike_wazowski" />
                    {/* <img src="https://assets.stickpng.com/images/58a7a0d35ad0fd0b7fdd33b4.png" alt="mike_wazowski" /> */}
                </div>
                <div className="info_text">
                    <h1 className='message_ERROR'>ERROR 404 😞</h1>
                    <h1 className='message_tittle'>OPSS..! PAGE <br /> NOT FOUND</h1>
                    <p className='message'>You must have picked the wrong door because
                    I haven't been able to lay may eye on the page you've been
                    sarchinng for.</p>
                    <div className='center_button'>
                        <a className="back_button" href="/">Back to Home</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;