Authentication
-----------------------------------------------------------------------
Implements an authentication service and uses it to control access to a database.

This implementation of authentication services is based on the following Udacity 
course on Web development:

    https://www.udacity.com/course/web-development--cs253

The authentication service supports the Facebook and Google OAuth providers, and 
it also implements its own provider based on a SQL Express database.

The application provides all users with read-only access to an OData service.
Once a user logs in, he gets read-write access to the database.
Access to the database is controlled is by the AuthenticateRequest method in 
the BasicAuthModule file. 

The wijmo.input.Popup control is used to display the authentication dialogs.

The wijmo.odata.ODataCollectionView class is used to read and write the data.
