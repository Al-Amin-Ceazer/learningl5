myApp.factory('galleryModel', ['$http', function($http) {
    return {
        saveGallery: function(galleryData) {
            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: baseUrl + 'gallery',
                method: "POST",
                data: {
                    name: galleryData.name
                }
            });
        },
        getAllGalleries: function() {
            return $http.get(baseUrl + 'gallery');
        },
        getGalleryById: function(id) {
            return $http.get(baseUrl + 'gallery/' + id);
        },
        deleteSingleImage: function(data) {
            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: baseUrl + 'delete-single-image',
                method: "POST",
                data: {
                    id: data.imageId,
                    galleryId: data.galleryId
                }
            });
        }
    };
}])
