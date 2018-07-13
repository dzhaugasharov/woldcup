
//Состав группы
Ext.create('Ext.data.JsonStore', {
    storeId: 'groupUsersStore',
    autoLoad: false,
    remoteSort: false,
    autoSync: true,
    pageSize: 50,
    fields: ['id', 'fio','user_id','date_time'],
    proxy: {
        type: 'ajax',
        api: {
            read: 'panel/index/ajax?action=get_group_users',
            update: 'test/ajax?action=update_group_user'
        },
        reader: {
            type: 'json',
            root: 'data',
            idProperty: 'user_id',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'errors'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            allowSingle: false,
            encode: true,
            root: 'data'
        }
    }
});



//Назначения
Ext.create('Ext.data.JsonStore', {
    storeId: 'destinationsStore',
    autoLoad: false,
    remoteSort: false,
    autoSync: true,
    pageSize: 50,
    fields: ['id','game_id','user_id','date_time'],
    proxy: {
        type: 'ajax',
        api: {
            read: 'panel/index/ajax?action=get_destinations',
            update: 'test/ajax?action=update_destinations'
        },
        reader: {
            type: 'json',
            root: 'data',
            idProperty: 'id',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'errors'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            allowSingle: false,
            encode: true,
            root: 'data'
        }
    }
});



//Категории вопросов
Ext.create('Ext.data.JsonStore', {
    storeId: 'categoriesStore',
    autoLoad: false,
    remoteSort: false,
    autoSync: true,
    pageSize: 50,
    fields: ['id','category'],
    proxy: {
        type: 'ajax',
        api: {
            read: 'panel/index/ajax?action=get_categories'
        },
        reader: {
            type: 'json',
            root: 'data',
            //idProperty: 'id',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'errors'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            allowSingle: false,
            encode: true,
            root: 'data'
        }
    }
});



//Категории вопросов
Ext.create('Ext.data.JsonStore', {
    storeId: 'gameCategoriesStore',
    autoLoad: false,
    remoteSort: false,
    autoSync: true,
    pageSize: 50,
    fields: ['id','category'],
    proxy: {
        type: 'ajax',
        api: {
            read: 'panel/index/ajax?action=get_game_categories',
            update: 'panel/index/ajax?action=update_category'
        },
        reader: {
            type: 'json',
            root: 'data',
            idProperty: 'id',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'errors'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            allowSingle: false,
            encode: true,
            root: 'data'
        }
    }
});


//Назначенные игры
Ext.create('Ext.data.JsonStore', {
    storeId: 'destinationsStore',
    autoLoad: false,
    remoteSort: false,
    autoSync: true,
    pageSize: 50,
    fields: ['id','user_id','game_id', 'game', 'fio', 'date_time'],
    proxy: {
        type: 'ajax',
        api: {
            read: 'panel/index/ajax?action=get_destinations'
        },
        reader: {
            type: 'json',
            root: 'data',
            idProperty: 'id',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'errors'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            allowSingle: false,
            encode: true,
            root: 'data'
        }
    }
});





Ext.define('GameModel', {
    extend: 'Ext.data.Model',
    fields: ['id','game','status']
});



//игры
Ext.create('Ext.data.JsonStore', {
    storeId: 'gamesStore',
    autoLoad: false,
    remoteSort: false,
    autoSync: true,
    pageSize: 50,
    fields: ['id','game','status'],
    proxy: {
        type: 'ajax',
        api: {
            read: 'panel/index/ajax?action=get_games',
            update: 'panel/index/ajax?action=save_game'
        },
        reader: {
            type: 'json',
            root: 'data',
            idProperty: 'id',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'errors'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            allowSingle: false,
            encode: true,
            root: 'data'
        }
    }
});









