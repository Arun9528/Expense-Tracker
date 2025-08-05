export default function DateFormat(dateString:string):string{
    const date = new Date(dateString);
    const day = date.getDate();
    const year = date.getFullYear();
    const month = date.toLocaleString("en-US",{month:"short"});

    const getOrdinal = (d:number)=>{
        const r = d % 100;
        if(r >= 11 && r <= 13 ) return "th";
        switch( d % 10){
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default:return "th";
        }
    }
    return `${day}${getOrdinal(day)} ${month} ${year}`;
}