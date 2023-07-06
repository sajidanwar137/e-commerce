//setLocalStorage('yourdata', {sku: 'xyz'})
export const setLocalStorage = (setLocalStorageKey, updateData) =>{
  const existingData = JSON.parse(localStorage.getItem(setLocalStorageKey)) || {};
  const newdata = {
    ...existingData,
    ...updateData
  };
  localStorage.setItem(setLocalStorageKey, JSON.stringify(newdata))
}

//getLocalStorage('yourdata')
export const getLocalStorage = (localStorageKey) =>{
  const data = JSON.parse(localStorage.getItem(localStorageKey))
  return data;
}

//getLocalStorageByKey('yourdata', ['keys'])
export const getLocalStorageByKey = (localStorageKey, keys) =>{
  const data = JSON.parse(localStorage.getItem(localStorageKey))
  if(!data) return {}

  const result = {}
  keys.forEach(key => {
    result[key] = data[key] || null
  })
  return result;
}

export default {
  setLocalStorage,
  getLocalStorage,
  getLocalStorageByKey
};