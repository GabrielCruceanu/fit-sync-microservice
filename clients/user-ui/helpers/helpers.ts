export const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    "http://localhost:3000/";
  // Make sure to include `https://` when not localhost.
  url = url.includes("http") ? url : `https://${url}`;
  // Make sure to including trailing `/`.
  url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;
  return url;
};

export const toDateTime = (secs: number) => {
  var t = new Date("1970-01-01T00:30:00Z"); // Unix epoch start.
  t.setSeconds(secs);
  return t;
};

export const validateEmail = (email: string) => {
  const validEmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return !!email.match(validEmailRegex);
};

export const validateUsername = (username: string) => {
  const validUsernameRegex =
    /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
  return validUsernameRegex.test(username);
};
export const validateOnlyLetter = (input: string) => {
  const validUsernameRegex = /^[a-zA-Z]+([a-zA-Z](_|-| )[a-zA-Z])*[a-zA-Z]+$/;
  return validUsernameRegex.test(input);
};
export const validateIsPhoneNumber = (input: string) => {
  if (input.length !== 10) {
    return false;
  }
  const validUsernameRegex = /^\+(?:[0-9]●?){6,14}[0-9]$/;
  return validUsernameRegex.test(input);
};

export const handleInputRequired = (value: string) => {
  return value === "";
};
