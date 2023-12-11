import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const Note = (props) => {
    
   const {title , reps, load} = props.note;

   function handleDelete(event)
   {
    event.preventDefault();

    const asfunct = async() =>{
        await fetch(`https://gymbuddy-rlut.onrender.com/api/workouts/${props.note._id}`,{method:'DELETE'});
        props.func();
    }
    asfunct();
   }

    return ( 
        <div className="note">
            <h1>{title}</h1>
            <h2>{load}</h2>
            <h2>{reps}</h2>
            {/* <div><DeleteIcon onClick={handleDelete} /></div> */}
            <div style={{display : "flex" , gap : "10px"}}><Button size="small" style = {{background : "black"}} variant="contained">UPDATE</Button> <Button size="small" style = {{background : "black"}} onClick={handleDelete} variant="contained">DELETE</Button></div>
        </div>
     );
}
 
export default Note;