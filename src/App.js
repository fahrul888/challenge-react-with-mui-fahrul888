import './App.css';
import React, {useState} from 'react';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import { Grid, Box, List } from '@mui/material';

import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  const [contacts, setContacts] = useState(contactsJSON);
  const addContact = (inputData) => {
    const objContact = {
      name: inputData.name,
      phone: inputData.phone,
      email: inputData.email,
      photo: inputData.photo
    };
    const inputDataBaru = [...contacts, objContact];
    setContacts(inputDataBaru);
  }
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  return (
    <div className="App">
      <Header />
      <Box>
        <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md:3}}>
          <Grid item xs={6}>
            <ContactForm fnAddContacts={addContact} />
          </Grid>
          <Grid item xs={6}>
            <List sx={{ width: '100%', maxWidth: 560, bgcolor: '#e0f2f1' }}>
              {contacts.map((data) => (
                <Contact data={data} />  
              ))}
            </List>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default App;