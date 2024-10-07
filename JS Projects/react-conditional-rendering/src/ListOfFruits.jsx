import PropTypes from 'prop-types';

export default function ListOfFruits(props){
    //list of mappings from original props
    const listItems = props.items.map(item => <li key = {item.id}><strong>{item.name}</strong>: &nbsp; {item.color}</li>)
    return(
        <>
        <h3 className="list-category">{props.category}</h3>
        <ol className = "list">{listItems}</ol>
        </>
    )
}
ListOfFruits.defaultProps ={
    category: "I do not like fruits!",
    items: []
}