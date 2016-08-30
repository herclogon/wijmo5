'use strict';

// define functions that select, update, add and remove data with BreezeJS.
app.dataservice = (function (breeze, logger) {

    // backingStore is the modelLibrary for Angular
    breeze.config.initializeAdapterInstance('modelLibrary', 'backingStore', true); 

    // route to the (same origin) Web Api controller
    var serviceName = 'breeze/WijmoNxtNorthBreeze'; 

    // gets metadata from /breeze/NorthBreeze/Metadata
    var manager = new breeze.EntityManager(serviceName);

    return {

        //define all the functions exposed in this service.
        getManager: function () {
            return manager;
        },
        getEntityQuery: function (tableName) {
            return breeze.EntityQuery.from(tableName);
        },
        querySucceeded: function (entityCount) {
            logger.info('Fetched ' + entityCount + ' Customers ');
        },
        queryFailed: function (errorMsg) {
            logger.error(errorMsg, 'Query failed');
        },
        saveSucceeded: function (saveResult) {
            logger.success('# of entities saved = ' + saveResult.entities.length);
            logger.log(saveResult);
        },
        saveFailed: saveFailed,
        getCompanyNamePredicate: function (companyName) {
            return companyName
                ? new breeze.Predicate('CompanyName', 'contains', companyName)
                : null;
        }
    };

    /*** implementation details ***/

    // process the error information when saving fails.
    function saveFailed(error) {
        var reason = error.message;
        var detail = error.detail;
        var entityErrors = error.entityErrors;

        if (entityErrors && entityErrors.length) {
            handleSaveValidationError(entityErrors);
            return;
        }
        if (detail && detail.ExceptionType &&
            detail.ExceptionType.indexOf('OptimisticConcurrencyException') !== -1) {
            // Concurrency error 
            reason =
                'Another user, perhaps the server, may have deleted one or all of the same entities.';
            manager.rejectChanges(); // DEMO ONLY: discard all pending changes
        }

        logger.error(error,
            'Failed to save changes. ' + reason +
            ' You may have to restart the app.');
    }

    function handleSaveValidationError(entityErrors) {
        // http://www.breezejs.com/documentation/server-side-validation
        var message = 'Not saved due to validation errors';
        try {
            // fish out the first error
            var messages = entityErrors.map(function (er) {
                return er.errorMessage;
            });
            message += ': ' + messages.join(';\n');
        } catch (e) { /* eat it for now */ }
        logger.error(message);
    }

})(breeze, app.logger);