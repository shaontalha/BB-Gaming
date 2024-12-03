$(document).ready(function () {

    $("#descriptionBtn").click(function () {
        $("#reviews").hide();
        $("#description").show();
        $(this).removeClass('text-textSecondary dark:text-textPrimary').addClass('text-secondary dark:text-secondary')
        $("#reviewsBtn").removeClass('text-secondary dark:text-secondary').addClass('text-textSecondary dark:text-textPrimary')

    });
    $("#reviewsBtn").click(function () {
        $("#description").hide();
        $("#reviews").show();
        $(this).removeClass('text-textSecondary dark:text-textPrimary').addClass('text-secondary dark:text-secondary')
        $("#descriptionBtn").removeClass('text-secondary dark:text-secondary').addClass('text-textSecondary dark:text-textPrimary')

    });

});

