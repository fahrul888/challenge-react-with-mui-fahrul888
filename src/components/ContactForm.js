import React, {useState} from "react";
import { TextField, Button, Card, Box, List, ListItem, ListItemText  } from "@mui/material";

const ContactForm = (props) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [inputData, setInputData] = useState({name:'', phone:'', email:'', photo:''});
    
    const inputOnChangeHandler = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setInputData(values => ({...values, [name]: value}));
    };

    const formOnSubmitHandler = (event) => {
        event.preventDefault();
        props.fnAddContacts(inputData); 
        setInputData(inputData);
    };


    return (
        <>
        <Card variant="outlined" sx={{width: '60%', marginLeft:'10%'  , p: 2, bgcolor: '#fffde7' }}> 
            <form action="" onSubmit={formOnSubmitHandler} >
                <List >
                    <ListItem>
                        <ListItemText>
                            <TextField fullWidth sx={{ m: 1 }} variant="filled" id="standard-basic" label="Name"  value={inputData.name} name="name" onChange={inputOnChangeHandler} />
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <TextField fullWidth sx={{ m: 1 }} variant="filled" id="standard-basic" label="Phone"  value={inputData.phone} name="phone" onChange={inputOnChangeHandler} />
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <TextField fullWidth sx={{ m: 1 }} variant="filled" id="standard-basic" label="Email" value={inputData.email} name="email" onChange={inputOnChangeHandler} />
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <TextField fullWidth sx={{ m: 1 }} variant="filled" id="standard-basic" label="Photo URL"  value={inputData.photo} name="photo" onChange={inputOnChangeHandler} />
                        </ListItemText>
                    </ListItem>
                </List>
                <Box display="flex" justifyContent="flex-start" alignItems="flex-start">
                <Button type="submit">ADD NEW</Button>
                </Box>
            </form>
        </Card>
        </>
    );
}

export default ContactForm;