//Окно Импортировать список людей для назначения тестирования
Ext.create('widget.window', {
    id: 'import-questions-win',
    height: 150,
    width: 300,
    title: 'Импортировать список людей',
    closable: true,
    modal: true,
    closeAction: 'hide',
    plain: true,
    resizable: false, 
    layout: 'anchor',
    items: [
    {
        xtype: 'form',
        id: 'import-questions-form',
        anchor: '100% 100%',
        url: 'panel/index/ajax?action=import_questions',
        items: [
        {
            xtype: 'filefield',
            padding: '10 0 0 15',
            name: 'file'
        }
        ]
    }
    ],
    buttons: [
    {
        text: 'Импортировать',
        handler: function(){
            var form = Ext.getCmp('import-questions-form').getForm();
            if(!form.isValid()) {
                Ext.MessageBox.alert('Ошибка', 'Вы не выбрали файл для импорта!');
                return false;
            }
            
            form.submit({
                waitMsg: 'Идет загрузка',
                success: function(fp, o){
                    Ext.getCmp('questionsGrid').getStore().load();
                    Ext.getCmp('import-questions-win').close();
                },
                failed: function(fp, o){}
            });
        }
    }
    ]
});





//Окно для редактирования вопроса
Ext.create('widget.window', {
    id: 'question-edit-win',
    height: 750,
    width: 1000,
    title: 'Импортировать список людей',
    closable: true,
    modal: true,
    closeAction: 'hide',
    plain: true,
    resizable: true,
    maximizabl: true, 
    layout: 'anchor',
    items: [
    {
        xtype: 'form',
        anchor: '100% 100%',
        id: 'question-edit-form',
        url: 'panel/index/ajax?action=save_question',
        defaults: {
            margin: 10
        },
        items: [
        {
            layout: 'hbox',
            border: false,
            items: [
            {
                xtype: 'textfield',
                fieldLabel: 'ID',
                readOnly: true,
                defaultValue: 'new',
                value: 'new',
                name: 'id'
            },
            {
                xtype: 'combobox',
                fieldLabel: 'Категория',
                name: 'category_id',
                displayField: 'category',
                margin: '0 0 0 20',
                valueField: 'id',
                allowBlank: false,
                store: Ext.data.StoreManager.lookup('categoriesStore')
            }
            ]
        },
        {
            xtype: 'displayfield',
            value: 'Вопрос:',
            margin: 0
        },
        {
            height: 300,
            contentEl: 'question-editor',
            margin: 0
        },
        {
            xtype: 'displayfield',
            value: 'Ответ:',
            margin: 0
        },
        {
            height: 300,
            contentEl: 'answer-editor',
            margin: 0
        }
        ]
    }
    ],
    listeners: {
        afterrender: function(){
            Question.replace_editor('questionEditor');
            Question.replace_editor('answerEditor');
        }
    },
    buttons: [
    {
        text: 'Сохранить',
        handler: function(){
            var form = Ext.getCmp('question-edit-form').getForm(),
            question = CKEDITOR.instances.questionEditor.getData(),
            answer = CKEDITOR.instances.answerEditor.getData();
            
            if(!form.isValid())
            {
                Ext.MessageBox.alert('Сохранение', 'Вы не заполнили все объязательные поля!');
                return false;
            }
            
            form.submit({
                params: {
                    question: question,
                    answer: answer
                },
                success: function(a,r){
                    Ext.MessageBox.alert('Сохранение', 'Данные успешно сохранены');
                },
                failure: function(a,r){
                    Ext.MessageBox.alert('Сохранение', 'Ошибка при сохранении! '+r.result.errors);
                }
            });
        }
    },
    {
        text: 'Закрыть',
        handler: function(){
            this.up().up().close();
        }
    }
    ]
});



//Окно для создания категории
Ext.create('widget.window', {
    id: 'add-category-win',
    height: 150,
    width: 300,
    title: 'Создать новую категорию',
    closable: true,
    modal: true,
    closeAction: 'hide',
    plain: true,
    resizable: false, 
    layout: 'anchor',
    items: [
    {
        xtype: 'textfield',
        fieldLabel: 'Категория',
        labelAlign: 'top',
        id: 'new-category',
        margin: 10,
        width: 270
    }
    ],
    buttons: [
    {
        text: 'Сохранить',
        handler: function(){
            var category = Ext.getCmp('new-category').getValue();
            Question.create_category(category, function(){
                Ext.getCmp('add-category-win').close();
                Ext.data.StoreManager.lookup('gameCategoriesStore').load();
            });
            
        }
    }
    ]
});





