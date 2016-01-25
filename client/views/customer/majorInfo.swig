{% extends '../layout.swig' %}
{% block title %}负责人信息{% endblock %}

{% block style %}
{% endblock %}

{% block content %}
<div class="container">
    <div class="row status-bar">
        <a class="goback" href="/customInfo"><span class="glyphicon glyphicon-menu-left"></span></a>
        负责人信息
    </div>
    <div class="row basic-main">
        {# <h2 class="name">康师傅控股有限公司</h2> #}
        <ul class="display-box-li">
            <li><span class="glyphicon glyphicon-user"></span><span class="word">姓名</span><p class="control">张金龙</p></li>
            <li><span class="glyphicon glyphicon-earphone"></span><span class="word">电话</span><a href="tel:15252526363" class="control">15252526363</a></li>
            <li><span class="glyphicon glyphicon-eye-open"></span><span class="word">决策角色</span><p class="control">影响者</p></li>
        </ul>
    </div>
    <div class="row section">
        <ul class="display-box-li basic-list">
            <li><span class="word">与我方关系</span><p class="control">支持</p></li>
            <li><span class="word">职位</span><p class="control">经理</p></li>
            <li><span class="word">决策特点</span><p class="control">策略型</p></li>
            <li><span class="word">如何找到</span><p class="control">展会后续</p></li>
        </ul>
    </div>
    <div class="row btn-section">
        <button type="button" class="btn btn-primary btn-icon-left"><span class="glyphicon glyphicon-edit"></span>编辑</button>
    </div>
</div>
{% endblock %}

{% block script %}

{% endblock %}
