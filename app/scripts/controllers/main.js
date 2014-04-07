'use strict';

angular.module('angularVideoApp')
    .controller('MainCtrl', ['$scope', '$sce', function ($scope, $sce) {
        $scope.sources = [
            {src: $sce.trustAsResourceUrl("http://videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
            {src: $sce.trustAsResourceUrl("http://videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
            {src: $sce.trustAsResourceUrl("http://videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
        ];

        $scope.changeSource = function() {
            $scope.sources = [
                {src: $sce.trustAsResourceUrl("http://mirrorblender.top-ix.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_h264.mov"), type: "video/mp4"},
                {src: $sce.trustAsResourceUrl("http://mirrorblender.top-ix.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_stereo.ogg"), type: "video/ogg"}
            ];
        };
    }]);
