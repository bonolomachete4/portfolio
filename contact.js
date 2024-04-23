
function validateContactForm(contactForm) {

    
    const email = contactForm["email"].value;
    const message = contactForm["message"].value;
  
    
    if ( !email || !message) {
      return false;
    }
  
    if (!isValidEmail(email) || (message && !isValidPhoneNumber(message))) {
      return false;
    }
  
   
    return true;
  }