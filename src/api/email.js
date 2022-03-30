import emailjs, { init } from '@emailjs/browser';
init(process.env.REACT_APP_EMAIL_JS_USER_ID);

export async function send(info) {
  const templateParams = {
    fullname: info.fullname,
    subject: info.subject,
    email: info.email,
    message: info.message,
  };

  try {
    const response = await emailjs.send(
      process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
      process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
      templateParams
    );
    return response;
  } catch (error) {
    throw error;
  }
}
