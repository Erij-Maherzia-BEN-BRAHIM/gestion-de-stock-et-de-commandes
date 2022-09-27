# Nodes Storage Manager

Nodes Storage Manager is a web application mainly for stock and order management, it allows to:
- Manage products
- Manage product categories
- Manage stock movements
- Manage suppliers
- Manage customers
- Manage employees
- Manage directions
- Manage user accounts and their roles
- Manage purchasing operations:
   - Manage ordinary purchase invoices
   - Manage purchase credit invoices
   - Track the payment of purchase invoices
   - Consult stock alerts:
     - Overstock alerts
     - Out of stock alerts
- Manage tenders
- Manage sales operations:
   - Manage ordinary sales invoices
   - Manage sales credit invoices
   - Track the payment of sales invoices
- Consult the dashboard

## Demo

[<img src="https://user-images.githubusercontent.com/101833103/192482492-3076665f-ec80-4c5d-ae15-0135f10ecc5e.png" width="500px">](https://drive.google.com/file/d/1NSIhyfOvKqaldXwgokX14CXLWeA6A_EA/view?usp=sharing "Nodes Storage Manager Demo")


## Technologies

- [Create React App](https://github.com/facebook/create-react-app)
- [Redux](https://redux.js.org/) 
- [Redux Toolkit](https://redux-toolkit.js.org/) 
- [Express](https://expressjs.com/) 
- [Node.Js](https://nodejs.org/en/) 

## Start the project

1. Clone the project :

```
 git clone https://github.com/Erij-Maherzia-BEN-BRAHIM/gestion-de-stock-et-de-commandes.git
```
2. Install dependencies:
Open the backend and the client directory and install the dependencies :
```
cd backend
$ npm install
cd client
$ npm install
```
3. Create an account in [Cloudinary](https://cloudinary.com/users/register_free)
4. From the backend directory, you need to rename the .env.example file by .env and replace CLOUD_NAME, CLOUD_KEY , CLOUD_KEY_SECRET by your Cloudinary account data.
5. From the backend directory, run the server :
```
$ nodemon
```
6. From the client directory enter :
```
$ npm start
```
7. To have access to the application, you can use these credentials to test the admin interface:
```

email: admin@test.com
password: azerty
```
## Requirements
You need to have an account in [Cloudinary](https://cloudinary.com/users/register_free) and you need also to have installed [Node.Js](https://nodejs.org/en/) (v16.13.0.) and [Git](https://git-scm.com/) .
```
{
  "engines": {
    "node": ">=0.13.0 <16",
    "react": ">=0.2.0 <18",
    "react-router-dom": ">=0.3.0 <6"
  }
}
```
