const Contact = () => {

    const phone = "+145-355-278";
    const mail = "danieljones@yahoo.com";
    const website = "www'djonesdev.com";
    const address = "4422, Bravon Street, Los Angeles CA 90017USA";


    return ( 
        <div className="contact-details">
            <h2>CONTACT</h2>
           <div className="phone">
           <p>PHONE:</p>
            <p>{phone}</p>
            </div> 

            <div className="mail">
           <p>MAIL:</p>
            <p>{mail}</p>
            </div> 

            <div className="">
           <p>WEBSITE:</p>
            <p>{website}</p>
            </div> 

            <div className="phone">
           <p>ADDRESS:</p>
            <p>{address}</p>
            </div> 
            
        </div>
     );
}
 
export default Contact;