export const convertDateToLocal = (date) => {
    if (date) {
      let localDate = new Date(date)
      const options = {dateStyle: 'full'}
      let localString = localDate.toLocaleString('en-US', options)
      return localString
    }
  }
  
  export const convertTimeToLocal = (date) => {
    if (date) {
      let localDate = new Date(date)
      const options = {timeStyle: 'short'}
      let localString = localDate.toLocaleString('en-US', options)
      return localString
    }
  }