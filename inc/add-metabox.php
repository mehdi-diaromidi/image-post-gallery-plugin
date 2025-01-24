<?php
function custom_images_metabox()
{
    add_meta_box(
        'custom_images_metabox',       // ID متاباکس
        'انتخاب تصاویر',              // عنوان متاباکس
        'custom_images_metabox_html',  // تابعی که محتوای متاباکس را نمایش می‌دهد
        'post',                        // نوع پست (در اینجا پست‌ها)
        'normal',                      // موقعیت متاباکس
        'high'                         // اولویت متاباکس
    );
}
add_action('add_meta_boxes', 'custom_images_metabox');

function custom_images_metabox_html($post)
{
    // دریافت تصاویر چندگانه
    $image_ids = get_post_meta($post->ID, '_custom_image_ids', true);
    $image_ids = $image_ids ? explode(',', $image_ids) : [];

    // دریافت تصویر تکی
    $single_image_id = get_post_meta($post->ID, '_custom_single_image_id', true);
    $single_image_url = $single_image_id ? wp_get_attachment_url($single_image_id) : '';

?>
    <div style="margin-bottom: 20px;">
        <h4>تصویر اول</h4>
        <div style="display: flex; align-items: center;">
            <button type="button" class="button" id="upload_single_image_button">آپلود اولین تصویر</button>
            <div id="single_image_preview" style="margin-left: 10px;">
                <?php if ($single_image_url) : ?>
                    <img src="<?php echo esc_url($single_image_url); ?>" style="max-width: 100px; height: auto;">
                    <button type="button" class="remove-single-image-button">حذف</button>
                <?php endif; ?>
            </div>
        </div>
        <input type="hidden" name="custom_single_image_id" id="custom_single_image_id" value="<?php echo esc_attr($single_image_id); ?>">
    </div>

    <div style="margin-bottom: 20px;">
        <h4>تصاویر گالری</h4>
        <div style="display: flex; align-items: center;">
            <button type="button" class="button" id="upload_images_button">آپلود تصاویر گالری</button>
            <div id="images_preview" style="margin-left: 10px;">
                <?php foreach ($image_ids as $image_id) : ?>
                    <?php $image_url = wp_get_attachment_url($image_id); ?>
                    <?php if ($image_url) : ?>
                        <div class="image-preview" style="display: inline-block; margin-right: 10px;">
                            <img src="<?php echo esc_url($image_url); ?>" style="max-width: 100px; height: auto;">
                            <button type="button" class="remove-image-button" data-image-id="<?php echo esc_attr($image_id); ?>">حذف</button>
                        </div>
                    <?php endif; ?>
                <?php endforeach; ?>
            </div>
        </div>
        <input type="hidden" name="custom_image_ids" id="custom_image_ids" value="<?php echo esc_attr(implode(',', $image_ids)); ?>">
    </div>

    <script>
        jQuery(document).ready(function($) {
            var media_frame;

            // انتخاب تصویر مجزا
            $('#upload_single_image_button').on('click', function(e) {
                e.preventDefault();

                if (media_frame) {
                    media_frame.open();
                    return;
                }

                media_frame = wp.media({
                    title: 'انتخاب تصویر جداگانه',
                    button: {
                        text: 'انتخاب'
                    },
                    multiple: false // فقط یک تصویر برای این بخش
                });

                media_frame.on('select', function() {
                    var selection = media_frame.state().get('selection').first().toJSON();
                    $('#single_image_preview').html('<img src="' + selection.url + '" style="max-width: 100px; height: auto;">' +
                        '<button type="button" class="remove-single-image-button">حذف</button>');
                    $('#custom_single_image_id').val(selection.id);
                });

                media_frame.open();
            });

            $(document).on('click', '.remove-single-image-button', function() {
                $('#single_image_preview').html('');
                $('#custom_single_image_id').val('');
            });

            // انتخاب تصاویر چندگانه
            $('#upload_images_button').on('click', function(e) {
                e.preventDefault();

                if (media_frame) {
                    media_frame.open();
                    return;
                }

                media_frame = wp.media({
                    title: 'انتخاب تصاویر',
                    button: {
                        text: 'انتخاب'
                    },
                    multiple: true // تغییر به true برای انتخاب چندین تصویر
                });

                media_frame.on('select', function() {
                    var selection = media_frame.state().get('selection').toJSON();
                    var selected_image_ids = $('#custom_image_ids').val() ? $('#custom_image_ids').val().split(',') : [];

                    selection.forEach(function(image) {
                        if (!selected_image_ids.includes(image.id.toString())) {
                            selected_image_ids.push(image.id);
                            $('#images_preview').append('<div class="image-preview" style="display: inline-block; margin-right: 10px;">' +
                                '<img src="' + image.url + '" style="max-width: 100px; height: auto;">' +
                                '<button type="button" class="remove-image-button" data-image-id="' + image.id + '">حذف</button>' +
                                '</div>');
                        }
                    });

                    $('#custom_image_ids').val(selected_image_ids.join(','));
                });

                media_frame.open();
            });

            $(document).on('click', '.remove-image-button', function() {
                var image_id = $(this).data('image-id');
                var selected_image_ids = $('#custom_image_ids').val().split(',');
                selected_image_ids = selected_image_ids.filter(function(id) {
                    return id != image_id;
                });
                $('#custom_image_ids').val(selected_image_ids.join(','));
                $(this).parent('.image-preview').remove();
            });
        });
    </script>
<?php
}
?>