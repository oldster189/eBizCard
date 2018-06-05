export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
} 

export const trimmingAndLowercase = (email) => {
   return email.replace(/\s+/g, '').toLowerCase()
}
