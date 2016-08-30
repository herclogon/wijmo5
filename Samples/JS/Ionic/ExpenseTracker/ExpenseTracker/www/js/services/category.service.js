(function () {
	'use strict';

	angular
		.module('app')
		.factory('CategorySvc', CategorySvc);

    // serves as a way to interact with our Category related data
    // and should be consumed from controllers
	function CategorySvc(DataSvc) {
		var svc = {
            getCategories: getCategories,
            getCategoryBySlug: getCategoryBySlug,
            getCategoryById: getCategoryById,
            reorderCategories: reorderCategories,
            getCategoriesWithHtmlContent: getCategoriesWithHtmlContent
		};

		return svc;

        // returns the Category array
        function getCategories() {
            var expenseObj = DataSvc.get();

            return expenseObj.categories || [];
        }

        function getCategoriesWithHtmlContent() {
            var categories = getCategories();

            // create HTML content property for ComboBox
            // this will let us display an icon in the ComboBox so the user can associate the color with the category
            categories.forEach(function (category) {
                category.htmlContent = '<i class="icon ion-record ' + category.cssClass + '"></i>  <b>' + category.name + '</b>';
            });

            return categories || [];
        }

        // retrieve a Category by its slug
        function getCategoryBySlug(slug) {
            return _getCategoryByProp('slug', slug);
        }

        function getCategoryById(categoryId) {
            return _getCategoryByProp('id', categoryId);
        }

        // reorders Categories based and returns reordered Category array
        function reorderCategories(fromIndex, toIndex) {
            var expenseObj = DataSvc.get();

            expenseObj.categories.splice(toIndex, 0, expenseObj.categories.splice(fromIndex, 1)[0]);

            DataSvc.put(expenseObj);

            return expenseObj.categories;
        }

        // helper function to get a Category object by one of its properties
        function _getCategoryByProp(prop, val) {
            var expenseObj = DataSvc.get(),
                categories;

            categories = expenseObj.categories.filter(function (category) {
                return category[prop] === val;
            });

            return categories && categories.length > 0 ? categories[0] : {}; }
	}
})();