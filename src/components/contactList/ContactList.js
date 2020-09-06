import React from 'react';
import ContactItem from './contactItem/ContactItem'
const ContactList = ({filteredItems, getIndexForDelete}) => {

  const delItem = (id) => {
    filteredItems.map(el => el.id===id ? getIndexForDelete(filteredItems.indexOf(el)) : '');
  }

  return(
    <>
    <ul>
      {
        filteredItems.map(({name,number,id})=>(
          <ContactItem key={id} id={id} name={name} number={number} delItem={delItem}/>
        ))
      }
    </ul>
    </>
  )
}
export default ContactList;