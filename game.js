const { Client, Account, Databases, ID, Query } = Appwrite;
const projectId = '651fce21c65284ea079a'
const databaseId =''
const collectionId = ''

const client = new Client() 
.setEndpoint('http://cloud.appwrite.io/v1')
.setProject(projectId);

const account = new Account(client)

function register (event) {
    account.create (
        ID.unique(),
        event.target.elements['register-email'].value,
        event.target.elements['register-password'].value,
        event.target.elements['register-username'].value
    ), then (response => {
        console.log(response);
        //craete a document in a database

        account.crateEmailSession(
            event.target.elements['register-email'].value,
            event.target.elements['register-password'].value
        )
    }). catch (error => {
        console.log(error);
    })
    
}