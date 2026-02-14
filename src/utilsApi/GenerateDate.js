
const days = ["sun", "Mon", "Tue", 'Wed', "Thru", "Fri", "Sat"]
const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
export const GenerateDate = ()=>{
    let alldate = []
     const today = new Date()
     for(let i=0; i < 7; i++){
        let nextday = new Date(today)
        nextday.setDate(today.getDate() + i)

        let day = Number(nextday.getDay())
        let date =  Number(nextday.getDate())
        let month =  Number(nextday.getMonth())
        let year = nextday.getFullYear()
       
        alldate.push(`${days[day]} , ${date} ${months[month]} , ${year}`)
     }
     console.log(alldate);
     
 return alldate
}