<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="icon" href="{{url('/images/favicon.png?1531190470')}}" type="png" />

    <link rel="stylesheet" type="text/css" href="{{url('/css/libraries/colorbox/colorbox.css')}}" />

    <link rel="stylesheet" type="text/css" href="{{url('/css/main.css?123')}}" />
    <link rel="stylesheet" type="text/css" href="{{url('/css/app.css')}}" />
    <link rel="stylesheet" type="text/css" href="{{url('/css/index.css')}}" />
    <script type="text/javascript" src="{{url('/js/jquery.js')}}"></script>
    <script type="text/javascript" src="{{url('/js/jquery.colorbox.js')}}"></script>

    <script type="text/javascript" src="{{url('/js/scripts.js')}}"></script>
    <title></title>

    <link type="text/css" href="{{url('/plugins/toastr/toastr.css')}}" rel="stylesheet" />
    <script type="text/javascript" src="{{url('/plugins/toastr/toastr.js')}}"></script>
    <script>
        toastr.options = {
            "closeButton": true,
            "progressBar": true,
            "positionClass": "toast-top-center",
            "preventDuplicates": false
        }
    </script>
</head>

<body style="background:url({{url('images/bg.jpg')}}) fixed">
    <div class="top-block">
        <div class="wrapper">
            <div class="logo">
                <a href="/">
                    <img src="{{url('images/logo.png')}}" />
                </a>
            </div>
            <div class="cabinet bgtransp" id="loginForm">
                <button class="submit" type="submit">Войти</button> @if(!Auth::check())
                <form action="auth" method="post">
                    <div class="loginForm-extra">
                        <div class="remember">
                            <input type="checkbox" id="chRemember" /><label for="chRemember">Запомнить меня</label>
                        </div>
                        <div class="forget">
                            <a href="#">Забыли пароль?</a>
                        </div>
                    </div>
                    <div class="authForm">
                        <div class="login">
                            <input name="login" class="input" type="text" placeholder="Логин" />
                        </div>
                        <div class="password">
                            <input name="password" class="input" type="password" placeholder="Пароль" />
                        </div>
                        <button class="submit" type="submit">Войти</button>
                    </div>
                </form>
                @endif

                <img src="{{url('data/images/4.png')}}" style="width: 57px;" />

                <div style="height:80px;width:80px;position:absolute;top:4px;right:10px;">
                    <a href="asd" class="exit">Выйти</a>
                    <div style="width:inherit;position:absolute;top:30px;color: red;font-size:50px;text-align:center;">45</div>
                </div>
            </div>

            <div class="bgtransp admin">
                <form method="post">
                    <select name="user">
                        <option value="0">Не выбран</option>
                        <option value="1">asdf</option>
                    </select>
                    <button style="margin: 15px 0 0 3px;" class="submit" name="admin" type="submit">Выбрать</button>
                    <button style="margin: 15px 0 0 5px;" class="submit" name="adminReset" type="submit">Сбросить</button>
                </form>
            </div>
        </div>
    </div>


    <div class="content">
        <div class="wrapper">

            <div class="indexLeftInfo" style="margin-left: 150px;">

                <style type="text/css">
                    .matches td {
                        text-align: center;
                        vertical-align: middle;
                        height: 100px;
                    }
                    
                    .matches td input[type="text"] {
                        height: 40px;
                        font-size: 25px;
                        text-align: center;
                    }
                    
                    .tableBottomBorder {
                        border-bottom: 1px solid #A2A2A2;
                    }
                </style>
                <div class="bgtransp" style="padding: 10px 20px;">

                    <ul class="menuu">
                        <li style="color: #797979;">Матчи</li>
                        <li style="color: #797979;">Мои прогнозы</li>
                        <li style="color: #797979;">Лидеры</li>
                    </ul>
                </div>
                <div>
                    <div class="bgtransp" style="text-align: center;margin-top:20px; font-size:14px; padding: 20px; line-height: 18px;">
                        Таблица с результатами прогнозов обновляется ежедневно в <span class='highlight'>10:00</span>
                    </div>
                    <!--div class="bgtransp" style="text-align: center;margin-top:20px; font-size:14px; padding: 20px; line-height: 18px;">
    Дорогие участники, закончилась 1/4 финала<br />Следующие игры  <span class='highlight'>полуфинала</span> появятся <span class='highlight'>6-7 июля</span><br />
    Всем хорошего дня и настроения!
</div-->
                </div>
            </div>

            <div class="quickRegisterForm">
                <div class="form-header">Таблица лидеров</div>
                <div class="form-outline" style="background: white;">
                    <div class="quickRegisterForm_data">
                        <table width="100%" class="tableScore">
                            <tr>
                                <td style="vertical-align: middle;">1. </td>
                                <td>
                                    <img src="http://www-edu.hq.bc/panel/avatar/1.jpg" style="height: 30px;" />
                                </td>
                                <td style="vertical-align: top;">
                                    asdf sdf </td>
                                <td class="score" style="vertical-align: middle;">0</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    </div>
</body>

</html>