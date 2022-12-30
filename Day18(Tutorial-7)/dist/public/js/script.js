$(document).ready(function () {
    $('.delete-movie').on('click', function (e) {
        $target = $(e.target);
        const id = $target.attr('data-id');

        $.ajax({
            type: 'DELETE',
            url: '/api/movies/' + id,
        });
    });
});