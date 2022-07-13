import React from 'react';
import './Footer.css';
import Button from './Button';

function Footer() {
  function dateToYMD(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1; //Month from 0 to 11
    var y = date.getFullYear();
    return '' + (d <= 9 ? '0' + d : d) + '.' + (m<=9 ? '0' + m : m) + '.' + y + '.';
}
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button path='/sign-up' buttonStyle='btn--outline' onClick={()=>alert("You need to be signed up!")}>Subscribe</Button>
          </form>
          {dateToYMD(new Date())}
        </div>
      </section>
    </div>
  );
}
export default Footer;