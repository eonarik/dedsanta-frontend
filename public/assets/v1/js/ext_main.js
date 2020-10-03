(function () {
    $(function () {
        // связка с vue
        $('form[data-action^="api/"]').on('click', '[type="submit"]', function (e) {
            e.preventDefault();
            const $btn = $(this);
            const $form = $btn.closest('form');
            const $modal = $btn.closest('.modal');
            const action = $form.attr('data-action');
            if (userStore) {
                const vueAction = action.split('/').splice(-1)[0];
                // залогинимся
                $btn.prop({
                    disabled: true,
                });
                userStore.dispatch(vueAction, new FormData($form[0])).then(function (result) {
                    $btn.prop({
                        disabled: false,
                    });
                    // и закроем модалку буцтрапа
                    if ($modal && $modal.length) {
                        $modal.modal('hide');
                    }
                }).catch(function () {
                    $btn.prop({
                        disabled: false,
                    });
                });
            }
        });
    
        // добавляем фарш, то есть обработку форм (ajaxfeed)
        $('form[data-action^="send"]').each(function () {
            const $form = $(this);
            const action = $form.attr('data-action');
            const afParams = {};
            $form.AjaxFeed(afParams); 
        });
    
        // обработка полей формы заказа
        $('form[data-action="send_order"] input[name="program_type"]').on('change', function () {
            const $form = $(this).closest('form');
            const value = this.value;
            switch (value) {
                case 'in_home':
                    $form.find('[data-block="children_count"]').show();
                    $form.find('[data-block="rounded_age"]').show();
                    break;
                case 'in_kindergarten':
                    $form.find('[data-block="children_count"]').show();
                    $form.find('[data-block="rounded_age"]').show();
                    break;
                case 'in_corporate_party':
                    $form.find('[data-block="children_count"]').hide();
                    $form.find('[data-block="rounded_age"]').hide();
                    break;
                default:
            }
        });
        $('form[data-action="send_order"] input[name="program_type"][value="in_home"]').on('change');
    });
})();