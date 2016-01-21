{% extends '../layout.swig' %}
{% block title %}拜访记录{% endblock %}

{% block style %}
<link rel="stylesheet" type="text/css" href="/css/visit/visitList.css">
{% endblock %}

{% block content %}
    <div class="container">
        <div class="row banner">
            <img src="./img/banner.png">
            {# <a class="button" href="#"><span class="glyphicon glyphicon-star"></span>关键商机</a> #}
        </div>
        <div class="row nav">
            <div class="col-xs-6 nav-list"><a href="/customList"><span class="icon-info"></span>客户信息</a></div>
            <div class="col-xs-6 nav-list active"><a href="/visitList"><span class="icon-visit"></span>拜访记录</a></div>
        </div>
        <div class="row">
            <ul class="visit-list">
                <li><a href="/visitInfo">
                    <div class="visit-main">
                        <p class="visited">我<span class="" style="color:#999;padding:0 5px;">拜访了</span>康师傅控股有限公司</p>
                        <p class="time">2015/12/12</p>
                    </div>
                    <p class="major">负责人：徐经理</p>
                    </a>
                </li>
                <li>
                    <div class="visit-main">
                        <p class="visited">saleA<span class="" style="color:#999;padding:0 5px;">拜访了</span>网龙</p>
                        <p class="time">2015/12/12</p>
                    </div>
                    <p class="major">负责人：徐经理</p>
                </li>
                <li>
                    <div class="visit-main">
                        <p class="visited">我<span class="" style="color:#999;padding:0 5px;">拜访了</span>百度</p>
                        <p class="time">2015/12/12</p>
                    </div>
                    <p class="major">负责人：徐经理</p>
                </li>
            </ul>
        </div>
    </div>
{% endblock %}

{% block script %}
{% endblock %}
