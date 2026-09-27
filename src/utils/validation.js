const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[+()\d\s-]{6,20}$/;

export const isEmail = (value) => EMAIL_PATTERN.test(String(value ?? '').trim());
export const isPhone = (value) => PHONE_PATTERN.test(String(value ?? '').trim());

export const isFilled = (value) => String(value ?? '').trim().length > 0;

const put = (errors, key, message) => {
  errors[key] = message;
  return errors;
};

export function validateContact(values) {
  const errors = {};

  if (!isFilled(values.fullName)) put(errors, 'fullName', 'Full name is required.');

  if (!isFilled(values.company)) put(errors, 'company', 'Company / Organization is required.');

  if (!isFilled(values.email)) {
    put(errors, 'email', 'Email address is required.');
  } else if (!isEmail(values.email)) {
    put(errors, 'email', 'Enter a valid email address.');
  }

  if (!isFilled(values.phone)) {
    put(errors, 'phone', 'Phone number is required.');
  } else if (!isPhone(values.phone)) {
    put(errors, 'phone', 'Enter a valid phone number.');
  }

  if (!isFilled(values.serviceRequired)) put(errors, 'serviceRequired', 'Please select a service.');

  if (!isFilled(values.subject)) put(errors, 'subject', 'Please select a subject.');

  if (!isFilled(values.message)) {
    put(errors, 'message', 'Tell us about your project or requirements.');
  } else if (values.message.trim().length < 20) {
    put(errors, 'message', 'Please provide at least 20 characters.');
  }

  if (!values.consent) {
    put(errors, 'consent', 'Please confirm that we may contact you.');
  }

  return errors;
}

export function validateNewsletter(email) {
  if (!isFilled(email)) return 'Email address is required.';
  if (!isEmail(email)) return 'Enter a valid email address.';
  return null;
}

export function validateJobApplication(values) {
  const errors = {};

  if (!isFilled(values.fullName)) put(errors, 'fullName', 'Full name is required.');

  if (!isFilled(values.email)) {
    put(errors, 'email', 'Email address is required.');
  } else if (!isEmail(values.email)) {
    put(errors, 'email', 'Enter a valid email address.');
  }

  if (!isFilled(values.coverLetter)) {
    put(errors, 'coverLetter', 'Please add a short introduction.');
  } else if (values.coverLetter.trim().length < 30) {
    put(errors, 'coverLetter', 'Please provide at least 30 characters.');
  }

  if (!values.resume) {
    put(errors, 'resume', 'Please attach your CV / résumé.');
  } else {
    const file = values.resume;
    const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowed.includes(file.type)) {
      put(errors, 'resume', 'Only PDF, DOC, or DOCX files are accepted.');
    } else if (file.size > 5 * 1024 * 1024) {
      put(errors, 'resume', 'File must be smaller than 5 MB.');
    }
  }

  return errors;
}