Question = {
    
    
    create_category: function(category, callback)
    {
        $.ajax({
            type: "POST",
            url: "panel/index/ajax?action=create_category",
            dataType: 'json',
            data: {category: category},
            success: function(data)
            {
                if(!data.success) Ext.MessageBox.alert('Ошибка при добавлении', 'Произошла ошибка при добавлении! '+data.errors);
                else if(typeof callback == 'function') callback();
            }
        });
    },
    
    add_category_to_game: function(category_id, game_id, callback)
    {
        $.ajax({
            type: "POST",
            url: "panel/index/ajax?action=add_category_to_game",
            dataType: 'json',
            data: {category_id:category_id, game_id:game_id},
            success: function(data)
            {
                if(!data.success) Ext.MessageBox.alert('Ошибка при добавлении', 'Произошла ошибка при добавлении! '+data.errors);
                else if(typeof callback == 'function') callback();
            }
        });
    },
    
    add_user_to_group: function(user_id, callback)
    {
        $.ajax({
            type: "POST",
            url: "panel/index/ajax?action=add_user_to_group",
            dataType: 'json',
            data: {user_id: user_id},
            success: function(data)
            {
                if(!data.success) Ext.MessageBox.alert('Ошибка при добавлении', 'Произошла ошибка при добавлении! '+data.errors);
                else if(typeof callback == 'function') callback();
            }
        });
    },
    
    delete_user_from_group: function(user_id, callback)
    {
        $.ajax({
            type: "POST",
            url: "panel/index/ajax?action=delete_user_from_group",
            dataType: 'json',
            data: {user_id: user_id},
            success: function(data)
            {
                if(!data.success) Ext.MessageBox.alert('Ошибка при удалении', 'Произошла ошибка при удалении!');
                else if(typeof callback == 'function') callback();
            }
        });
    },
    
    
    edit_question: function(question_id)
    {
        Ext.getCmp('question-edit-win').show();
        Ext.getCmp('question-edit-win').setLoading(true);
        $.ajax({
            type: "POST",
            url: "panel/index/ajax?action=get_question",
            dataType: 'json',
            data: {question_id: question_id},
            success: function(data)
            {
                Ext.getCmp('question-edit-win').setLoading(false);
                if(!data.success) Ext.MessageBox.alert('Ошибка при загрузке', 'Произошла ошибка при загрузке вопроса');
                else
                {
                    Ext.getCmp('question-edit-form').getForm().setValues(data.data);
                    CKEDITOR.instances.questionEditor.setData(data.data.question);
                    CKEDITOR.instances.answerEditor.setData(data.data.answer);
                }
            }
        });
    },
    
    delete_question: function(question_id, callback)
    {
        $.ajax({
            type: "POST",
            url: "panel/index/ajax?action=delete_question",
            dataType: 'json',
            data: {question_id: question_id},
            success: function(data)
            {
                if(!data.success) Ext.MessageBox.alert('Ошибка при удалении', 'Произошла ошибка при удалении вопроса');
                else if(typeof callback == 'function') callback();
            }
        });
    },
    
    replace_editor: function(element_id)
    {
        if(typeof CKEDITOR.instances[element_id] == 'object') return false;
        
        CKEDITOR.replace(element_id, {
    		//toolbar : 'MyToolbar',
    		//uiColor : '#9AB8F3',
    		height: 180,
    		resize_enabled: false,
            baseFloatZIndex: 19019,
            //contentsCss: '/portal/public/css/reader.css',
    		filebrowserBrowseUrl : '/module/mayak/ckfinder/ckfinder.html',
    		filebrowserImageBrowseUrl : '/module/mayak/ckfinder/ckfinder.html?type=Images&id='//,
            //extraPlugins: 'code'
    		//filebrowserUploadUrl : 'upload_img.php?type=small&chapter_id='+id,
    		//filebrowserImageUploadUrl : 'upload_img.php?type=small&chapter_id='+id			
        });
        
        CKEDITOR.instances[element_id].on('save', function (event){
            Editor.save_chapter();
            event.cancel();
            return false;
        });
    }
}



Game = {
    //Удалить категория из игры
    remove_category: function(game_id, category_id, callback)
    {
        $.ajax({
            type: "POST",
            url: "panel/index/ajax?action=remove_category",
            dataType: 'json',
            data: {game_id: game_id, category_id: category_id},
            success: function(data)
            {
                if(!data.success) Ext.MessageBox.alert('Ошибка при удалении', 'Произошла ошибка при удалении вопроса');
                else if(typeof callback == 'function') callback();
            }
        });
    }
}