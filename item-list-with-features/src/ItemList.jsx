import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';

export const ItemList = ({ data }) => {

  //Initializing the variables for our components...
  const [items, setItems] = useState([]);
  const [newText, setNewText] = useState('');
  const [editIdx, setEditIdx] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  



  //-------Event Handlers--------------

  //Event Handler for clicking the 'Add Item' Button...
  const handleAddItem = () => {
      setItems([...items, newText]);   //Add the item in the array...
      setNewText("");               //TextBar refreshed...
  };
  
  //Event Handler for clicking the 'Edit Item' Button...
  const handleEditItem = (index) => {
    setEditIdx(index);              //
  };

  //Event Handler for clicking the 'Save Edit Item' Button...
  const handleSaveEdit = (index, updatedText) => {
    let tempArr = [...items];
    tempArr[index] = updatedText;
    setItems(tempArr);             
    setEditIdx(null);
  };

  //Event Handler for clicking the 'Delete Item' Button...
  const handleDeleteItem = (index) => {
    if (window.confirm('Are you sure to delete this item?')){
        setItems( items.filter((_, i) => i !== index ) );     //Filtering out the selected
    }
  };




  //-------Rendering the Components--------------

//Rendering the Text Bar and 'Add' Button...
const ItemList = (item, idx) =>(
    <li 
    key={idx}
    onMouseEnter={() => setHoveredIndex(idx)}
    onMouseLeave={() => setHoveredIndex(null)}> 
      
    {/* Using a conditional operator for our 'Edit Item Button'...   */}
    { editIdx === idx ? (
      
      // If the Edit button is pressed, this is the state while editing...
      <>
        <div className="field is-grouped">
          <div className="control">
            <input
              type="text"
              className="input"
              value={item}
              onChange={(e) => handleSaveEdit(idx, e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSaveEdit(idx, item)}
            />
          </div>
        </div>
      </>
    ) : (
      
      // If the Edit button was not pressed, show this state with our edit and delete button...      
      <>
          <p className="is-flex-grow-1">{item}</p>
          {hoveredIndex === idx && (
            <div className="field is-grouped">
              <p className="control">
                <button
                  className="button is-warning"
                  onClick={() => handleEditItem(idx)}>
                  Edit Item
                </button>
              </p>
              <p className="control">
                <button
                  className="button is-danger"
                  onClick={() => handleDeleteItem(idx)}>
                  Delete Item
                </button>
              </p>
            </div>
          )}
        </>
    )}

     </li>
);

  //Rendering the Text Bar and 'Add' Button...
  const TextBar = () =>(
    <li className='is-flex mb-2 is-align-items-center'>
      <p className='control is-expanded'>
        <input type="text" 
        className='input' 
        value={newText}  
        onChange={ (e) => setNewText(e.target.value)} 
        placeholder="Enter an item"/>
      </p>
      <p className='control'>
        <button onClick={handleAddItem} className='button is-primary'> Add Item</button>
      </p>
    </li>
  );
  
  //Send this HTML Block to the browser in the 'Test' Sub-Heading...
  return (
    <div className="container">
      <div className="box has-background-light">
          <h1 className="has-text-weight-bold">Item List with CRUD Operations</h1>
          <br/><p> This is the a simple NotePad like WebApp based off of ReactJS.</p>
          
          {/* Displaying the List Items */}
          <ul className="mt-4">
            <li> Apple </li>
            <li> Avacado </li>
            {items.map((item, idx) => ItemList(item, idx))}    
          </ul>


          {/* Displayng the Text Bar and Add Button */}
          {TextBar()}
      </div>
    </div>
  );
}
