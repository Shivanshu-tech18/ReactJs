function StudentCard(props){
    return(
        <div className='stud'>
            <h1>{props.name}</h1>
            <h2>{props.course}</h2>
            <h2>{props.year}</h2>
        </div>
    );
};
export default StudentCard;