
export function convertDate(dateTime,formatType = 0){
    let monthName = ["Jan","Feb","March","Apr","May","Jun","Jul","Aug", "Sep","Oct","Nov","Dec"];
    let date = new Date(dateTime);
   
    if(formatType === 0){
      return date.getDate()+" "+(monthName[date.getMonth()])+" "+date.getFullYear();
    }else{
      return date.getFullYear()+"-"+(("0" + [date.getMonth()+1]).slice(-2) )+"-"+("0" + date.getDate()).slice(-2);
    }
    
}

export function getDateInDDMMYYYYFormat(dateString) {
    const parts = dateString.split(' ')[0].split('-');
    const day = parts[2];
    const month = parts[1];
    const year = parts[0];
    return `${day}-${month}-${year}`;
  }

