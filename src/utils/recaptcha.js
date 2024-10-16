// Import Axios
const axios = require('axios');

// Function to verify reCAPTCHA token
const verifyRecaptcha = async (token) => {
  const secretKey = '6LdBhV4qAAAAAGwOu1cWPcRQfhESvzXC3hoWpJU_'; // Replace with your secret key

  try {
    // Send a POST request to Google's reCAPTCHA API
    const response = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      null, // No data to send in the body
      {
        params: {
          secret: secretKey,
          response: token,
        },
      }
    );

    // Return the success status
    return response.data.success;
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return false;
  }
};

// Example token (replace with the real one sent from your frontend)
const exampleToken = 'YOUR_FRONTEND_RECAPTCHA_TOKEN'; 

// Call the function to verify the token
verifyRecaptcha(exampleToken)
  .then((isHuman) => {
    if (isHuman) {
      console.log('reCAPTCHA verified successfully.');
    } else {
      console.log('reCAPTCHA verification failed.');
    }
  });
