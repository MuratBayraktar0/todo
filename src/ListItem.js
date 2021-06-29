import './itemStyle.css';
import CancelIcon from '@material-ui/icons/Cancel';
import CreateIcon from '@material-ui/icons/Create';
import TextField from '@material-ui/core/TextField';
import CheckIcon from '@material-ui/icons/Check';
import { useState } from 'react';

function ListItem(props) {

  const [editable, setEditable] = useState(false);
  const [editItems, setEditItems] = useState(props.name);
  const [itemDisable,setItemDsable] = useState(false);

  const itemDisabledCheck = () =>{
    if (itemDisable) {
      setItemDsable(false);
    } else {
      setItemDsable(true);
    }
  }

    return (
      <div className="item" style={{opacity: itemDisable ? "0.5":"1"}}>
          <span onClick={itemDisabledCheck} style={{color:'white', display: editable ? "none":"", textDecoration: itemDisable? "line-through":""}}>{editItems}</span>
          <TextField style={{display: editable ? "flex":"none" }} value={editItems} onChange={(e) => {setEditItems(e.target.value)}}/>
          <div>
            <CancelIcon style={{marginRight: "15px"}}/>
            <CreateIcon onClick={() => setEditable(true)} style={{display: editable ? "none":"" }}/>
            <CheckIcon onClick={() => setEditable(false)} style={{display: editable ? "":"none" }}/>
          </div>           
      </div>
    );
  }
  
  export default ListItem;