
import ContactList from "components/ContactList/contactlist";
import { FilterContacts } from "components/Filter/filter";
import Phonebook from "components/Phonebook/phonebook";
import { useSelector } from "react-redux";
import { selectIsLoading } from "redux/selectors";
import { selectError } from "redux/selectors";



const MyContactsPage = () => {

    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);


    return (
        <div
            // style={{
            //     width: '100%',
            //     minHeight: '100vh',
            //     margin: '0 auto',
            //     paddingLeft: '40px',
            //     paddingRight: '40px',
            //     backgroundSize: '20px 20px',
            //     background: '#d4d5d6 ',
            //     fontSize: '30px'

            // }}
        >

            <Phonebook />
            <FilterContacts />
            {isLoading && !error && <p style={{ color: "tomato" }}>Loading...</p>}
            <ContactList />
        </div >
    )

}
export default MyContactsPage;