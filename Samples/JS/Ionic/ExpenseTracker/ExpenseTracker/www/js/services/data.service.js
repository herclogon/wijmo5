(function () {
    'use strict';

    angular
        .module('app')
        .factory('DataSvc', DataSvc);

    // serves as a easy way to get and put data into localStorage and
    // should only be consumed from other data services (not controllers)
    function DataSvc() {
        // localStorage key - increment version when data structure changes
        var STORAGE_ID = 'ionExpenseTracker.1.0';

        // sample data to be used if no data exists in localStorage
        var defaultObj = '{"budget": 1020, "categories": [{"id":"29d03fcf-9281-4509-b535-1ac8ffb8fec1", "bgColor": "#66cc33", "cssClass": "balanced", "name": "Food and Drinks", "slug": "food-and-drink"}, {"id":"8c8ab1c1-6a15-4a20-96d4-7473b9f227e4", "bgColor": "#ef4e3a", "cssClass": "assertive", "name": "Health", "slug": "health"}, {"id":"5e3a786e-be5e-47a6-84e1-79eac30e58f5", "bgColor": "#4a87ee", "cssClass": "positive", "name": "Leisure", "slug": "leisure"}, {"id":"ee4c2ae9-f3d2-419a-90da-31c90449a10b", "bgColor": "#f0b840", "cssClass": "energized", "name": "Transportation", "slug": "transportation"}, {"id":"18380e14-c94f-4e01-8bec-e5382b01fc84", "bgColor": "#444", "cssClass": "dark", "name": "Other", "slug": "other"} ], "expenses": [{"id": "0c72a1cb-496f-47fd-a723-da8611ca1654", "amount": 130, "categoryId": "5e3a786e-be5e-47a6-84e1-79eac30e58f5", "date": "2014-07-22T17:26:23.000Z", "description": "Two tickets to go see the Black Keys!", "title": "Concert Tickets"}, {"id": "94a0a8ff-0259-4c90-9927-104f80044aa7", "amount": 15, "categoryId": "29d03fcf-9281-4509-b535-1ac8ffb8fec1", "date": "2014-07-25T17:28:19.000Z", "description": "Sandwich and a few beers.", "title": "Primanti Bros"}, {"id": "d1c2b576-45e9-441b-977a-19ca9da04d48", "amount": 65, "categoryId": "ee4c2ae9-f3d2-419a-90da-31c90449a10b", "date": "2014-07-30T17:26:02.000Z", "description": "Gas", "title": "GetGo"}, {"id": "0a567c58-372b-4813-87e0-5db31a36a016", "amount": 135, "categoryId": "18380e14-c94f-4e01-8bec-e5382b01fc84", "date": "2014-07-30T17:31:29.009Z", "description": "Parts for the hot water heater....it is on the fritz again.", "title": "Hot water tank"}, {"id": "21047a39-143f-4470-9059-0d7f2a634ea2", "amount": 20, "categoryId": "8c8ab1c1-6a15-4a20-96d4-7473b9f227e4", "date": "2014-07-31T17:27:18.000Z", "description": "Copay.", "title": "Emergency Room"}, {"id": "fed02a14-d5aa-4c46-bf6b-6b5a8ef6327d", "amount": 7.5, "categoryId": "29d03fcf-9281-4509-b535-1ac8ffb8fec1", "date": "2014-08-01T18:51:31.000Z", "description": "Tasty Friday!", "title": "Tasty Chinese Restaurant"}, {"id": "1eb09581-a56a-45f4-80a7-c4dc8fbb97e1", "amount": 4.16, "categoryId": "29d03fcf-9281-4509-b535-1ac8ffb8fec1", "date": "2014-08-01T19:14:48.000Z", "description": "Soda and a candy bar", "title": "Convenience Store"}, {"id": "9d622ca5-6b54-451f-8fa9-ee7009a9ab1b", "amount": 20.33, "categoryId": "29d03fcf-9281-4509-b535-1ac8ffb8fec1", "date": "2014-08-07T18:53:41.000Z", "description": "Happy Hour", "title": "Ds Six Pax and Dogz"}, {"id": "f7702e3a-0e9b-4dd4-b84f-ebdb3fb89cda", "amount": 155, "categoryId": "ee4c2ae9-f3d2-419a-90da-31c90449a10b", "date": "2014-08-09T18:55:38.000Z", "description": "Oil change and state inspection", "title": "Shady Side Honda"}, {"id": "73bd9778-abf6-4a8c-b75d-e3dd02cc815f", "amount": 115, "categoryId": "29d03fcf-9281-4509-b535-1ac8ffb8fec1", "date": "2014-08-10T18:57:32.000Z", "description": "Groceries and a prepared meal", "title": "Whole Foods"}, {"id": "bfb9e5a1-8d4d-4c69-87df-c35caafb7bfb", "amount": 6.33, "categoryId": "8c8ab1c1-6a15-4a20-96d4-7473b9f227e4", "date": "2014-08-12T18:54:55.000Z", "description": "Contact solution", "title": "CVS"}, {"id": "1c4b9c64-2cc7-4d58-8b44-adbf49d9dc8a", "amount": 35, "categoryId": "ee4c2ae9-f3d2-419a-90da-31c90449a10b", "date": "2014-08-15T19:00:38.516Z", "description": "Fill up on gas before a trip", "title": "BP"}, {"id": "1ff599e0-0db8-40d4-be12-44b84c0a6458", "amount": 10, "categoryId": "29d03fcf-9281-4509-b535-1ac8ffb8fec1", "date": "2014-08-15T19:16:06.614Z", "description": "Misc. items", "title": "Food Co-Op"}, {"id": "d20582b6-0182-45ab-b28d-192d4f9bdabd", "amount": 20, "categoryId": "18380e14-c94f-4e01-8bec-e5382b01fc84", "date": "2014-08-15T19:18:06.257Z", "description": "Cat food", "title": "PetCo"}, {"id": "70cb6d80-686b-42c0-9a50-717a4fca7c0a", "amount": 15, "categoryId": "8c8ab1c1-6a15-4a20-96d4-7473b9f227e4", "date": "2014-08-19T19:02:39.000Z", "description": "Co-pay for standard six month check-up", "title": "Local dentist"}, {"id": "e7d6e445-fc52-497d-91e4-d1c8c4f57357", "amount": 100, "categoryId": "18380e14-c94f-4e01-8bec-e5382b01fc84", "date": "2014-08-23T19:01:06.000Z", "description": "Supplies", "title": "Target"}, {"id": "", "amount": 23.54, "categoryId": "5e3a786e-be5e-47a6-84e1-79eac30e58f5", "date": "2014-08-23T19:03:58.000Z", "description": "Trying out a local climbing wall", "title": "The Climbing Wall"}, {"id": "526803e2-27b2-48a7-b57c-ee90b05cc894", "amount": 77.33, "categoryId": "29d03fcf-9281-4509-b535-1ac8ffb8fec1", "date": "2014-08-24T19:08:50.000Z", "description": "Groceries for the week", "title": "Trader Joes - East Liberty"}, {"id": "671797db-8566-42b3-a8f9-e08a5a44836c", "amount": 10, "categoryId": "29d03fcf-9281-4509-b535-1ac8ffb8fec1", "date": "2014-08-29T04:00:00.000Z", "description": "Tasty Friday", "title": "Tasty Chinese Restaurant"}, {"id": "f9e03908-e4d4-4bbd-a864-dd8a4f624431", "amount": 3.33, "categoryId": "29d03fcf-9281-4509-b535-1ac8ffb8fec1", "date": "2014-08-31T19:13:39.000Z", "description": "Gum and a soft drink", "title": "Convenience Store"} ] }';

        var svc = {
            get: get,
            put: put
        };

        return svc;

        // get the whole "Expense Object" from localStorage
        function get() {
            return JSON.parse(localStorage.getItem(STORAGE_ID) || defaultObj, function (key, value) {
                // get a real date
                return key === 'date' ? new Date(value) : value;
            });
        }

        // put the whole "Expense Object" in localStorage
        function put(expenseObj) {
            localStorage.setItem(STORAGE_ID, JSON.stringify(expenseObj, function (key, value) {
                // prevent a few properties (computed or from Angular) from being persisted in localStorage
                return key === 'htmlContent' || key === '$$hashKey' || key === 'category' ? undefined : value;
            }));
        }
    }
})();